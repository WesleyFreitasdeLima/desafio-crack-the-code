import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, title }) {
  return (
    <React.Fragment>
      <main>
        <Header title={title} />
        {children}
        {title ? <Footer /> : null}
      </main>
    </React.Fragment>
  );
}
