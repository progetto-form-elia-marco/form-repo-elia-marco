//import class components
import React, { Component } from "react";
//import per i toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Flip } from "react-toastify";
//Import func components
import UiButton from "../../ui/funcComponents/UiButton";
import UiInputbox from "../../ui/funcComponents/UiInputbox";
import UiCheckbox from "../../ui/funcComponents/UiCheckbox";
import UiSelect from "../../ui/funcComponents/UiSelect";

class FormRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      psw: "",
      reapPsw: "",
      controlSelect: false,
      controlCheck: [
        false, //controllo M
        true,
      ], //controllo F
    };
  }

  callbackSelect = () => {
    this.setState({
      controlSelect: true,
    });
  };

  callbackCheckedM = () => {
    this.setState({
      controlCheck: [true, false],
    });
  };

  callbackCheckedF = () => {
    this.setState({
      controlCheck: [false, true],
    });
  };

  callBackPsw = (e) => {
    this.setState({
      psw: e.target.value,
    });
  };

  callBackReapPsw = (e) => {
    this.setState({
      reapPsw: e.target.value,
    });
  };

  callBackEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  callbackSignUp = (e) => {
    e.preventDefault();
    if (this.state.psw === this.state.reapPsw && this.state.controlSelect) {
      const lsData = JSON.parse(localStorage.getItem("data"));
      console.log(lsData);
      const isInLs = lsData.find((utente) => utente.email === this.state.email);
      if (isInLs) {
        toast.error("Account already registered!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        const lsData = JSON.parse(localStorage.getItem("data"));
        lsData.push({ email: this.state.email, psw: this.state.psw });
        localStorage.setItem("data", JSON.stringify(lsData));
        this.props.history.push("/");
      }
    } else {
      if (this.state.psw !== this.state.reapPsw) {
        toast.error("Passwords are not equal!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      if (!this.state.controlSelect) {
        toast.error("Select a title!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  };

  render() {
    return (
      <div className="regContainer">
        <form
          className="formContainerReg"
          onSubmit={(e) => this.callbackSignUp(e)}
        >
          <h2>
            <b>Registration</b>
          </h2>

          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            transition={Flip}
          />

          <div className="fullName">
            <UiInputbox
              type="text"
              placeholder={"Nome"}
              maxLength={25}
              boxShadow={"0px 0px 30px rgba(0, 0, 0, 0.130)"}
            />

            <UiInputbox
              type="text"
              placeholder={"Cognome"}
              maxLength={40}
              boxShadow={"0px 0px 30px rgba(0, 0, 0, 0.130)"}
            />
          </div>

          <UiInputbox
            type="email"
            placeholder={"E-mail"}
            maxLength={50}
            marginTop={"14px"}
            boxShadow={"0px 0px 30px rgba(0, 0, 0, 0.130)"}
            callback={this.callBackEmail}
          />

          <div className="pswContainer">
            <UiInputbox
              type="password"
              placeholder={"Password"}
              maxLength={15}
              marginTop={"14px"}
              boxShadow={"0px 0px 30px rgba(0, 0, 0, 0.130)"}
              callback={this.callBackPsw}
            />

            <UiInputbox
              type="password"
              placeholder={"Repeat password"}
              maxLength={15}
              marginTop={"14px"}
              boxShadow={"0px 0px 30px rgba(0, 0, 0, 0.130)"}
              callback={this.callBackReapPsw}
            />
          </div>

          <UiInputbox
            type="date"
            marginTop={"14px"}
            boxShadow={"0px 0px 30px rgba(0, 0, 0, 0.130)"}
          />

          <div className="genderRadio">
            <UiCheckbox
              name="gender"
              type="radio"
              label="Male"
              place="register"
              callback={this.callbackCheckedM}
              backgroundColor={
                this.state.controlCheck[0] ? "#BD59D4" : "transparent"
              }
              color={this.state.controlCheck[0] ? "white" : "#4b2354"}
            />

            <UiCheckbox
              name="gender"
              type="radio"
              label="Female"
              place="register"
              callback={this.callbackCheckedF}
              backgroundColor={
                this.state.controlCheck[1] ? "#BD59D4" : "transparent"
              }
              color={this.state.controlCheck[1] ? "white" : "#4b2354"}
            />
          </div>
          <UiSelect
            className="selectTitle"
            options={[
              "Front-end Developer",
              "Back-end Developer",
              "Full Stack Developer",
            ]}
            callback={this.callbackSelect}
          />

          <UiCheckbox
            type="checkbox"
            name={"termini"}
            label={"Accetto i termini di servizio"}
            maxLength={15}
            backgroundColor={"transparent"}
            boxShadow={"0px 0px rgba(0, 0, 0, 0.055)"}
            place="register"
          />

          <UiButton
            className="signUp"
            label="SIGN UP"
            fontSize="14px"
            color="white"
            padding="15px 50px 15px 50px"
            borderRadius="25px"
            boxShadow="0 10px 30px 0 rgb(189 89 212 / 50%)"
            marginTop="24px"
            type="submit"
          />
        </form>
      </div>
    );
  }
}

export default FormRegister;
