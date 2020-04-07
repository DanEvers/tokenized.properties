import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../../App.css'
// import store from '../../store'
import './Steps.css'

export default class Step2 extends Component {
  constructor() {
    super();

    this.state = {
      img: ""
    };
  }

  handleChange(e, name) {
    const value = e.target.value;
    this.setState({ [name]: value });
    console.log(this.state);
  }

  render() {
    return (
      <div className='container'>
        Step 2 - Image Upload
        <h5>Image:</h5>
        <input
          value={this.state.img}
          onChange={e => this.handleChange(e, "img")}
        />
        <p>
          <Link to="/Step3">
            <button className="dash_subheader_button">Next Step</button>
          </Link>
        </p>
        <p>
          <Link to="/Step1">
            <button className="dash_subheader_button">Back</button>
          </Link>
        </p>
        <p>
          <Link to="/Objects">
            <button className="dash_subheader_button_cancel">Cancel</button>
          </Link>
        </p>
      </div>
    );
  }
}
