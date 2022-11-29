import React, { useEffect, useState } from "react";
import Header from "../components/header";
import "../styles/universities.css";
import Sidebar from "../components/sidebar";
import university_icon from "../asserts/images/university_icon.png";
import { ViewallUniversities } from "../apis/admin";

function Universities() {
  const [alluniversitiesdata, setalluniversitiesdata] = useState([]);
  const [showuniversitiesdata, setshowuniversitiesdata] = useState([]);
  // const [USAuniversitiesdata, setUSAuniversitiesdata] = useState([]);
  // const [UKuniversitiesdata, setUKuniversitiesdata] = useState([]);
  // const [Canadauniversitiesdata, setCanadauniversitiesdata] = useState([]);

  useEffect(() => {
    const ViewAllUniversities = async () => {
      try {
        var data = await ViewallUniversities();

        setalluniversitiesdata(data);
      } catch (error) {
        console.log("error while fetching data");
      }
    };

    ViewAllUniversities();
  }, []);

  const USAunivdata = alluniversitiesdata.filter((el) => el.Country === "USA");
  const UKunivdata = alluniversitiesdata.filter((el) => el.Country === "UK");
  const CANADAunivdata = alluniversitiesdata.filter(
    (el) => el.Country === "CANADA"
  );
  const AUSunivdata = alluniversitiesdata.filter(
    (el) => el.Country === "AUSTRALIA"
  );

  const USAUniversitieslist = () => {
    console.log(USAunivdata);
    setshowuniversitiesdata(USAunivdata);
    console.log(showuniversitiesdata);
  };
  const UKUniversitieslist = () => {
    setshowuniversitiesdata(UKunivdata);
  };
  const CANADAUniversitieslist = () => {
    setshowuniversitiesdata(CANADAunivdata);
  };
  const AUSUniversitieslist = () => {
    setshowuniversitiesdata(AUSunivdata);
  };

  const selectData = (e) => {
    if (e.target.value === "1") {
      USAUniversitieslist();
    } else if (e.target.value === "2") {
      UKUniversitieslist();
    } else if (e.target.value === "3") {
      CANADAUniversitieslist();
    } else if (e.target.value === "4") {
      AUSUniversitieslist();
    }
  };
  // useEffect(() => USAUniversitieslist(), []);
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
              <select className="select_tag" onChange={(e) => selectData(e)}>
                <option value="1">USA</option>
                <option value="2">UK</option>
                <option value="3">CANADA</option>
                <option value="4">Australia</option>
              </select>
            </div>
            <div className="univ_maincon">
              <div className="counselling_head">
                <span className="counselling_heading coun_head tx_dc_none">
                  {
                    // { showuniversitiesdata[0].Country }
                  }
                  USA
                </span>
                <input className="search_pd" placeholder="college"></input>
              </div>
              <div className="univfirstcon">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Universities;
