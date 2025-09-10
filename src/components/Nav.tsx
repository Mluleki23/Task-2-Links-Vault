import React from "react";
export default function Nav() {
  return (
    <div
      className="Nav"
      style={{
        // border: "2px solid purple",
        backgroundColor: "white",
        // height: "1%",
        width: "100%",
        // borderRadius: "12px",
        padding: "2%",
        borderRadius: "12px",
        color: "white",
        display: "flex",
        justifyContent: "space-around",
        cursor: "pointer",
   
      }}
    >
      <a href="#HOME">HOME</a>
      <a href="#ABOUT US">ABOUT US</a>
      <a href="#PORTFOLIO">PORTFOLIO</a>
      <a href="#SERVICES">SERVICES</a>
    </div>
  );
}
