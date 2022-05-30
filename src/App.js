import "./App.css";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import { resumeData } from "./data/resumeData";
import Contact from "./components/Contact";
import About from "./components/About";
import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { MenuOutlined } from "@mui/icons-material";

function App() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
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
          {[
            { text: "About", path: "/about" },
            { text: "Projects", path: "/projects" },
            { text: "Resume", path: "/resume" },
            { text: "Contact", path: "/contact" },
          ].map((item) => (
            <Link
              to={item.path}
              onClick={handleClose}
              style={{ textDecoration: "none" }}
              key={item.text}
            >
              <MenuItem>{item.text}</MenuItem>
            </Link>
          ))}
        </Menu>
      </header>

      <main className="container">
        <div className="row">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/resume" element={<Resume {...resumeData} />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route
              exact
              path="*"
              element={<Navigate to="/about" replace index />}
            />
          </Routes>
        </div>
      </main>
    </Router>
  );
}

export default App;
