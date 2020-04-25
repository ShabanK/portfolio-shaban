import React, { useState } from "react";
import { Tooltip, Col } from "reactstrap";

function SkillCard(props) {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);
  return (
    <Col xs="12" sm="3" md="3" xl="3">
      <div>
        <img
          src={props.img}
          alt="nooo"
          id={props.tip}
          height="200"
          width="200"
        />
        <Tooltip
          className="tip"
          placement="top"
          isOpen={tooltipOpen}
          target={props.tip}
          toggle={toggle}
        >
          {props.tip}
        </Tooltip>
      </div>
    </Col>
  );
}

export default SkillCard;
