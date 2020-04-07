import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../../App.css'
// import store from '../../store'
import './Steps.css'
import axios from 'axios'

export default class Step2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      img: ""
    };
  }

  handleChange(e, name) {
    const value = e.target.value;
    this.setState({ [name]: value });
    console.log(this.state);
  }

editObject = async () => {
  const { img } = this.state;
  let object_id = this.state.object[0].object_id;
  let updatedObject = { img };
  axios.put(`/api/editObject/${object_id}`, updatedObject)
}

  render() {
    return (
      <div className='container'>
        Step 2 - Image Upload
        <h5>Image:</h5>
        <input
          value={this.state.img}
          name='img'
          onChange={e => this.handleChange(e, "img")}
        />
        <p>
          <Link to="/Step3">
            <button  onClick={this.editObject} className="dash_subheader_button">Next Step</button>
          </Link>
        </p>
        <p>
          <Link to="/Step1">
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
