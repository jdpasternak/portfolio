const WorkCard = ({ data }) => {
  const { title, company, location, duration, companySite } = data;
  return (
    <div className="col s12">
      <div className="card">
        <div className="card-content">
          <span className="card-title activator center">
            {title}
            <i className="material-icons right">more_vert</i>
          </span>
        </div>
        <div className="card-reveal">
          <div className="container">
            <div className="row">
              <span className="card-title center">{title}</span>
              <div className="col">
                <p>{company}</p>
                <p>{location}</p>
                <p>{duration}</p>
                <a href={`${companySite}`} target="_blank" rel="noreferrer">
                  View Company Site
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
