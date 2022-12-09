import React, {useEffect , useState} from "react";
import Header from "../components/header";
import "../styles/dashboard.css";
import Sidebar from "../components/sidebar";
import dashboard_icon from "../asserts/images/dashboard_icon.png";
// import edit_icon from "../asserts/images/edit_icon.png";
import warning from "../asserts/images/warning.png";
import approved from "../asserts/images/approved.png";
import edit from "../asserts/images/edit.png";
import list from "../asserts/images/list.png";
// import bar_1 from "../asserts/images/bar_1.png";
import bar_2 from "../asserts/images/bar_2.png";
import leads_bar from "../asserts/images/leads_bar.png";
import { applicationdata } from "../data";
import { studentinterestdata } from "../data";
// import { enquirylist } from "../data";
// import table_1 from "../asserts/images/table_1.png";
import Charts from "../components/charts/charts";
import Barcharts from "../components/charts/barchart";
import Barcharts2 from "../components/charts/barchart2";
import { AllRegUsers } from "../apis/admin";
import { AiOutlineUserAdd } from "react-icons/ai";
import InputPlaceholder from "../components/inputplaceholder";
import { MdCancel } from "react-icons/md";
import { CreateStudent } from "../apis/admin";

function Dashboard() {
   const admintype = localStorage.getItem("Employee_Type");
  const [AllUsersData, setAllUsersData] = useState([]);
   const [showaddstd2, setshowaddstd2] = useState(false);

  useEffect(() => {
    AllRegUserfn();
    
  }, []);

  // useEffect(() => {
  //   if (admintype === "superadmin") {
  //     console.log("gtbbbbb");
  //     document.getElementById("crtstd_dashboard").style.display = "none";
  //   } else if (admintype === "admin") {
  //     document.getElementById("crtstd_dashboard").style.top = "750px";
  //   }
  // }, [admintype]);

  const AddStudent2 = () => {
    
    document.getElementById("dashboard_Con").style.filter = "blur(3px)";
    setshowaddstd2(true);
    // document.getElementById("crtstd_dashboard").style.top = "30";
  };
  const canceladdstd = () => {
    setshowaddstd2(false);
     document.getElementById("dashboard_Con").style.filter = "none";
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

      let data = {
        Students_Name: Student_Name,
        DOE: DOE,
        Student_Id: Student_Id,
        Counselling_Country: Counselling_Country,
        Counsellor: Counsellor,
        Status: Status,
        Courses: Courses,
      };
      var Createstudent = await CreateStudent(data);
      const dataresponse = Createstudent;

      if (!dataresponse.status) {
        alert(dataresponse.message);
        setshowaddstd2(false);
       
      } else {
        alert(dataresponse.data.message);
      }
    } catch (error) {
      alert("Error while creating Student");
    }
  };

 const AllRegUserfn = async () => {
   try {
     var data = await AllRegUsers();

     setAllUsersData(data);
   } catch (error) {
     console.log("error while fetching data");
   }
 };

  return (
    <div className="dashboardpg">
      <Header />
      <div className="second_con" id="dashboard_Con">
        <div className="sidebar_con">
          <Sidebar />
        </div>
        <div className="main_con">
          <div className="maincon_heading">
            <img src={dashboard_icon} alt=""></img>
            <span>DASHBOARD</span>
          </div>
          {admintype === "superadmin" ? (
            <>
              <div className="main_con_first ">
                {" "}
                <div className="totalincome">
                  <h2>Total Income</h2>
                  <h3>2,500 INR</h3>
                  <div className="income_btm_con">
                    <div className="weekly_income">
                      <span>2500 </span>
                      <span>Weekly</span>
                    </div>
                    <div className="monthly_income">
                      <span> 10000 </span>
                      <span>Monthly</span>
                    </div>
                  </div>
                </div>
                <div className="income_chart">
                  <div className="dls_flexx">
                    <h2 className="barcharthead">Income Chart</h2>
                    <select className="select_tag  ">
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
                  </div>

                  {
                    // <img src={table_1} alt=""></img>
                  }
                  <div className="barchart_div">
                    <Barcharts />
                  </div>
                </div>
              </div>
            </>
          ) : null}

          {admintype === "superadmin" ? (
            <>
              {" "}
              <div className="dashboard_conversion">
                <div className="conversion_chart1">
                  <div className="conversion_chart1_first">
                    <div className="total_inquiries">
                      <h2 className="barcharthead">Total Inquiries</h2>
                      {
                        // <img src={bar_1} alt=""></img>
                      }
                      <Charts />

                      <div className="dls_flx mb_2">
                        {" "}
                        <div className="onl_inquiry"></div>
                        <span className="onl_inq">Online Inquiries</span>
                      </div>
                      <div className="dls_flx">
                        {" "}
                        <div className="onl_inquiry clr_blue"></div>
                        <span className="onl_inq">Walk-In</span>
                      </div>
                    </div>
                    <div className="total_conversion">
                      <div className="dls_flexx">
                        <h2 className="barcharthead">Total Conversion</h2>
                        <select className="select_tag  ">
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
                      </div>
                      {<img src={bar_2} alt=""></img>}

                      <div></div>
                      <div className="dls_flx mb_2">
                        {" "}
                        <div className="onl_inquiry clr_red"></div>
                        <span className="onl_inq">Total Inquiries</span>
                      </div>
                      <div className="dls_flx">
                        {" "}
                        <div className="onl_inquiry clr_blue"></div>
                        <span className="onl_inq">Total Leads</span>
                      </div>
                    </div>
                  </div>
                  <div className="conversion_chart1_second">
                    <h2 className="barcharthead">
                      United States Of America ( Student Entry)
                    </h2>
                    <Barcharts2 />
                  </div>
                </div>

                <div className="conversion_chart2"></div>
              </div>
            </>
          ) : null}
          <div className="leads_con">
            <ul className="ul_leads">
              <li className="leads_head">Student Leads</li>
              <li>
                <input className="leads_input_pd" placeholder="Name"></input>
              </li>
            </ul>
            <ul className="lead_titles">
              <li>
                Students : <span>Rajesh D</span>
              </li>
              <li>
                Consultant : <span>Kumar</span>
              </li>
              <li>
                Country : <span>USA</span>
              </li>
            </ul>
            {
              // <div className="status_bar">
              //   <span className="Circle_leads crl_1"></span>
              //   <span className="Circle_leads crl_2"></span>
              //   <span className="Circle_leads crl_3"></span>
              //   <span className="Circle_leads crl_4"></span>
              // </div>
            }
            <div className="leads_bar_div">
              {" "}
              <img src={leads_bar} alt=""></img>
              <div className="leadsbar_desc">
                <span>Education Details</span>
                <span>University Finalized</span>
                <span>Certificate uploaded</span>
                <span>Visa Process</span>
                <span>Joining Date</span>
              </div>
            </div>
            <div>
              <span>
                <img className="warning_img" src={warning} alt=""></img>
              </span>
              <span className="leads_notes">
                Note : Waiting for Visa Approval{" "}
              </span>
            </div>
          </div>
          <div className="pg_fourthcon">
            <div className="App_comp">
              <p className="appcomp_para">Application Completed</p>
              {
                //   <div className="list_con_head table_headfz">
                //     <div className="name_hd">Name</div>
                //     <div className="country_hd">Country</div>
                //     <div className="course_hd">Course</div>
                //     <div className="doj_hd">DOJ</div>
                //   </div>
              }
              <div className="tbl_app_complete">
                <table className="appcomp_table">
                  <thead className="thead_appcomp_table">
                    <tr className="table_headfz ">
                      <th className="name_hdw" width="15%">
                        Name
                      </th>
                      <th className="country_hdw" width="15%">
                        Country
                      </th>
                      <th className="course_hdw" width="40%">
                        Course
                      </th>
                      <th className="doj_hdw" width="30%">
                        DOJ
                      </th>
                    </tr>
                  </thead>

                  <tbody className="appcomp_tbody">
                    {applicationdata.map((r, i) => {
                      return (
                        <tr key={i} className="tr_app_comp">
                          <td className="appcomp_th_name table_td">{r.name}</td>
                          <td className="appcomp_th_country table_td">
                            {r.country}
                          </td>
                          <td className="appcomp_th_course table_td">
                            {r.course}
                          </td>
                          <td className="appcomp_th_doj table_td">{r.doj}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="stu_irst">
              <p className="appcomp_para">Student Interest </p>
              <div className="tbl_std_int_tbody">
                <table className="appcomp_table">
                  <tr className="appcomp_tr_th">
                    <th className="table_SI_headfz">Course</th>
                    <th className="table_SI_headfz">No of student</th>
                    <th className="table_SI_headfz">List</th>
                  </tr>

                  <tbody>
                    {studentinterestdata.map((r, i) => {
                      return (
                        <tr key={i}>
                          <td className="stu_int_td">{r.course}</td>
                          <td className="stu_int_td">{r.Noofstudents}</td>
                          <td className="stu_int_td">
                            <img className="list_img" src={list} alt=""></img>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="list_con">
            <div className="employee_list ">
              <p className="appcomp_para"> Employee List</p>

              <div className="tbl_std_int_tbody">
                <table className="appcomp_table">
                  <thead className="thead_appcomp_table">
                    <tr className="table_headfz ">
                      <th className="name_hdw" width="30%">
                        Name
                      </th>
                      <th className="country_hdw" width="30%">
                        Country
                      </th>
                      <th className="course_hdw" width="20%">
                        DOJ
                      </th>
                      <th className="doj_hdw" width="20%">
                        Edit
                      </th>
                    </tr>
                  </thead>

                  <tbody className="appcomp_tbody">
                    {applicationdata.map((r, i) => {
                      return (
                        <tr key={i} className="tr_app_comp">
                          <td className="appcomp_th_name table_td" width="30%">
                            {r.name}
                          </td>
                          <td
                            className="appcomp_th_country table_td"
                            width="30%"
                          >
                            {r.country}
                          </td>

                          <td className="appcomp_th_doj table_td" width="20%">
                            {r.doj}
                          </td>
                          <td width="20%">
                            <img className="edit_img" src={edit} alt=""></img>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="students_list">
              <p className="appcomp_para"> Student List</p>
              <div className="tbl_std_int_tbody">
                <table className="appcomp_table">
                  <thead className="thead_appcomp_table">
                    <tr className="table_headfz ">
                      <th className="name_hdw" width="30%">
                        Name
                      </th>
                      <th className="country_hdw" width="30%">
                        Country
                      </th>
                      <th className="course_hdw" width="20%">
                        DOJ
                      </th>
                      <th className="doj_hdw" width="20%">
                        Edit
                      </th>
                    </tr>
                  </thead>
                  <tbody className="appcomp_tbody">
                    {applicationdata.map((r, i) => {
                      return (
                        <tr key={i} className="tr_app_comp">
                          <td className="appcomp_th_name table_td">{r.name}</td>
                          <td className="appcomp_th_country table_td">
                            {r.country}
                          </td>

                          <td className="appcomp_th_doj table_td">{r.doj}</td>
                          <td>
                            <img
                              className="edit_img"
                              src={approved}
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
          </div>
          <div className="enquiry_list">
            <p className="appcomp_para fz_18"> Enquiry List</p>

            <thead className="thead_appcomp_table">
              <tr className="table_headfz ">
                <th className="name_hdw" width="15%">
                  Name
                </th>
                <th className="country_hdw" width="15%">
                  Email Id
                </th>
                <th className="course_hdw" width="20%">
                  Mobile Number
                </th>
                <th className="doj_hdw" width="20%">
                  Nearest IIEC office
                </th>
                <th className="doj_hdw" width="20%">
                  Preferred mode of counselling
                </th>{" "}
                <th className="doj_hdw" width="20%">
                  View/Add
                </th>
                
              </tr>
            </thead>
            <div className="tbl_std_int_tbody ht_chg">
              <table className="appcomp_table tb_enq_list">
                <tbody>
                  {AllUsersData.map((r, i) => {
                    return (
                      <tr key={i} className="tr_enq_list">
                        <td className="" width="15%">
                          {r.First_Name}
                        </td>
                        <td className="" width="15%">
                          {r.Email_id}
                        </td>

                        <td className="" width="20%">
                          {r.Mobile_Number}
                        </td>
                        <td className="" width="20%">
                          {r.Nearest_iiecofc}
                        </td>
                        <td className="" width="20%">
                          {r.Counselling_mode}
                        </td>
                        <td width="10%">
                          <img className="edit_img" src={edit} alt=""></img>
                          <AiOutlineUserAdd
                            className="useraddicon"
                            onClick={() => AddStudent2()}
                          />
                        </td>
                      </tr>
                    );
                  })}
                  ;
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {showaddstd2 && (
        <div className="createstd_maincondashboard " id="crtstd_dashboard">
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

          <div style={{ display: "flex" }}>
            <div style={{ width: "30%", margin: "4% 2% 2% 7%" }}>
              <p className="emp_photo">Student Photo</p>
              <button className="btn_choose" onClick={createstd}>
                Choose File
              </button>
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
    </div>
  );
}

export default Dashboard;
