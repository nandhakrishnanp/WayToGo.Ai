import React, { useState, useEffect } from 'react';

const TextEffect = ({ message, delay=2 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prevText) => prevText + message[index]);
      index++;
      if (index === message.length) clearInterval(interval);
    }, delay);

    return () => clearInterval(interval);
  }, [message, delay]);

  return <div>{displayedText}</div>;
};


export default TextEffect