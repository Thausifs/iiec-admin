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
import {
  CreateEmployee,
  EditEmployee,
  DeleteEmployee,
  ImgUploadedEmp,
} from "../apis/admin";
import delete_icon from "../asserts/images/delete_icon.png";
// import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ExportToExcel } from "../helpers/ExportToExcel";

function EmployeeManagement() {
  const [showcreateemp, setshowcreateemp] = useState(false);
  const [showeditemp, setshoweditemp] = useState(false);
  const [deleteemppopup, setdeleteemppopup] = useState(false);
  const [deleteempdata, setdeleteempdata] = useState();
  const [employeemanagementdata, setemployeemanagementdata] = useState([]);
  const [Excelempdata, setExcelempdata] = useState([]);
  const [editempdata, seteditempdata] = useState([]);
  const [editempimg, seteditempimg] = useState("");
  const [selectedDate, setselectedDate] = useState(new Date());
  const [selectedDateedit, setselectedDateedit] = useState(null);
     const navigate = useNavigate();
  const admintype = localStorage.getItem("Employee_Type");

  useEffect(() => {
    EmployeesData();
  }, []);

  useEffect(() => {
      const admintype = localStorage.getItem("Employee_Type");
    if (admintype === "superadmin") {
      document.getElementById("empbtn_addemp").style.display = "block";
    } else if (admintype === "admin" || admintype === null) {
      document.getElementById("empbtn_addemp").style.display = "none";
    }else if ( admintype === null) {
      navigate("/login")
    }
  }, [admintype, navigate]);
//  if (!admintype) {
//     navigate("/dashboard")
//   }
  const createemp = async () => {
    try {
      let Employee_name = document.getElementById("employee_name").value;
      let Employee_Email = document.getElementById("employee_email").value;
      let Doj = selectedDate;
      let Employee_id = document.getElementById("employee_id").value;
      let Counselling_Country = document.getElementById(
        "counselling_country"
      ).value;
      let Location = document.getElementById("location").value;
      // let password = document.getElementById("password").value;
      let image = document.getElementById("btn_choose_inputemp").files[0];

      if(image === undefined){
        return alert("Please Upload image");
      }
      if(!Employee_name || !Employee_Email || !Doj || !Employee_id|| !Counselling_Country || !Location || !image){
        return alert("Please Enter All Required Fields");
      }

      if (image.size >= 2097152) {
        return alert("images should be less than 2mb");
      }
    
      // if (Employee_name !== String) {

      // }
      const StdData = new FormData();
      StdData.append("Employee_Name", Employee_name);
      StdData.append("Employee_Email", Employee_Email);
      StdData.append("DOJ", Doj);
      StdData.append("Employee_Id", Employee_id);
      StdData.append("Counselling_Country", Counselling_Country);
      StdData.append("Location", Location);
      // StdData.append("Password", password);
      StdData.append("Image", image);

      // let data = {
      //   Employee_Name: Employee_name,
      //   DOJ: Doj,
      //   Employee_Id: Employee_id,
      //   counselling_Country: Counselling_Country,
      //   Address: address,
      //   Password: password,
      // };
      console.log(StdData);
      var CreateEmployEe = await CreateEmployee(StdData);
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
      let Employee_Email = document.getElementById("edit_employee_email").value;
      let Doj = selectedDateedit;
      let Employee_id = document.getElementById("edit_employee_id").value;
      let Counselling_Country = document.getElementById(
        "edit_counselling_country"
      ).value;
      let Location = document.getElementById("edit_location").value;

     
      let data = {
        Employee_Name: Employee_name,
        Employee_Email: Employee_Email,
        DOJ: Doj,
        Employee_Id: Employee_id,
        Counselling_Country: Counselling_Country,
        Location: Location,
        // Password: password,
      };

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
      
      const newArr = data.map(({ Password, ...rest }) => {
        return rest;
      });
      setExcelempdata(newArr);
    } catch (error) {
      console.log("error while fetching data");
    }
  };
  // console.log(employeemanagementdata);
  const CreateEmp = () => {
    setshowcreateemp(true);
  };
  const EditEmp = (r) => {
    setshoweditemp(true);
    seteditempdata(r);
      console.log(r);
    seteditempimg(r.Image);
    setselectedDateedit(new Date(r.DOJ));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cancelcrtemp = () => {
    setshowcreateemp(false);
  };
  const canceleditemp = () => {
    setshoweditemp(false);
  };

  const Deleteemployee = async (deleteempdata) => {
    var deleteemployeeres = await DeleteEmployee(deleteempdata);
    console.log(deleteemployeeres);
    setdeleteemppopup(false);
    document.getElementById("dashboardid").style.filter = "none";
    EmployeesData();
  };
  const Deleteemployeepopup = (r) => {
    document.getElementById("dashboardid").style.filter = "blur(5px)";
    setdeleteemppopup(true);
    setdeleteempdata(r);
  };
  const Canceldeleteemployee = () => {
    setdeleteemppopup(false);
    document.getElementById("dashboardid").style.filter = "none";
  };
  const virtualcard = () => {
    alert("Virtual card not set ");
  };
 
  const fileselected = async (r) => {
    let Employee_Id = document.getElementById("edit_employee_id").value;
    let Image = document.getElementById("btn_choose_inputempedit").files[0];
    if (Image.size >= 2097152) {
      return alert("images should be less than 2mb");
    }
    // console.log(r.target.value);

    const EmpData = new FormData();
    EmpData.append("Image", Image);
    EmpData.append("Employee_Id", Employee_Id);

    let imgurl = await ImgUploadedEmp(EmpData);
    console.log(imgurl.message);
    console.log(imgurl.Data);
    seteditempimg(imgurl.Data);
  };
  return (
    <div className="dashboardpg pg_emp_mg">
      <Header />
      <div className="second_con" id="dashboardid">
        <div className="sidebar_con">
          <Sidebar />
        </div>
        <div className="main_con" id="dashboardid">
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
                  className="btn_add_std btn_text_empmg "
                  id="empbtn_addemp"
                  onClick={() => CreateEmp()}
                >
                  Add new Employee
                </button>
              </span>
              <span className="button_addstd">
                {
                  // <button className="btn_add_std btn_text_export">Export</button>
                }
                <ExportToExcel
                  apiData={Excelempdata}
                  fileName="EmployeesData"
                ></ExportToExcel>
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
                  <th className="std_name_couns" width="10%">
                    Employee Name{" "}
                  </th>
                  <th className="counselor_couns" width="12%">
                    DOJ
                  </th>
                  <th className="course_couns" width="10%">
                    Employee id
                  </th>
                  <th className="doe_couns" width="19%">
                    counselling Country
                  </th>
                  <th className="action_couns" width="15%">
                    Location
                  </th>

                  <th className="action_couns" width="10%">
                    Virtual Card
                  </th>
                  <th className="action_couns" width="15%">
                    Edit Profile
                  </th>
                </thead>
                <tbody className="appcomp_tbody">
                  {employeemanagementdata?.map((r, i) => {
                    return (
                      <tr key={i} className="tr_app_comp tbl_empmg">
                        <td className="appcomp_th_names table_td" width="20%">
                          {r.Employee_Name}
                        </td>
                        <td className="appcomp_th_countrys table_td">
                          {new Date(r.DOJ).toISOString().split("T")[0]}
                        </td>
                        <td className="appcomp_th_courses table_td">
                          {r.Employee_Id}
                        </td>
                        <td className="appcomp_th_dojs table_td">
                          {r.Counselling_Country}
                        </td>
                        <td className="table_td">{r.Location}</td>

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
            placehld="Employee_Name*"
            id="employee_name"
            type="text"
          ></InputPlaceholder>
          <p className="placeholdertitle emailplcdml">Employee_Email*</p>
          <input
            type="email"
            placeholder=""
            id="employee_email"
            // value={value}
            // onChange={(e) => callback(e)}
            className="placeholderinput emailinpempmg"
          ></input>

          <p className="placeholdertitle ml_7per">DOJ*</p>
          <DatePicker
            className="datepickercls stdmgdatepicker"
            selected={selectedDate}
            onChange={(date) => setselectedDate(date)}
            dateFormat="dd/MM/yyyy"
            id="DOE"
          ></DatePicker>
          <InputPlaceholder
            placehld="Employee_Id*"
            id="employee_id"
            type="number"
            min="0"
            placeholder="Numbers are only allowed"
          ></InputPlaceholder>
          <p className="placeholdertitle ml_7per">Counselling Country*</p>
          <select
            className="placeholderinput attendance_selecttag"
            id="counselling_country"
          >
            <option>USA</option>
            <option>UK</option>
            <option>Canada</option>
            <option>Australia</option>
            <option>Switzerland</option>
            <option>Malta</option>
            <option>Portugal</option>
            <option>Spain</option>
            <option>Dubai</option>
            <option>New zealand</option>
            <option>Ireland</option>
            <option>Bulgaria</option>
            <option>Iceland</option>
            <option>Netherlands</option>
            <option>Sweden</option>
            <option>Germany</option>
          </select>
          <p className="placeholdertitle ml_7per">Branch*</p>
          <select
            className="placeholderinput attendance_selecttag"
            id="location"
          >
            <option>Chennai</option>
            <option>Dubai</option>
            <option>Australia</option>
          </select>

          {
            // <InputPlaceholder
            //   placehld="Password"
            //   id="password"
            // ></InputPlaceholder>
          }
          {
            // <p className="placeholdertitle att_placehld">Password</p>
            // <select
            //   name="Attendance"
            //   id="attendance"
            //   className="placeholderinput attendance_selecttag"
            // >
            //   <option value="True">True</option>
            //   <option value="False">False</option>
            // </select>
          }
          <div style={{ display: "flex" }}>
            <div style={{ width: "30%", margin: "4% 2% 2% 7%" }}>
              <p className="emp_photo">Employee Photo*</p>
              <input
                type="file"
                className="btn_chooseinp"
                id="btn_choose_inputemp"
              ></input>
            </div>
            {
              // <div className="Nofile_maincon">
              //   <div className="nofile_div">No File Chosen</div>
              // </div>
            }
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
            <span className="crt_std">Edit Employee<span className='editidspn'>ID:<span>{editempdata.Employee_Id }</span></span></span>
            <MdCancel
              style={{ color: "EA1E21", fontSize: "1.6em" }}
              onClick={() => canceleditemp()}
            />
          </div>
          <InputPlaceholder2
            placehld="Employee Name"
            id="edit_employee_name"
            callback={(event) =>
              seteditempdata({ Employee_Name: event.target.value })
            }
            value={editempdata.Employee_Name}
          ></InputPlaceholder2>
          <p className="placeholdertitle emailplcdml">Employee Email</p>
          <input
            type="email"
            placeholder=""
            id="edit_employee_email"
            callback={(event) =>
              seteditempdata({ Employee_Email: event.target.value })
            }
            value={editempdata.Employee_Email}
            className="placeholderinput emailinpempmg"
          ></input>
          <p className="placeholdertitle ml_7per">DOJ</p>
          <DatePicker
            className="datepickercls stdmgdatepicker"
            selected={selectedDateedit}
            onChange={(date) => setselectedDateedit(date)}
            dateFormat="dd/MM/yyyy"
            id="EDIT_DOE"
          ></DatePicker>
          {/* <InputPlaceholder2
            placehld="Employee_Id ( Id not editable )"
            id="edit_employee_id"
            placeholder="Id not editable"
            // callback={(event) =>
            //   //  seteditempdata({ Employee_Id: event.target.value })
            // }
            value={editempdata.Employee_Id}
          ></InputPlaceholder2> */}
          <p className="placeholdertitle ml_7per">Counselling Country</p>
          <select
            className="placeholderinput attendance_selecttag"
            id="edit_counselling_country"
            defaultValue={editempdata.Counselling_Country}
          >
            <option>USA</option>
            <option>UK</option>
            <option>Canada</option>
            <option>Australia</option>
            <option>Switzerland</option>
            <option>Malta</option>
            <option>Portugal</option>
            <option>Spain</option>
            <option>Dubai</option>
            <option>New zealand</option>
            <option>Ireland</option>
            <option>Bulgaria</option>
            <option>Iceland</option>
            <option>Netherlands</option>
            <option>Sweden</option>
            <option>Germany</option>
          </select>
          <p className="placeholdertitle ml_7per">Branch</p>
          <select
            className="placeholderinput attendance_selecttag"
            id="edit_location"
            defaultValue={editempdata.Location}
          >
            <option value="Chennai">Chennai</option>
            <option value="Dubai">Dubai</option>
            <option value="Australia">Australia</option>
          </select>

          {
            // <InputPlaceholder
            //   placehld="Attendance"
            //   id="edit_attendance"
            //   callback={(event) =>
            //     seteditempdata({ Attendance: event.target.value })
            //   }
            //   value={editempdata.Attendance}
            // ></InputPlaceholder>
            // <p className="placeholdertitle att_placehld">Attendance</p>
            // <select
            //   name="Attendance"
            //   id="edit_attendance"
            //   className="placeholderinput attendance_selecttag"
            // >
            //   <option value="True">True</option>
            //   <option value="False">False</option>
            // </select>
          }
          <div style={{ display: "flex" }}>
            <div style={{ width: "30%", margin: "4% 2% 2% 7%" }}>
              <p className="emp_photo">Employee Photo</p>
              <input
                type="file"
                className="btn_chooseinp"
                id="btn_choose_inputempedit"
                onChange={(r) => fileselected(r)}
              ></input>
            </div>
            <img className="imgstdedit" src={editempimg} alt=""></img>
            {
              // <div className="Nofile_maincon">
              //   <div className="nofile_div">No File Chosen</div>
              // </div>
            }
          </div>

          <div className="btm_div_create">
            <button className="Btn_create" onClick={Edit_Employee}>
              Edit
            </button>
          </div>
        </div>
      )}{" "}
      ;
      {deleteemppopup && (
        <div className="popup_dlt">
          <p>
            Are you sure you want to delete the employee "
            {deleteempdata.Employee_Name}" ?
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
