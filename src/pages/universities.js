import React, { useEffect, useState } from "react";
import Header from "../components/header";
import "../styles/universities.css";
import Sidebar from "../components/sidebar";
import university_icon from "../asserts/images/university_icon.png";
import { ViewallUniversities } from "../apis/admin";
import { Navigate } from "react-router-dom";
import { ExportToExcel } from "../helpers/ExportToExcel";

function Universities() {
  const [alluniversitiesdata, setalluniversitiesdata] = useState([]);
  const [showuniversitiesdata, setshowuniversitiesdata] = useState([]);
  const [Heading, setHeading] = useState("USA");


  useEffect(() => {
    const ViewAllUniversities = async () => {
      try {
        var data = await ViewallUniversities();
        setalluniversitiesdata(data);
        const USAunivdata = data?.filter(
          (el) => el.Country === "USA"
        );
        setshowuniversitiesdata(USAunivdata);
      } catch (error) {
        console.log("error while fetching data");
      }
    };
    
    ViewAllUniversities();
   
  }, []);
 
 
 const admintype = localStorage.getItem("Employee_Type");
 if (!admintype) {
   return <Navigate to="/" />;
 }
  const USAunivdata = alluniversitiesdata?.filter((el) => el.Country === "USA");
  const UKunivdata = alluniversitiesdata?.filter((el) => el.Country === "UK");
  const CANADAunivdata = alluniversitiesdata?.filter(
    (el) => el.Country === "CANADA"
  );
  const AUSunivdata = alluniversitiesdata?.filter(
    (el) => el.Country === "AUSTRALIA"
  );
  const SNGunivdata = alluniversitiesdata?.filter(
    (el) => el.Country === "SINGAPORE"
  );
  const SZTunivdata = alluniversitiesdata?.filter(
    (el) => el.Country === "SWITZERLAND"
  );
  const MALunivdata = alluniversitiesdata?.filter(
    (el) => el.Country === "MALTA"
  );
  const PORunivdata = alluniversitiesdata?.filter(
    (el) => el.Country === "PORTUGAL"
  );
  const SPNunivdata = alluniversitiesdata?.filter(
    (el) => el.Country === "SPAIN"
  );
  const DXBunivdata = alluniversitiesdata?.filter(
    (el) => el.Country === "DUBAI"
  );
  const NZunivdata = alluniversitiesdata?.filter(
    (el) => el.Country === "NEW ZEALAND"
  );
  const IREunivdata = alluniversitiesdata?.filter(
    (el) => el.Country === "IRELAND"
  );
  const BULunivdata = alluniversitiesdata?.filter(
    (el) => el.Country === "BULGARIA"
  );
  const ICEunivdata = alluniversitiesdata?.filter(
    (el) => el.Country === "ICELAND"
  );
  const NETLDunivdata = alluniversitiesdata?.filter(
    (el) => el.Country === "NETHERLANDS"
  );
  const SWEunivdata = alluniversitiesdata?.filter(
    (el) => el.Country === "SWEDEN"
  );
   const GERunivdata = alluniversitiesdata?.filter(
     (el) => el.Country === "GERMANY"
   );
 
  const USAUniversitieslist = async () => {
    setshowuniversitiesdata([]);
    await setshowuniversitiesdata(USAunivdata);
    setHeading("USA")
  };
  const UKUniversitieslist = () => {
    setshowuniversitiesdata(UKunivdata);
    setHeading("UK");
  };
  const CANADAUniversitieslist = () => {
    setshowuniversitiesdata(CANADAunivdata);
    setHeading("CANADA");
  };
  const AUSUniversitieslist = () => {
    setshowuniversitiesdata(AUSunivdata);
    setHeading("AUSTRALIA");
  };
  const SNGUniversitieslist = () => {
    setshowuniversitiesdata(SNGunivdata);
    setHeading("SINGAPORE");
  };
  const SZTUniversitieslist = () => {
    setshowuniversitiesdata(SZTunivdata);
    setHeading("SWITZERLAND");
  };
  const MALUniversitieslist = () => {
    setshowuniversitiesdata(MALunivdata);
    setHeading("MALTA");
  };
  const PORUniversitieslist = () => {
    setshowuniversitiesdata(PORunivdata);
    setHeading("PORTUGAL");
  };
  const SPNUniversitieslist = () => {
    setshowuniversitiesdata(SPNunivdata);
    setHeading("SPAIN");
  };
  const DXBUniversitieslist = () => {
    setshowuniversitiesdata(DXBunivdata);
    setHeading("DUBAI");
  };
  const NZUniversitieslist = () => {
    setshowuniversitiesdata(NZunivdata);
    setHeading("NEW ZEALAND");
  };
  const IREUniversitieslist = () => {
    setshowuniversitiesdata(IREunivdata);
    setHeading("IRELAND");
  };
  const BULUniversitieslist = () => {
    setshowuniversitiesdata(BULunivdata);
    setHeading("BULGARIA");
  };
  const ICEUniversitieslist = () => {
    setshowuniversitiesdata(ICEunivdata);
    setHeading("ICELAND");
  };
  const NETUniversitieslist = () => {
    setshowuniversitiesdata(NETLDunivdata);
    setHeading("NETHERLANDS");
  };
  const SWEUniversitieslist = () => {
    setshowuniversitiesdata(SWEunivdata);
    setHeading("SWEDEN");
  };
  const GERUniversitieslist = () => {
    setshowuniversitiesdata(GERunivdata);
    setHeading("GERMANY");
  };
  
 
 
  

  const selectData = (e) => {
    if (e.target.value === "usa") {
      USAUniversitieslist();
    } else if (e.target.value === "uk") {
      UKUniversitieslist();
    } else if (e.target.value === "canada") {
      CANADAUniversitieslist();
    } else if (e.target.value === "australia") {
      AUSUniversitieslist();
    } else if (e.target.value === "singapore") {
      SNGUniversitieslist();
    } else if (e.target.value === "switzerland") {
      SZTUniversitieslist();
    } else if (e.target.value === "malta") {
      MALUniversitieslist();
    } else if (e.target.value === "portugal") {
      PORUniversitieslist();
    } else if (e.target.value === "spain") {
      SPNUniversitieslist();
    } else if (e.target.value === "dubai") {
      DXBUniversitieslist();
    } else if (e.target.value === "newzealand") {
      NZUniversitieslist();
    } else if (e.target.value === "ireland") {
      IREUniversitieslist();
    } else if (e.target.value === "bulgaria") {
      BULUniversitieslist();
    } else if (e.target.value === "iceland") {
      ICEUniversitieslist();
    } else if (e.target.value === "netherlands") {
      NETUniversitieslist();
    } else if (e.target.value === "sweden") {
      SWEUniversitieslist();
    } else if (e.target.value === "germany") {
      GERUniversitieslist();
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
            <img src={university_icon} alt=""></img>
            <span>UNIVERSITY</span>
          </div>
          <div className="coun_main_con">
            <div className="counselling_head">
              <span className="counselling_heading coun_head">University</span>
              <ExportToExcel 
                apiData={alluniversitiesdata}
                fileName="StudentsData"
              ></ExportToExcel>
              <select
                className="select_tag"
                id="selecttag_id"
                onChange={(e) => selectData(e)}
                defaultValue="usa"
              >
                <option value="usa">USA</option>
                <option value="uk">UK</option>
                <option value="canada">CANADA</option>
                <option value="australia">AUSTRALIA</option>
                <option value="singapore">SINGAPORE</option>
                <option value="switzerland">SWITZERLAND</option>
                <option value="malta">MALTA</option>
                <option value="portugal">PORTUGAL</option>
                <option value="spain">SPAIN</option>
                <option value="dubai">DUBAI</option>
                <option value="newzealand">NEW ZEALAND</option>
                <option value="ireland">IRELAND</option>
                <option value="bulgaria">BULGARIA</option>
                <option value="iceland">ICELAND </option>
                <option value="netherlands">NETHERLANDS</option>
                <option value="sweden">SWEDEN</option>
                <option value="germany">GERMANY</option>
              </select>
            </div>
            <div className="univ_maincon">
              <div className="counselling_head">
                <span className="counselling_heading coun_head tx_dc_none">
                  {
                    // { showuniversitiesdata[0].Country }
                    // JSON.stringify(showuniversitiesdata[0]?.Country)
                    Heading
                  }
                </span>
                <input className="search_pd" placeholder="college"></input>
              </div>
              <div className="univfirstcon">
                {showuniversitiesdata?.map((r, i) => {
                  return (
                    <>
                      <div className="univcon_first" key={i}>
                        <p className="univcon_first_head">{r.Name}</p>
                        <p className="univcon_first_heading">Course</p>
                        <p className="univcon_first_para">
                          Masters in Mechanical Enginerring
                        </p>
                        <p className="univcon_first_para">
                          Masters in Electrical Enginerring
                        </p>

                        <p className="univcon_first_heading">Territories</p>
                        <p className="univcon_first_para">{r.Territories} </p>
                      </div>
                    </>
                  );
                })}
              </div>
              {/* <div className="univfirstcon">
                  <div className="univcon_first">
                    <p className="univcon_first_head">
                      Rochester Institute of Technology
                    </p>
                    <p className="univcon_first_heading">Course</p>
                    <p className="univcon_first_para">
                      Masters in Mechanical Enginerring
                    </p>
                    <p className="univcon_first_para">
                      Masters in Electrical Enginerring
                    </p>
                    <p className="univcon_first_para">
                      Masters in Civil Enginerring
                    </p>
                    <p className="univcon_first_heading">Eligible</p>
                    <p className="univcon_first_para">Under Graduate </p>
                  </div>
                  <div className="univcon_second">
                    {" "}
                    <p className="univcon_first_head">Augustana University</p>
                    <p className="univcon_first_heading">Course</p>
                    <p className="univcon_first_para">
                      Masters in Mechanical Enginerring
                    </p>
                    <p className="univcon_first_para">
                      Masters in Electrical Enginerring
                    </p>
                    <p className="univcon_first_para">
                      Masters in Civil Enginerring
                    </p>
                    <p className="univcon_first_heading">Eligible</p>
                    <p className="univcon_first_para">Under Graduate </p>
                  </div>
                </div>
                <div className="univsecondcon">
                  <div className="univcon_third">
                    {" "}
                    <p className="univcon_first_head">Manhattan College</p>
                    <p className="univcon_first_heading">Course</p>
                    <p className="univcon_first_para">
                      Masters in Mechanical Enginerring
                    </p>
                    <p className="univcon_first_para">
                      Masters in Electrical Enginerring
                    </p>
                    <p className="univcon_first_para">
                      Masters in Civil Enginerring
                    </p>
                    <p className="univcon_first_heading">Eligible</p>
                    <p className="univcon_first_para">Under Graduate </p>
                  </div>
                  <div className="univcon_fourth">
                    {" "}
                    <p className="univcon_first_head">Hofstra University</p>
                    <p className="univcon_first_heading">Course</p>
                    <p className="univcon_first_para">
                      Masters in Mechanical Enginerring
                    </p>
                    <p className="univcon_first_para">
                      Masters in Electrical Enginerring
                    </p>
                    <p className="univcon_first_para">
                      Masters in Civil Enginerring
                    </p>
                    <p className="univcon_first_heading">Eligible</p>
                    <p className="univcon_first_para">Under Graduate </p>
                  </div>
            </div>*/}
            </div>
            <div className="notepara">
              <span className="notespan">Note : </span> A few institutes from
              the above list do not recruit students from all countries and do
              not offer all the courses published on their websites according to
              the partnership contract. Our admission team will notify you after
              doing the eligibility check of the students if appropriate.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Universities;
