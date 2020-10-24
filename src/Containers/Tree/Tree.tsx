import React, { useState, useEffect } from "react";
import axios from "axios";
import TreeNode from "../../Components/TreeNode/TreeNode";

interface Props {}

const Tree: React.FC<Props> = (Props) => {
  const [Data, setData] = useState<null | string[]>(null);
  const FetchData = async () => {
    let response = await axios.get(
      "https://e63427d1bf72.ngrok.io/RestEDD/services/tree/insert?route=1,3,5,7,9,8,9,7"
    );
    console.log(response.data.treeArray);
    setData(response.data.treeArray);
  };

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <div>
      {Data == null
        ? "Cargando la api de java"
        : Data.map((node, index) => <TreeNode value={node} key={index}></TreeNode>)}
    </div>
  );
};

export default Tree;
