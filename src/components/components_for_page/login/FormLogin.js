//import class components
import React, { Component } from "react";
import { Link } from "react-router-dom";
//import per i toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Flip } from "react-toastify";
//Import func components
import UiButton from "../../ui/funcComponents/UiButton";
import UiInputbox from "../../ui/funcComponents/UiInputbox";
import UiCheckbox from "../../ui/funcComponents/UiCheckbox";

import CookieConsent from "react-cookie-consent";

class FormLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      psw: "",
      check: false,
    };
  }

  //Funzione che aggiorna username in base a ciò che scrivo
  callbackUsername = (event) => {
    let mail = event.target.value;
    this.setState({ user: mail });
  };

  //Funzione che aggiorna password
  callbackPassword = (event) => {
    let pass = event.target.value;
    this.setState({ psw: pass });
  };

  //Funzione che aggiorna stato della checkbox
  callbackCheck = (event) => {
    let c = event.target.checked;
    this.setState({ check: c });
  };

  //Funzione che viene richiamata quando premo il bottone 'SIGN IN'
  callbackSignIn = () => {
    let email = this.state.user;
    let password = this.state.psw;
    let checkControl = this.state.check;
    // Regular expression per validare la mail
    const control = /^[^A-Z0-9._%+-]+@[^A-Z0-9.-]+\.[^A-Z]{2,3}$/;

    const lsc = JSON.parse(localStorage.getItem("data"));
    const isInls = lsc.find((utente) => utente.email === email);
    const validPsw = lsc.find(
      (utente) => utente.email === email && utente.psw === password
    );
    //Valuto se c'è almeno un errore nei dati inseriti
    if (
      email === "" ||
      !control.test(email) ||
      password === "" ||
      !checkControl ||
      !isInls ||
      !validPsw
    ) {
      //Controllo i vari casi di errore e mostro Toast appropriato
      (email === "") | !control.test(email) &&
        this.showToast("Errore nell'inserimento della mail");
      password === "" &&
        this.showToast("Errore nell'inserimento della password");
      !checkControl && this.showToast("Devi accettare i termini di servizio");
      !isInls && this.showToast("User not found!");
      !validPsw && this.showToast("Password not valid!");
    } else {
      //Altrimenti se non ci sono errori, salvo e cambio screen
      email = this.state.user;
      password = this.state.psw;
      checkControl = this.state.check;

      localStorage.setItem(
        "attivo",
        JSON.stringify({
          email: email,
          password: password,
        })
      );

      this.props.history.push("/welcome");
    }
  };

  //Funzione che mi rimanda all'accesso con Facebook
  callbackFB = () => {
    console.log("FB");
    window.location.href = "https://www.facebook.com/";
  };

  //Funzione che mi rimanda all'accesso con Google
  callbackGoogle = () => {
    console.log("google");
    window.location.href = "https://www.google.com/";
  };

  //Funzione che mostra il toast di errore
  showToast = (text) => {
    toast.error(text, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  render() {
    return (
      <div className="loginContainer">
        <div className="formContainer">
          <h2>
            <b>Sign In</b>
          </h2>

          {/* Componente Toast da visualizzare in caso di errori */}
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

          <UiInputbox
            type="text"
            placeholder={"username or email"}
            maxLength={20}
            callback={this.callbackUsername}
            marginTop={"30px"}
            boxShadow={"0px 0px 30px rgba(0, 0, 0, 0.130)"}
          />

          <UiInputbox
            type="password"
            placeholder={"password"}
            maxLength={15}
            callback={this.callbackPassword}
            marginTop={"14px"}
            boxShadow={"0px 0px 30px rgba(0, 0, 0, 0.130)"}
          />

          <UiCheckbox
            type="checkbox"
            name={"termini"}
            label={"Accetto i termini di servizio"}
            placeholder={"password"}
            maxLength={15}
            callback={this.callbackCheck}
            callbackFocus={this.callbackFocus}
            backgroundColor={"transparent"}
            boxShadow={"0px 0px rgba(0, 0, 0, 0.055)"}
          />

          <UiButton
            label="SIGN IN"
            fontSize="14px"
            color="white"
            callback={this.callbackSignIn}
            padding="15px 50px 15px 50px"
            borderRadius="25px"
            boxShadow="0 10px 30px 0 rgb(189 89 212 / 50%)"
          />

          <p>Or log in with</p>

          <div className="socialButtons">
            <UiButton
              className="facebook"
              img={"facebook"}
              color="white"
              callback={this.callbackFB}
              width="50px"
              height="50px"
              borderRadius="50px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              padding="5px"
            />

            <UiButton
              img={"google"}
              color="white"
              borderRadius={"50px"}
              callback={this.callbackGoogle}
              width="50px"
              height="50px"
              borderRadius="50px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              padding="5px"
            />
          </div>

          <Link className="linkContainer" to="/register">
            Sign Up
          </Link>

          <Link className="linkContainer linkForgotpsw" to="/forgotPsw">
            Forgot Password
          </Link>
        </div>
        <CookieConsent cookieName="user" cookieValue={true} expires={10}>
          This site uses cookies.
        </CookieConsent>
      </div>
    );
  }
}

export default FormLogin;
