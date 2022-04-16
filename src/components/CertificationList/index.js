import CertificationCard from "../CertificationCard";

const CertificationList = ({ data }) => {
  return (
    <div className="row">
      <div id="certifications" className="col s12 section scrollspy">
        <h2>Certifications</h2>
        {data.map((certification) => (
          <CertificationCard data={certification} key={certification.name} />
        ))}
      </div>
    </div>
  );
};

export default CertificationList;
