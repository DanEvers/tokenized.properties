import React, { Component } from "react";
import axios from "axios";
import "./Objects.css";
import { connect } from "react-redux";
import { getSession } from '../../Redux/reducer'

class Objects extends Component {
  constructor() {
    super();
    this.state = {
      objects: [],
    //   user_id: this.props.user.user_id
    };
  }

  componentDidMount() {
    this.getUserObjects();
    console.log(this.state)
    console.log(this.props)
  }

  getUserObjects = async () => {
    const objects = await axios.get(`/api/objects/${this.props.user.user_id}`);
    this.setState({
      objects: objects.data
    });
  };

  render() {
    // console.log(this.state.objects);
    const mappedObjects = this.state.objects.map(object => {
      return (
        <div className="objects-container">
          <img className="img-container" alt="Object" src={object.img} />
          <div>
            <h2><span className="categoryHeader">Address:</span> {object.address}</h2>
            <h2><span className="categoryHeader">City:</span> {object.city}</h2>
            <h2><span className="categoryHeader">State:</span> {object.state}</h2>
            <h2><span className="categoryHeader">Zipcode:</span> {object.zip}</h2>
            <h2><span className="categoryHeader">Description:</span> {object.descriptiom}</h2>
            <h2><span className="categoryHeader">Year Built:</span> {object.yearbuilt}</h2>
            <h2><span className="categoryHeader">Bedrooms:</span> {object.bedrooms}</h2>
            <h2><span className="categoryHeader">Bathrooms:</span> {object.bathrooms}</h2>
            <h2><span className="categoryHeader">Parking:</span> {object.parking}</h2>
            <h2><span className="categoryHeader">Heating:</span> {object.heating}</h2>
            <h2><span className="categoryHeader">Cooling:</span> {object.cooling}</h2>
            <h2><span className="categoryHeader">Size:</span> {object.size}</h2>
            <h2><span className="categoryHeader">Price:</span> {object.price}</h2>
            <h2><span className="categoryHeader">Price/Sqft:</span> {object.pricesqft}</h2>
            <h2><span className="categoryHeader">Distribution:</span> {object.distribution}</h2>
            <h2><span className="categoryHeader">IPT:</span> {object.ipt}</h2>
          </div>
        </div>
      );
    });
    return <div>{mappedObjects}</div>;
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
  getSession,
};

export default connect(mapStateToProps, mapDispatchToProps)(Objects);
