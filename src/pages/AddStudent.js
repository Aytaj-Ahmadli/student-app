import React,{useState} from "react";

import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

import axios from 'axios';

const AddStudent = () => {
  const navigate=useNavigate()
  const [studentNo,setStudentNo]=useState("");
  const [name,setName]=useState("");
  const [surName,setSurname]=useState("");
  const [studentClass,setStudentClass]=useState("");
  const [schoolName,setSchoolName]=useState("");
  
  const handleSave=(event)=>{
    event.prevenDefault()
   
    if(
      studentNo === "" || 
      name === "" || 
      surName === "" ||
      studentClass === ""
      ){
        alert("!")
        return
      }
      const newStudent={
        id:String(new Date().getTime()),
        name:name,
        surname:surName,
        studentNo:studentNo,
        studentClass:studentClass,
        schoolName:schoolName,
      }
   axios.post("http://localhost:3004/students",newStudent)
   .then(res=>{
     navigate("/")
   })
   .catch(err=>{
     console.log(err);
     alert("Kayit isleminde bir sorun olustu")
   })
  };
  
  return (
    <div>
      <Header />
      <div className="container my-5">
        <form onSubmit={handleSave}>
          <div className="mb-3">
            <label htmlFor="studentNo" className="form-label">
              Student No
            </label>
            <input
              type="number"
              className="form-control"
              id="studentNo"
              placeholder="example:100"
              value={studentNo}
              onChange={(event)=>setStudentNo(event.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Student Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="example:Jhon"
              value={name}
              onChange={(event)=>setName(event.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="surname" className="form-label">
              Student Surname
            </label>
            <input
              type="text"
              className="form-control"
              id="surName"
              placeholder="example:Smith"
              value={surName}
              onChange={(event)=>setSurname(event.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="studentClass" className="form-label">
              Student Class
            </label>
            <input
              type="text"
              className="form-control"
              id="studentClass"
              placeholder="example:5/B"
              value={studentClass}
              onChange={(event)=>setStudentClass(event.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="schoolName" className="form-label">
              School Name
            </label>
            <input
              type="text"
              className="form-control"
              id="schoolName"
              placeholder="example:Oxford"
              value={schoolName}
              onChange={(event)=>setSchoolName(event.target.value)}
            />
          </div>
          <div>
            <div className="d-flex justify-content-center my-5">
              <button type="submit" className="btn btn-outline-primary w-50">
                SAVE
              </button>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
};
export default AddStudent;
