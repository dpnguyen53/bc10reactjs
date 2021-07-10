import React, { Component } from "react";

export default class ExampleHandlingEvent extends Component {
    isLogin = false;

    // renderHTML = () => {
    //     if (this.isLogin) {
    //         return <h2>Hello Cybersoft</h2>;
    //     } else {
    //         return <button className="btn btn-success">Login</button>;
    //     }
    // };

    handleLogin = () => {
        this.isLogin = true;
    };

    renderHTML = () => {
        // dk ? "mệnh đề đúng" : "mệnh đề sai"
        return this.isLogin ? (
            <h2>Hello Cybersoft</h2>
        ) : (
            <button className="btn btn-success" onClick={this.handleLogin}>
                Login
            </button>
        );
    };

    render() {
        return (
            <div>
                <h3>ExampleHandlingEvent</h3>

                {this.renderHTML()}
            </div>
        );
    }
}
