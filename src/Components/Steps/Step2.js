import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../../App.css'
import store from '../../store'

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
      <div>
        Step 2
        <h5>Image:</h5>
        <input
          value={this.state.img}
          onChange={e => this.handleChange(e, "img")}
        />
        <p>
          <Link to="/steps/step3">
            <button className="dash_subheader_button">Next Step</button>
          </Link>
        </p>
        <p>
          <Link to="/">
            <button className="dash_subheader_button_cancel">Cancel</button>
          </Link>
        </p>
      </div>
    );
  }
}
