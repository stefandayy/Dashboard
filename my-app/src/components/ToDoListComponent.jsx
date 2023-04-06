import React from "react";
import {
  Badge,
  Row,
  Col,
  Container,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { AiOutlineFileText } from "react-icons/ai";

const ToDoListComponent = ({ data }) => {
  return (
    <>
      <h1>Your To Do List</h1>
      <Container className="mt-3 d-flex justify-content-between">
        {data.user1.todo_items.map((item, index) => (
          <OverlayTrigger
            trigger={["hover","focus"]}
            placement="auto"
            overlay={

              <Tooltip style={{ backgroundColor: "black", opacity: "1", borderRadius: "10px" }}>
                {item.description}
              </Tooltip>

            }
            key={index + 1}
          >
            <Row className="g-2">
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
          </OverlayTrigger>
        ))}
      </Container>
    </>
  );
};

export default ToDoListComponent;
