import React from "react";

export default function Layout({ chidren, title }) {
  return (
    <React.Fragment>
      <header>
        <h1>{title}</h1>
      </header>
      <main>
        <h1>Meu conteudo</h1>
      </main>
    </React.Fragment>
  );
}
