import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "./Navigation.css"

export class Navigation extends Component {
    render() {
        return (
            <div className="navigation-container">
                <h1>Navigation Bar</h1>
                <div>
                    <ul>
                        <li><Link to ="/" className="navTitles">Home</Link></li>
                        <li><Link to ="Login" className="navTitles">Login</Link></li>
                        <li><Link to ="Profile" className="navTitles">Profile</Link> </li>
                        <li><Link to ="Objects" className="navTitles">Objects</Link></li>
                        {/* <Link to ="Profile" className="navTitles">Profile</Link> */}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Navigation