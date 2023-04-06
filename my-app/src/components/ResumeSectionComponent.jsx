import React from 'react'
import { Row,Col,OverlayTrigger,Button } from 'react-bootstrap'
import { SlOptionsVertical } from "react-icons/sl";

const ResumeSectionComponent = (props) => {
  return (
    <Row className="section" style={{maxWidth:"18rem"}}>
        <Col xs="auto">
          {props.icon}
        </Col>
        <Col xs="auto">
          <h2>{props.dollar}{props.data}</h2>
          <p style={{width:"9rem"}}>
            {props.text}
          </p>
        </Col>
        <Col>
        <OverlayTrigger trigger="focus" placement="auto" overlay={props.tooltip}>
          <Button
            className="pButton rounded-circle d-inline float-end"
            size="sm"
            variant='dark'
          >
            <SlOptionsVertical />
          </Button>
        </OverlayTrigger>
        </Col>
      </Row>
  )
}

export default ResumeSectionComponent