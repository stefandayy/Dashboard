import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const NewClientCard = ({ data }) => {
  return (
    <Card
      className="p-2 section"
      style={{ maxWidth: "25rem", backgroundColor: "#DFECF2",borderColor:"transparent" }}
    >
      <Row>
        <Col>
          <h5>New Clients</h5> <br />
          <h2>{data.user1.nClient}</h2>
        </Col>
        <Col>
          <h5>Invoices overdue</h5>
          <br />
          <h2>{data.user1.overdue}</h2>
        </Col>
      </Row>
    </Card>
  );
};

export default NewClientCard;
