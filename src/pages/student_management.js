import React, { useState, useEffect } from "react";
import Header from "../components/header";
import "../styles/studentmanagement.css";
import Sidebar from "../components/sidebar";
import studentmg_icon from "../asserts/images/studentmg_icon.png";
// import { studentmanagementdata } from "../data";
import edit_icon from "../asserts/images/edit_icon.png";
import delete_icon from "../asserts/images/delete_icon.png";
import disable_icon from "../asserts/images/disable_icon.png";
import InputPlaceholder from "../components/inputplaceholder";
import { MdCancel } from "react-icons/md";
import {
  Studentdata,
  CreateStudent,
  UpdateStudent,
  DeleteStudent,
  ImgUploadedStd,
} from "../apis/admin";
import InputPlaceholder2 from "../components/inputplaceholder2";
import { Navigate } from "react-router-dom";

function StudentManagement() {
  const [showaddstd2, setshowaddstd2] = useState(false);
  const [showeditstd, setshoweditstd] = useState(false);
  const [deletestdpopup, setdeletestdpopup] = useState(false);
  const [deletestddata, setdeletestddata] = useState();
  const [studentsmgData, setstudentsmgData] = useState([]);
  const [editstddata, seteditstddata] = useState([]);
  const [editstdimg , seteditstdimg] = useState("")
  const admintype = localStorage.getItem("Employee_Type");

  useEffect(() => {
    StudentData();
  }, []);

  const StudentData = async () => {
    try {
      var data = await Studentdata();

      setstudentsmgData(data);
    } catch (error) {
      console.log("error while fetching data");
    }
  };
  const createstd = async () => {
    try {
      let Student_Name = document.getElementById("Student_Name").value;
      let DOE = document.getElementById("DOE").value;
      let Student_Id = document.getElementById("Student_Id").value;
      let Counselling_Country = document.getElementById(
        "Counselling_Country"
      ).value;
      let Counsellor = document.getElementById("Counsellor").value;
      let Status = document.getElementById("Status").value;
      let Courses = document.getElementById("Courses").value;
      let Image = document.getElementById("btn_choose_input").files[0];
      
      if (Image.size >= 2097152) {
        return alert("images should be less than 2mb");
      }

      const StdData = new FormData();

      StdData.append("Students_Name", Student_Name);
      StdData.append("DOE", DOE);
      StdData.append("Student_Id", Student_Id);
      StdData.append("Counselling_Country", Counselling_Country);
      StdData.append("Counsellor", Counsellor);
      StdData.append("Status", Status);
      StdData.append("Courses", Courses);
      StdData.append("Image", Image);

      // let data = {
      //   Students_Name: Student_Name,
      //   DOE: DOE,
      //   Student_Id: Student_Id,
      //   Counselling_Country: Counselling_Country,
      //   Counsellor: Counsellor,
      //   Status: Status,
      //   Courses: Courses,
      //   image: image,
      // };
      var Createstudent = await CreateStudent(StdData);
      const dataresponse = Createstudent;

      if (!dataresponse.status) {
        alert(dataresponse.message);
        setshowaddstd2(false);
        StudentData();
      } else {
        alert(dataresponse.data.message);
      }
    } catch (error) {
      alert("Error while creating Student");
    }
  };

  const Editstd = async () => {
    try {
      let Student_Name = document.getElementById("edit_Student_Name").value;
      let DOE = document.getElementById("edit_DOE").value;
      let Student_Id = document.getElementById("edit_Student_Id").value;
      let Counselling_Country = document.getElementById(
        "edit_Counselling_Country"
      ).value;
      let Counsellor = document.getElementById("edit_Counsellor").value;
      let Status = document.getElementById("edit_Status").value;
      let Courses = document.getElementById("edit_Courses").value;

      let data = {
        Students_Name: Student_Name,
        DOE: DOE,
        Student_Id: Student_Id,
        Counselling_Country: Counselling_Country,
        Counsellor: Counsellor,
        Status: Status,
        Courses: Courses,
      };

      var Updatestudent = await UpdateStudent(data);
      const dataresponse = Updatestudent;

      if (!dataresponse.status) {
        alert(dataresponse.message);
        setshoweditstd(false);
        await StudentData();
      } else {
        alert(dataresponse.data.message);
      }
    } catch (error) {
      alert("Error while updating the Student");
    }
  };
  const AddStudent2 = () => {
    setshowaddstd2(true);
  };
  const EditStudent = (r) => {
    setshoweditstd(true);
    
    seteditstddata(r);
    seteditstdimg(r.Image)
  };
  const canceladdstd = () => {
    setshowaddstd2(false);
  };
  const canceleditstd = () => {
    setshoweditstd(false);
  };
  const Deletestudent = async (deletestddata) => {
    var deletestudentres = await DeleteStudent(deletestddata);
    console.log(deletestudentres);
    setdeletestdpopup(false);
    document.getElementById("dashboardid").style.filter = "none";
    StudentData();
  };
  const Deletestudentpopup = (r) => {
    document.getElementById("dashboardid").style.filter = "blur(5px)";
    setdeletestdpopup(true);
    setdeletestddata(r);
  };
  const Canceldeletestudent = () => {
    setdeletestdpopup(false);
    document.getElementById("dashboardid").style.filter = "none";
  };
  if (!admintype) {
    return <Navigate to="/" />;
  }
  const fileselected = async(r) => {
    let Student_Id = document.getElementById("edit_Student_Id").value;
    let Image = document.getElementById("btn_choose_inputedit").files[0];
     if (Image.size >= 2097152) {
        return alert("images should be less than 2mb");
      }
    // console.log(r.target.value);

    const StdData = new FormData();
    StdData.append("Image", Image);
    StdData.append("Student_Id", Student_Id);
    
   console.log(StdData);
    let imgurl = await ImgUploadedStd(StdData);
    console.log(imgurl.message);
    console.log(imgurl.Data);
    seteditstdimg(imgurl.Data)
  }
  return (
    <div className="dashboardpg">
      <Header />
      <div className="second_con" id="dashboardid">
        <div className="sidebar_con">
          <Sidebar />
        </div>
        <div className="main_con" id="dashboardid">
          <div className="maincon_heading">
            <img src={studentmg_icon} alt=""></img>
            <span>STUDENT MANAGEMENT</span>
          </div>
          <div className="coun_main_con">
            <div className="counselling_head">
              <span className="counselling_heading emp_head">Student List</span>
              <span className="button_addstd">
                <button
                  className="btn_add_std btn_text_empmg"
                  onClick={() => AddStudent2()}
                >
                  Add new Student
                </button>
              </span>
              <span className="button_addstd">
                <button className="btn_add_std btn_text_export">Export</button>
              </span>
              <select className="select_tag">
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>
              <input
                className="search_pd emp_searchpd"
                placeholder="Search"
              ></input>
            </div>
            <hr></hr>
            <div className="tbl_emp_management">
              <table className="emp_mg">
                <thead>
                  <th className="std_name_couns" width="8%">
                    Student Name{" "}
                  </th>
                  <th className="counselor_couns" width="10%">
                    DOE
                  </th>
                  <th className="course_couns" width="10%">
                    Student id
                  </th>
                  <th className="doe_couns" width="13%">
                    Counselling Country
                  </th>
                  <th className="action_couns" width="10%">
                    Counsellor
                  </th>
                  <th className="action_couns" width="10%">
                    Status
                  </th>
                  <th className="action_couns" width="9%">
                    Courses
                  </th>
                  <th className="action_couns" width="20%">
                    Action
                  </th>
                </thead>
                <tbody className="appcomp_tbody">
                  {studentsmgData?.map((r, i) => {
                    return (
                      <tr key={i} className="tr_app_comp tbl_empmg">
                        <td className="appcomp_th_names table_td" width="20%">
                          {r.Students_Name}
                        </td>
                        <td className="appcomp_th_countrys table_td">
                          {r.DOE}
                        </td>
                        <td className="appcomp_th_courses table_td">
                          {r.Student_Id}
                        </td>
                        <td className="appcomp_th_dojs table_td">
                          {r.Counselling_Country}
                        </td>
                        <td className="table_td">{r.Counsellor}</td>
                        <td className="table_td">{r.Status}</td>
                        <td className="table_td">{r.Courses}</td>
                        <td>
                          <span>
                            <img
                              className="edit_icn_spn"
                              src={edit_icon}
                              onClick={() => EditStudent(r)}
                              alt=""
                            ></img>
                          </span>
                          <span>
                            <img
                              className="edit_icn_spn"
                              src={delete_icon}
                              onClick={() => Deletestudentpopup(r)}
                              alt=""
                            ></img>
                          </span>
                          <span>
                            {" "}
                            <img
                              className="edit_icn_spn"
                              src={disable_icon}
                              alt=""
                            ></img>
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {showaddstd2 && (
        <div className="createstd_maincon">
          <div className="head_crt_emp">
            {" "}
            <span className="crt_std">Create Student</span>
            <MdCancel
              style={{ color: "EA1E21", fontSize: "1.6em" }}
              onClick={() => canceladdstd()}
            />
          </div>
          <InputPlaceholder
            placehld="Student Name"
            id="Student_Name"
          ></InputPlaceholder>
          <InputPlaceholder placehld="DOE" id="DOE"></InputPlaceholder>
          <InputPlaceholder
            placehld="Student Id"
            id="Student_Id"
            placeholder="Numbers are only allowed"
          ></InputPlaceholder>
          <InputPlaceholder
            placehld="Counselling Country"
            id="Counselling_Country"
          ></InputPlaceholder>
          <InputPlaceholder
            placehld="Counsellor"
            id="Counsellor"
          ></InputPlaceholder>
          {
            // <InputPlaceholder placehld="Status" id="Status"></InputPlaceholder>
          }
          <p className="placeholdertitle att_placehld">Status</p>
          <select
            name="Statusss"
            id="Status"
            className="placeholderinput attendance_selecttag"
          >
            <option value="Education Details">Education Details</option>
            <option value="University Finalised">University Finalised</option>
            <option value="Certificates Uploaded">Certificates Uploaded</option>
            <option value="Visa Process">Visa Process</option>
            <option value="Joining Date Finalised">
              Joining Date Finalised
            </option>
          </select>
          <InputPlaceholder placehld="Courses" id="Courses"></InputPlaceholder>

          <div style={{ display: "flex" }} className="chosefilediv">
            <div style={{ width: "30%", margin: "4% 2% 2% 7%" }}>
              <p className="emp_photo">Student Photo</p>
              <input
                type="file"
                className="btn_chooseinp"
                id="btn_choose_input"
              ></input>
            </div>
            <div className="Nofile_maincon">
              <div className="nofile_div">No File Chosen</div>
            </div>
          </div>

          <div className="btm_div_create">
            <button className="Btn_create" onClick={createstd}>
              Create
            </button>
          </div>
        </div>
      )}
      {showeditstd && (
        <div className="createstd_maincon">
          <div className="head_crt_emp">
            {" "}
            <span className="crt_std">Edit Student</span>
            <MdCancel
              style={{ color: "EA1E21", fontSize: "1.6em" }}
              onClick={() => canceleditstd()}
            />
          </div>
          <InputPlaceholder2
            placehld="Student Name"
            id="edit_Student_Name"
            callback={(event) =>
              seteditstddata({ Students_Name: event.target.value })
            }
            value={editstddata.Students_Name}
          ></InputPlaceholder2>
          <InputPlaceholder2
            placehld="DOE"
            id="edit_DOE"
            callback={(event) => seteditstddata({ DOE: event.target.value })}
            value={editstddata.DOE}
          ></InputPlaceholder2>
          <InputPlaceholder2
            placehld="Student Id ( ID not editable )"
            id="edit_Student_Id"
            placeholder="Numbers are only allowed"
            // callback={(event) =>
            //   seteditstddata({ Student_Id: event.target.value })
            // }
            value={editstddata.Student_Id}
          ></InputPlaceholder2>
          <InputPlaceholder2
            placehld="Counselling Country"
            id="edit_Counselling_Country"
            callback={(event) =>
              seteditstddata({ Counselling_Country: event.target.value })
            }
            value={editstddata.Counselling_Country}
          ></InputPlaceholder2>
          <InputPlaceholder2
            placehld="Counsellor"
            id="edit_Counsellor"
            callback={(event) =>
              seteditstddata({ Counsellor: event.target.value })
            }
            value={editstddata.Counsellor}
          ></InputPlaceholder2>
          {
            // <InputPlaceholder
            //   placehld="Status"
            //   id="edit_Status"
            //   callback={(event) => seteditstddata({ Status: event.target.value })}
            //   value={editstddata.Status}
            // ></InputPlaceholder>
          }
          <p className="placeholdertitle att_placehld">Status</p>
          <select
            name="Status"
            id="edit_Status"
            className="placeholderinput attendance_selecttag"
          >
            <option value="Education Details">Education Details</option>
            <option value="University Finalised">University Finalised</option>
            <option value="Certificates Uploaded">Certificates Uploaded</option>
            <option value="Visa Process">Visa Process</option>
            <option value="Joining Date Finalised">
              Joining Date Finalised
            </option>
          </select>
          <InputPlaceholder2
            placehld="Courses"
            id="edit_Courses"
            callback={(event) =>
              seteditstddata({ Courses: event.target.value })
            }
            value={editstddata.Courses}
          ></InputPlaceholder2>
          <div style={{ display: "flex" }}>
            <div style={{ width: "30%", margin: "4% 2% 2% 7%" }}>
              <p className="emp_photo">Student Photo</p>
              <input
                type="file"
                className="btn_chooseinp"
                id="btn_choose_inputedit"
                onChange={(r) => fileselected(r)}
              ></input>
            </div>
            <img className="imgstdedit" src={editstdimg} alt=""></img>
            {
              // <div className="Nofile_maincon">
              //   <div className="nofile_div">No File Chosen</div>
              // </div>
            }
          </div>

          <div className="btm_div_create">
            <button className="Btn_create" onClick={Editstd}>
              Update
            </button>
          </div>
        </div>
      )}
      {deletestdpopup && (
        <div className="popup_dlt">
          <p>
            Are you sure you want to delete the student "
            {deletestddata.Students_Name}" ?
          </p>
          <div className="dltbtns_popup_div">
            <button
              className="Btn_create fz_14px"
              onClick={() => Deletestudent(deletestddata)}
            >
              OK
            </button>
            <button
              className="Btn_create fz_14px"
              onClick={() => Canceldeletestudent()}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      ;
    </div>
  );
}

export default StudentManagement;
