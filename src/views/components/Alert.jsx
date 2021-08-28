import React from "react";
import "../assets/styles/Alert.css";

export default function Alert({ show, text }) {
  const alertBoxRef = React.useRef(null);

  const handleClick = () => {
    alertBoxRef.current.style.display = "none";
  };

  React.useEffect(() => {
    alertBoxRef.current.style.display = show ? "block": "none";
  });

  return (
    <div id="alert-box" className="alert-box" ref={alertBoxRef}>
      <span className="alert-close-button" onClick={handleClick}>
        &times;
      </span>
      <strong>Atenção!</strong> {text}
    </div>
  );
}
