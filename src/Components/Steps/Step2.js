import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import "./Steps.css";
// import axios from 'axios'
import store from "../../Redux/store";
import { STEP2 } from "../../Redux/reducer";
import {connect} from 'react-redux'

class Step2 extends Component {
  constructor(props) {
    super(props);
    const reduxState = store.getState();

    this.state = {
      img: reduxState.img
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, name) {
    const value = e.target.value;
    this.setState({ [name]: value });
    // console.log(this.state);
  }

  // editObject = async () => {
  //   const { img } = this.state;
  //   let object_id = this.state.object[0].object_id;
  //   let updatedObject = { img };
  //   axios.put(`/api/editObject/${object_id}`, updatedObject)
  // }

  nextStep = () => {
    window.location = "/Step3";
  };

  dispatchState = () => {
    const { img } = this.state;
    store.dispatch({
      type: STEP2,
      payload: {
        img
      }
    });
    // this.props.history.push("/Step3");
  };

  componentDidMount() {
    let reduxState = store.getState();
    store.subscribe(() => {
      this.setState({
        img: reduxState.img,
        user: reduxState.user.user_id
      });
      // console.log('componentdidmtnt state/props', this.state, this.props)
      // console.log('componentdidmtnt reduxState', reduxState)
    });
  }

  render() {
    return (
      <div className="container">
      <form onSubmit={this.nextStep}>
        Step 2 - Image Upload
        <h5>Image:</h5>
        <input
          value={this.state.img}
          name="img"
          onChange={e => this.handleChange(e, "img")}
        />
        <p>
          <Link to="/Step3">
          <button
            onClick={this.dispatchState}
            className="dash_subheader_button"
          >
            Next Step
          </button>
          </Link>
        </p>
        <p>
          {/* <Link to="/Step1"> */}
          <button
            onclick={this.props.history.push("/Step1")}
            className="dash_subheader_button"
          >
            Back
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

// const mapDispatchtoProps = {
//   STEP2
// };

// connect(mapStatetoProps)(Step2);
export default Step2;
