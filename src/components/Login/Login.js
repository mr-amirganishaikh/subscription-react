import React, { Component } from "react";

import { Container, Row, Col, Card, CardBody, Input, Button } from "mdbreact";

export default class Login extends Component {
  render() {
    return (
      <Container className="mt-5">
        <Row className="justify-content-md-center">
          <Col md="6">
            <Card>
              <CardBody>
                <form>
                  <Input label="Type your name" />
                  <div className="md-form">
                    <select className="form-control">
                      <option>Option 1</option>
                    </select>
                  </div>
                  <Input label="Type your number" />
                  <Button outline color="primary">
                    Sign In
                  </Button>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
