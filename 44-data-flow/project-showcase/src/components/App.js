import React, { useState } from "react";
import Header from "./Header";
import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";

// TODO: replace this with a fetch request (eventually)
import projectData from "../data/projects";

// when deciding where state should go:
// - figure out which components need it (ProjectForm, ProjectList)
// - find the closest common parent to those components

function App() {
  const [projects, setProjects] = useState(projectData);
  const [isDarkMode, setIsDarkMode] = useState(true);

  function handleToggleDarkMode() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header
        name="Flatiron Projects"
        isDarkMode={isDarkMode}
        onToggleDarkMode={handleToggleDarkMode}
      />
      <ProjectForm />
      <ProjectList projects={projects} />
    </div>
  );
}

export default App;
