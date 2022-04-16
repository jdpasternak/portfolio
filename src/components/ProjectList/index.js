import { useEffect, useState } from "react";
import Project from "../Project";

const ProjectList = () => {
  const [projects, setProjects] = useState();

  useEffect(() => {
    fetch(
      "https://api.github.com/users/jdpasternak/repos?sort=updated&per_page=100"
    )
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);
  console.log(projects);
  return (
    <div>
      {projects && projects.map((project) => <Project project={project} />)}
    </div>
  );
};

export default ProjectList;
