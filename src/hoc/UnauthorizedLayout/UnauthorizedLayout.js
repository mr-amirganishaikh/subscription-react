import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Login from "../../components/Login/Login";
import ForgotPassword from "../../components/ForgotPassword/ForgotPassword";

import "./UnauthorizedLayout.scss";

export default class UnauthorizedLayout extends Component {
  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.props.history.replace("/dashboard/subscriptions");
    }
  }

  render() {
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route exact path="/" component={Login} />
      </Switch>
    );
  }
}
