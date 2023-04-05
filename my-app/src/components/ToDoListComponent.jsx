import React from "react";
import { Badge, Row, Col, Container } from "react-bootstrap";
import { AiOutlineFileText } from "react-icons/ai";

const ToDoListComponent = ({ data }) => {
  return (
    <>
      <h1>Your To Do List</h1>
      <Container className="mt-3 d-flex justify-content-between">
        {data.user1.todo_items.map((item, index) => (
          <Row className="g-2" key={index + 1}>
            <Col sm="auto">
              <Badge pill bg="black">
                <AiOutlineFileText size="40px" />
              </Badge>
            </Col>
            <Col>
              <b>{item.title} </b>
              <p>{item.due_date} </p>
            </Col>
          </Row>
        ))}
      </Container>
    </>
  );
};

export default ToDoListComponent;
