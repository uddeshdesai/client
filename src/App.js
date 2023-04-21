import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Homepage from "./pages/homepage";
import React, { useEffect, useState } from "react";
import PatientProfile from "./components/profile";
import BasicExample from "./components/BasicExample.js";
import HospitalProfile from "./components/hospital_details"


function App() {
  const [user, setUser] = useState({});
  useEffect(() => {
    const theUser = localStorage.getItem("user");

    if (theUser && !theUser.includes("undefined")) {
      setUser(JSON.parse(theUser));
    }
  }, []);

  return (
    
   <>
   <BrowserRouter>
   <Routes> 

      <Route path="/" element={<BasicExample user={user}/>}>
        <Route path="/hospital_details" element={<HospitalProfile/>}/>  
        <Route path="" element={<Homepage />}/>
        <Route  path="profile" element={<PatientProfile/>}/>
      </Route>
      
   </Routes>
   </BrowserRouter>
   
  </>);
}

export default App;