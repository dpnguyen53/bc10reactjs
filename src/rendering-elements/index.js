import React, { Component } from "react";

export default class RenderingElements extends Component {
    username = "Cybersoft";
    age = 18;
    lop = "BC10";

    renderInfo = () => {
        return (
            <>
                <p>
                    Hello {this.username} - Tuổi: {this.age}
                </p>
                <p>Lớp: {this.lop}</p>
            </>
        );
    };

    render() {
        return (
            <div>
                <h3>*RenderingElements</h3>
                {this.renderInfo()}
            </div>
        );
    }
}
