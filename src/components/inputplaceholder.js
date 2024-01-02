import React from "react";
import "../styles/componentcss/inputplaceholder.css";

export default function InputPlaceholder({ id, placehld, placeholder, value , type , min }) {

  return (
    <div className="inputplaceholder">
      <p className="placeholdertitle">{placehld}</p>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        value={value}
        min={min}
        // onChange={(e) => callback(e)}
        className="placeholderinput"
      ></input>
    </div>
  );
}
