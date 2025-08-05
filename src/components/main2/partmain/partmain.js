import React from "react";
import "./partmain.css";

export default function partmain({ svg, title }) {
  return (
    <div>
      <div className="partmain-container">
        <div>
          <span>{svg}</span>
        </div>
        <div>
          <h3 className="h3-title">چرا؟</h3>
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
}
