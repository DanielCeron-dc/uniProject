import React, { useState, useEffect, ReactElement } from "react";
import axios from "axios";
import TreeNode from "../../Components/TreeNode/TreeNode";
import node from "../../interfaces/Node";
import LineTo from "react-lineto";

interface Props {
  values: string[];
  node: node | null;
  height: number;
}

const Tree: React.FC<Props> = (props) => {
  console.log("on Tree => " + props.node);
  const [levels, setlevels] = useState<ReactElement[]>([]);
  const { node } = props;

  const ReadNodes = (aux: node | null, levelsCopy: ReactElement[]) => {
    if (aux) {
      levelsCopy.push(
        <TreeNode key={aux.element} codParent={aux.parent + ""} cod={aux.element + ""}>
          {aux.element}
        </TreeNode>
      );
    }
  };

  const readNodesK = (aux: node | null, listDiv: ReactElement[], lvl: number) => {
    if (aux == null) return;

    let list: ReactElement[] = [];
    aux.sons.map((son) => {
      ReadNodes(son, list);
    });

    let miniDiv = (
      <div
        style={{
          borderWidth: "200px",
          display: "flex",
        }}
      >
        {list}
      </div>
    );

    if (lvl < listDiv.length) {
      listDiv[lvl] = (
        <div style={{ display: "flex" }}>
          {listDiv[lvl]} {miniDiv}
        </div>
      );
    } else {
      listDiv.push(miniDiv);
    }

    aux.sons.map((son) => {
      readNodesK(son, listDiv, lvl + 1);
    });

    setlevels(listDiv);
  };

  const ReadNodesF = () => {
    if (!props.node) return;
    let levelsCopy: ReactElement[] = [];
    levelsCopy.push(
      <div
        style={{
          borderWidth: "200px",
          display: "flex",
          margin: 10,
        }}
      >
        <TreeNode color="green" cod={props.node.element + ""} codParent={""}>
          {props.node.element}
        </TreeNode>{" "}
      </div>
    );

    readNodesK(node, levelsCopy, 1);
    setlevels(levelsCopy);
  };

  useEffect(() => {
    if (node) {
      ReadNodesF();
    }
  }, [node]);

  return (
    <React.Fragment>
      {props.node ? <h4>Cargado :D</h4> : <h4>Cargando api de java </h4>}
      {levels}
    </React.Fragment>
  );
};

export default Tree;
