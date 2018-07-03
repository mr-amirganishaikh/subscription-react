import React, { Component } from "react";
import API from "../../hoc/api";
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
  constructor(props) {
    super(props);
    this.state = {
      subscriberId: localStorage.getItem("subscriberId"),
      orders: [
        { id: 1, name: "Nikhil Maheshwari", type: "Yearly" },
        { id: 2, name: "Amir Shaikh", type: "Monthly" },
        { id: 3, name: "SuKumar", type: "Weekly" },
        { id: 4, name: "Nikhil Maheshwari", type: "Yearly" },
        { id: 5, name: "Amir Shaikh", type: "Monthly" },
        { id: 6, name: "SuKumar", type: "Weekly" }
      ]
    };
  }

  componentDidMount() {
    API.get("subscription", {
      params: { subscriberId: this.state.subscriberId }
    })
      .then(response => {
        console.info(response);
        this.setState({ orders: response.data });
      })
      .catch(error => {
        console.error(error);
      });
  }

  orderEditHandler = id => {
    console.log("Order Id " + id + ", clicked on edit");
  };

  orderDeleteHandler = id => {
    console.log("Order Id " + id + ", clicked on delete");
  };

  render() {
    return (
      <Container className="mt-5">
        <Row>
          <Col>
            <Card>
              <CardHeader className="indigo white-text">
                <CardTitle className="mb-0">List of orders</CardTitle>
              </CardHeader>
              <CardBody>
                <table className="table table-hover">
                  <thead className="purple-text">
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Subscription Type</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.orders.map((data, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{data.name}</td>
                        <td>{data.type}</td>
                        <td>
                          <a
                            onClick={() => this.orderEditHandler(data.id)}
                            data-editid={data.id}
                            className="text-primary mr-1"
                          >
                            <i
                              className="material-icons"
                              style={{ fontSize: "1.1rem" }}
                            >
                              edit
                            </i>
                          </a>
                          <a
                            onClick={() => this.orderDeleteHandler(data.id)}
                            className="text-danger"
                          >
                            <i
                              className="material-icons"
                              style={{ fontSize: "1.1rem" }}
                            >
                              close
                            </i>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Subscribes;
