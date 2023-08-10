import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Jobs from "./components/jobs/Jobs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddJob from "./components/add_Jobs/AddJob";
import EditJob from "./components/Edit_Job/EditJob";

function App() {

 

  return (
    <BrowserRouter>
      <Navbar />

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8">
       
        <Sidebar />
        <div className="lg:pl-[14rem] mt-[5.8125rem]">
          <Routes>
        <Route path="/jobs" element={<Jobs />} />

        <Route path="/addjob/" element={<AddJob />} />
        <Route path="/editjob/:id" element={<EditJob  />} />
          </Routes>
          
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
