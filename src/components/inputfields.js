import React from "react";
import "../styles/componentcss/inputfields.css";
// import { AiFillAlert} from 'react-icons/ai'

function InputField({ placeholder, type, callback, value, bool, icon }) {
  // console.log(icon);
  return (
    <>
      <div className="input-container">
        <span className="icon">{icon}</span>
        <input
          className="input-field"
          type={type}
          placeholder={placeholder}
          name="usrnm"
          onChange={(e) => callback(e)}
          value={value}
        />
      </div>
    </>
  );
}

export default InputField;
