import React, { useState } from "react";
import Header from "../components/header";
import "../styles/reports.css";
import Sidebar from "../components/sidebar";
import { studentmanagementdata } from "../data";
import reports_icon from "../asserts/images/reports_icon.png";
import { employeemanagementdata } from "../data";
import InputPlaceholder from "../components/inputplaceholder";
import editfile from "../asserts/images/editfile.png";

function Reports() {
  const [showstdreports, setshowstdreports] = useState(true);
  const [showempreports, setshowempreports] = useState(false);
  // const [showaddstd2, setshowaddstd2] = useState(false);
  const [showeditemp, setshoweditemp] = useState(false);

 
  const EmpReports = () => {
    setshowstdreports(false);
    setshowempreports(true);
  };
  const Stdreports = () => {
    setshowempreports(false);
    setshowstdreports(true);
  };
  const EditEmp = () => {
    document.getElementById("std_btnid").style.backgroundColor = "blue";
    setshoweditemp(true);
  };

  return (
    <div className="dashboardpg">
      <Header />
      <div className="second_con">
        <div className="sidebar_con">
          <Sidebar />
        </div>
        <div className="main_con">
          <div className="maincon_heading">
            <img src={reports_icon} alt=""></img>
            <span>Reports</span>
          </div>
          <div>
            <button className="std_btn" id="std_btnid" onClick={() => Stdreports()}>
              Students
            </button>
            <button className="emp_btn" id="emp_btnid" onClick={() => EmpReports()}>
              Employees
            </button>
          </div>

          {showstdreports && (
            <div className="coun_main_con">
              <div className="counselling_head">
                <span className="counselling_heading emp_head">
                  Student List
                </span>

                <span className="button_addstd">
                  <button className="btn_add_std btn_text_export">
                    Export
                  </button>
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
                <table className="emp_mg rep_tbl_emp">
                  <thead>
                    <th className="std_name_couns" width="8%">
                      Student Name{" "}
                    </th>
                    <th className="counselor_couns" width="13%">
                      DOE
                    </th>
                    <th className="course_couns" width="10%">
                      Student id
                    </th>
                    <th className="doe_couns" width="14%">
                      Counselling Country
                    </th>
                    <th className="action_couns" width="15%">
                      Counsellor
                    </th>
                    <th className="action_couns" width="10%">
                      Status
                    </th>
                    <th className="action_couns" width="20%">
                      Courses
                    </th>
                  </thead>
                  <tbody className="appcomp_tbody">
                    {studentmanagementdata.map((r, i) => {
                      return (
                        <tr key={i} className="tr_app_comp tbl_empmg">
                          <td className="appcomp_th_names table_td" width="20%">
                            {r.Employee_Name}
                          </td>
                          <td className="appcomp_th_countrys table_td">
                            {r.DOJ}
                          </td>
                          <td className="appcomp_th_courses table_td">
                            {r.Employee_id}
                          </td>
                          <td className="appcomp_th_dojs table_td">
                            {r.counselling_Country}
                          </td>
                          <td className="table_td">{r.counsellor}</td>
                          <td className="table_td">{r.Status}</td>
                          <td className="table_td">{r.course}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {showempreports && (
            <div className="coun_main_con">
              <div className="counselling_head">
                <span className="counselling_heading emp_head">
                  Employee List
                </span>

                <span className="button_addstd">
                  <button className="btn_add_std btn_text_export">
                    Export
                  </button>
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
                <table className="emp_mg rep_tbl_emp">
                  <thead>
                    <th className="std_name_couns" width="15%">
                      Employee Name{" "}
                    </th>
                    <th className="counselor_couns" width="10%">
                      DOJ
                    </th>
                    <th className="course_couns" width="15%">
                      Employee id
                    </th>
                    <th className="doe_couns" width="20%">
                      counselling Country
                    </th>

                    <th className="action_couns" width="20%">
                      No of Students
                    </th>
                    <th className="action_couns" width="20%">
                      Edit Profile
                    </th>
                  </thead>
                  <tbody className="appcomp_tbody">
                    {employeemanagementdata.map((r, i) => {
                      return (
                        <tr key={i} className="tr_app_comp tbl_empmg">
                          <td className="appcomp_th_names table_td" width="15%">
                            {r.Employee_Name}
                          </td>
                          <td
                            className="appcomp_th_countrys table_td"
                            width="10%"
                          >
                            {r.DOJ}
                          </td>
                          <td
                            className="appcomp_th_courses table_td"
                            width="15%"
                          >
                            {r.Employee_id}
                          </td>
                          <td className="appcomp_th_dojs table_td" width="20%">
                            {r.counselling_Country}
                          </td>

                          <td className="table_td" width="20%">
                            {r.No_of_students}
                          </td>
                          <td width="20%">
                            <img
                              className="editfile_icon"
                              // onClick={() => EditEmp()}
                              src={editfile}
                              alt=""
                            ></img>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {showeditemp && (
            <div className="createstd_maincon">
              <h3 className="crt_std">Edit Employee</h3>
              <InputPlaceholder placehld="First Name"></InputPlaceholder>
              <InputPlaceholder placehld="Last Name"></InputPlaceholder>
              <InputPlaceholder placehld="Gender"></InputPlaceholder>
              <InputPlaceholder placehld="Country"></InputPlaceholder>
              <InputPlaceholder placehld="Email"></InputPlaceholder>
              <InputPlaceholder placehld="Password"></InputPlaceholder>
              <InputPlaceholder placehld="Phone Number"></InputPlaceholder>
              <InputPlaceholder placehld="Address"></InputPlaceholder>
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
                <button className="Btn_create">Create</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Reports;
