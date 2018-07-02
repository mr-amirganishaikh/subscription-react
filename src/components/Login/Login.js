import React, { Component } from "react";
import { Link } from "react-router-dom";
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
      disabledRequestForm: false,
      confirmCodeState: false,
      disabledConfirmForm: true
    };
  }

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

  inputChangeHandler = event => {
    event.target.classList.contains("code-control")
      ? this.codeControlChangeHandler(event.target)
      : this.setState({ [event.target.name]: event.target.value });
  };

  requestCodeSubmit = event => {
    event.preventDefault();
    this.setState({
      disabledRequestForm: true,
      disabledConfirmForm: false,
      confirmCodeState: true
    });
  };

  loginHandler = event => {
    event.preventDefault();
    localStorage.setItem("token", "isAuthenticated");
    localStorage.setItem("username", this.state.username);
    this.props.history.push("/dashboard/subscriptions");
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
                  <Button color="facebook">
                    <i className="fa fa-facebook" /> Login with facebook
                  </Button>
                </div>

                <div className="login-separator">
                  <hr />
                  <span>OR</span>
                </div>

                <form onSubmit={this.requestCodeSubmit}>
                  <Row className="no-gutters">
                    <div className="w-100">
                      <Input
                        id="username"
                        name="username"
                        label="Type your name"
                        onChange={this.inputChangeHandler}
                        disabled={this.state.disabledRequestForm ? true : false}
                      />
                    </div>

                    <div className="md-form col-3">
                      <select
                        id="countryCode"
                        name="countryCode"
                        className="form-control pb-0"
                        onChange={this.inputChangeHandler}
                        disabled={this.state.disabledRequestForm ? true : false}
                      >
                        <option value="+971">+971</option>
                        <option value="+91">+91</option>
                      </select>
                    </div>
                    <div className="col-9">
                      <Input
                        id="number"
                        name="number"
                        label="Type your number"
                        onChange={this.inputChangeHandler}
                        disabled={this.state.disabledRequestForm ? true : false}
                      />
                    </div>
                    <div className="w-100" />

                    <Col>
                      <Button
                        color="primary"
                        type="submit"
                        disabled={this.state.disabledRequestForm ? true : false}
                      >
                        Request Code
                      </Button>
                    </Col>
                    <Col className="text-right pt-3">
                      <Link to="/forgot-password">Forgot Password ?</Link>
                    </Col>
                  </Row>
                </form>

                <div
                  id="confirmCode"
                  className={this.state.confirmCodeState ? "show" : ""}
                >
                  <div className="login-separator">
                    <hr />
                    <span>Enter Code</span>
                  </div>

                  <form onSubmit={this.loginHandler}>
                    <Row className="mx-0">
                      <Col>
                        <Input
                          type="password"
                          name="code1"
                          id="code1"
                          maxLength={1}
                          className="code-control"
                          required
                          onChange={this.inputChangeHandler}
                          disabled={
                            this.state.disabledConfirmForm ? true : false
                          }
                        />
                      </Col>
                      <Col>
                        <Input
                          type="password"
                          name="code2"
                          id="code2"
                          maxLength={1}
                          className="code-control"
                          required
                          onChange={this.inputChangeHandler}
                          disabled={
                            this.state.disabledConfirmForm ? true : false
                          }
                        />
                      </Col>
                      <Col>
                        <Input
                          type="password"
                          name="code3"
                          id="code3"
                          maxLength={1}
                          className="code-control"
                          required
                          onChange={this.inputChangeHandler}
                          disabled={
                            this.state.disabledConfirmForm ? true : false
                          }
                        />
                      </Col>
                      <Col>
                        <Input
                          type="password"
                          name="code4"
                          id="code4"
                          maxLength={1}
                          className="code-control"
                          required
                          onChange={this.inputChangeHandler}
                          disabled={
                            this.state.disabledConfirmForm ? true : false
                          }
                        />
                      </Col>
                      <div className="w-100" />
                      <Col>
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
                      <Col className="text-right pt-3">
                        <a
                          href="/"
                          disabled={
                            this.state.disabledConfirmForm ? true : false
                          }
                        >
                          Resend Code ?
                        </a>
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
