import React, { Component } from "react";
import "./Objects.css";
import { Link } from "react-router-dom";

export class Objects extends Component {
  constructor(props) {
    super(props);

    this.state = {
        objects: [],
        user_id: this.props.user_id
    //   img: "",
    //   address: "",
    //   city: "",
    //   state:"",
    //   zip: "",
    //   description: "",
    //   yearbuilt: "",
    //   bedrooms: "",
    //   bathrooms: "",
    //   parking: "",
    //   heating: "",
    //   cooling: "",
    //   size: "",
    //   pricesqft: "",
    //   price: "",
    //   distribution: ""
    };
  }


  render() {
    const { objects } = this.props;
    return (
      <div className="objects-container">
        <h1>Your Properties for listing</h1>
        <div className="image-container">
          <img src={objects.img} alt="objects" />
        </div>
        <div className="text-container">
          <h4>Address: {objects.address}</h4>
          <h4>City: {objects.city}</h4>
          <h4>State: {objects.state}</h4>
          <h4>Zip: {objects.zip}</h4>
          <h4>Year Built: {objects.yearbuilt}</h4>
          <h4>Bedrooms: {objects.bedrooms}</h4>
          <h4>Bathrooms: {objects.bathrooms}</h4>
          <h4>Parking: {objects.parking}</h4>
          <h4>Heating: {objects.heating}</h4>
          <h4>Cooling: {objects.cooling}</h4>
          <h4>Size: {objects.size}</h4>
          <h4>Price: {objects.pricesqft}</h4>
          <h4>Distribution: {objects.distribution}</h4>
        </div>
        <div className="delete-container">
          <button onClick={() => this.props.deleteobjects(objects.id)}>
            Delete
          </button>

        <Link to="/steps/step1">
          <button className="dash_subheader_button">Add New Property</button>
        </Link>

        </div>
      </div>
    );
  }
}

export default Objects;