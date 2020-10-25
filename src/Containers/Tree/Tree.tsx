import React, { useState, useEffect } from "react";
import axios from "axios";
import TreeNode from "../../Components/TreeNode/TreeNode";

interface Props {
  values: string[];
}

const Tree: React.FC<Props> = (props) => {
  const [Data, setData] = useState<null | string[]>(null);
  const FetchData = async () => {
    let response = await axios.get(
      "https://e63427d1bf72.ngrok.io/RestEDD/services/tree/insert?route=1,3,5,7,9,8,9,7"
    );
    console.log(response.data.treeArray);
    setData(response.data.treeArray);
  };

  useEffect(() => {
    //FetchData();
  }, []);

  return (
    <React.Fragment>
      <div style={{ display: "inline-flex", margin: "10px" }}>
        {props.values.map((val, index) => (
          <TreeNode conection={"2"} name={"1"} key={index}>
            {val}
          </TreeNode>
        ))}
      </div>
      <div style={{ display: "inline-flex" }}>
        {props.values.map((val, index) => (
          <TreeNode conection={"1"} name={"2"} key={index}>
            {val + 1}
          </TreeNode>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Tree;
