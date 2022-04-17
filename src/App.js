import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ProjectList from "./components/ProjectList";
import Resume from "./components/Resume";

import resumeData from "./data/resumeData.json";
import Contact from "./components/Contact";
import About from "./components/About";
import { useEffect } from "react";
import M from "materialize-css";

function App() {
  useEffect(() => {
    M.AutoInit();
  }, []);
  return (
    <Router>
      <Header>
        <Navigation />
      </Header>
      <main className="container">
        <div className="row">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/projects" element={<ProjectList />} />
            <Route exact path="/resume" element={<Resume {...resumeData} />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
