import React from "react";
import Layout from "../components/Layout";
import LeadsPanel from "../components/LeadsPanel";

export default function Leads() {
  return (
    <React.Fragment>
      <Layout title="Painel de Leads">
        <LeadsPanel />
      </Layout>
    </React.Fragment>
  );
}
