import React from "react";
import "./App.css";
import Topbar from "./components/Topbar";
import Aboutme from "./components/Aboutme";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Topbar />
      <Aboutme />
      <Projects />
    </>
  );
}

export default App;
