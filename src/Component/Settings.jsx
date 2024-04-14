import React from "react";
import Sidebar from "./Sidebar";
import linked from "../assets/linked.svg"
const Settings = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center ">
      <Sidebar />

      <h1 className=" absolute top-4 font-open  text-center font-medium text-2xl p-5">
        Settings
      </h1>

      <div className="bg-gray-100 w-1/2 p-5 max-md:w-[90%] rounded-xl min-h-[500px] ">
             
             <p className=" capitalize font-open p-5 text-xl">Customize Articles Theme: </p>
          <div className=" items-center flex-wrap flex gap-3 ps-5">
                <div className="  rounded-lg  bg-gray-300 hover:scale-105 transition-all duration-150 hover:cursor-pointer">
                     <p className="p-4 font-open font-bold  text-gray-700 ">Entertaining</p>
                </div>
                <div className="  rounded-lg  bg-gray-300 hover:scale-105 transition-all duration-150 hover:cursor-pointer">
                     <p className="p-4 font-open font-bold  text-gray-700 ">Investigative</p>
                </div>
                <div className="  rounded-lg  bg-gray-300 hover:scale-105 transition-all duration-150 hover:cursor-pointer">
                     <p className="p-4 font-open font-bold  text-gray-700 ">Inspirational</p>
                </div>
                
          </div>

          <h2 className=" font-medium pt-3 text-xl">Note:</h2>
          <br />
          <p className="font-open pl-5 text-xl">
          The features and responses provided by Waytogo AI are experimental in nature. While we strive for accuracy, we cannot guarantee 100% accuracy in AI-generated responses. Additionally, please note that we do not store any data for testing purposes. 
          </p>

          <p className="pt-6 ps-5 font-mono text-2xl">Developed By Nandhakrishnan</p>
          <div className="flex gap-3 ps-5 pt-4">
              <a href="https://www.linkedin.com/in/nandhakrishnanp/">
                <img src={linked} alt="lined-in-logo" width={30} />
              </a>
              <p className="text-xl font-mono">Connect with me !</p>
            </div>
      </div>
    </div>
  );
};

export default Settings;
