import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Steps.css";
import axios from 'axios'
import store, { STEP4 } from "../../Redux/reducer";

export class Step4 extends Component {
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

  upload = async () => {
    // let pricesqft =  price / size;
    // let ipt = price / distribution;
    const {
      address,
      city,
      state,
      zip,
      description,
      yearbuilt,
      bedrooms,
      bathrooms,
      parking,
      heating,
      cooling,
      size,
      price, 
      pricesqft = price / size ,
      distribution,
      ipt = price / distribution,
      user_id
    } = this.state;
    let newObject = {
      address,
      city,
      state,
      zip,
      description,
      yearbuilt,
      bedrooms,
      bathrooms,
      parking,
      heating,
      cooling,
      size,
      price, 
      pricesqft,
      distribution,
      ipt,
    };
    await axios.post(`/api/addNewObject/${user_id}`, newObject);

    // let meesage = JSON.stringify(object)
  };

  render() {
    const { img, address, city, state, zip, description, yearbuilt, bedrooms, bathrooms, parking, heating, cooling, size, price, pricesqft, distribution, ipt } = this.state;
    return (
      <div className="summary-container">
        <h1>Summary</h1>
          {img}
          <br></br>
          Adress: {address}
          <br></br>
          City: {city}
          <br></br>
          State: {state}
          <br></br>
          Zicode:{zip}
          <br></br>
          Description: {description}
          <br></br>
          Year Built:{yearbuilt}
          <br></br>
          Bathrooms: {bathrooms}
          <br></br>
          Bedrooms: {bedrooms}
          <br></br>
          Parking: {parking}
          <br></br>
          Heating: {heating}
          <br></br>
          Cooling: {cooling}
          <br></br>
          Size: {size}
          <br></br>
          Price: {price}
          <br></br>
          Price/Sqft:{pricesqft}
          <br></br>
          Distribution: {distribution}
          <br></br>
          IPT: {ipt}
          <br></br>
          <p>
          <Link to="/Step3"><button>Back</button></Link>
          <button onclick={this.upload} className="dash_subheader_button">
            <h1>Upload into the IOTA Tangle</h1>
          </button> 
        </p>
      </div>
    );
  }
}

export default Step4;