import Summary from "../Summary";
import SkillList from "../SkillList";
import CertificationList from "../CertificationList";
import WorkList from "../WorkList";
import EducationList from "../EducationList";


import { Link } from "react-router-dom";

const Resume = (resumeData) => {
  const { summary, skills, certifications, work, education } = resumeData;

  return (
    <div className="row">
      <div className="col s12 m9 l10">
        <Summary data={summary} />
        <SkillList data={skills} />
        <CertificationList data={certifications} />
        <WorkList data={work} />
        <EducationList data={education} />
      </div>
      <div className="col hide-on-small-only m3 l2 fixed">
        <ul className="section table-of-contents">
          <li>
            <a href="#summary">Summary</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#certifications">Certifications</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <Link
              to="/assets/Jake Pasternak.pdf"
              className="btn white-text"
              target="_blank"
              download
            >
              Download
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Resume;
