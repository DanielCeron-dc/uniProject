import React from "react";
import classes from "./TreeNode.module.css";
import LineTo, { Line } from "react-lineto";

interface Props {
  conection: string;
  name: string;
}

const style: React.CSSProperties = {
  borderRadius: "100%",
  backgroundColor: "lightskyblue",
  minWidth: "30px",
  height: "35px",
  padding: "10px",
  fontSize: "25px",
  margin: "20px",
  zIndex: 20,
};

const treeNode: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <div className={props.name} style={style}>
        {props.children}
      </div>
      <LineTo
        delay={0}
        from={props.name}
        borderColor="grey"
        borderWidth={5}
        zIndex={10}
        to={props.conection}
      />
    </React.Fragment>
  );
};

export default treeNode;
