import EducationCard from "../EducationCard";

const EducationList = ({ data }) => {
  return (
    <div className="row">
      <div id="education" className="col s12 section scrollspy">
        <h2>Education</h2>
        <div className="row">
          {data.map((education) => (
            <EducationCard
              data={education}
              key={education.school + education.degree + education.study}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationList;
