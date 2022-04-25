import React from "react";
import './AppsBtn.css'

export class AppsBtn extends React.Component {
    render() {
        return (
            <span id="appsicon" className="material-icons" onClick={() => this.props.onClick}> apps </span>
        );
    }
}