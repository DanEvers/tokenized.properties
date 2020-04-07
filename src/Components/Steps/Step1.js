import React, { Component } from "react";
import { Link } from "react-router-dom";
// import '../../App.css'
import './Steps.css'
// import store from '../../store'

export default class Step1 extends Component {
  constructor() {
    super();
    // const reduxState = store.getState();

    this.state = {
      // name: reduxState.name,
      // address: reduxState.address,
      // city: reduxState.city,
      // state: reduxState.state,
      // zip: reduxState.zip,
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
        Step 1 - Property Data
        <h5>Adress:</h5>
        <input
          value={this.state.address}
          name='address'
          onChange={e => this.handleChange(e, "address")}
        />
        <h5>City:</h5>
        <input
          value={this.state.city}
          name='city'
          onChange={e => this.handleChange(e, "city")}
        />
        <h5>State:</h5>
        <input
          value={this.state.state}
          name='state'
          onChange={e => this.handleChange(e, "state")}
        />
        <h5>Zipcode:</h5>
        <input
          value={this.state.zip}
          name='zip'
          onChange={e => this.handleChange(e, "zipcode")}
        />
        <h5>Description:</h5>
        <input
          value={this.state.description}
          name='description'
          onChange={e => this.handleChange(e, "description")}
        />
        <h5>Year Built:</h5>
        <input
          value={this.state.yearbuilt}
          name='yearbuilt'
          onChange={e => this.handleChange(e, "yearbuilt")}
        />
        <h5>Bedrooms:</h5>
        <input
          value={this.state.bedrooms}
          name='bedrooms'
          onChange={e => this.handleChange(e, "bedrooms")}
        />
        <h5>Bath Rooms:</h5>
        <input
          value={this.state.bathrooms}
          name='bathrooms'
          onChange={e => this.handleChange(e, "bathrooms")}
        />
        <h5>Parking:</h5>
        <input
          value={this.state.parking}
          name='parking'
          onChange={e => this.handleChange(e, "parking")}
        />
        <h5>Heating:</h5>
        <input
          value={this.state.heating}
          name='heating'
          onChange={e => this.handleChange(e, "heating")}
        />
        <h5>Cooling:</h5>
        <input
          value={this.state.cooling}
          name='cooling'
          onChange={e => this.handleChange(e, "cooling")}
        />
        <h5>Size:</h5>
        <input
          value={this.state.size}
          name='size'
          onChange={e => this.handleChange(e, "size")}
        />
        <p>
          <Link to="/Step2">
            <button className="dash_subheader_button">Next Step</button>
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
