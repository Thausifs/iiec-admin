import React from "react";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import "../styles/counselling_schedule.css";
import counselling_schedule_icon from "../asserts/images/counselling_schedule_icon.png";
import edit_icon from "../asserts/images/edit_icon.png";
import delete_icon from "../asserts/images/delete_icon.png";
import disable_icon from "../asserts/images/disable_icon.png";
import { Navigate } from "react-router-dom";
import msg_icon from "../asserts/images/msg_icon.png";
import { applicationdata } from "../data";

function CounsellingSchedule() {
   const admintype = localStorage.getItem("Employee_Type");
  // const [showaddstd, setshowaddstd] = useState(false);
  // const canceladdstd = () => {
  //   setshowaddstd(false);
  // };
  // const AddStudent = () => {
  //   setshowaddstd(true);
  // };
   if (!admintype) {
     return <Navigate to="/login" />;
   }

  return (
    <div className="dashboardpg">
      <Header />
      <div className="second_con">
        <div className="sidebar_con">
          <Sidebar />
        </div>
        <div className="main_con">
          <div className="maincon_heading ">
            <img src={counselling_schedule_icon} alt=""></img>
            <span>Counseling Schedule </span>
          </div>
          <div className="coun_main_con">
            <div className="counselling_head">
              <span className="counselling_heading coun_head">Countries</span>
              <input className="search_pd" placeholder="Search"></input>
            </div>
            <div className="countries_table">
              <div className="coun_tbl_heading">
                <span className="counselling_heading ">Finland</span>
                <span className="button_addstd">
                  <button className="btn_add_std">add Student</button>
                </span>
              </div>
              <div className="table_div">
                <table className="tbl_countries">
                  <thead className="tr_head_coun">
                    <th className="std_name_couns" width="20%">
                      Student Name
                    </th>
                    <th className="counselor_couns" width="20%">
                      Counselor
                    </th>
                    <th className="course_couns" width="20%">
                      Course
                    </th>
                    <th className="doe_couns" width="20%">
                      DOE
                    </th>
                    <th className="action_couns" width="20%">
                      Action
                    </th>
                  </thead>

                  <tbody className="appcomp_tbody">
                    {applicationdata.map((r, i) => {
                      return (
                        <tr key={i} className="tr_app_comp">
                          <td className="appcomp_th_names table_td" width="20%">
                            {r.name}
                          </td>
                          <td className="appcomp_th_countrys table_td">
                            {r.country}
                          </td>
                          <td className="appcomp_th_courses table_td">
                            {r.course}
                          </td>
                          <td className="appcomp_th_dojs table_td">{r.doj}</td>
                          <td>
                            <span>
                              <img
                                className="edit_icn_spn"
                                src={edit_icon}
                                alt=""
                              ></img>
                            </span>
                            <span>
                              <img
                                className="edit_icn_spn"
                                src={delete_icon}
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
                            <span>
                              {" "}
                              <img
                                className="edit_icn_spn"
                                src={msg_icon}
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

            <div className="countries_table mgtp_4">
              <div className="coun_tbl_heading">
                <span className="counselling_heading ">Denmark</span>
                <span className="button_addstd">
                  <button className="btn_add_std">add Student</button>
                </span>
              </div>
              <div className="table_div">
                <table className="tbl_countries">
                  <thead className="tr_head_coun">
                    <th className="std_name_couns" width="20%">
                      Student Name
                    </th>
                    <th className="counselor_couns" width="20%">
                      Counselor
                    </th>
                    <th className="course_couns" width="20%">
                      Course
                    </th>
                    <th className="doe_couns" width="20%">
                      DOE
                    </th>
                    <th className="action_couns" width="20%">
                      Action
                    </th>
                  </thead>

                  <tbody className="appcomp_tbody">
                    {applicationdata.map((r, i) => {
                      return (
                        <tr key={i} className="tr_app_comp">
                          <td className="appcomp_th_names table_td" width="20%">
                            {r.name}
                          </td>
                          <td className="appcomp_th_countrys table_td">
                            {r.country}
                          </td>
                          <td className="appcomp_th_courses table_td">
                            {r.course}
                          </td>
                          <td className="appcomp_th_dojs table_td">{r.doj}</td>
                          <td>
                            <span>
                              <img
                                className="edit_icn_spn"
                                src={edit_icon}
                                alt=""
                              ></img>
                            </span>
                            <span>
                              <img
                                className="edit_icn_spn"
                                src={delete_icon}
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
                            <span>
                              {" "}
                              <img
                                className="edit_icn_spn"
                                src={msg_icon}
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

            <div className="countries_table mgtp_4">
              <div className="coun_tbl_heading">
                <span className="counselling_heading ">Germany</span>
                <span className="button_addstd">
                  <button className="btn_add_std">add Student</button>
                </span>
              </div>
              <div className="table_div">
                <table className="tbl_countries">
                  <thead className="tr_head_coun">
                    <th className="std_name_couns" width="20%">
                      Student Name
                    </th>
                    <th className="counselor_couns" width="20%">
                      Counselor
                    </th>
                    <th className="course_couns" width="20%">
                      Course
                    </th>
                    <th className="doe_couns" width="20%">
                      DOE
                    </th>
                    <th className="action_couns" width="20%">
                      Action
                    </th>
                  </thead>

                  <tbody className="appcomp_tbody">
                    {applicationdata.map((r, i) => {
                      return (
                        <tr key={i} className="tr_app_comp">
                          <td className="appcomp_th_names table_td" width="20%">
                            {r.name}
                          </td>
                          <td className="appcomp_th_countrys table_td">
                            {r.country}
                          </td>
                          <td className="appcomp_th_courses table_td">
                            {r.course}
                          </td>
                          <td className="appcomp_th_dojs table_td">{r.doj}</td>
                          <td>
                            <span>
                              <img
                                className="edit_icn_spn"
                                src={edit_icon}
                                alt=""
                              ></img>
                            </span>
                            <span>
                              <img
                                className="edit_icn_spn"
                                src={delete_icon}
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
                            <span>
                              {" "}
                              <img
                                className="edit_icn_spn"
                                src={msg_icon}
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
      </div>
    </div>
  );
}

export default CounsellingSchedule;
