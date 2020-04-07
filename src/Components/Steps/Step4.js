import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Steps.css";

export class Step4 extends Component {
  constructor() {
    super();

    this.state = {};
  }

  handleChange(e, name) {
    const value = e.target.value;
    this.setState({ [name]: value });
    console.log(this.state);
  }

  render() {
    return (
      <div className="summary-container">
        Summary
        <p>
          <Link to="/Step3"><button>Back</button></Link>
          <button className="dash_subheader_button">
            Upload into the IOTA Tangle
          </button> 
        </p>
      </div>
    );
  }
}

export default Step4;
