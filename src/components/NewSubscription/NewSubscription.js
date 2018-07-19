import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Button,
  Input
} from "mdbreact";

class NewSubscription extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  inputChangeHandler = event => {
    const target = event.target,
      value = target.value,
      name = target.name;

    this.setState({
      [name]: value
    });
    console.log(this.state, "after update");
  };

  formSubmissionHandler = event => {
    event.preventDefault();
  };

  render() {
    return (
      <Container className="mt-5">
        <Row>
          <Col>
            <Card>
              <CardHeader className="indigo white-text">
                <CardTitle className="mb-0">Add new subscription</CardTitle>
              </CardHeader>
              <CardBody>
                More form fields will be added here
                <form onSubmit={this.formSubmissionHandler}>
                  <Row className="no-gutters">
                    <div className="md-form col-3">
                      <select
                        id="countryCode"
                        className="form-control pb-0"
                        onChange={this.inputChangeHandler}
                        required
                      >
                        <option value="null" disabled>
                          Country Code
                        </option>
                        <option value="+971">+971</option>
                        <option value="+91">+91</option>
                      </select>
                    </div>
                    <div className="col-9">
                      <Input
                        id="number"
                        label="Type your number"
                        onChange={this.inputChangeHandler}
                        required
                      />
                    </div>
                  </Row>
                  <div>
                    <input type="radio" name="planType" className="mr-1" />
                    <label>Weekly</label>
                  </div>
                  <div>
                    <input type="radio" name="planType" className="mr-1" />
                    <label>Monthly</label>
                  </div>
                  <div>
                    <input type="radio" name="planType" className="mr-1" />
                    <label>Yearly</label>
                  </div>
                  <Button type="submit" color="primary">
                    Submit
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

export default NewSubscription;
