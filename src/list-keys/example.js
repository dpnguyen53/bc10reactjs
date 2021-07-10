import React, { Component } from "react";
import data from "./data.json";

export default class ExampleList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listMovie: data,
        };
    }

    render() {
        // console.log(this.state.listMovie);
        return (
            <div>
                <h3>ExampleList</h3>
            </div>
        );
    }
}
