import React, { useContext, useState } from "react";
import gallery from "../assets/gallery.svg";
import search from "../assets/search.svg";
import linked from "../assets/linked.svg";
import arrow from "../assets/arrow.svg";
import circle from "../assets/circle.svg";
import TextEffect from "./TextEffect";
import { Context } from "../Context/context";
import Sidebar from "./Sidebar";
import clip from "../assets/clip.svg"
const Main = () => {
  
  const {
    isLoading,
    isHome,
    lastinp,
    input,
    setInput,
    result,
    sendInputToAPi,
    resetToHome,
    setLastinp,copyToClipboard,
    copyText,
    setCopyText,
    handleSubmit,
  } = useContext(Context);

  const SendGridInput = (prompt) => {
    setInput(prompt);
    setLastinp(prompt);
    console.log(prompt);
    setTimeout(() => sendInputToAPi(), 1000);
  };
  return (
    <div>
      <Sidebar />

      <main className=" absolute top-0 flex-col flex justify-center  items-center w-full min-h-screen bg-gray-200/50">
        {isHome ? (
          <div className=" flex gap-1 absolute top-3 right-3">
            <div>
              <a href="https://www.linkedin.com/in/nandhakrishnanp/">
                <img src={linked} alt="lined-in-logo" width={30} />
              </a>
            </div>
          </div>
        ) : null}

        {isHome ? (
          <div className="w-[700px] max-sm:w-[100%] p-5">
            <div>
              <h1 className="font-open text-center font-bold text-6xl">
                WayToGo.Ai
              </h1>
              <p className="font-oprn text-center text-xl pt-2 text-gray-500">
                Transforming Ideas into Engaging Articles
              </p>
            </div>
            <form
              autocomplete="off"
              onSubmit={handleSubmit}
              className="flex    mt-4 border-2 border-black   shadow-xl  rounded-full gap-1"
            >
              <input
                type="text"
                name="input"
                id=""
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                  setLastinp(e.target.value);
                }}
                className="p-2 placeholder:font-open placeholder:text-gray-700 bg-transparent outline-none font-medium text-gray-900 flex-1 ml-3 text-lg"
                placeholder="Give A Topic..."
              />
              <img
                src={gallery}
                width={30}
                className="hover:cursor-pointer"
                alt="image-gallery-icon"
              />
              <button type="submit">
                <img
                  onClick={() => sendInputToAPi()}
                  className="mr-3 hover:cursor-pointer"
                  src={search}
                  width={35}
                  alt="search-icon"
                />
              </button>
            </form>

            <div className="grid grid-cols-2 gap-3 mt-7">
              <div
                onClick={() => {
                  SendGridInput(
                    "The Future of Artificial Intelligence in Project Management"
                  );
                }}
                className=" p-3 shadow-xl  rounded-xl      border-gray-400 border-2 hover:bg-gray-300/50 bg-white hover:cursor-pointer hover:scale-105 transition-all duration-150"
              >
                <p className=" font-open font-medium text-slate-900">
                  The Future of Artificial Intelligence in Project Management
                </p>
              </div>
              <div
                onClick={() => {
                  SendGridInput(
                    "The Psychology of Decision-Making on building buissness"
                  );
                }}
                className=" p-3 shadow-xl  rounded-xl     border-gray-400 border-2 hover:bg-gray-300/50 bg-white hover:cursor-pointer hover:scale-105 transition-all duration-150"
              >
                <p className=" font-open font-medium text-slate-900">
                  The Psychology of Decision-Making on building buissness
                </p>
              </div>
              <div
                onClick={() => {
                  SendGridInput(
                    " Elon Musk's Impact on Electric Vehicles and Renewable Energy"
                  );
                }}
                className=" p-3 shadow-xl  rounded-xl     border-gray-400 border-2 hover:bg-gray-300/50 bg-white hover:cursor-pointer hover:scale-105 transition-all duration-150"
              >
                <p className=" font-open font-medium text-slate-900">
                  Elon Musk's Impact on Electric Vehicles and Renewable Energy
                </p>
              </div>
              <div
                onClick={() => {
                  SendGridInput(
                    "The Legacy of Rajinikanth: From Superstar to Cultural Phenomenon"
                  );
                }}
                className=" p-3 shadow-xl  rounded-xl     border-gray-400 border-2 hover:bg-gray-300/50 bg-white hover:cursor-pointer hover:scale-105 transition-all duration-150"
              >
                <p className=" font-open font-medium text-slate-900">
                  The Legacy of Rajinikanth: From Superstar to Cultural
                  Phenomenon
                </p>
              </div>
            </div>

            <p className="font-mono capitalize p-5 text-center text-gray-400">Double click to Send</p>

            <p className="font-open absolute bottom-5  capitalize text-center text-gray-500"> WayToGo.ai can make mistakes. Please consider verifying important information</p>
          </div>
        ) : null}
        {!isHome ? (
          <div>
            {console.log(lastinp)}
            <h1 className=" text-4xl text-center font-open capitalize">
              {lastinp}
            </h1>
          </div>
        ) : null}
        <div></div>

        {isLoading ? (
          <div className="w-1/2 max-md:w-[90%]  h-[500px] bg-white rounded-xl shadow-xl m-6">
            <div className="flex gap-2 p-3 animate-pulse text-gray-200">
              <div className="w-[25px] h-6 rounded-full  bg-slate-300"></div>
              <div className="w-[25px] h-6 rounded-full  bg-slate-300"></div>
              <div className="w-[25px] h-6 rounded-full  bg-slate-300"></div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="w-[80%] ms-3  animate-pulse bg-gray-300  rounded-lg h-6"></div>
              <div className="w-[70%] ms-3  animate-pulse bg-gray-300  rounded-lg h-6"></div>
              <div className="w-[50%] ms-3  animate-pulse bg-gray-300  rounded-lg h-6"></div>
            </div>
            <br />
            <div className="flex flex-col gap-1">
              <div className="w-[80%] ms-3  animate-pulse bg-gray-300  rounded-lg h-6"></div>
              <div className="w-[70%] ms-3  animate-pulse bg-gray-300  rounded-lg h-6"></div>
              <div className="w-[50%] ms-3  animate-pulse bg-gray-300  rounded-lg h-6"></div>
            </div>
          </div>
        ) : null}
        {!isHome && !isLoading ? (
          <div className="w-1/2 max-md:w-full h-[500px] overflow-y-scroll small  scroll-cl shadow-lg rounded-xl p-6 font-open text-lg m-6">
               <div className="flex gap-2">
               <img onClick={()=> {copyToClipboard()
            setCopyText(true)
            } } src={clip} className=" hover:cursor-pointer hover:scale-105" width={35} alt="clipboard-icon" />

            {copyText ? <p className="font-open ">Copied!</p>:null}
               </div>
           
            <div className="pt-4" dangerouslySetInnerHTML={{ __html: result }} />
          </div>
        ) : null}

        {!isHome && !isLoading ? (
          <div
            onClick={() => {
              resetToHome();
              setCopyText(false)
            }}
            className="flex hover:cursor-pointer  hover:scale-105 transition-all duration-150 gap-1 "
          >
            <img src={arrow} width={20} alt="back-to-home-icon" />
            <button className=" capitalize  font-open font-medium text-xl">
              Back to home
            </button>
          </div>
        ) : null}
      </main>
    </div>
  );
};

export default Main;
