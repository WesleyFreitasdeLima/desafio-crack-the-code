import React from "react";
import Layout from "../components/Layout";
import Alert from "../components/Alert";
import ControllerUser from "../../controllers/user";
import { Link, useHistory } from "react-router-dom";

import { checkSession } from "../../helpers/session";

const defaultState = {
  user: "",
  password: "",
};

const defaultErrorAlert = {
  show: false,
  text: "",
  type: "",
};

export default function Login() {
  const [state, setState] = React.useState(defaultState);
  const [errorAlert, setErrorAlert] = React.useState(defaultErrorAlert);
  const { push } = useHistory();

  const handleChange = (event) => {
    setErrorAlert(defaultErrorAlert);
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    ControllerUser.login(state)
      .then(() => {
        push("/leads");
      })
      .catch((err) =>
        setErrorAlert({
          show: true,
          text: err.message,
          type: "error",
        })
      );
  };

  React.useEffect(() => {
    if (checkSession()) push("/leads");
  });

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
            <button type="submit">Login</button>
            <Link to="/register">Registrar</Link>
          </div>
        </form>
      </Layout>
    </React.Fragment>
  );
}
