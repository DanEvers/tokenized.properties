import React, { Component } from "react";
import "./Login.css";
import axios from "axios";
import { connect } from "react-redux";
import { setUser, getSession, loggedIn } from "../../Redux/reducer";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isloggedIn: false,
      register: false
    };
  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  login = async (email, password) => {
    let body = { email, password };
    const res = await axios.post("/auth/login", body);
    if (email && password) {
      this.props.setUser(res.data);
      this.props.loggedIn();
      console.log(res.data);
      this.props.history.push("/Objects");
    } else {
      alert("Please enter your correct eMail & Password");
    }
  };

  register = async (email, password, firstname, lastname) => {
    let newUser = {
      email,
      password,
      firstname,
      lastname
    };
    const res = await axios.post("/auth/register", newUser);
    this.props.setUser(res.data);
    this.props.isloggedIn();
    this.props.history.push("/Objects");
  };

  render() {
    return (
      <div className="login-container">
        {!this.state.register ? (
          <div className="form">
            {/* Login Form */}
            <form
              onSubmit={e => {
                e.preventDefault();
                this.login(this.state.email, this.state.password);
              }}
            >
              <br></br>
              <input
                placeholder="eMail"
                onChange={this.changeHandler}
                type="text"
                name="email"
                value={this.state.email}
              />
              <br></br>
              <br></br>
              <input
                placeholder="Password"
                onChange={this.changeHandler}
                type="password"
                name="password"
                value={this.state.password}
              />
              <br></br>
              <br></br>
              <input id="button" type="submit" value="Login" />
              <br></br>
            </form>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <label>Don't have an account?</label>
            <br></br>
            <br></br>
            <button
              id="button"
              onClick={() => this.setState({ register: true })}
            >
              Register
            </button>
          </div>
        ) : (
          <div className="form">
            {/* Register Form */}
            <form
              onSubmit={e => {
                e.preventDefault();
                this.register(
                  this.state.email,
                  this.state.password,
                  this.state.firstname,
                  this.state.lastname
                );
              }}
            >
              <input
                placeholder="eMail"
                onChange={this.changeHandler}
                type="text"
                name="email"
                value={this.state.email}
              />{" "}
              <br></br>
              <br></br>
              {/* <label>Password:</label> */}
              <input
                placeholder="Password"
                onChange={this.changeHandler}
                type="password"
                name="password"
                value={this.state.password}
              />{" "}
              <br></br>
              <br></br>
              <input
                placeholder="First Name"
                onChange={this.changeHandler}
                type="text"
                name="firstname"
                value={this.state.firstname}
              />{" "}
              <br></br>
              <br></br>
              <input
                placeholder="Last Name"
                onChange={this.changeHandler}
                type="text"
                name="lastname"
                value={this.state.lastname}
              />{" "}
              <br></br>
              <br></br>
              <input id="button" type="submit" value="Register" />
            </form>
            <br></br>
            <br></br>
            <br></br>
            {/* <br></br> */}
            <label>Already have an account?</label>
            <br></br>
            <br></br>
            <button
              id="button"
              onClick={() => this.setState({ register: false })}
            >
              Login
            </button>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.reducer
  };
};

const mapDispatchToProps = {
  setUser,
  getSession,
  loggedIn
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
