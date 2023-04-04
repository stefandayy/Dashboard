import React, { useState } from "react";

import {

  AiOutlineBank,
  AiOutlineDollar,
  AiOutlineFileText,
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineMenu,
  AiOutlineSetting,
} from "react-icons/ai";
import { VscGraph } from "react-icons/vsc";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BiUserCircle } from "react-icons/bi";

import { Offcanvas, Button, Nav, NavItem } from "react-bootstrap";
import {NavLink} from "react-router-dom";
import "../css/SidebarComponent.css";

const SidebarComponent = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div style={{backgroundColor:"#7691b0"}}>
      <Button variant="dark" className="d-lg-none m-2" onClick={handleShow}>
        <AiOutlineMenu/>
      </Button>

      <Offcanvas
        style={{width:"7rem", backgroundColor: "#141414", color: "white" }}
        show={show}
        onHide={handleClose}
        responsive="lg"
        scroll={true}
        backdrop={false}
      >
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title>Dappr</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="side flex-column">
            <NavItem className="py-5">
              <NavLink className="nav-link">
                <b>Dappr</b>
              </NavLink>
            </NavItem>

            <div className="main-icons">
              <NavItem>
                <NavLink to="/" className="nav-link"><AiOutlineHome/></NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/hello" className="nav-link"><VscGraph/></NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link"><AiOutlineBank/></NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link"><AiOutlineFileText/></NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link"><AiOutlineMail/></NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link"><HiOutlineUserGroup/></NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link"><AiOutlineDollar/></NavLink>
              </NavItem>
            </div>

            <div className="user-icons">
              <NavItem>
                <NavLink className="nav-link"><AiOutlineSetting/></NavLink>
              </NavItem>

              <NavItem>
                <NavLink className="nav-link"><BiUserCircle/></NavLink>
              </NavItem>
            </div>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default SidebarComponent;
