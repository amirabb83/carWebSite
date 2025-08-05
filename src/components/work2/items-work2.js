import React from "react";

const itemsWork2 = ({title , para , svg}) => {
  return (
    <div className="item-work2">
      <div className="svg-work2" style={{color: "orange"}}>{svg}</div>
      <h3>{title}</h3>
      <p>{para}</p>
    </div>
  );
};

export default itemsWork2;
