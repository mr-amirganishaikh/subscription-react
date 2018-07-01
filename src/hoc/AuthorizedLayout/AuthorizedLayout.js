import React, { Component } from "react";

import Aux from "../_Aux/_Aux";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import "./AuthorizedLayout.scss";

export default class AuthorizedLayout extends Component {
  componentDidMount() {
    if (!localStorage.getItem("token")) {
      this.props.history.replace("/");
    }
  }

  render() {
    return (
      <Aux>
        <Header />
        <main>Main</main>
        <Footer />
      </Aux>
    );
  }
}
