import React from "react";
import { useHistory } from "react-router";
import "../assets/styles/NewLead.css";
import Layout from "../components/Layout";
import Alert from "../components/Alert";
import ControllerLead from "../../controllers/lead";

const defaultState = {
  status: 1,
  company: "",
  phone: "",
  email: "",
  opportunities: [],
};

const defaultErrorAlert = {
  show: false,
  text: "",
  type: "",
};

export default function NewLead() {
  const { push } = useHistory();
  const [state, setState] = React.useState(defaultState);
  const [errorAlert, setErrorAlert] = React.useState(defaultErrorAlert);

  const handleChange = (event) => {
    setErrorAlert(defaultErrorAlert);
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleChangeOpportunities = (event) => {
    const value = event.target.value;

    let opportunities = [];
    if (state.opportunities.indexOf(value) === -1) {
      opportunities = [...state.opportunities, value];
    } else {
      opportunities = state.opportunities.filter((val) => val !== value);
    }

    setErrorAlert(defaultErrorAlert);
    setState({
      ...state,
      opportunities: [...opportunities],
    });
  };

  const handleCheckAllOpportunities = () => {
    const tableOpportunities = document.getElementById("opportunities");
    const checks = tableOpportunities.querySelectorAll("input[type=checkbox]");

    let checked = true;
    let opportunities = [];
    checks.forEach((checkbox, index) => {
      if (index === 0) {
        checked = checkbox.checked;
        return;
      }

      checkbox.checked = checked;
      if (checkbox.checked) {
        opportunities.push(checkbox.value);
      }
    });

    setErrorAlert(defaultErrorAlert);
    setState({
      ...state,
      opportunities: [...opportunities],
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    ControllerLead.insert(state)
      .then(() => {
        setErrorAlert({
          show: true,
          text: "Lead salvo com sucesso!",
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

  const backToLeadsPanel = () =>{
    push("/leads");
  }

  return (
    <React.Fragment>
      <Layout title="Novo Lead">
        <Alert {...errorAlert} />
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="column">
              <div className="input-group">
                <label htmlFor="user">Nome *</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={state.company}
                  onChange={(e) => handleChange(e)}
                ></input>
              </div>

              <div className="input-group">
                <label htmlFor="phone">Telefone *</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={state.phone}
                  onChange={(e) => handleChange(e)}
                ></input>
              </div>

              <div className="input-group">
                <label htmlFor="email">Email *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={state.email}
                  onChange={(e) => handleChange(e)}
                ></input>
              </div>
            </div>

            <div className="column">
              <div className="input-group">
                <label htmlFor="opportunities">Oportunidades *</label>
                <table id="opportunities" className="table-opportunities">
                  <thead>
                    <tr>
                      <th>
                        <input
                          type="checkbox"
                          value=""
                          onClick={handleCheckAllOpportunities}
                        ></input>
                      </th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <input
                          type="checkbox"
                          name="opportunities"
                          value="RPA"
                          onChange={(e) => handleChangeOpportunities(e)}
                        ></input>
                      </td>
                      <td>RPA</td>
                    </tr>

                    <tr>
                      <td>
                        <input
                          type="checkbox"
                          name="opportunities"
                          value="Produto Digital"
                          onChange={(e) => handleChangeOpportunities(e)}
                        ></input>
                      </td>
                      <td>Produto Digital</td>
                    </tr>

                    <tr>
                      <td>
                        <input
                          type="checkbox"
                          name="opportunities"
                          value="Analytics"
                          onChange={(e) => handleChangeOpportunities(e)}
                        ></input>
                      </td>
                      <td>Analytics</td>
                    </tr>

                    <tr>
                      <td>
                        <input
                          type="checkbox"
                          name="opportunities"
                          value="BPM"
                          onChange={(e) => handleChangeOpportunities(e)}
                        />
                      </td>
                      <td>BPM</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="input-group">
                <button type="submit" className="input-button blue">Salvar</button>
                <button className="input-button gray" onClick={backToLeadsPanel}>Voltar ao painel</button>
              </div>
            </div>
          </div>
        </form>
      </Layout>
    </React.Fragment>
  );
}
