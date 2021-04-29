import React, { Component } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Flip } from "react-toastify";

import { Link } from "react-router-dom";
import UiButton from "../components/ui/funcComponents/UiButton";
import UiInputbox from "../components/ui/funcComponents/UiInputbox";
import "./css/forgotPsw.css";

export default class ForgotPsw extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      psw: "",
      reapPsw: "",
    };
  }

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

  callbackCheck = () => {
    if (
      this.state.psw === this.state.reapPsw &&
      (this.state.psw !== "" || this.state.reapPsw !== "") &&
      this.state.email !== ""
    ) {
      this.props.history.push("/");
    } else {
      this.state.email === "" &&
        toast.error("Email is empty", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

      if (this.state.psw !== this.state.reapPsw || this.state.psw === "") {
        toast.error("Passwords are not valid!", {
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

  callBackEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  render() {
    return (
      <div className="forgotContainer">
        <div className="forgotCard">
          <h1>Forgot Password?</h1>

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

          <div className="forgotContainerInputs">
            <UiInputbox
              placeholder="Enter your email"
              type="email"
              maxLength={30}
              marginTop={"14px"}
              boxShadow={"0px 0px 30px rgba(0, 0, 0, 0.130)"}
              callback={this.callBackEmail}
            />
            <UiInputbox
              placeholder="Enter a new password"
              type="password"
              maxLength={15}
              marginTop={"14px"}
              boxShadow={"0px 0px 30px rgba(0, 0, 0, 0.130)"}
              callback={this.callBackPsw}
            />
            <UiInputbox
              placeholder="Repeat the new password"
              type="password"
              maxLength={15}
              marginTop={"14px"}
              boxShadow={"0px 0px 30px rgba(0, 0, 0, 0.130)"}
              callback={this.callBackReapPsw}
            />
          </div>
          <UiButton
            marginTop="37px"
            label="Send email"
            fontSize="14px"
            color="white"
            callback={this.callbackCheck}
            padding="15px 50px 15px 50px"
            borderRadius="25px"
            boxShadow="0 10px 30px 0 rgb(189 89 212 / 50%)"
          />
        </div>
      </div>
    );
  }
}
