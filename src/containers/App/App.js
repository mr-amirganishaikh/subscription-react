import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import AuthorizedLayout from "../../hoc/AuthorizedLayout/AuthorizedLayout";
import UnauthorizedLayout from "../../hoc/UnauthorizedLayout/UnauthorizedLayout";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("token") ? (
        <Component {...props} {...rest} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

class App extends Component {
  render() {
    return (
      <Switch>
        <PrivateRoute path="/dashboard/" component={AuthorizedLayout} />
        <Route exact path="/" component={UnauthorizedLayout} />
        <Route component={UnauthorizedLayout} />
      </Switch>
    );
  }
}

export default App;
