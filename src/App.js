import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ProjectList from "./components/ProjectList";
import Resume from "./components/Resume";

import resumeData from "./data/resumeData.json";

function App() {
  return (
    <Router>
      <Header>
        <Navigation />
      </Header>
      <main className="container">
        <div className="row">
          <Routes>
            <Route exact path="/projects" element={<ProjectList />} />
            <Route exact path="/resume" element={<Resume {...resumeData} />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
