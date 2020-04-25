import React from "react";
import "./App.css";
import Topbar from "./components/Topbar";
import Aboutme from "./components/Aboutme";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Topbar />
      {/* <Aboutme />
      <Projects /> */}
      <Skills />
    </>
  );
}

export default App;
