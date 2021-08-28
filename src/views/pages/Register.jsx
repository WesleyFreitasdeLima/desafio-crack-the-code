import React from "react";
import Layout from "../components/Layout";

export default function Register() {
  return (
    <React.Fragment>
      <Layout>
        <form>
          <div className="input-group">
            <label htmlFor="user">Usuário *</label>
            <input id="user" name="user" type="text"></input>
          </div>
          <div className="input-group">
            <label htmlFor="password">Senha *</label>
            <input id="password" name="password" type="password"></input>
          </div>
          <div className="input-group">
            <label htmlFor="passwordConfirm">Confirmar Senha *</label>
            <input id="passwordConfirm" name="passwordConfirm" type="password"></input>
          </div>
          <div className="input-group">
            <button type="submit">Registrar</button>
          </div>
        </form>
      </Layout>
    </React.Fragment>
  );
}
