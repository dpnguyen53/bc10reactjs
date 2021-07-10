import React, { Component } from "react";
import ExampleHandlingEvent from "./example";

export default class HandlingEvents extends Component {
    handleEvent() {
        console.log(123);
    }

    handleEventParams(username, age) {
        console.log(username, age);
    }

    render() {
        return (
            <div>
                <h3>*HandlingEvents</h3>
                <button className="btn btn-success" onClick={this.handleEvent}>
                    HandlingEvent
                </button>

                <button
                    className="btn btn-danger"
                    onClick={() => {
                        this.handleEventParams("Cybersoft", 18);
                    }}
                >
                    HandlingEvent Params
                </button>

                <ExampleHandlingEvent />
            </div>
        );
    }
}
