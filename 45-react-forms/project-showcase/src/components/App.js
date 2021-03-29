import React, { useState } from "react";
import Header from "./Header";
import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";

function App() {
  const [projects, setProjects] = useState([]); // {}, null, empty array
  const [isDarkMode, setIsDarkMode] = useState(true);

  // TODO: replace this with useEffect
  function handleFetchProjects() {
    fetch("http://localhost:4000/projects")
      .then((r) => r.json())
      .then((projectArray) => {
        setProjects(projectArray);
      });
  }

  function handleToggleDarkMode() {
    setIsDarkMode(!isDarkMode);
  }

  function handleAddProject(newProject) {
    const newProjects = [...projects, newProject];
    setProjects(newProjects);

    // this won't work :(
    // projects.push(newProject)
    // setProjects(projects)
  }

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header
        name="Flatiron Projects"
        isDarkMode={isDarkMode}
        onToggleDarkMode={handleToggleDarkMode}
      />

      <ProjectForm onAddProject={handleAddProject} />

      <button onClick={handleFetchProjects}>Fetch Projects</button>
      <ProjectList projects={projects} />
      {/* {projects ? <ProjectList projects={projects} /> : <h1>Loading...</h1>} */}
    </div>
  );
}

export default App;
