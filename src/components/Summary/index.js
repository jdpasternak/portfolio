const Summary = ({ data }) => {
  return (
    <div className="row">
      <div id="summary" className="col s12 section scrollspy">
        <h2>Summary</h2>
        <div className="card">
          <div className="card-content">
            <p>{data}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
