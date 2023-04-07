import React from "react";
import { Table } from "react-bootstrap";
import { AiOutlineUser } from "react-icons/ai";
const RecentMailComponent = ({ data }) => {
  return (
    <>
      <b style={{fontSize:"30px"}}>Recent emails</b>
      <Table>
        <tbody>
          {data.user1.emails
            .map((email, index) => (
              <tr key={index + 1}>
                <td>
                  <AiOutlineUser />
                </td>
                <td>{email.user}</td>
                <td>{email.title}</td>
                <td>{email.date}</td>
              </tr>
            ))
            .reverse()}
        </tbody>
      </Table>
    </>
  );
};

export default RecentMailComponent;
