import React from "react";
import "./Button.css";

function Button({ f2, f1, style, arrowclr, children, ...otherprops }) {
  return (
    <div className="btns-nav">
      <button style={style} className="next-btn" onClick={f1} {...otherprops}>
        <i
          className="fa-solid fa-arrow-left"
          style={{ color: arrowclr, padding: 0 }}
        ></i>
      </button>
      {children}
      <button style={style} className="next-btn" onClick={f2} {...otherprops}>
        <i
          className="fa-solid fa-arrow-right"
          style={{ color: arrowclr, padding: 0 }}
        ></i>
      </button>
    </div>
  );
}

export default Button;
