import React, { CSSProperties, useState } from "react";

interface Props {
  onClick: () => void;
}

const Button: React.FC<Props> = (props) => {
  const [hover, setHover] = useState<boolean>(false);

  const style: CSSProperties = {
    color: "white",
    backgroundColor: hover ? "rgb(59, 118, 212)" : "rgb(64, 134, 245)",
    border: "20px",
    padding: "3px",
    fontSize: 25,
    borderColor: "black",
    borderWidth: "20px",
    maxHeight: "40px",
    display: "flex",
    borderRadius: "25%",
    cursor: hover ? "pointer" : "none",
  };

  return (
    <button
      style={style}
      onClick={props.onClick}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {props.children}
    </button>
  );
};

export default Button;
