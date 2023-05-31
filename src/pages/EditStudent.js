import React, { useEffect, useState } from "react";

import Header from "../components/Header";

import { useParams, useNavigate } from "react-router-dom";
import axios, { Axios } from "axios";

const EditStudent = () => {
  const { studentId } = useParams();
  const navigate = useNavigate();

  const [willEditStudent, setWillEditStudent] = useState(null);
  const [studentNo, setStudentNo] = useState("");
  const [name, setName] = useState("");
  const [surName, setSurname] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [schoolName, setSchoolName] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3004/students/${studentId}`)
      .then((res) => {
        console.log(res.data);
        setWillEditStudent(res.data)
        setStudentNo(res.data.studentNo);
        setName(res.data.name);
        setSurname(res.data.surName);
        setStudentClass(res.data.studentClass);
        setSchoolName(res.data.schoolName);
      })
      .catch((err) => {
        console.log(err);
        alert("hata olustu");
        navigate("/");
      });
  }, []);

  const handleEdit = (event) => {
    event.preventDefault();
    //validation
    if(
      studentNo === "" || 
      name === "" || 
      surName === "" ||
      studentClass === ""
      ){
        alert("!!!!")
        return;
      }
      const updatedStudent={
        id:willEditStudent.id,
        name:name,
        surName:surName,
        studentClass:studentClass,
        schoolName:schoolName,
        studentNo:studentNo
      }
      axios
      .put(`http://localhost:3004/students/${willEditStudent.id}`,
      updatedStudent
      )
      
      .then(res=>{
        console.log(res);
        navigate("/");
      })
       .catch(err=>{})
           console.log(err);
           alert("!!!!!!!!!!");
  };

  if (willEditStudent === null) {
    return null;
  }
  return (
    <div>
      <Header />
      <h1>edit student</h1>
      <div className="container my-5">
        <form onSubmit={handleEdit}>
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
              onChange={(event) => setStudentNo(event.target.value)}
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
              onChange={(event) => setName(event.target.value)}
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
              onChange={(event) => setSurname(event.target.value)}
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
              onChange={(event) => setStudentClass(event.target.value)}
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
              onChange={(event) => setSchoolName(event.target.value)}
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
export default EditStudent;
