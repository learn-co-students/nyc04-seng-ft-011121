// import React from "react"
import "./App.css";
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

// it must return JSX
// it must start with a capital letter
function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <Header />
      <ProjectForm />
      <ProjectList />
    </div>
  );
}

export default App;
