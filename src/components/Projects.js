import React from "react";
import ProjectCard from "./ProjectCard";
import chatappimg from "../static/chatapp.jpg";
import calculatorimg from "../static/calculator.jpg";
import githubbattleimg from "../static/github-react.jpg";
import reactmemeimg from "../static/reactmeme.jpg";
import shopimg from "../static/shoppinglist.jpg";
import todoimg from "../static/todo-mern.jpg";

function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <ProjectCard
        img={todoimg}
        title="MERN To-do List"
        tech="Reactjs, Expressjs, MongoDB"
        desc="My first full-stack application. It's simple yet I think it reflects most of the core concepts of full-stack development nicely. Wraps them up in a metaphorical bow. I used the two-repo method (split the front and back end into seperate repos)."
        live="https://shoppinglistwasntavailable.herokuapp.com/"
        git="https://github.com/ShabanK/todo-mern"
      />
      <ProjectCard
        img={shopimg}
        title="Electronjs Shopping List"
        tech="Electronjs"
        desc="A simple desktop shopping list app made using Electronjs."
        git="https://github.com/ShabanK/electron-shoppinglist"
      />
      <ProjectCard
        img={chatappimg}
        title="Chat Application"
        tech="Express.js, Socket.io"
        desc="A simple chat application made by primarily using Socket.io"
        git="https://github.com/ShabanK/websockets-tutorial"
      />
      <ProjectCard
        img={githubbattleimg}
        title="Github-Api React App"
        tech="Reactjs, axios"
        desc="My first React application, which focuses on fetching data from the Github API, and passing it down as props."
        git="https://github.com/ShabanK/github-battle-v2"
      />
      <ProjectCard
        img={reactmemeimg}
        title="React Meme Generator"
        tech="Reactjs, axios"
        desc="Another React application that fetches an image from a random meme image API."
        git="https://github.com/ShabanK/react-meme-generator"
      />
      <ProjectCard
        img={calculatorimg}
        title="Calculator"
        tech="HTML, CSS, Flexbox"
        desc="One of the earliest things I built, as a way to practice responsive layouts"
        git="https://github.com/ShabanK/calculator-app"
      />
    </>
  );
}

export default Projects;
