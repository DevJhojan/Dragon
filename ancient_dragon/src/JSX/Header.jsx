import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";

function HeaderSiple({ title, link1, name1, link2, name2 }) {

  const [login, setLogin] = useState(false);
  const [singUp, setSingUp] = useState(false);

  const log = () => {
    setLogin(true);
  };

  if (login) {
    return <Redirect to={link1} />;
  }

  const sing = () => {
    setSingUp(true);
  };

  if (singUp) {
    return <Redirect to={link2} />;
  }
  return (
    <header className="container-lg bg-dark rounded-4 p-3">
      <h1 className="text-light d-inline-block">{title}</h1>
      <nav className="d-inline-block float-end">

        <li className="d-inline-block p-3">
          <button onClick={log}>{name1}</button>
        </li>
        <li className="d-inline-block">
        <button onClick={sing}>{name2}</button>
        </li>
      </nav>
    </header>
  );
}

export default HeaderSiple;
