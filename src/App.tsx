import React from "react";
import logo from "./logo.svg";
import Footer from "./Components/UI/Footer/Footer";

import Tree from "./Containers/Tree/Tree";
import TreeNode from "./Components/TreeNode/TreeNode";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <Tree></Tree>
      </header>
      <Footer>Daniel Esteban Cerón - Juan Esteban ruiz</Footer>
    </div>
  );
}

export default App;
