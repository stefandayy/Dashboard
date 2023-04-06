import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const NewClientCard = ({ data }) => {
  return (
    <Card
      className="ml-3 p-2 section"
      style={{ maxWidth: "25rem", backgroundColor: "#DFECF2",borderColor:"transparent" }}
    >
      <Row>
        <Col>
          <b>New Clients</b> <br />
          <h2>{data.user1.nClient}</h2>
        </Col>
        <Col>
          <b>Invoices overdue</b>
          <br />
          <h2>{data.user1.overdue}</h2>
        </Col>
      </Row>
    </Card>
  );
};

export default NewClientCard;
