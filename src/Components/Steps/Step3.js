import React, { Component } from "react";
import {Link} from 'react-router-dom'
import './Steps.css'

export class Step3 extends Component {
  constructor() {
    super();

    this.state = {

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
        Step 3 - Value Distribution
        {/* <h5>pricesqft:</h5>
        <input
          value={this.state.pricesqft}
          onChange={e => this.handleChange(e, "pricesqft")}
        /> */}
        <h5>Price:</h5>
        <input
          value={this.state.price}
          onChange={e => this.handleChange(e, "price")}
        />
        <h5>Distribution:</h5>
        <input
          value={this.state.distribution}
          onChange={e => this.handleChange(e, "distribution")}
        />
        <p>
          <Link to="/Step4">
            <button className="dash_subheader_button">Summary</button>
          </Link>
        </p>
        <p>
          <Link to="/Step2">
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

export default Step3;
