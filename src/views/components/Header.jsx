import React from "react";
import "../assets/styles/Header.css";
import LogoEloGroup from "../assets/images/logo-EloGroup-branco.png";

export default function Header({ title }) {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={LogoEloGroup} alt="Logo EloGroup" />
      </div>
      {title ? (
        <div className="header-title">
          <h1>{title}</h1>
        </div>
      ) : null}
    </header>
  );
}
