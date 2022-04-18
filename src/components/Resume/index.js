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
        <Link to="/assets/Jake Pasternak.pdf" target="_blank" download>
          Download
        </Link>
        <Summary data={summary} />
        <SkillList data={skills} />
        <CertificationList data={certifications} />
        <WorkList data={work} />
        <EducationList data={education} />
      </div>
    </div>
  );
};

export default Resume;
