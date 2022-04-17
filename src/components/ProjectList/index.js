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
  return (
    <div>
      {projects &&
        projects.map((project) => (
          <Project project={project} key={project.name} />
        ))}
    </div>
  );
};

export default ProjectList;
