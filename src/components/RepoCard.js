import React from "react";

const RepoCard = ({ repo }) => (
  <div className="card mb-4">
    <div className="card-body">
      <a href={repo.html_url} target="_blank">
        <h3>{repo.full_name}</h3>
        {console.log("Repo Component Rendered")}
        <div className="row">
          <div className="col">
            <p>
              <strong>Stars:</strong> {repo.stargazers_count}
            </p>
            <p className="mb-0">
              <strong>Watchers:</strong>
              {repo.watchers_count}
            </p>
          </div>
          <div className="col">
            <p>
              <strong>Private:</strong> {repo.private ? "Yes" : "No"}
            </p>
            {/* <p className="mb-0">
              <strong>Watchers:</strong>
              {repo.watchers_count}
            </p> */}
          </div>
        </div>
      </a>
    </div>
  </div>
);

export default RepoCard;
