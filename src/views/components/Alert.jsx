import React from "react";
import "../assets/styles/Alert.css";

export default function Alert({ show, text, type }) {
  const alertBoxRef = React.useRef(null);

  const handleClick = () => {
    alertBoxRef.current.style.display = "none";
  };

  React.useEffect(() => {
    alertBoxRef.current.style.display = show ? "block" : "none";
  });

  return (
    <div id="alert-box" className={`alert-box ${type}`} ref={alertBoxRef}>
      <p>
        <strong>{type === "error" ? "Atenção!" : "Sucesso!"}</strong> {text}{" "}
        <span className="alert-close-button" onClick={handleClick}>
          &times;
        </span>
      </p>
    </div>
  );
}
