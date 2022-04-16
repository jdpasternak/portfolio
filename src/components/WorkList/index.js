import WorkCard from "../WorkCard";

const WorkList = ({ data }) => {
  return (
    <div className="row">
      <div id="work" className="col s12 section scrollspy">
        <h2>Work Experience</h2>
        {data.map((work) => (
          <WorkCard data={work} key={work.company + work.title} />
        ))}
      </div>
    </div>
  );
};

export default WorkList;
