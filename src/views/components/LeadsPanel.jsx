import React from "react";
import { useHistory } from "react-router-dom";
import "../assets/styles/LeadsPanel.css";
import ControllerLead from "../../controllers/lead";

export default function LeadsPanel() {
  const { push } = useHistory();
  const [leads, setLeads] = React.useState([]);

  const Rows = () => {
    if (!leads)
      return (
        <tr key={1}>
          <td colSpan="3">Nenhum lead cadastrado.</td>
        </tr>
      );

    return leads.map((lead, index) => {
      return (
        <tr key={index}>
          <TdCompany lead={lead.status === 1 ? lead : null} />
          <TdCompany lead={lead.status === 2 ? lead : null} />
          <TdCompany lead={lead.status === 3 ? lead : null} />
        </tr>
      );
    });
  };

  const TdCompany = ({ lead }) => {
    if (!lead) return <td></td>;

    return (
      <td>
        <div className="company-options">
          {`${lead.company} `}{" "}
          {lead.status < 3 ? (
            <button onClick={() => updateLeadStatus(lead)}>&#10004;</button>
          ) : null}
        </div>
      </td>
    );
  };

  const goToNewLeads = () => {
    push("/leads/new");
  };

  const loadLeads = () => {
    ControllerLead.findAllLeads()
      .then((allLeads) => setLeads(allLeads))
      .catch(() => setLeads([]));
  };

  const updateLeadStatus = (currlead) => {
    const leadsUpdated = leads.map((lead) => {
      if (lead.company === currlead.company) {
        lead.status += 1;
      }
      return lead;
    });

    ControllerLead.updateLeads(leadsUpdated).then(() => setLeads(leadsUpdated));
  };

  React.useEffect(() => {
    loadLeads();
  }, []);

  return (
    <React.Fragment>
      <div className="leads-panel">
        <button className="input-button blue" onClick={goToNewLeads}>
          Novo Lead (+)
        </button>
        <table>
          <thead>
            <tr>
              <th>Clientes em Potêncial</th>
              <th>Dados Confirmados</th>
              <th>Reunião Agendada</th>
            </tr>
          </thead>

          <tbody>
            <Rows />
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}
