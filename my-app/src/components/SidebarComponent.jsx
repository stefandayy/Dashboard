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
import { NavLink } from "react-router-dom";
import "../css/SidebarComponent.css";

const SidebarComponent = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="menu">
      <Button variant="dark" className="d-lg-none m-2 " onClick={handleShow}>
        <AiOutlineMenu />
      </Button>

      <Offcanvas
        style={{ width: "7rem", backgroundColor: "black", color: "white" }}
        show={show}
        onHide={handleClose}
        responsive="lg"
        scroll={false}
        backdrop={false}
      >
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title>Dappr</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="side flex-column">
            <NavItem className="py-5 px-2">
              <b>Dappr</b>
            </NavItem>


            {/* Icons - Link */}
            <div className="main-icons">
              <NavItem>
                <NavLink to="/" className="nav-link">
                  <AiOutlineHome />
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink to="/graph" className="nav-link">
                  <VscGraph />
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink to="/bank" className="nav-link">
                  <AiOutlineBank />
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink to="/files" className="nav-link">
                  <AiOutlineFileText />
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink to="/mail" className="nav-link">
                  <AiOutlineMail />
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink to="/meet" className="nav-link">
                  <HiOutlineUserGroup />
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink to="/transactions" className="nav-link">
                  <AiOutlineDollar />
                </NavLink>
              </NavItem>
            </div>

            <div className="user-icons">
              <NavItem>
                <NavLink to="/settings" className="nav-link ">
                  <AiOutlineSetting />
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink to="/profile" className="nav-link">
                  <BiUserCircle />
                </NavLink>
              </NavItem>
            </div>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default SidebarComponent;
