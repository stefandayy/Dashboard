import React from "react";
import { Button, Container, ProgressBar, Tooltip } from "react-bootstrap";
import { AiOutlinePieChart, AiOutlineWallet } from "react-icons/ai";
import { BsPersonWorkspace } from "react-icons/bs";
import { GiPayMoney } from "react-icons/gi";

import NewClientCard from "./NewClientCard";
import ResumeSectionComponent from "./ResumeSectionComponent";
const ResumeComponent = ({ data }) => {
  const tooltip = (
    <Tooltip
      className="m-2"
      style={{ backgroundColor: "black", opacity: "1", borderRadius: "10px" }}
    >
      <h4 className="text-white">Formation Status</h4>
      <p className="text-white">In progress</p>
      <ProgressBar variant="primary" now={60} />
      <div className="text-center">
        <p className="text-white">
          <b>Estimated processing </b> <br />
          4-5 business days
        </p>
        <Button variant="light">
          {" "}
          <b>View status</b>{" "}
        </Button>
      </div>
    </Tooltip>
  );

  const tooltip2 = (
    <Tooltip
      className="m-2"
      style={{ backgroundColor: "black", opacity: "1", borderRadius: "10px" }}
    >
      <b className="text-white">Working progress...</b>
    </Tooltip>
  );

  return (
    <Container>
      <h1 className="py-3">Good morning, {data.user1.name}!</h1>

      <ResumeSectionComponent
        icon={<AiOutlineWallet size={"40px"} />}
        data={data.user1.balance}
        text={"Your bank balance"}
        tooltip={tooltip}
        dollar="$"
      />


      <ResumeSectionComponent
        icon={<AiOutlinePieChart size={"40px"} />}
        data={data.user1.unTransaction}
        text={"Uncategorized transaction"}
        tooltip={tooltip2}
      />

      <ResumeSectionComponent
        icon={<BsPersonWorkspace size={"40px"} />}
        data={data.user1.empWork}
        text={"Employees working today"}
        tooltip={tooltip2}
      />

      <ResumeSectionComponent
        icon={<GiPayMoney size={"40px"} />}
        data={data.user1.spending}
        text={"This week's card spending"}
        tooltip={tooltip2}
        dollar="$"
      />

      <NewClientCard data={data} />
    </Container>
  );
};

export default ResumeComponent;
