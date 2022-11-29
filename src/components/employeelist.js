import React from 'react';
import "../styles/employeemanagement.css";
import virtual_card from "../asserts/images/virtual_card.png";
import editfile from "../asserts/images/editfile.png";
import { employeemanagementdata } from "../data";

const EmployeeList= () => {
      <div>
        <div className="counselling_head">
          <span className="counselling_heading emp_head">Employee List</span>
          <span className="button_addstd">
            <button className="btn_add_std btn_text_empmg">
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
                    <td className="appcomp_th_countrys table_td">{r.DOJ}</td>
                    <td className="appcomp_th_courses table_td">
                      {r.Employee_id}
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
                      ></img>
                    </td>
                    <td>
                      <img className="editfile_icon" src={editfile}></img>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>;
   
}

export default EmployeeList;