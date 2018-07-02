import React, { Component } from "react";
import { Navbar } from "mdbreact";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <header>
        <Navbar color="indigo" dark expand="md">
          <strong className="navbar-brand">
            {localStorage.getItem("username")}
          </strong>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/dashboard/subscriptions" className="nav-link">
                <i className="mr-1 material-icons">list</i>
                <span>Subscriptions</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/dashboard/new-subscription" className="nav-link">
                <i className="mr-1 material-icons">add_circle_outline</i>
                <span>Add New</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="#"
                onClick={this.props.logoutClicked}
              >
                <i className="mr-1 material-icons">exit_to_app</i>
                <span>Logout</span>
              </Link>
            </li>
          </ul>
        </Navbar>
      </header>
    );
  }
}
