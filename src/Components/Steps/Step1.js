import React, { Component } from "react";
import { Link } from "react-router-dom";
// import '../../App.css'
import "./Steps.css";
// import axios from "axios";
import store, { STEP1
  // UPDATE_ADDRESS,
  // UPDATE_CITY,
  // UPDATE_STATE,
  // UPDATE_ZIP,
  // UPDATE_DESCRIPTION,
  // UPDATE_YEARBUILT,
  // UPDATE_BEDROOMS,
  // UPDATE_BATHROOMS,
  // UPDATE_PARKING,
  // UPDATE_HEATING,
  // UPDATE_COOLING,
  // UPDATE_SIZE
} from "../../Redux/reducer";
import {connect} from 'react-redux'

class Step1 extends Component {
  constructor(props) {
    super(props);

    const reduxState = store.getState()

    this.state = {
      address: reduxState.address,
      city: reduxState.city,
      state: reduxState.state,
      zip: reduxState.zip,
      description: reduxState.description,
      yearbuilt: reduxState.yearbuilt,
      bedrooms: reduxState.bedrooms,
      bathrooms: reduxState.bathrooms,
      parking: reduxState.parking,
      heating: reduxState.heating,
      cooling: reduxState.cooling,
      size: reduxState.size,
      user_id: this.props.user.user_id
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    store.subscribe(() => {
      let reduxState = store.getState();
      this.setState({
        address: reduxState.address,
        city: reduxState.city,
        state: reduxState.state,
        zip: reduxState.zip,
        description: reduxState.description,
        yearbuilt: reduxState.yearbuilt,
        bedrooms: reduxState.bedrooms,
        bathrooms: reduxState.bathrooms,
        parking: reduxState.parking,
        heating: reduxState.heating,
        cooling: reduxState.cooling,
        size: reduxState.size
      });
    });
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  nextAndUpdate = () => {
    const { address, city, state, zip, description, yearbuilt, bedrooms, bathrooms, parking, heating, cooling, size } = this.state;
    store.dispatch({
      type: STEP1,
      payload: {
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
        size
      }
    });
  };


  // nextAndUpdate = () => {
  //   const { address, city, state, zip } = this.state;
  //   store.dispatch({
  //     type: STEPONE,
  //    const addressAction = {
  //     type: UPDATE_ADDRESS,
  //     payload: this.state.address
  //   };
  //   const cityAction = {
  //     type: UPDATE_CITY,
  //     payload: this.state.city
  //   };
  //   const stateAction = {
  //     type: UPDATE_STATE,
  //     payload: this.state.state
  //   };
  //   const zipAction = {
  //     type: UPDATE_ZIP,
  //     payload: this.state.zip
  //   };
  //   const descriptionAction = {
  //     type: UPDATE_DESCRIPTION,
  //     payload: this.state.description
  //   };
  //   const yearbuiltAction = {
  //     type: UPDATE_YEARBUILT,
  //     payload: this.state.yearbuilt
  //   };
  //   const bedroomsAction = {
  //     type: UPDATE_BEDROOMS,
  //     payload: this.state.bedrooms
  //   };
  //   const bathroomsAction = {
  //     type: UPDATE_BATHROOMS,
  //     payload: this.state.bathrooms
  //   };
  //   const parkingAction = {
  //     type: UPDATE_PARKING,
  //     payload: this.state.parking
  //   };
  //   const heatingAction = {
  //     type: UPDATE_HEATING,
  //     payload: this.state.heating
  //   };
  //   const coolingAction = {
  //     type: UPDATE_COOLING,
  //     payload: this.state.cooling
  //   };
  //   const sizeAction = {
  //     type: UPDATE_SIZE,
  //     payload: this.state.size
  //   };
  //   store.dispatch(addressAction);
  //   store.dispatch(cityAction);
  //   store.dispatch(stateAction);
  //   store.dispatch(zipAction);
  //   store.dispatch(descriptionAction);
  //   store.dispatch(yearbuiltAction);
  //   store.dispatch(bedroomsAction);
  //   store.dispatch(bathroomsAction);
  //   store.dispatch(parkingAction);
  //   store.dispatch(heatingAction);
  //   store.dispatch(coolingAction);
  //   store.dispatch(sizeAction);
  // };


// axios post
  // addNewObject = async () => {
  //   const {
  //     address,
  //     city,
  //     state,
  //     zip,
  //     description,
  //     yearbuilt,
  //     bedrooms,
  //     bathrooms,
  //     parking,
  //     heating,
  //     cooling,
  //     size,
  //     user_id
  //   } = this.state;
  //   let newObject = {
  //     address,
  //     city,
  //     state,
  //     zip,
  //     description,
  //     yearbuilt,
  //     bedrooms,
  //     bathrooms,
  //     parking,
  //     heating,
  //     cooling,
  //     size
  //   };
  //   await axios.post(`/api/addNewObject/${user_id}`, newObject);
  // };

  render() {
    return (
      <div className="container">
       Step 1 - Property Information
          <h5>Adress:</h5>
          <input
            value={this.state.address}
            name="address"
            onChange={this.handleChange}
          />
          <h5>City:</h5>
          <input
            value={this.state.city}
            name="city"
            onChange={this.handleChange}
          />
          <h5>State:</h5>
          <input
            value={this.state.state}
            name="state"
            onChange={this.handleChange}
          />
          <h5>Zipcode:</h5>
          <input
            value={this.state.zip}
            name="zip"
            onChange={this.handleChange}
          />
          <h5>Description:</h5>
          <input
            value={this.state.description}
            name="description"
            onChange={this.handleChange}
          />
          <h5>Year Built:</h5>
          <input
            value={this.state.yearbuilt}
            name="yearbuilt"
            onChange={this.handleChange}
          />
          <h5>Bedrooms:</h5>
          <input
            value={this.state.bedrooms}
            name="bedrooms"
            onChange={this.handleChange}
          />
          <h5>Bath Rooms:</h5>
          <input
            value={this.state.bathrooms}
            name="bathrooms"
            onChange={this.handleChange}
          />
          <h5>Parking:</h5>
          <input
            value={this.state.parking}
            name="parking"
            onChange={this.handleChange}
          />
          <h5>Heating:</h5>
          <input
            value={this.state.heating}
            name="heating"
            onChange={this.handleChange}
          />
          <h5>Cooling:</h5>
          <input
            value={this.state.cooling}
            name="cooling"
            onChange={this.handleChange}
          />
          <h5>Size:</h5>
          <input
            value={this.state.size}
            name="size"
            onChange={this.handleChange}
          />
          <p>
            <Link to="/Step2">
              <button
                onClick={this.nextAndUpdate}
                className="dash_subheader_button"
              >
                Next Step
              </button>
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

const mapStatetoProps = (state) => state;

const mapDispatchtoProps = {
  STEP1
};

export default connect(mapStatetoProps, mapDispatchtoProps)(Step1);