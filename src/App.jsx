import { useState } from "react";
import "./App.css";

import Main from "./Component/Main";
import Sidebar from "./Component/Sidebar";
import { Route, Router, Routes } from "react-router-dom";
import History from "./Component/History";
import Settings from "./Component/Settings";

function App() {
  return (
    <>
    
    <Routes>
           <Route path="/" element={<Main/>}></Route>
           <Route path="/history" element={<History/>}></Route>
           <Route path="/settings" element={<Settings/>}></Route>
      </Routes>
    
     
     
      
    </>
  );
}

export default App;
