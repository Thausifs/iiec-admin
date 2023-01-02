import React, { useState, useEffect } from "react";
import Header from "../components/header";
import "../styles/leads.css";
import Sidebar from "../components/sidebar";
import leads_icon from "../asserts/images/leads_icon.png";
import warning from "../asserts/images/warning.png";
import tick from "../asserts/images/approved.png";
import Pending from "../asserts/images/pending.png";
import { Navigate } from "react-router-dom";
import { Studentdata } from "../apis/admin";

function Leads() {
  const admintype = localStorage.getItem("Employee_Type");
  const [studentsmgData, setstudentsmgData] = useState([]);
  const [filtereddata, setfiltereddata] = useState([]);
  const [selectedstd, setselectedstd] = useState([]);

  const initialimg = {
    imgone: false,
    imgtwo: false,
    imgthree: false,
    imgfour: false,
    imgfive: false,
  };
  const [imgarr, setimgarr] = useState({ initialimg });

  
    
 
  
  useEffect(() => {
    StudentData();
  }, []);

  if (!admintype) {
    return <Navigate to="/" />;
  }

 

  const StudentData = async () => {
    try {
      var data = await Studentdata();

      setstudentsmgData(data);
    } catch (error) {
      console.log("error while fetching data");
    }
  };

  
  const handleSearchchange = (e) => {
    const filteredArray = studentsmgData?.filter((r) =>
      r.Students_Name.includes(e.target.value)
    );
    
    setfiltereddata(filteredArray);
    const value = e.target.value;
    if (value) {
      
      const selectedstddata = studentsmgData?.filter((r) =>
        r.Students_Name === value
      );
      // console.log(selectedstddata);
      if (selectedstddata.length > 0) {
        setselectedstd(selectedstddata);
        if (selectedstddata[0].Status === "Education Details") {
          const imgdata = {
            imgone: true,
            imgtwo: false,
            imgthree: false,
            imgfour: false,
            imgfive: false,
          };
          setimgarr(imgdata);
        } else if (selectedstddata[0].Status === "University Finalised") {
          const imgdata = {
            imgone: true,
            imgtwo: true,
            imgthree: false,
            imgfour: false,
            imgfive: false,
          };
          setimgarr(imgdata);
        } else if (selectedstddata[0].Status === "Certificates Uploaded") {
          const imgdata = {
            imgone: true,
            imgtwo: true,
            imgthree: true,
            imgfour: false,
            imgfive: false,
          };
          setimgarr(imgdata);
        } else if (selectedstddata[0].Status === "Visa Process") {
          const imgdata = {
            imgone: true,
            imgtwo: true,
            imgthree: true,
            imgfour: true,
            imgfive: false,
          };
          setimgarr(imgdata);
        } else if (selectedstddata[0].Status === "Joining Date Finalised") {
          const imgdata = {
            imgone: true,
            imgtwo: true,
            imgthree: true,
            imgfour: true,
            imgfive: true,
          };
          setimgarr(imgdata);
        }
      }
    }
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
            <img src={leads_icon} alt=""></img>
            <span>LEADS</span>
          </div>
          <div className="leads_con">
            <ul className="ul_leads">
              <li className="leads_head">Student Leads</li>
              <li>
                <input
                  className="leads_input_pd"
                  placeholder="Name"
                  onChange={handleSearchchange}
                  list="data"
                  autoComplete="off"
                ></input>
                <datalist
                  id="data"
                  autoComplete="off"
                  style={{ backgroundColor: "red" }}
                >
                  {filtereddata?.map((r, i) => {
                    return (
                      <>
                        <option
                          onSelect={(r) => selectedstd(r)}
                          className="optstddata"
                          key={i}
                        >
                          {r.Students_Name}
                        </option>
                      </>
                    );
                  })}
                </datalist>
              </li>
            </ul>
            <ul className="lead_titles">
              <li>
                Students : <span>{selectedstd[0]?.Students_Name}</span>
              </li>
              <li>
                Consultant : <span>{selectedstd[0]?.Counsellor}</span>
              </li>
              <li>
                Country : <span>{selectedstd[0]?.Counselling_Country}</span>
              </li>
            </ul>

            <div className="leads_bar_div">
              {" "}
              {
                // <img src={leads_bar} alt=""></img>
              }
              <div className="leadsbarmaindiv">
                <div>
                  {imgarr.imgone === true ? (
                    <img src={tick} alt=""></img>
                  ) : (
                    <img src={Pending} alt=""></img>
                  )}
                </div>
                <div>
                  {imgarr.imgtwo === true ? (
                    <img src={tick} alt=""></img>
                  ) : (
                    <img src={Pending} alt=""></img>
                  )}
                </div>
                <div>
                  {imgarr.imgthree === true ? (
                    <img src={tick} alt=""></img>
                  ) : (
                    <img src={Pending} alt=""></img>
                  )}
                </div>
                <div>
                  {imgarr.imgfour === true ? (
                    <img src={tick} alt=""></img>
                  ) : (
                    <img src={Pending} alt=""></img>
                  )}
                </div>
                <div>
                  {imgarr.imgfive === true ? (
                    <img src={tick} alt=""></img>
                  ) : (
                    <img src={Pending} alt=""></img>
                  )}
                </div>
              </div>
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
          <div className="personalinf_div">
            <p className="per_inf_head">Personal Information</p>
            <p className="per_inf_head">(As included in your passport)</p>
            <div className="dls_flx">
              <div className="per_inf_first_tbl">
                <p className="per_inf_inptext">First Name *</p>
                <input
                  className="per_inf_input"
                  placeholder={selectedstd[0]?.Students_Name}
                ></input>
                <p className="per_inf_inptext">Date Of Birth *</p>
                <input className="per_inf_input"></input>
                <p className="per_inf_inptext">Passport Number *</p>
                <input className="per_inf_input"></input>
              </div>
              <div className="per_inf_second_tbl">
                <div className="per_inf_first_tbl">
                  <p className="per_inf_inptext">MiddleName</p>
                  <input className="per_inf_input"></input>
                  <p className="per_inf_inptext">Prof Language*</p>
                  <input className="per_inf_input"></input>
                  <p className="per_inf_inptext">Passport Expiry Date</p>
                  <input className="per_inf_input"></input>
                </div>
              </div>
              <div className="per_inf_third_tbl">
                <div className="per_inf_first_tbl">
                  <p className="per_inf_inptext">LastName</p>
                  <input className="per_inf_input"></input>
                  <p className="per_inf_inptext">Country of Citizenship*</p>
                  <input className="per_inf_input"></input>
                  <p className="per_inf_inptext">Marital status*</p>
                  <div className="dls_flex">
                    <span className="mr_4">
                      <input type="checkbox"></input>
                    </span>
                    <span className="per_inf_inptext">Single</span>
                    <span className="ml_5 mr_4">
                      <input type="checkbox"></input>
                    </span>
                    <span className="per_inf_inptext ">Married</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="per_inf_inptext ">Gender</p>
              <div className="dls_flex">
                <span className="mr_4">
                  <input type="checkbox"></input>
                </span>
                <span className="per_inf_inptext">Male</span>
                <span className="ml_5 mr_4">
                  <input type="checkbox"></input>
                </span>
                <span className="per_inf_inptext ">Female</span>
              </div>
            </div>
            <p className="per_inf_inptext fz_20 ">Address Details</p>

            <div className="dls_flex">
              <div className="adrdetails_first">
                <div>
                  <p className="per_inf_inptext ">Address *</p>
                  <input className="per_inf_input width_lg"></input>
                </div>
                <div className="dls_flex jc_spbtn">
                  <div>
                    {" "}
                    <p className="per_inf_inptext ">Country *</p>
                    <select className="per_inf_input  ">
                      <option>India</option>
                    </select>
                  </div>
                  <div className="ml_10">
                    <p className="per_inf_inptext ">Province/State *</p>
                    <select className="per_inf_input  mr_10">
                      <option>India</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="adrdetails_second">
                <p className="per_inf_inptext">City Name *</p>
                <input className="per_inf_input"></input>
                <p className="per_inf_inptext">Postal/Zipcode *</p>
                <input className="per_inf_input"></input>
              </div>
            </div>
            <div className="dls_flex">
              <div className="per_last-div">
                <p className="per_inf_inptext inp_wd-lg">Email *</p>
                <input className="per_inf_input"></input>
              </div>
              <div className="per_last-div2">
                <p className="per_inf_inptext">Phone No *</p>
                <input className="per_inf_input"></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leads;
