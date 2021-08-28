import React from "react";

import Header from "./Header";

export default function Layout({ children, title }) {
  return (
    <React.Fragment>
      <main>
        <Header title={title} />
        {children}
      </main>
    </React.Fragment>
  );
}
