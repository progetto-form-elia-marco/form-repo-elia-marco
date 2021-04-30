//import class components
import React, { Component } from "react";
import FormRegister from "../components/components_for_page/register/FormRegister";
//Import css
import "./css/register.css";

class Register extends Component {
  render() {
    return (
      <div>
        <FormRegister {...this.props} />
      </div>
    );
  }
}

export default Register;
