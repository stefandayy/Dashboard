import React from "react";
import { Col, Row } from "react-bootstrap";


const NewClientCard = ({data}) => {
  return (
    <Row className= "gx-2 my-5 p-4  " style={{maxWidth:"50rem",backgroundColor:"#91a7bf",borderRadius:"10px"}}>
      <Col >
        <div>
          <h2>New Clients</h2> <br />
          <h2>{data.user1.nClient}</h2>
        </div>
      </Col>
      <Col>
        <div>
          <h2>Invoices overdue</h2><br />
          <h2>{data.user1.overdue}</h2>
        </div>
      </Col>
    </Row>
  );
};

export default NewClientCard;
