import React from "react";
import { Button } from "reactstrap";

function ProjectCard(props) {
  return (
    <>
      <img src={props.img} alt="NOOO" />
      <h3>{props.title}</h3>
      <h4>Tech used: {props.tech}</h4>
      <p>{props.desc}</p>
      {props.live ? (
        <a href={props.live}>
          <Button>LIVE VERSION</Button>
        </a>
      ) : (
        <></>
      )}
      <a href={props.git}>
        <Button>GIT</Button>
      </a>
    </>
  );
}

export default ProjectCard;
