import React from "react";
import Layout from "../components/Layout";
import LeadsPanel from "../components/LeadsPanel";

const leadsList = [
  {
    status: 1,
    company: "Empresa 1",
    phone: "11987654321",
    email: "empresa1@email.com",
    seller: "Wesley Lima",
    opportunities: {},
  },
  {
    status: 2,
    company: "Empresa 2",
    phone: "11987654322",
    email: "empresa2@email.com",
    seller: "Alessandra",
    opportunities: {},
  },
  {
    status: 3,
    company: "Empresa 3",
    phone: "11987654323",
    email: "empresa3@email.com",
    seller: "Wesley Lima",
    opportunities: {},
  },
];

export default function Leads() {
  const [leads, setLeads] = React.useState(leadsList);

  return (
    <React.Fragment>
      <Layout title="Painel de Leads">
        <LeadsPanel leadsList={leads} />
      </Layout>
    </React.Fragment>
  );
}
