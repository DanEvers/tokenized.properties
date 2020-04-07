import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "./Navigation.css"
import { connect } from "react-redux";
import { loggedOut } from "../../Redux/reducer";

export class Navigation extends Component {
    render() {
        return (
            <div className="navigation-container">
                {/* <h1></h1> */}
                <nav className="navigation-links">
                    <ul>
                        <li><Link to ="/" className="navTitles">Home</Link></li>
                        <li><Link to ="Login" className="navTitles">Login</Link></li>
                        <div>
                        {this.props.user.user_id ? (
                        <div>
                        <li><Link to ="Account" className="navTitles">Account</Link> </li>
                        <li><Link to ="Objects" className="navTitles">Objects</Link></li>
                        <li><Link to="/" className="navTitles" onClick={() => this.props.loggedOut()}>Logout</Link></li>
                        </div>
                        ) : (
                        <div> 
                        <br></br>
                        </div>
                        )}
                        </div>
                    </ul>
                </nav>
            </div>
        );
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
  loggedOut
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
