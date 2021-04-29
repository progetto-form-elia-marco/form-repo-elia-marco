import React, { Component } from "react";
import "./css/welcome.css";
import { Link } from "react-router-dom";

class Welcome extends Component {
  // // 1. Inizializza variabili
  // constructor(props) {
  //   super(props);

  // }

  render() {
    return (
      <div className="welcomeContainer">
        <div className="welcomeCard">
          <h1 className="welcomeTitle">
            Welcome {JSON.parse(localStorage.getItem("attivo")).email}!
          </h1>
          <div className="welcomeLinks">
            <Link
              to="/"
              className="welcomeLink"
              onClick={() => {
                localStorage.removeItem("attivo");
              }}
            >
              Log out
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
