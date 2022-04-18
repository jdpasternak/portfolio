const CertificationCard = ({ data }) => {
  const { logo, name, link } = data;
  return (
    <div className="col s12 m4">
      <div className="card small">
        <div className="card-image">
          <img src={`${process.env.PUBLIC_URL + logo}`} alt={`${name} logo`} />
        </div>
        <div className="card-content">
          <span className="card-title">{name}</span>
        </div>
        <div className="card-action">
          <a href={`${link}`} target="_blank" rel="noreferrer">
            View on Credly
          </a>
        </div>
      </div>
    </div>
  );
};

export default CertificationCard;
