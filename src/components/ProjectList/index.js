import { Masonry } from "@mui/lab";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Link,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import { formatName } from "../../helpers";
import { Img } from "react-image";

// const Image = (project) => {
//   const { src } = useImage({
//     srcList: [
//       `https://github.com/${project.owner.login}/${project.name}/raw/${project.default_branch}/assets/images/screenshot.PNG`,
//       `${process.env.PUBLIC_URL}/assets/images/image-coming-soon.jpg`,
//     ],
//   });
//   return <CardMedia src={src} />;
// };

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
    <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
      {projects &&
        projects.map((project) => (
          <Card>
            <Img
              src={[
                `https://github.com/${project.owner.login}/${project.name}/raw/${project.default_branch}/assets/images/screenshot.PNG`,
                `${process.env.PUBLIC_URL}/assets/images/image-coming-soon.jpg`,
              ]}
            />
            <CardContent>
              <Typography>{formatName(project.name)}</Typography>
            </CardContent>
            <CardActions>
              {project.homepage ? (
                <Link href={project.homepage} target="_blank" underline="none">
                  <Button>Live Site</Button>
                </Link>
              ) : (
                <Link
                  href={`${project.html_url}/archive/refs/heads/${project.default_branch}.zip`}
                  target="_blank"
                  rel="noreferrer"
                  underline="none"
                >
                  Download
                </Link>
              )}
              <Link
                href={project.html_url}
                target="_blank"
                rel="noreferrer"
                underline="none"
              >
                GitHub
              </Link>
            </CardActions>
          </Card>
        ))}
    </Masonry>
  );
};

export default ProjectList;
