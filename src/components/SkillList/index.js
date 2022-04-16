const SkillList = ({ data }) => {
  return (
    <div className="row">
      <div id="skills" className="col s12 section scrollspy">
        <h2>Skills and Familiar Technologies</h2>
        <ul className="collapsible">
          {data.map((skillGroup) => (
            <li key={skillGroup.group}>
              <div className="collapsible-header">{skillGroup.group}</div>
              <div className="collapsible-body">
                <ul className="collection">
                  {skillGroup.skillsList.map((skill) => (
                    <li className="collection-item" key={skill}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default SkillList;
