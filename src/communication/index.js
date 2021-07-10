import React, { Component } from "react";
import Child from "./child";
import ChildFunction from "./child-function";
import Children from "./children";

export default class Communication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "Cybersoft",
            age: 18,
        };
    }

    // handleChangeInfo = () => {
    //     this.setState({
    //         username: "Nguyen",
    //         age: 20,
    //     });
    // };

    handleReceiveFromChild = (infoReset) => {
        //Cập nhật lại state
        this.setState({
            username: infoReset.username,
            age: infoReset.age,
        });
    };

    render() {
        return (
            <div>
                <h3>*Communication</h3>
                <p>
                    Username: {this.state.username} - Age: {this.state.age}
                </p>
                <button
                    className="btn btn-success"
                    onClick={() => {
                        this.setState({
                            username: "Nguyen",
                            age: 20,
                        });
                    }}
                >
                    Change Info
                </button>

                <hr width="50%" />

                <Child
                    username={this.state.username}
                    age={this.state.age}
                    getInfoReset={this.handleReceiveFromChild}
                />

                <hr width="50%" />

                <ChildFunction
                    username={this.state.username}
                    age={this.state.age}
                />

                <hr width="50%" />

                <Children>
                    <p>
                        Username: {this.state.username} - Age: {this.state.age}
                    </p>
                </Children>
            </div>
        );
    }
}
