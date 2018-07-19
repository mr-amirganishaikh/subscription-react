import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardBody, Input, Button } from "mdbreact";

export default class ForgotPassword extends Component {
  render() {
    return (
      <Container className="mt-5">
        <Row className="justify-content-md-center">
          <Col md="6">
            <Card>
              <CardBody>
                <form>
                  <Input id="username" label="Type your name" />
                  <Row className="no-gutters">
                    <div className="md-form col-3">
                      <select id="countryCode" className="form-control pb-0">
                        <option value="+971">+971</option>
                        <option value="+91">+91</option>
                      </select>
                    </div>
                    <div className="col-9">
                      <Input id="number" label="Type your number" />
                    </div>
                  </Row>
                  <Row className="no-gutters">
                    <Col>
                      <Button
                        outline
                        color="primary"
                        type="submit"
                        className="m-0"
                      >
                        Forgot Password
                      </Button>
                    </Col>
                    <Col className="text-right">
                      <Link to="/login">Back to login</Link>
                    </Col>
                  </Row>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
