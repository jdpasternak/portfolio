const ContactCard = ({ data }) => {
  const { link, linkText, icon } = data;
  return (
    <div className="col s12 m3">
      <div className="card">
        <a href={`${link}`} target="_blank" rel="noreferrer">
          <div className="card-content center">
            <span
              className="card-title center"
              dangerouslySetInnerHTML={{ __html: icon }}
            ></span>
            <div className="center">{linkText}</div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ContactCard;
