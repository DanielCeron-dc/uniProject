import React, { useState, useEffect, useRef, InputHTMLAttributes } from "react";
import logo from "./logo.svg";
import Footer from "./Components/UI/Footer/Footer";
import axios from "axios";
import Tree from "./Containers/Tree/Tree";
import TreeNode from "./Components/TreeNode/TreeNode";
import "./App.css";
import LineTo, { Line } from "react-lineto";

import node from "./interfaces/Node";
import Button from "./Components/UI/Button";

function App() {
  const [DataTree, setData] = useState<any>(null);
  const [linkApi, setlinkApi] = useState<string>(
    "https://f7756f554b48.ngrok.io/RestEDD/services/tree/start"
  );

  const [responseFunction, setresponseFunction] = useState<string>("");
  const [SelectValue, setSelectValue] = useState("1");

  const [hideButton, sethideButton] = useState<boolean>(false);

  const [ButtonEjectText, setButtonEjectText] = useState<string>("nodo");

  let linkGetBase = "https://f7756f554b48.ngrok.io/RestEDD/services/tree/";
  const [linkGet, setlinkGet] = useState("");

  const [PostJson, setPostJson] = useState({
    type: "1",
    nodes: [
      "18",
      "18-2",
      "18-15",
      "18-25",
      "2-1",
      "2-8",
      "2-16",
      "25-28",
      "8-11",
      "8-23",
      "28-48",
      "28-21",
    ],
  });

  const [inputText, setinputText] = useState<string>(
    "1\n18\n18-2\n18-15\n18-25\n2-1\n2-8\n2-16\n25-28\n8-11\n8-23\n28-21\n28-48"
  );

  const [inputSecond, setInputSecond] = useState("");

  const handleClick = () => {
    let convertedString = { ...PostJson };
    var lines = inputText.split("\n");
    convertedString.type = lines[0];
    convertedString.nodes = [];
    for (let i = 1; i < lines.length; i++) {
      convertedString.nodes.push(lines[i]);
    }

    setPostJson(convertedString);
    FetchData(convertedString);
  };

  const FetchData = async (object: Object) => {
    let response = await axios.post(linkApi, object);

    setData(response.data.root);
  };

  useEffect(() => {
    FetchData(PostJson);
  }, []);

  useEffect(() => {
    selectFunction();
  }, [SelectValue]);

  const selectFunction = () => {
    switch (SelectValue) {
      case "1":
        setlinkGet(linkGetBase + "sons?node=");
        setButtonEjectText("nodo");

        sethideButton(false);
        break;
      case "2":
        setlinkGet(linkGetBase + "leaves");
        setInputSecond("");
        setButtonEjectText("");
        sethideButton(true);

        break;
      case "3":
        setlinkGet(linkGetBase + "sibli?node=");
        setButtonEjectText("nodo");
        sethideButton(false);
        break;
      case "4":
        setlinkGet(linkGetBase + "level?lvl=");
        setButtonEjectText("nivel");
        sethideButton(false);
        break;
      case "5":
        setlinkGet(linkGetBase + "witdh");
        setInputSecond("");
        setButtonEjectText("");
        sethideButton(true);
        break;
      case "6":
        setlinkGet(linkGetBase + "prune?lvl=");
        setButtonEjectText("nivel");
        sethideButton(false);
        break;
      case "7":
        setlinkGet(linkGetBase + "branch");
        setInputSecond("");
        setButtonEjectText("");
        sethideButton(true);
        break;

      default:
        break;
    }
  };

  const handleEjecutarButton = async () => {
    console.log(linkGet + inputSecond);
    if (linkGet == linkGetBase + "prune?lvl=") {
      const response = await axios.get(linkGet + inputSecond);
      setData(response.data.root);
      return;
    }

    const response = await axios.get(linkGet + inputSecond);
    setresponseFunction(response.data.response);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Tree values={["54", "154"]} height={4} node={DataTree}></Tree>

        <div style={{ display: "flex" }}></div>

        {responseFunction ? (
          <h4>respuesta: {responseFunction} </h4>
        ) : (
          <h4>
            toda la informacion, es obtenida desde las funciones de java previamente creadas para el
            parcial
          </h4>
        )}
      </header>
      <Footer>
        <h5 style={{ position: "fixed", left: "2%", bottom: "0", zIndex: 10 }}>
          Daniel Esteban Cerón - Juan Esteban ruiz
        </h5>

        <div style={{ zIndex: 20, display: "inherit" }}>
          <textarea
            value={inputText}
            onChange={(event) => setinputText(event.target.value)}
          ></textarea>
          <button onClick={() => handleClick()}> Generar arbol </button>

          <div style={{ justifyItems: "center" }}>
            <select
              style={{ maxHeight: 20 }}
              onChange={(event) => setSelectValue(event.target.value)}
            >
              <option value={1}>Hijos del arbol y cantidad por nodo</option>
              <option value={2}>Mostrar hojas del arbol</option>
              <option value={3}>Mostrar hermano de un nodo</option>
              <option value={4}>Mostrar nodos de un nivel</option>
              <option value={5}>Mostrar arbol por anchura</option>
              <option value={6}>Podar arbol</option>
              <option value={7}>Mostrar todoas las ramas</option>
            </select>
            <div style={{ display: hideButton ? "none" : "inherit" }}>
              {ButtonEjectText}:{" "}
              <input
                value={inputSecond}
                onChange={(event) => setInputSecond(event.target.value)}
              ></input>
            </div>
            <Button onClick={() => handleEjecutarButton()}>Ejecutar función</Button>
          </div>
        </div>
      </Footer>
    </div>
  );
}

export default App;
