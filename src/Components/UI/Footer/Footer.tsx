import React from "react";

var style: React.CSSProperties = {
  backgroundColor: "#F8F8F8",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  display: "flex",
  left: "0",
  bottom: "0",
  height: "90px",
  width: "100%",

  justifyContent: "center",
};

const Footer: React.FC = (Props) => {
  return <div style={style}>{Props.children}</div>;
};

export default Footer;
