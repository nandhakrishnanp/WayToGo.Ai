import React, { useContext, useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { Context } from "../Context/context";
import userimg from "../assets/user.svg";
import h from "../assets/history2.svg";
import logo from "../assets/logo.svg";

const History = () => {
  const { history } = useContext(Context);

  const [seemore, setSeeMore] = useState(false);
  useEffect(() => {
    console.log(history);
  }, []);
  console.log(history);
  return (
    <div className=" bg-gray-200/50 w-full  min-h-screen flex-col flex items-center justify-center">
      <Sidebar />
        { history.length>0 ? <h1 className="text-4xl font-open -font-medium p-4">Recent Writings </h1> :null}      
      {history.length > 0 ? (
        <div className="w-[60%] max-md:w-full  h-[500px] overflow-y-scroll p-4 small">
          {history.map((item) => (
            <div>
              <div className=" p-3 gap-2 flex w-1/2">
                <img src={userimg} width={25} alt="user_logo" />
                <p className="bg-gray-300 capitalize font-medium font-open   rounded-lg p-2 ">
                  {item.user}
                </p>
              </div>
              <div className="flex ">
                <div
                  className={`p-4 small bg-gray-300 ${
                    seemore
                      ? " h-[500px] overflow-y-scroll"
                      : "h-[150px] overflow-y-hidden"
                  }  m-5 rounded-lg`}
                >
                  <div dangerouslySetInnerHTML={{ __html: item.res }} />
                </div>
                <img src={logo} width={30} alt="logo-png" />
              </div>
               <button onClick={ ()=>{
                   if(seemore){
                    setSeeMore(false)
                   }
                   else{
                    setSeeMore(true)
                   }
               }} className=" font-medium texl-lg ps-6 pb-4 ">{seemore ? "Show Less" : "Show More"}</button>
            </div>
            
          ))} 
        </div>
      ) : (
        <div>
          <div className="flex flex-col items-center gap-2 ">
            <img src={h} width={100} alt="no-items" />
            <h2 className=" text-2xl  text-gray-800 font-open font-medium">
              Recent History is Empty
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default History;
