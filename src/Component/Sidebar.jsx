import React, { useContext, useState } from "react";
import logo from "../assets/logo.svg";
import home from "../assets/home.svg";
import history from "../assets/history.svg";
import settings from "../assets/settings.svg";
import { Context } from "../Context/context";
import { Link } from "react-router-dom";
import ham from "../assets/ham.svg";
import x from "../assets/x.svg"
const Sidebar = () => {
  const [openSide, setOpenSide] = useState(false);
  const { resetToHome } = useContext(Context);
  return (
    // div

    <div className=" absolute top-0 left-0  z-50">
      <img
        src={ham}
        onClick={() => {
          setOpenSide(true);
          console.log("Clicked!!");
        }}
        width={45}
        className=" lg:hidden  hover:cursor-pointer"
        alt="side-bar-logo"
      />
      <div
        className={` absolute left-0 duration-[0.5s] ${
          openSide ? "max-lg:left-0" : "max-lg:left-[-999px]"
        }    transition-all    top-0 z-10  w-[240px] min-h-screen bg-gray-200 `}
      >
        <div className="flex items-center p-4 gap-2">
          <img src={logo} width={40} alt="logo" />
          <h2 className="font-open font-bold text-xl ">WayToGo.Ai <br /><span className="text-gray-700 text-sm">V 1.0.0</span></h2>
           
         <img src={x} className="lg:hidden hover:cursor-pointer" onClick={()=>{ setOpenSide(false)}} width={35} alt="" />  
           
        </div>
        <Link to="/">
          <div
            
            className="flex items-center pl-4  gap-1 w-full hover:cursor-pointer hover:bg-gray-300 p-3  duration-200 hover:transition ease-out"
          >
            <img src={home} width={25} alt="" />
            <p className="font-medium text-lg  hover:text-gray-800">Home</p>
          </div>
        </Link>

        <Link to="/history">
          <div className="flex items-center pl-4  gap-1 w-full hover:cursor-pointer hover:bg-gray-300 p-3  duration-200 hover:transition ease-out">
            <img src={history} width={25} alt="" />
            <p className="font-medium text-lg  hover:text-gray-800">History</p>
          </div>
        </Link>
        <Link to="/settings">
        <div className="flex items-center pl-4  gap-1 w-full hover:cursor-pointer hover:bg-gray-300 p-3  duration-200 hover:transition ease-out">
          <img src={settings} width={25} alt="" />
          <p className="font-medium text-lg  hover:text-gray-800">Settings</p>
        </div>
        </Link>
        <div className="p-4 absolute bottom-0 w-full bg-gray-300/50">
          <p className=" font-medium "> &copy; All Rights Received</p>
          <p className="pt-2 font-medium ">
            {" "}
            Sri Krishna College of engineering Technology , Coimbatore
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
