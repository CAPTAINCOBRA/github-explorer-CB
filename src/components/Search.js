import React, { Component } from "react";
import { withRouter } from "react-router";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: props.username || "",
    };
  }

  // state = {
  //   username: "",
  // };

  handleChange = (e) => {
    this.setState({ username: e.target.value });
  };

  render() {
    const { username } = this.state;
    const { history } = this.props;

    return (
      <div className="bg-dark">
        <div className="container py-4">
          <div className="row">
            <div className="col-8 offset-2 text-center">
              <div className="row">
                <div className="col-9">
                  <input
                    className="form-control"
                    value={username}
                    type="text"
                    name="username"
                    placeholder="Enter Username"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="col-3">
                  <button
                    onClick={() => history.push(`/${username}`)}
                    className="btn btn-large btn-success"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Search);
