import React from "react";
import Header from "../components/header";
import "../styles/leads.css";
import Sidebar from "../components/sidebar";
import leads_icon from "../asserts/images/leads_icon.png";
import warning from "../asserts/images/warning.png";
import leads_bar from "../asserts/images/leads_bar.png";

function Leads() {
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
          <div className="personalinf_div">
            <p className="per_inf_head">Personal Information</p>
            <p className="per_inf_head">(As included in your passport)</p>
            <div className="dls_flx">
              <div className="per_inf_first_tbl">
                <p className="per_inf_inptext">First Name *</p>
                <input className="per_inf_input"></input>
                <p className="per_inf_inptext">Date Of Birth *</p>
                <input className="per_inf_input"></input>
                <p className="per_inf_inptext">Passport Number *</p>
                <input className="per_inf_input"></input>
              </div>
              <div className="per_inf_second_tbl">
                <div className="per_inf_first_tbl">
                  <p className="per_inf_inptext">MiddleName</p>
                  <input className="per_inf_input"></input>
                  <p className="per_inf_inptext">ProfLanguage*</p>
                  <input className="per_inf_input"></input>
                  <p className="per_inf_inptext">PassportExpiryDate</p>
                  <input className="per_inf_input"></input>
                </div>
              </div>
              <div className="per_inf_third_tbl">
                <div className="per_inf_first_tbl">
                  <p className="per_inf_inptext">LastName</p>
                  <input className="per_inf_input"></input>
                  <p className="per_inf_inptext">CountryofCitizenship*</p>
                  <input className="per_inf_input"></input>
                  <p className="per_inf_inptext">Maritalstatus*</p>
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
                    <select className="per_inf_input select_tag_inp ">
                      <option>India</option>
                    </select>
                  </div>
                  <div className="ml_10">
                    <p className="per_inf_inptext ">Province/State *</p>
                    <select className="per_inf_input select_tag_inp2 mr_10">
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
