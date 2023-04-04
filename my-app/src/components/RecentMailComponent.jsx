import React from "react";
import { Table } from "react-bootstrap";
import { AiOutlineUser } from "react-icons/ai";
const RecentMailComponent = ({ data }) => {
  return (
    <>
      <h1>Recent Mail</h1>
      <Table>
        <tbody>
          {data.user1.emails.map((email) => (
            <tr>
              <td>
                <AiOutlineUser />
              </td>
              <td>
                <b>{email.user} </b>{" "}
              </td>
              <td>
                {" "}
                <b>{email.title}</b>{" "}
              </td>
              <td>
                {" "}
                <b>{email.date}</b>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default RecentMailComponent;
