import React from "react";
import "../css/Homepage.css";
import ResumeComponent from "../components/ResumeComponent";
import RecentMailComponent from "../components/RecentMailComponent";
import { Col, Row } from "react-bootstrap";
import ToDoListComponent from "../components/ToDoListComponent";
import ChartComponent from "../components/ChartComponent";
const HomePage = ({data}) => {
  return (
    <Row id="home">
      <Col className="left" xs={12} md={12} lg={5}>
        <ResumeComponent data={data} />
      </Col>
      <Col className="right" xs={12} md={12} lg={7}>
        <ChartComponent />
        <RecentMailComponent data={data} />
        <ToDoListComponent data={data} />
      </Col>
    </Row>
  );
};

export default HomePage;
