import React from "react";
import "../styles/sidebar.css";
import dashboard_icon from "../asserts/images/dashboard_icon.png";
import employeemg_icon from "../asserts/images/employeemg_icon.png";
import university_icon from "../asserts/images/university_icon.png";
import leads_icon from "../asserts/images/leads_icon.png";
import counselling_icon from "../asserts/images/counselling_icon.png";
import reports_icon from "../asserts/images/reports_icon.png";
import studentmg_icon from "../asserts/images/studentmg_icon.png";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar_maincon">
      <ul className="ul_sidebar">
        <li>
          <NavLink
             to="/"
            className={({ isActive }) =>
              isActive ? "selected nav-link" : "nav-link"
            }
          >
            <img src={dashboard_icon} alt=""></img>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/counselling-schedule"
            className={({ isActive }) =>
              isActive ? "selected nav-link" : "nav-link"
            }
          >
            <img src={counselling_icon} alt=""></img>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/universities"
            end
            className={({ isActive }) =>
              isActive ? "selected nav-link" : "nav-link"
            }
          >
            <img src={university_icon} alt=""></img>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/employeemanagement"
            end
            className={({ isActive }) =>
              isActive ? "selected nav-link" : "nav-link"
            }
          >
            <img src={employeemg_icon} alt=""></img>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/studentmanagement"
            
            className={({ isActive }) =>
              isActive ? "selected nav-link" : "nav-link"
            }
          >
            <img src={studentmg_icon} alt=""></img>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/leads"
            activeclassname = "activelink"
            className={({ isActive }) =>
              isActive ? "selected nav-link" : "nav-link"
            }
          >
            <img src={leads_icon} alt=""></img>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/reports"
            end
            className={({ isActive }) =>
              isActive ? "selected nav-link" : "nav-link"
            }
          >
            <img src={reports_icon} alt=""></img>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
