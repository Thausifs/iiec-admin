import React from "react";
import "../styles/componentcss/inputplaceholder.css";

export default function InputPlaceholder({ id, placehld, placeholder, value }) {

  return (
    <div className="inputplaceholder">
      <p className="placeholdertitle">{placehld}</p>
      <input
        type="placeholder"
        placeholder={placeholder}
        id={id}
        value={value}
        // onChange={(e) => callback(e)}
        className="placeholderinput"
      ></input>
    </div>
  );
}
