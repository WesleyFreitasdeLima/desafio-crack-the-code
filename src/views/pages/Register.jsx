import React from "react";
import Layout from "../components/Layout";
import Alert from "../components/Alert";
import ControllerUser from "../../controllers/user";
import { Link } from "react-router-dom";

const defaultState = {
  user: "",
  password: "",
  passwordConfirm: "",
};

const defaultErrorAlert = {
  show: false,
  text: "",
  type: "",
};

export default function Register() {
  const [state, setState] = React.useState(defaultState);
  const [errorAlert, setErrorAlert] = React.useState(defaultErrorAlert);

  const handleChange = (event) => {
    setErrorAlert(defaultErrorAlert);
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    ControllerUser.register(state)
      .then(() => {
        setErrorAlert({
          show: true,
          text: "Usuário registrado com sucesso!",
          type: "success",
        });
      })
      .catch((err) =>
        setErrorAlert({
          show: true,
          text: err.message,
          type: "error",
        })
      );
  };

  return (
    <React.Fragment>
      <Layout>
        <form onSubmit={(e) => handleSubmit(e)}>
          <Alert {...errorAlert} />
          <div className="input-group">
            <label htmlFor="user">Usuário *</label>
            <input
              id="user"
              name="user"
              type="text"
              value={state.user}
              onChange={(e) => handleChange(e)}
            ></input>
          </div>
          <div className="input-group">
            <label htmlFor="password">Senha *</label>
            <input
              id="password"
              name="password"
              type="password"
              value={state.password}
              onChange={(e) => handleChange(e)}
            ></input>
          </div>
          <div className="input-group">
            <label htmlFor="passwordConfirm">Confirmar Senha *</label>
            <input
              id="passwordConfirm"
              name="passwordConfirm"
              type="password"
              value={state.passwordConfirm}
              onChange={(e) => handleChange(e)}
            ></input>
          </div>
          <div className="input-group">
            <button type="submit">Registrar</button>
            <Link to="/">Login</Link>
          </div>
        </form>
      </Layout>
    </React.Fragment>
  );
}
