import React from "react";
import "../assets/styles/LeadsPanel.css";

export default function LeadsPanel({ leadsList = [] }) {
    
  const Rows = () => {
    const rows = leadsList.map((lead, index) => {
      return (
        <tr key={index}>
          <TdCompany lead={lead.status === 1 ? lead : null} />
          <TdCompany lead={lead.status === 2 ? lead : null} />
          <TdCompany lead={lead.status === 3 ? lead : null} />
        </tr>
      );
    });

    return rows;
  };

  const TdCompany = ({ lead }) => {
    if (!lead) return <td></td>;
    
    return (
      <td>
        <div className="company-options">
          {`${lead.company} `}{" "}
          {lead.status < 3 ? <button>&#10004;</button> : null}
        </div>
      </td>
    );
  };

  return (
    <React.Fragment>
      <div className="leads-panel">
        <button className="button-blue">Novo Lead (+)</button>
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
