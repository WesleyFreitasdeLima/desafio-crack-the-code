import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import controllerUser from "../../controllers/user";

export default function Footer() {
  const { push } = useHistory();
  
  const logout = () => {
    controllerUser.logout();
    push("/");
  };

  return (
    <footer>
      <button onClick={logout}>Sair</button>
    </footer>
  );
}
