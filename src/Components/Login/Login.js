import React, { Component } from 'react'
import "./Login.css"
import axios from "axios";

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: '',
          isloggedIn: false,
          register: false
        };
        // this.changeHandler = this.changeHandler.bind(this);
      }

      changeHandler = e => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }
    
      login = async (email, password) => {
        let body = { email, password };
        const res = await axios.post("/auth/login", body);
        if (email && password) {
        this.props.setUser(res.data);
        this.props.loggedIn();
        // console.log(res.data)
        this.props.history.push('/Profile');
      } else {
          alert("Please enter your correct eMail & Password")
      }
      };
    
      register = async (
        // username,
        email,
        password,
        firstname,
        lastname,
        country,
      ) => {
        let newUser = {
          // username,
          email,
          password,
          firstname,
          lastname,
          country
        };
        const res = await axios.post("/auth/register", newUser);
        // .catch(alert('This user already exists'))
        this.props.setUser(res.data);
        // this.props.isloggedIn();
        this.props.history.push("/Profile");
      };

    render() {
        return (
            <div className="login-container">
      {/* <img src={avatar} alt='avatar' className='avatar'/> */}
        {!this.state.register ? (
          <div className="form">
            {/* Login Form */}
            <form
              onSubmit={e => {
                e.preventDefault();
                this.login(this.state.email, this.state.password);
              }}
            ><br></br>
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
              <input id="button" type="submit" value="Login" /><br></br>
              {/* <input id="button" type="submit" value="Forgot Password" /> */}
            </form>
            <br></br>
            <br></br>
            <br></br>
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
              onSubmit={(e) => {
                e.preventDefault()
                this.register(
                  // this.state.username,
                  this.state.email,
                  this.state.password,
                  this.state.firstname,
                  this.state.lastname,
                  this.state.country
                )
              }}
            >
              <input
                placeholder="eMail"
                onChange={this.changeHandler}
                type="text"
                name="email"
                value={this.state.email}
              /> <br></br>
              <br></br>
              {/* <label>Password:</label> */}
              <input
                placeholder="Password"
                onChange={this.changeHandler}
                type="password"
                name="password"
                value={this.state.password}
              /> <br></br>
              <br></br>
              <input
                placeholder="First Name"
                onChange={this.changeHandler}
                type="text"
                name="firstname"
                value={this.state.firstname}
              /> <br></br>
              <br></br>
              <input
                placeholder="Last Name"
                onChange={this.changeHandler}
                type="text"
                name="lastname"
                value={this.state.lastname}
              /> <br></br>
              <br></br>
              <input
                placeholder="Country"
                onChange={this.changeHandler}
                type="text"
                name="country"
                value={this.state.country}
              /> <br></br>
              <br></br>
              <br></br>
              {/* <label>User Role: </label>
              <select name='user_role' value={this.state.user_role} onChange={this.changeHandler} required>
                <option>Please choose from the options</option>
                <option value="skydiver">Skydiver</option>
                <option value="manifest">DZ Manifest</option>
              </select> */}
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
        )
    }
}

export default Login
