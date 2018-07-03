import React, { Component } from "react";
//import { Link } from "react-router-dom";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Input,
  Button
} from "mdbreact";

import logo from "../../assets/images/abjadiyat_logo.png";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      countryCode: "",
      number: "",
      confirmCodeFields: ["1", "2", "3", "4"],
      disabledRequestForm: false,
      disabledConfirmForm: true,
      confirmCodeShow: false
    };
  }

  inputChangeHandler = event => {
    event.target.classList.contains("code-control")
      ? this.codeControlChangeHandler(event.target)
      : this.setState({ [event.target.name]: event.target.value });
    console.log("input change triggered");
  };

  codeControlChangeHandler = target => {
    if (
      target.value.length === 1 &&
      target.closest(".col").nextSibling.querySelector(".code-control")
    ) {
      target
        .closest(".col")
        .nextSibling.querySelector(".code-control")
        .focus();
    } else {
      document
        .querySelector("#confirmCode")
        .querySelector(".btn")
        .focus();
    }
  };

  requestCodeSubmit = event => {
    event.preventDefault();
    this.setState({
      disabledRequestForm: true,
      disabledConfirmForm: false,
      confirmCodeShow: true
    });
    console.log("request code clicked");
  };

  resendCodeClickHandler = event => {
    event.preventDefault();
    console.log("resend code clicked");
  };

  loginHandler = event => {
    event.preventDefault();
    localStorage.setItem("token", "isAuthenticated");
    localStorage.setItem("username", this.state.username);
    localStorage.setItem("subscriberId", 1462);
    this.props.history.push("/dashboard/orders");
    console.log("login completed with form");
  };

  fbLoginBtnClickHandler = renderProps => {
    this.setState({ disabledRequestForm: true });
    renderProps.onClick();
    console.log("fb login button clicked");
  };

  fbLoginSuccessCb = response => {
    localStorage.setItem("token", response.accessToken);
    localStorage.setItem("username", response.name);
    localStorage.setItem("subscriberId", 1462);
    this.props.history.push("/dashboard/orders");
    console.log("login completed with facebook");
  };

  render() {
    return (
      <Container className="mt-5">
        <Row className="justify-content-md-center">
          <Col md="6">
            <Card className="card-cascade narrower login-card">
              <CardHeader tag="div">
                <div className="view blue-gradient">
                  <img src={logo} alt="" />
                </div>
              </CardHeader>

              <CardBody>
                <div className="text-center mt-2">
                  <FacebookLogin
                    appId="177949409737513"
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={this.fbLoginSuccessCb}
                    render={renderProps => {
                      return (
                        <Button
                          color="facebook"
                          onClick={() =>
                            this.fbLoginBtnClickHandler({
                              ...renderProps
                            })
                          }
                        >
                          <i className="fa fa-facebook" /> Login with facebook
                        </Button>
                      );
                    }}
                  />
                </div>

                <div className="login-separator">
                  <hr />
                  <span>OR</span>
                </div>

                <form id="requestCodeForm" onSubmit={this.requestCodeSubmit}>
                  <Row className="no-gutters">
                    <div className="w-100">
                      <Input
                        id="username"
                        name="username"
                        required
                        label="Type your name"
                        onChange={this.inputChangeHandler}
                        disabled={this.state.disabledRequestForm ? true : false}
                      />
                    </div>
                    <div className="w-100">
                      <div className="md-form input-group">
                        <div className="input-group-prepend">
                          <select
                            id="countryCode"
                            name="countryCode"
                            required
                            className="form-control pb-0"
                            onChange={this.inputChangeHandler}
                            disabled={
                              this.state.disabledRequestForm ? true : false
                            }
                          >
                            <option value="+971">+971</option>
                            <option value="+91">+91</option>
                          </select>
                        </div>
                        <input
                          id="number"
                          className="form-control"
                          name="number"
                          required
                          placeholder="Type your number"
                          onChange={this.inputChangeHandler}
                          disabled={
                            this.state.disabledRequestForm ? true : false
                          }
                        />
                      </div>
                    </div>
                    <div className="w-100" />

                    <Col className="text-right">
                      <Button
                        color="primary"
                        type="submit"
                        disabled={this.state.disabledRequestForm ? true : false}
                      >
                        Request Code
                      </Button>
                    </Col>
                    {/* <Col className="text-right pt-4">
                      <Link to="/forgot-password">Forgot Password ?</Link>
                    </Col> */}
                  </Row>
                </form>

                <div
                  id="confirmCode"
                  className={this.state.confirmCodeShow ? "show" : ""}
                >
                  <div className="login-separator">
                    <hr />
                    <span>Enter Code</span>
                  </div>

                  <form id="confirmCodeForm" onSubmit={this.loginHandler}>
                    <Row className="mx-0">
                      {this.state.confirmCodeFields.map((field, index) => (
                        <Col key={index}>
                          <Input
                            type="password"
                            name={"code" + field}
                            id={"code" + field}
                            maxLength={1}
                            className="code-control"
                            required
                            onChange={this.inputChangeHandler}
                            disabled={
                              this.state.disabledConfirmForm ? true : false
                            }
                          />
                        </Col>
                      ))}
                      <div className="w-100" />
                      <Col className="pt-4">
                        <a
                          href="/"
                          disabled={
                            this.state.disabledConfirmForm ? true : false
                          }
                          onClick={this.resendCodeClickHandler}
                        >
                          Resend Code ?
                        </a>
                      </Col>
                      <Col className="text-right">
                        <Button
                          color="success"
                          type="submit"
                          disabled={
                            this.state.disabledConfirmForm ? true : false
                          }
                        >
                          Proceed
                        </Button>
                      </Col>
                    </Row>
                  </form>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
