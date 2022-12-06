import React, { useState, useEffect } from "react";
import Header from "../components/header";
import "../styles/employeemanagement.css";
import Sidebar from "../components/sidebar";
import employeemg_icon from "../asserts/images/employeemg_icon.png";
import virtual_card from "../asserts/images/virtual_card.png";
import editfile from "../asserts/images/editfile.png";
// import { employeemanagementdata } from "../data";
import { EmployeeData } from "../apis/admin";
import InputPlaceholder from "../components/inputplaceholder";
import InputPlaceholder2 from "../components/inputplaceholder2";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MdCancel } from "react-icons/md";
import { CreateEmployee, EditEmployee , DeleteEmployee } from "../apis/admin";
import delete_icon from "../asserts/images/delete_icon.png"

function EmployeeManagement() {
  const [showcreateemp, setshowcreateemp] = useState(false);
  const [showeditemp, setshoweditemp] = useState(false);
  const [deleteemppopup, setdeleteemppopup] = useState(false);
    const [deleteempdata, setdeleteempdata] = useState();
  const [employeemanagementdata, setemployeemanagementdata] = useState([]);
  const [editempdata, seteditempdata] = useState([]);

  useEffect(() => {
    EmployeesData();
  }, []);
   
   
  const createemp = async () => {
    try {
      let Employee_name = document.getElementById("employee_name").value;
      let Doj = document.getElementById("doj").value;
      let Employee_id = document.getElementById("employee_id").value;
      let Counselling_Country = document.getElementById(
        "counselling_country"
      ).value;
      let address = document.getElementById("address").value;
      let AttenDance = document.getElementById("attendance").value;

      // if (Employee_name !== String) {
      
      // }
      let data = {
        Employee_Name: Employee_name,
        DOJ: Doj,
        Employee_Id: Employee_id,
        counselling_Country: Counselling_Country,
        Address: address,
        Attendance: AttenDance,
      };
      console.log(data);
      var CreateEmployEe = await CreateEmployee(data);
      const dataresponse = CreateEmployEe;
      if (!dataresponse.status) {
        alert(dataresponse.message);
        setshowcreateemp(false);
        EmployeesData();
      } else {
        alert(dataresponse.data.message);
      }
       } catch (error) {
      alert("Error while creating Employee");
      console.log("Error while creating Employee");
    }
  };

  const Edit_Employee = async () => {


    try {
     
      let Employee_name = document.getElementById("edit_employee_name").value;
      let Doj = document.getElementById("edit_doj").value;
      let Employee_id = document.getElementById("edit_employee_id").value;
      let Counselling_Country = document.getElementById(
        "edit_counselling_country"
      ).value;
      let address = document.getElementById("edit_address").value;
      let AttenDance = document.getElementById("edit_attendance").value;
         
      let data = {
        Employee_Name: Employee_name,
        DOJ: Doj,
        Employee_Id: Employee_id,
        counselling_Country: Counselling_Country,
        Address: address,
        Attendance: AttenDance,
      };
      console.log(data);
      var EditEmployEe = await EditEmployee(data);
      const dataresponse = EditEmployEe;
     
      if (!dataresponse.status) {
        alert(dataresponse.message);
        setshoweditemp(false);
        EmployeesData();
      } else {
        alert(dataresponse.data.message);
      }
    } catch (error) {
      alert("Error while updating the Employee");
    
    }
  };
      
    

  const EmployeesData = async () => {
    try {
      var data = await EmployeeData();

      setemployeemanagementdata(data);
    } catch (error) {
      console.log("error while fetching data");
    }
  };
  // console.log(employeemanagementdata);
  const CreateEmp = () => {
    setshowcreateemp(true);
    document.querySelector(".pg_emp_mg").styles.backgroundColor = "red";
  };
  const EditEmp = (r) => {
    setshoweditemp(true);
    seteditempdata(r);
     window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cancelcrtemp = () => {
    setshowcreateemp(false);
  };
  const canceleditemp = () => {
    setshoweditemp(false);
  };


  // const Deleteemployee = async (r) => {
  //    var deleteemployeeres = await DeleteEmployee(r);
  //   console.log(deleteemployeeres);
  //   EmployeesData();
  // }
   const Deleteemployee = async (deleteempdata) => {
     var deleteemployeeres = await DeleteEmployee(deleteempdata);
     console.log(deleteemployeeres);
     setdeleteemppopup(false);
     EmployeesData();
   };
   const Deleteemployeepopup = (r) => {
     setdeleteemppopup(true);
     setdeleteempdata(r);
     
   };
   const Canceldeleteemployee = () => {
     setdeleteemppopup(false);
   };
  const virtualcard = () => {
    alert("Virtual card not set ");
  }
  return (
    <div className="dashboardpg pg_emp_mg">
      <Header />
      <div className="second_con">
        <div className="sidebar_con">
          <Sidebar />
        </div>
        <div className="main_con">
          <div className="maincon_heading">
            <img src={employeemg_icon} alt=""></img>
            <span>Employee Management</span>
          </div>
          <div className="coun_main_con">
            <div className="counselling_head">
              <span className="counselling_heading emp_head">
                Employee List
              </span>
              <span className="button_addstd">
                <button
                  className="btn_add_std btn_text_empmg"
                  onClick={() => CreateEmp()}
                >
                  Add new Employee
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
                  <th className="std_name_couns" width="15%">
                    Employee Name{" "}
                  </th>
                  <th className="counselor_couns" width="6%">
                    DOJ
                  </th>
                  <th className="course_couns" width="10%">
                    Employee id
                  </th>
                  <th className="doe_couns" width="14%">
                    counselling Country
                  </th>
                  <th className="action_couns" width="15%">
                    Address
                  </th>
                  <th className="action_couns" width="10%">
                    Attendance
                  </th>
                  <th className="action_couns" width="10%">
                    Virtual Card
                  </th>
                  <th className="action_couns" width="10%">
                    Edit Profile
                  </th>
                </thead>
                <tbody className="appcomp_tbody">
                  {employeemanagementdata.map((r, i) => {
                    return (
                      <tr key={i} className="tr_app_comp tbl_empmg">
                        <td className="appcomp_th_names table_td" width="20%">
                          {r.Employee_Name}
                        </td>
                        <td className="appcomp_th_countrys table_td">
                          {r.DOJ}
                        </td>
                        <td className="appcomp_th_courses table_td">
                          {r.Employee_Id}
                        </td>
                        <td className="appcomp_th_dojs table_td">
                          {r.counselling_Country}
                        </td>
                        <td className="table_td">{r.Address}</td>
                        <td className="table_td">{r.Attendance}</td>
                        <td>
                          <img
                            className="virtual_card_icon"
                            src={virtual_card}
                            alt=""
                            onClick={() => virtualcard()}
                          ></img>
                        </td>
                        <td className="dlt_edit_td">
                          <img
                            className="editfile_icon"
                            src={editfile}
                            alt=""
                            onClick={() => EditEmp(r)}
                          ></img>

                          <span>
                            <img
                              className="edit_icn_spn"
                              src={delete_icon}
                              onClick={() => Deleteemployeepopup(r)}
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
      {showcreateemp && (
        <div className="createstd_maincon">
          <div className="head_crt_emp">
            {" "}
            <span className="crt_std">Create Employee</span>
            <MdCancel
              style={{ color: "EA1E21", fontSize: "1.6em" }}
              onClick={() => cancelcrtemp()}
            />
          </div>
          <InputPlaceholder
            placehld="Employee_Name"
            id="employee_name"
          ></InputPlaceholder>
          <InputPlaceholder placehld="DOJ" id="doj"></InputPlaceholder>
          <InputPlaceholder
            placehld="Employee_Id"
            id="employee_id"
            placeholder="Numbers are only allowed"
          ></InputPlaceholder>
          <InputPlaceholder
            placehld="counselling_Country"
            id="counselling_country"
          ></InputPlaceholder>
          <InputPlaceholder placehld="Address" id="address"></InputPlaceholder>
          <p className="placeholdertitle att_placehld">Attendance</p>
          <select
            name="Attendance"
            id="attendance"
            className="placeholderinput attendance_selecttag"
          >
            <option value="True">True</option>
            <option value="False">False</option>
          </select>

          <div style={{ display: "flex" }}>
            <div style={{ width: "30%", margin: "4% 2% 2% 7%" }}>
              <p className="emp_photo">Employee Photo</p>
              <button className="btn_choose">Choose File</button>
            </div>
            <div className="Nofile_maincon">
              <div className="nofile_div">No File Chosen</div>
            </div>
          </div>

          <div className="btm_div_create">
            <button className="Btn_create" onClick={createemp}>
              Create
            </button>
          </div>
        </div>
      )}
      {showeditemp && (
        <div className="createstd_maincon">
          <div className="head_crt_emp">
            {" "}
            <span className="crt_std">Edit Employee</span>
            <MdCancel
              style={{ color: "EA1E21", fontSize: "1.6em" }}
              onClick={() => canceleditemp()}
            />
          </div>
          <InputPlaceholder2
            placehld="Employee_Name"
            id="edit_employee_name"
            callback={(event) =>
              seteditempdata({ Employee_Name: event.target.value })
            }
            value={editempdata.Employee_Name}
          ></InputPlaceholder2>
          <InputPlaceholder2
            placehld="DOJ"
            id="edit_doj"
            callback={(event) => seteditempdata({ DOJ: event.target.value })}
            value={editempdata.DOJ}
          ></InputPlaceholder2>
          <InputPlaceholder2
            placehld="Employee_Id"
            id="edit_employee_id"
            placeholder="Numbers are only allowed"
            callback={(event) =>
              seteditempdata({ Employee_Id: event.target.value })
            }
            value={editempdata.Employee_Id}
          ></InputPlaceholder2>
          <InputPlaceholder2
            placehld="counselling_Country"
            id="edit_counselling_country"
            callback={(event) =>
              seteditempdata({ counselling_Country: event.target.value })
            }
            value={editempdata.counselling_Country}
          ></InputPlaceholder2>
          <InputPlaceholder2
            placehld="Address"
            id="edit_address"
            callback={(event) =>
              seteditempdata({ Address: event.target.value })
            }
            value={editempdata.Address}
          ></InputPlaceholder2>
          {
            // <InputPlaceholder
            //   placehld="Attendance"
            //   id="edit_attendance"
            //   callback={(event) =>
            //     seteditempdata({ Attendance: event.target.value })
            //   }
            //   value={editempdata.Attendance}
            // ></InputPlaceholder>
          }
          <p className="placeholdertitle att_placehld">Attendance</p>
          <select
            name="Attendance"
            id="edit_attendance"
            className="placeholderinput attendance_selecttag"
          >
            <option value="True">True</option>
            <option value="False">False</option>
          </select>

          <div style={{ display: "flex" }}>
            <div style={{ width: "30%", margin: "4% 2% 2% 7%" }}>
              <p className="emp_photo">Employee Photo</p>
              <button className="btn_choose">Choose File</button>
            </div>
            <div className="Nofile_maincon">
              <div className="nofile_div">No File Chosen</div>
            </div>
          </div>

          <div className="btm_div_create">
            <button className="Btn_create" onClick={Edit_Employee}>
              Create
            </button>
          </div>
        </div>
      )}{" "}
      ;
      {deleteemppopup && (
        <div className="popup_dlt">
          <p>
            Are you sure you want to delete the employee 
            "{deleteempdata.Employee_Name}" ?
          </p>
          <div className="dltbtns_popup_div">
            <button
              className="Btn_create fz_14px"
              onClick={() => Deleteemployee(deleteempdata)}
            >
              OK
            </button>
            <button
              className="Btn_create fz_14px"
              onClick={() => Canceldeleteemployee()}
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

export default EmployeeManagement;
