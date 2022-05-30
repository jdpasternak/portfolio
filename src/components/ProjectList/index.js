import { Masonry } from "@mui/lab";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Link,
  Button,
  Container,
  ButtonGroup,
  Menu,
  MenuItem,
} from "@mui/material";
import { useEffect, useState } from "react";
import { formatName } from "../../helpers";
import { Img, useImage } from "react-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import {
  faCss3,
  faHtml5,
  faJava,
  faJs,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import { Box } from "@mui/system";
import { Filter, FilterAlt } from "@mui/icons-material";

const Image = ({ project }) => {
  const { src } = useImage({
    srcList: [
      `https://github.com/${project.owner.login}/${project.name}/raw/${project.default_branch}/assets/images/screenshot.PNG`,
      `${process.env.PUBLIC_URL}/assets/images/image-coming-soon.jpg`,
    ],
  });
  return <img src={src} alt={project.name} width="100%" />;
};

const ProjectList = () => {
  const [displayedProjects, setDisplayedProjects] = useState([]);
  const [allProjects, setAllProjects] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleOpenFilterMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleCloseFilterMenu = (e) => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  useEffect(() => {
    fetch(
      "https://api.github.com/users/jdpasternak/repos?sort=updated&per_page=100"
    )
      .then((response) => response.json())
      .then((data) => {
        setAllProjects(data);
        setDisplayedProjects(data);
      });
  }, []);

  const filterProjects = (e) => {
    setDisplayedProjects(
      allProjects.filter(
        (project) => project.language === e.target.dataset.value
      )
    );
  };

  const langToIcon = {
    Java: faJava,
    HTML: faHtml5,
    JavaScript: faJs,
    CSS: faCss3,
    Python: faPython,
  };

  return (
    <Container>
      <Box sx={{ mb: 2, display: { xs: "none", md: "block" } }}>
        <ButtonGroup variant="contained">
          <Button onClick={() => setDisplayedProjects(allProjects)}>
            All Projects
          </Button>
          {allProjects &&
            Array.from(
              new Set(allProjects.map((project) => project.language))
            ).map(
              (l) =>
                l && (
                  <Button key={l} data-value={l} onClick={filterProjects}>
                    {l} Projects
                  </Button>
                )
            )}
        </ButtonGroup>
      </Box>
      <Button
        sx={{ display: { xs: "block", md: "none" } }}
        onClick={handleOpenFilterMenu}
      >
        <FilterAlt />
      </Button>
      <Menu anchorEl={anchorEl} open={open}>
        <MenuItem
          onClick={(e) => {
            setDisplayedProjects(allProjects);
            handleCloseFilterMenu();
          }}
        >
          All Projects
        </MenuItem>
        {allProjects &&
          Array.from(
            new Set(allProjects.map((project) => project.language))
          ).map(
            (l) =>
              l && (
                <MenuItem
                  key={l}
                  data-value={l}
                  onClick={(e) => {
                    handleCloseFilterMenu();
                    filterProjects(e);
                  }}
                >
                  {l} Projects
                </MenuItem>
              )
          )}
      </Menu>
      <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
        {displayedProjects &&
          displayedProjects
            .filter((project) => !project.fork)
            .map((project) => (
              <Card key={project.name}>
                {project.homepage ? (
                  <Link
                    href={project.homepage}
                    target="_blank"
                    underline="none"
                  >
                    <Image project={project} />
                  </Link>
                ) : (
                  <Link
                    href={`${project.html_url}/archive/refs/heads/${project.default_branch}.zip`}
                    target="_blank"
                    rel="noreferrer"
                    underline="none"
                  >
                    <Image project={project} />
                  </Link>
                )}
                <CardContent>
                  <Typography>
                    <FontAwesomeIcon icon={langToIcon[project.language]} />{" "}
                    {formatName(project.name)}
                  </Typography>
                </CardContent>
                <CardActions>
                  {project.homepage ? (
                    <Link
                      href={project.homepage}
                      target="_blank"
                      underline="none"
                    >
                      <Button>Live Site</Button>
                    </Link>
                  ) : (
                    <Link
                      href={`${project.html_url}/archive/refs/heads/${project.default_branch}.zip`}
                      target="_blank"
                      rel="noreferrer"
                      underline="none"
                    >
                      <Button>Download</Button>
                    </Link>
                  )}
                  <Link
                    href={project.html_url}
                    target="_blank"
                    rel="noreferrer"
                    underline="none"
                  >
                    <Button>GitHub</Button>
                  </Link>
                </CardActions>
              </Card>
            ))}
      </Masonry>
    </Container>
  );
};

export default ProjectList;
