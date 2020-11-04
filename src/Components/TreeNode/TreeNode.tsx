import React, { useState, useEffect } from "react";
import classes from "./TreeNode.module.css";
import LineTo, { Line } from "react-lineto";

interface Props {
  color?: string;
  codParent: string;
  cod: string;
}

const TreeNode: React.FC<Props> = (props) => {
  const [style, setstyle] = useState({
    borderRadius: "100%",
    backgroundColor: props.color ? props.color : "lightskyblue",
    minWidth: "30px",
    height: "35px",
    padding: "10px",
    fontSize: "25px",
    margin: "20px",
    zIndex: 20,
  });

  return (
    <React.Fragment>
      <div className={props.cod} style={style}>
        {props.children}
      </div>
      <LineTo
        delay={0}
        from={props.cod}
        borderColor="grey"
        borderWidth={5}
        zIndex={10}
        to={props.codParent}
      />
    </React.Fragment>
  );
};

export default TreeNode;
