import React from "react";
import "../assets/styles/Alert.css";

export default function Alert({ show, text, type }) {
  const handleClick = () => {
    document.getElementById("alert-box").style.display = "none";
  };

  React.useEffect(() => {
    document.getElementById("alert-box").style.display =  show ? "block" : "none";
  });

  return (
    <div id="alert-box" className={`alert-box ${type}`}>
      <p>
        <strong>{type === "error" ? "Atenção!" : "Sucesso!"}</strong> {text}{" "}
        <span className="alert-close-button" onClick={handleClick}>
          &times;
        </span>
      </p>
    </div>
  );
}
