import React, { createContext, useState } from "react";
import runChat from "../Config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [isLoading, setIsLoading] = useState(false); // default false
  const [isHome, setIsHome] = useState(true); // default true
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [lastinp, setLastinp] = useState("");
  const [history, setHistory] = useState([]);
  const [copy, setcopy] = useState("");
  const [ copyText,setCopyText]=useState(false)
  const delayPara = (index, nextWord) => {
    setTimeout(() => {
      setResult((prev) => prev + nextWord);
    }, 75 * index);
  };
  const fomateArray = (response) => {
    let responseArray = response.split("**");
    let newResponse = "";
    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponse += responseArray[i];
      } else {
        newResponse += `<b> ${responseArray[i]} </b>`;
      }
    }

    // Split the formatted response into an array of words and display each word with a delay
    let newResponse2 = newResponse.split("*").join("</br>");
    let newResponseArray = newResponse2.split(" ");
    for (let i = 0; i < newResponseArray.length; i++) {
      const nextWord = newResponseArray[i];
      delayPara(i, nextWord + " ");
    }

    setIsLoading(false);
  };

  const sendInputToAPi = async () => {
    console.log("inside the input function");
    console.log(input);
    if (input) {
      setIsLoading(true);
      setIsHome(false);

      setInput("");
      const response = await runChat(input);

      if (response) {
        setcopy(response);
        const newEntry = { user: lastinp, res: response };
        console.log(lastinp, response);
        setHistory([...history, newEntry]);
        fomateArray(response);
      }
    }
  };

  const copyToClipboard = () => {
    const el = document.createElement("textarea");
    el.value = copy;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  };

  const resetToHome = () => {
    setResult("");
    setIsHome(true);
    setCopyText(false)
    
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendInputToAPi();
  };

  const contextValue = {
    isLoading,
    isHome,
    input,
    result,
    sendInputToAPi,
    resetToHome,
    handleSubmit,
    setInput,
    lastinp,
    history,
    setLastinp,
    copyToClipboard,
    copyText,
    setCopyText
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
