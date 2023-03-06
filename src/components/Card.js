import React from "react";

function Card({ title, text }) {
  return (
    <div
      style={{
        boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
        padding:"10px"
      }}
    >
      <div style={{borderBottom:"1px solid grey", fontSize:"1.5rem"}}>{title}</div>
      <p>{text}</p>
    </div>
  );
}

export default Card;