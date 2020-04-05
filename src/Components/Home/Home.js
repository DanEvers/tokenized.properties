import React, { Component } from "react";
import Objects from "../Objects/Objects";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      objects: []
    };
  }


  showObjects = () => {
    axios
      .get('/api/objects/')
      .then(objects => {
        this.setState({
          objects: objects.data
        });
        console.log('this is home.js', objects)
      })
      .catch(err => console.log("catch error", err));
  };

  // getObjects = () => {
  //   axios
  //     .get("/api/objects")
  //     .then(res => this.setState({ objects: res.data }))
  //     .catch(err => alert(err.response.request.response));
  // };

//   deleteObjects = id => {
//     axios
//       .delete(`/api/objects/${id}`)
//       .then(() => {})
//       .catch(err => alert(err.response.request.response));

//     this.getObjects();
//   };

  componentDidMount() {
    this.showObjects();
    // console.log(objects)
  }

  render() {
    const mappedObjects = this.state.objects.map(objects => {
      return (
        <Objects key={objects.id}/>
      );
    });

    return (
      <div className="Home">
        <div className="home-container">
          <div className="home-title">
            <h1 className="title">Home</h1>
            {/* <Link to="/wizard/step1">
              <button>Add New Property</button>
            </Link> */}
          </div>
          <div className="listings-container">
            <h2>Object Listings</h2>
            {mappedObjects}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;