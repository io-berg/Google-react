import React from "react";
import { LoginBtn } from "../LoginBtn/LoginBtn";
import { AppsBtn } from "../AppsBtn/AppsBtn";
import './NavBar.css';

export class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            appsClicked: false,   
        }
    }

    appsClickHandler() {
        return;
    }

    render() {
        return (
            <nav className="navbar" id="NavbarContainer"> 
                <AppsBtn id="AppsBtn" onClick={this.appsClickHandler()}/>
                <LoginBtn id="LoginBtn" />
            </nav>
        );
    }
}