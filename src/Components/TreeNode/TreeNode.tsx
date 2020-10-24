import React from "react";
import classes from "./TreeNode.module.css";

interface Props {
  value: string | number;
}

const treeNode: React.FC<Props> = (props) => {
  return <div className={classes.TreeNode}> {props.value} </div>;
};

export default treeNode;
