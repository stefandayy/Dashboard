import React from "react";
import { Col, Row } from "react-bootstrap";


const NewClientCard = ({data}) => {
  return (
    <Row className= "g-0 my-5 p-1  " style={{maxWidth:"18rem",backgroundColor:"#91a7bf",borderRadius:"10px"}}>
      <Col >
        <div>
          <b>New Client</b> <br />
          <h5>{data.user1.nClient}</h5>
        </div>
      </Col>
      <Col>
        <div>
          <b>Invoices overdue</b> <br />
          <h5>{data.user1.overdue}</h5>
        </div>
      </Col>
    </Row>
  );
};

export default NewClientCard;
