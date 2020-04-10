import React, { Component } from "react";
import { Link } from "react-router-dom";
// import '../../App.css'
import "./Steps.css";
// import axios from "axios";
import store from "../../Redux/store";
import { STEP1 } from "../../Redux/reducer";
import { connect } from 'react-redux'

class Step1 extends Component {
  constructor(props) {
    super(props);
    const reduxState = store.getState();

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
      user: reduxState.user.user_id
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  nextStep = () => {
    window.location = "/Step2";
  };

  dispatchState = () => {
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
      size
    } = this.state;
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
    this.props.history.push("/Step2");
  };

  componentDidMount() {
    let reduxState = store.getState();
    store.subscribe(() => {
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
        size: reduxState.size,
        user: reduxState.user.user_id
      });
      // console.log('componentdidmtnt state/props', this.state, this.props)
      // console.log('componentdidmtnt reduxState', reduxState)
    });
  }

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
      <form onSubmit={this.nextStep}>
        Step 1 - Property Information
        <h5>Address:</h5>
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
        onChange={this.handleChange} />
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
          {/* <Link to="/Step2"> */}
          <button
            onClick={this.dispatchState}
            className="dash_subheader_button"
          >
            Next Step
          </button>
          {/* </Link> */}
        </p>
        <p>
          <Link to="/Objects">
            <button className="dash_subheader_button_cancel">Cancel</button>
          </Link>
        </p>
        </form>
      </div>
    );
  }
}

// const mapStatetoProps = (state) => state;
// // const mapStatetoProps = (state) => {
// //   return {
// //     object: state.reducer
// //   }
// // }

// const mapDispatchtoProps = {
//   step1
// };

// export default connect(mapStatetoProps, mapDispatchtoProps)(Step1);
export default Step1;
