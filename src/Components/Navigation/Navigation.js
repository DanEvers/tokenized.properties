import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "./Navigation.css"

export class Navigation extends Component {
    render() {
        return (
            <div className="navigation-container">
                <h1>Navigation Bar</h1>
                <nav className="navigation-links">
                    <ul>
                        <li><Link to ="/" className="navTitles">Home</Link></li>
                        <li><Link to ="Login" className="navTitles">Login</Link></li>
                        <li><Link to ="Account" className="navTitles">Account</Link> </li>
                        <li><Link to ="Objects" className="navTitles">Objects</Link></li>
                        <li><Link to="/" className="navTitles" onClick={() => this.props.loggedOut()}>Logout</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navigation