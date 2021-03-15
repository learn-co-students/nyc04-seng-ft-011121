import ProjectItem from "./ProjectItem";

const projects = [
  "PomodorApp",
  "GameBoyzArcade",
  "BeanTracker",
  "Trivianator",
  "Fitness Guru",
  "Fitness Guru 2",
];

function ProjectList() {
  // ["str", "str", "str"] => [<ProjectItem />, <ProjectItem />, <ProjectItem />]

  const projectList = projects.map((project) => (
    <ProjectItem key={project} name={project} />
  ));

  console.log(projectList);

  return (
    <>
      <h1>ProjectList</h1>
      {projectList}
    </>
  );
}

export default ProjectList;
