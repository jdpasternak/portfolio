import "./App.css";
import {
  BrowserRouter as Router,
  Link,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Footer from "./components/Footer";
import ProjectList from "./components/ProjectList";
import Resume from "./components/Resume";
import { resumeData } from "./data/resumeData";
import Contact from "./components/Contact";
import About from "./components/About";
import { Button, Menu, MenuItem, useMediaQuery } from "@mui/material";
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
            <Link to="/about">
              <MenuItem>About</MenuItem>
            </Link>
            <Link to="/projects">
              <MenuItem>Projects</MenuItem>
            </Link>
            <Link to="/resume">
              <MenuItem>Resume</MenuItem>
            </Link>
            <Link to="/contact">
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
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
