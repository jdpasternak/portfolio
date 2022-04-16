import Summary from "../Summary";
import SkillList from "../SkillList";
import CertificationList from "../CertificationList";
import WorkList from "../WorkList";
import EducationList from "../EducationList";

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
    </div>
  );
};

export default Resume;
