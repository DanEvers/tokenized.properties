import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Steps.css";
import store from "../../Redux/store";
import { STEP3 } from "../../Redux/reducer";
// import {connect} from 'react-redux'

class Step3 extends Component {
  constructor(props) {
    super(props);
    const reduxState = store.getState();

    this.state = {
      price: reduxState.price,
      distribution: reduxState.distribution
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, name) {
    const value = e.target.value;
    this.setState({ [name]: value });
    // console.log(this.state);
  }

  nextStep = () => {
    window.location = "/Step4";
  };

  dispatchState = () => {
    const { price, distribution } = this.state;
    store.dispatch({
      type: STEP3,
      payload: {
        price,
        distribution
      }
    });
    this.props.history.push("/Step4");
  };

  componentDidMount() {
    const reduxState = store.getState();
    store.subscribe(() => {
      this.setState({
        price: reduxState.price,
        distribution: reduxState.distribution
      });
      console.log("componentdidmtnt state", this.state);
      console.log("componentdidmtnt props", this.props);
      console.log("componentdidmtnt reduxState", reduxState);
    });
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.nextStep}>
          Step 3 - Value Distribution
          {/* <h5>pricesqft:</h5>
        <input
          value={this.state.pricesqft}
          onChange={e => this.handleChange(e, "pricesqft")}
        /> */}
          <h5>Price:</h5>
          <input
            value={this.state.price}
            name="price"
            onChange={e => this.handleChange(e, "price")}
          />
          <h5>Distribution:</h5>
          <input
            value={this.state.distribution}
            name="distribution"
            onChange={e => this.handleChange(e, "distribution")}
          />
          <p>
            <Link to="/Step4" onclick={this.dispatchState}>
              <button className="dash_subheader_button">Summary</button>
            </Link>
          </p>
          <p>
            {/* <Link to="/Step2"> */}
            <button
              onclick={this.props.history.push("/Step2")}
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
//   STEP3
// };

// connect(mapStatetoProps)(Step3);
export default Step3;
