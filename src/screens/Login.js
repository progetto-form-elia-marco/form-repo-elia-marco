//import class components
import React, { Component } from "react";
import FormLogin from "../components/components_for_page/login/FormLogin";
//Import css
import "./css/login.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      psw: "",
      check: false,
    };
  }

  render() {
    return (
      <div>
        <FormLogin {...this.props} />
      </div>
    );
  }
}

export default Login;
