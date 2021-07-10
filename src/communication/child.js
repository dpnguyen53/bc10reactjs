import React, { Component } from "react";

export default class Child extends Component {
    handleResetInfo = () => {
        const infoReset = {
            username: "Cybersoft",
            age: 18,
        };
        this.props.getInfoReset(infoReset);
    };

    render() {
        return (
            <div>
                <h3>Child</h3>
                <p>
                    Username: {this.props.username} - Age: {this.props.age}
                </p>
                <button
                    className="btn btn-success"
                    onClick={this.handleResetInfo}
                >
                    Reset Info
                </button>
            </div>
        );
    }
}
