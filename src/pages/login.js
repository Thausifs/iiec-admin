import React, { useState } from "react";
import "../styles/login.css";
import logo from "../asserts/images/IIEC_logo.png";
import InputField from "../components/inputfields.js";
import { VscLock } from "react-icons/vsc";
import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [Employeeid, setEmployeeid] = useState("");
  const [password, setpassword] = useState("");
    const navigate = useNavigate();
  //   const [login, setlogin] = useState("");
  let auth = localStorage.getItem("Employee_Id");
  
  if (auth) {
    navigate("/dashboard")
  
  }

 
  const handleLogin = async () => {
    if (!Employeeid) {
      alert("Please Enter Employee Id");
    } else if (!password) {
      alert("Please Enter Password");
    } else {
      var obj = {
        Employee_Id: Employeeid,
        Password: password,
      };
      await axios
        .post(`${process.env.REACT_APP_SERVER}/admin/employeelogin`, obj)
        .then(function (response) {
          if (response.data.message === "Employee login sucessful") {
            console.log(response.data);
            localStorage.setItem("Employee_Id", response.data.Data.Employee_Id);
            localStorage.setItem("Employee_Type", response.data.Data.Type);

            alert(response.data.message);
            return  navigate("/dashboard")
          } else if (
            response.data.message ===
            "Authentication failed , Password didn't match"
          ) {
            return alert(response.data.message);
          } else if (response.data.message === "Employee not found") {
            return alert(response.data.message);
          }
        })
        .catch(function (error) {
          
          console.log(error.response.data.message);
          if (error.response.data.message === "Employee not found") {
            alert(error.response.data.message);
          }
        });
    }
  };
  return (
    <div className="login-wrapper">
      <div className="login-container border-blue">
        <div className="loin-logo">
          <img src={logo} alt="logo" />
        </div>
        <p>Welcome to IIEC</p>
        <h6>Sign in to continue</h6>
        {
          //   { login && login}
        }
        <InputField
          icon={<BiUser />}
          placeholder="Employee_Id"
          type="Text"
          callback={(event) => setEmployeeid(event.target.value)}
          value={Employeeid}
        />
        <InputField
          icon={<VscLock />}
          placeholder="Password"
          type="password"
          callback={(event) => setpassword(event.target.value)}
          value={password}
        />
        {/* <input placeholder='userName' type='text'/>
      <input placeholder='password' type='password'/> */}
        <button className="sign-in-btn" onClick={handleLogin}>
          Sign In
        </button>
        <h2>
          <span>OR</span>
        </h2>
        <h6>
          {" "}
          <Link to="/forget-password">Forget Password?</Link>
        </h6>
        {/* <h6>Don't have an account ? <Link to='/register'>Register</Link></h6>   */}
      </div>
    </div>
  );
}

export default Login;
