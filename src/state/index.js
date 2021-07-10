import React, { Component } from "react";

export default class State extends Component {
    constructor(props) {
        super(props);

        //Tạo state
        this.state = {
            isLogin: false,
        };

        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin() {
        this.setState(
            {
                isLogin: true,
            }
            // () => {
            //     console.log(this.state.isLogin);
            // }
        );
    }

    renderHTML = () => {
        // dk ? "mệnh đề đúng" : "mệnh đề sai"
        return this.state.isLogin ? (
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
                <h3>*State</h3>
                {this.renderHTML()}
            </div>
        );
    }
}
