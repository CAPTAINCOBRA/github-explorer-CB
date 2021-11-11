import React from "react";

const UserCard = ({ user }) => {
  return (
    // <div>
    <div className="card mb-4">
      <div className="card-body">
        <div className="d-flex">
          <img
            src={user.avatar_url}
            alt="User Avatar"
            className="img-round user-image mr-5"
          />
          <div className="mx-auto">
            <h1>{user.name}</h1>
            <p className="mb-0 font-italic">{user.company}</p>
            <p className="mb-0">{user.bio}</p>
            <p className="mb-0">{user.email}</p>
            <p className="mb-0">Repos: {user.public_repos}</p>
            <p className="mb-0">{user.location}</p>
            <p className="mb-0">
              {user.twitter_username
                ? `https://twitter.com/${user.twitter_username}`
                : ""}
            </p>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default UserCard;
