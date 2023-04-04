import React from "react";
import { Container } from "react-bootstrap";

const ToDoListComponent = ({data}) => {
  return (
    <>
    <h1>Your To Do List</h1>
    <Container className="d-flex justify-content-between">
     

      {data.user1.todo_items.map(item=>(
         <div>
        <h5>{item.title}</h5>
        <p>{item.due_date}</p>
      </div>
      ))}
      
    </Container></>
    
  );
};

export default ToDoListComponent;
