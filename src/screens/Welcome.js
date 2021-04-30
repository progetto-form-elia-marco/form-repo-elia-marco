import React, { Component } from "react";
import "./css/welcome.css";
import { Link } from "react-router-dom";

class Welcome extends Component {
  modifyWelcomeName = () => {
    const email = JSON.parse(localStorage.getItem("attivo")).email;
    const [name, emailAt] = email.split("@");
    return name;
  };

  render() {
    return (
      <div className="welcomeContainer">
        <div className="welcomeCard">
          <h1 className="welcomeTitle">Welcome {this.modifyWelcomeName()}!</h1>
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
