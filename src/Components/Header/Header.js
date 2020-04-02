import React, { Component } from 'react'
import "./Header.css"
import axios from "axios"
import { connect } from "react-redux";
import { getSession, loggedOut } from "../../Redux/reducer";

export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
          user: '',
          toggleMenu: false,
          isLoggedIn: false
        };
      }
    
      toggleMenuFunc() {
        this.setState({
          toggleMenu: !this.state.toggleMenu
        });
      }
    
      // async componentDidMount() {
      //   await axios.get('auth/userSession').then(res => {
      //     this.props.getSession(res.data);
      //     console.log("res.data", res.data)
      //     this.setState({
      //       user: res.data.firstname
      //     })
          
      //   })
      //   console.log("user",this.state.user)
      //   this.props.getSession();
      // }

    render() {
        return (
            <div className="header-container">
            <div className="left">
                <h1>Tokenized Properties</h1>
            </div>
            <div className="right">
            {this.props.isLoggedIn ? (
            <h2>Welcome {this.props.user.firstname}</h2>
          ) : ( 
            <p></p>
          )}
            </div>
            </div>
        )
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
  getSession,
  loggedOut
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);