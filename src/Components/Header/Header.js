import React, { Component } from 'react'
import "./Header.css"
import axios from "axios"

export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
          user: '',
          toggleMenu: false,
          // isLoggedIn: false
        };
      }
    
      toggleMenuFunc() {
        this.setState({
          toggleMenu: !this.state.toggleMenu
        });
      }
    
      async componentDidMount() {
        await axios.get('auth/userSession').then(res => {
          this.props.getSession(res.data);
          // console.log("res.data", res.data)
          this.setState({
            user: res.data.firstname
          })
          
        })
        // console.log("user",this.state.user)
        // this.props.getSession();
      }

    render() {
        return (
            <div className="header-container">
            <div className="left">
                <h1>Tokenized Propeties</h1>
            </div>
            <div className="right">
            {this.props.isLoggedIn ? (
            <h2>Welcome to the Club, {this.props.user.firstname}</h2>
          ) : ( 
            <p></p>
          )}
            </div>
            </div>
        )
    }
}

export default Header
