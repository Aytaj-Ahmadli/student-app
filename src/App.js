import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";

import EditStudent from "./pages/EditStudent";

import Home from "./pages/Home";
import AddStudent from "./pages/AddStudent";


function App() {
  return (
   <BrowserRouter>
   <Routes>
     <Route path="/" element={<Home />}/>
     <Route path="/add-student" element={<AddStudent />}/>
    <Route path="/edit-student/:studentId" element={<EditStudent/>} />
   </Routes>   
   </BrowserRouter>
  );

}

export default App;
