import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  CardTitle
} from "mdbreact";

class Subscribes extends Component {
  render() {
    return (
      <Container className="mt-5">
        <Row>
          <Col>
            <Card>
              <CardHeader className="indigo white-text">
                <CardTitle className="mb-0">List of subscriptions</CardTitle>
              </CardHeader>
              <CardBody>List all subscriptions here</CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Subscribes;
