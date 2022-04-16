const EducationCard = ({ data }) => {
  const { degree, study, school, graduation, degreeLink, description } = data;
  return (
    <div className="card sticky-action">
      <div className="card-content">
        <span className="card-title">
          <i>{degree}</i>
          <span> in </span>
          <b>{study}</b>
        </span>
        <p>{school}</p>
        <p>{graduation}</p>
      </div>
      <div className="card-action">
        <a href={`${degreeLink}`} target="_blank" rel="noreferrer">
          View Degree Program
        </a>
        <span className="material-icons activator right card-title">
          more_vert
        </span>
      </div>
      <div className="card-reveal">
        <span className="card-title material-icons right">close</span>
        <figure>
          <blockquote cite={`${degreeLink}`}>{description}</blockquote>
          <figcaption>{school}</figcaption>
        </figure>
      </div>
    </div>
  );
};

export default EducationCard;
