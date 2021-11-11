import React, { Component } from "react";

class Search2 extends Component {
  inputRef = React.createRef();

  handleClick = () => {
    const value = this.inputRef.current.value;

    alert(`The value of input field is: ${value}`);
  };

  render() {
    return (
      <>
        <input
          ref={this.inputRef}
          type="text"
          name="username"
          placeholder="Enter Username"
        />
        ;
        <button onClick={this.handleClick} className="btn btn-secondary">
          Click me
        </button>
      </>
    );
  }
}

export default Search2;
