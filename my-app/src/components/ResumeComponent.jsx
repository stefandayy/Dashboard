import React from "react";
import {
  Button,
  Container,
  OverlayTrigger,
  Popover,
  ProgressBar,
} from "react-bootstrap";
import { AiOutlinePieChart, AiOutlineWallet } from "react-icons/ai";
import { BsPersonWorkspace } from "react-icons/bs";
import { GiPayMoney } from "react-icons/gi";
import { SlOptionsVertical } from "react-icons/sl";
import NewClientCard from "./NewClientCard";
const ResumeComponent = ({ data }) => {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>
        <h3>Formation Status</h3>
        <p>In progress</p>
        <ProgressBar variant="dark" now={60} />
        <div className="text-center">
          <p>
            <b>Estimated processing </b> <br />
            4-5 business days
          </p>
          <Button>View Status</Button>
        </div>
      </Popover.Body>
    </Popover>
  );
  return (
    <Container >
      <h1 className="py-5">Good morning, {data.user1.name}!</h1>

      <div className="py-2" style={{maxWidth:"16rem"}}>
        <h2 className="d-inline">
          <AiOutlineWallet />{" "}
          <span className="px-4">${data.user1.balance}</span>{" "}
        </h2>{" "}
        <OverlayTrigger trigger="click" placement="auto" overlay={popover}>
          <Button className="rounded-circle d-inline float-end" size="sm" variant="dark">
          <SlOptionsVertical />
          </Button>
        </OverlayTrigger>
        <p className="mx-5 px-3">Your Bank Balance</p>
      </div>

      <div className="py-1" style={{maxWidth:"16rem"}}>
        <h2 className="d-inline">
          <AiOutlinePieChart />{" "}
          <span className="px-4">{data.user1.unTransaction}</span>
        </h2> 
        <Button className="rounded-circle d-inline float-end" size="sm" variant="dark"><SlOptionsVertical /></Button>
        <p className="mx-5 px-3">
          Uncaterigozed <br />
          transactions
        </p>
      </div>

      <div className="py-1"  style={{maxWidth:"16rem"}}>
        <h2 className="d-inline">
          <BsPersonWorkspace />{" "}
          <span className="px-4">{data.user1.empWork}</span>
        </h2>
        <Button className="rounded-circle d-inline float-end" size="sm" variant="dark"><SlOptionsVertical /></Button>
        <p className="mx-5 px-3">
          Employees <br />
          working today
        </p>
      </div>

      <div className="py-1" style={{maxWidth:"16rem"}}>
        <h2 className="d-inline">
          <GiPayMoney /> <span className="px-4">${data.user1.spending}</span>
        </h2>
        <Button className="rounded-circle d-inline float-end" size="sm" variant="dark"><SlOptionsVertical /></Button>
        <p className=" mx-5 px-3">
          This week's <br />
          card spending
        </p>
      </div>
      <NewClientCard data={data} />
    </Container>
  );
};

export default ResumeComponent;
