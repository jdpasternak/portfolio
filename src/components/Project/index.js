import React from "react";
import { formatName } from "../../helpers";

const Project = (project) => {
  const {
    owner,
    name,
    default_branch,
    homepage,
    html_url,
    description,
    language,
  } = project.project;
  return (
    <div className="col s12 m6">
      <div className="card medium">
        <div className="card-image waves-effect waves-block waves-light">
          <img
            src={`https://github.com/${owner.login}/${name}/raw/${default_branch}/assets/images/screenshot.PNG`}
            className="activator"
            alt={`a screenshot of the ${formatName(name)} application`}
          />
        </div>
        <div className="card-content">
          <span className="card-title activator">
            {formatName(name)}
            <i className="material-icons right">more_vert</i>
          </span>
        </div>
        <div className="card-action">
          {homepage ? (
            <a href="{{homepage}}" target="_blank">
              Live Site
            </a>
          ) : (
            <a
              href={`${html_url}/archive/refs/heads/${default_branch}.zip`}
              target="_blank"
              rel="noreferrer"
            >
              Download
            </a>
          )}
          <a href={html_url} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
        <div className="card-reveal">
          <span className="card-title">
            {formatName(name)}
            <i className="material-icons right">close</i>
          </span>
          <p>{description}</p>
          <p>Language: {language}</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
