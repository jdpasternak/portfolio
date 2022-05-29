import "./App.css";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import ProjectList from "./components/ProjectList";
import Resume from "./components/Resume";
import { resumeData } from "./data/resumeData";
import Contact from "./components/Contact";
import About from "./components/About";
import { Box, Button, Menu, MenuItem, Link, Paper } from "@mui/material";
import { useState } from "react";
import { MenuOutlined } from "@mui/icons-material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function App() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });

  return (
    <ThemeProvider
      theme={
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? darkTheme
          : lightTheme
      }
    >
      <Paper elevation={0}>
        <Router>
          <header>
            <Button
              id="menu-button"
              aria-controls={open ? "menu" : undefined}
              arial-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <MenuOutlined />
            </Button>
            <Menu
              id="menu"
              aria-labelledby="menu-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <Link to="/about" underline="none">
                <MenuItem>About</MenuItem>
              </Link>
              <Link to="/projects" underline="none">
                <MenuItem>Projects</MenuItem>
              </Link>
              <Link to="/resume" underline="none">
                <MenuItem>Resume</MenuItem>
              </Link>
              <Link to="/contact" underline="none">
                <MenuItem>Contact</MenuItem>
              </Link>
            </Menu>
          </header>

          <main className="container">
            <div className="row">
              <Routes>
                <Route exact path="/about" element={<About />} />
                <Route exact path="/projects" element={<ProjectList />} />
                <Route
                  exact
                  path="/resume"
                  element={<Resume {...resumeData} />}
                />
                <Route exact path="/contact" element={<Contact />} />
                <Route
                  exact
                  path="*"
                  element={<Navigate to="/about" replace index />}
                />
              </Routes>
            </div>
          </main>
          <Box height={20}></Box>
        </Router>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
