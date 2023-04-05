import React from "react";
import {
  Button,
  Col,
  Container,
  OverlayTrigger,
  Popover,
  ProgressBar,
  Row,
  Tooltip,
} from "react-bootstrap";
import { AiOutlinePieChart, AiOutlineWallet } from "react-icons/ai";
import { BsPersonWorkspace } from "react-icons/bs";
import { GiPayMoney } from "react-icons/gi";
import { SlOptionsVertical } from "react-icons/sl";
import NewClientCard from "./NewClientCard";
const ResumeComponent = ({ data }) => {

  const popover = (
    <Tooltip className="mx-2" style={{backgroundColor:"black", opacity:"1", borderRadius:"10px"}}>
      
        <h4 className="text-white">Formation Status</h4>
        <p className="text-white">In progress</p>
        <ProgressBar variant="primary" now={60} />
        <div className="text-center">
          <p className="text-white">
            <b>Estimated processing </b> <br />
            4-5 business days
          </p>
          <Button variant="light"> <b>View status</b> </Button>
        </div>
      
    </Tooltip>
  );


  return (
    <Container >
      <h1 className="py-5">Good morning, {data.user1.name}!</h1>

      <Row className="section" style={{maxWidth:"18rem"}}>
        <Col xs="auto">
          <AiOutlineWallet size={"40px"} />
        </Col>
        <Col xs="auto">
          <h2>${data.user1.balance}</h2>
          <p>
            Your bank<br />
            balance
          </p>
        </Col>
        <Col>
        <OverlayTrigger trigger="click" placement="auto" overlay={popover}>
          <Button
            className="rounded-circle d-inline float-end"
            size="sm"
            variant="dark"
          >
            <SlOptionsVertical />
          </Button>
        </OverlayTrigger>
        </Col>
        </Row>

      <Row className="section" style={{maxWidth:"18rem"}}>
        <Col xs="auto">
          <AiOutlinePieChart size={"40px"} />
        </Col>
        <Col xs="auto">
          <h2>{data.user1.unTransaction}</h2>
          <p>
            Uncategorized <br />
            transaction
          </p>
        </Col>
        <Col>
          <Button
            className="rounded-circle d-inline float-end"
            size="sm"
            variant="dark"
           
          >
            <SlOptionsVertical />
          </Button>
        </Col>
        </Row>

      <Row className="section" style={{maxWidth:"18rem"}}>
        <Col xs="auto">
          <BsPersonWorkspace size={"40px"} />
        </Col>
        <Col xs="auto">
          <h2>{data.user1.empWork}</h2>
          <p>
            Employees <br />
            working today
          </p>
        </Col>
        <Col>
          <Button
            className="rounded-circle d-inline float-end"
            size="sm"
            variant="dark"
          >
            <SlOptionsVertical />
          </Button>
        </Col>
        </Row>

      <Row className="section" style={{maxWidth:"18rem"}}>
        <Col xs="auto">
          <GiPayMoney size={"40px"} />
        </Col>
        <Col xs="auto">
          <h2>${data.user1.spending}</h2>
          <p>
            This week's card <br />
            spending
          </p>
        </Col>
        <Col>
          <Button
            className="rounded-circle d-inline float-end"
            size="sm"
            variant="dark"
          >
            <SlOptionsVertical />
          </Button>
        </Col>
      </Row>


      <NewClientCard data={data} />
    </Container>
  );
};

export default ResumeComponent;
