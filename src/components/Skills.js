import React from "react";
import { Container, Row } from "reactstrap";
import SkillCard from "./SkillCard";
import reactlogo from "../static/logos/react.png";
import jslogo from "../static/logos/js.png";
import nodelogo from "../static/logos/node2.png";
import expresslogo from "../static/logos/express.png";
import mongologo from "../static/logos/mongo.jpg";
import socketlogo from "../static/logos/socketio.png";
import electronlogo from "../static/logos/electronjs.png";
import htmllogo from "../static/logos/html.png";
import csslogo from "../static/logos/css.jpg";
import bootstraplogo from "../static/logos/boots.png";
import gitlogo from "../static/logos/git.png";
import postmanlogo from "../static/logos/postman.png";

function Skills() {
  return (
    <div id="skills">
      <h3>Skill Set</h3>
      <Container>
        <Row>
          <SkillCard img={jslogo} tip="Javascript" />
          <SkillCard img={reactlogo} tip="React" />
          <SkillCard img={nodelogo} tip="NodeJS" />
          <SkillCard img={expresslogo} tip="ExpressJS" />
        </Row>
        <Row>
          <SkillCard img={mongologo} tip="MongoDB" />
          <SkillCard img={electronlogo} tip="ElectronJS" />
          <SkillCard img={socketlogo} tip="Socketio" />
          <SkillCard img={gitlogo} tip="Git" />
        </Row>
        <Row>
          <SkillCard img={postmanlogo} tip="Postman" />
          <SkillCard img={htmllogo} tip="HTML" />
          <SkillCard img={csslogo} tip="CSS" />
          <SkillCard img={bootstraplogo} tip="Bootstrap" />
        </Row>
      </Container>
    </div>
  );
}

export default Skills;
