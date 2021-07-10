import React, { Component } from "react";
import ExampleList from "./example";

export default class ListKeys extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listUser: [
                { ten: "Nguyen", tuoi: 18 },
                { ten: "Si", tuoi: 22 },
                { ten: "Thanh", tuoi: 24 },
            ],
        };
    }

    renderUsers = () => {
        const { listUser } = this.state;
        return listUser.map((item, index) => {
            return (
                <li key={index}>
                    {index + 1}. Tên: {item.ten} - tuoi: {item.tuoi}
                </li>
            );
        });
    };

    render() {
        return (
            <div>
                <h3>*ListKeys</h3>
                <ul>{this.renderUsers()}</ul>

                <ExampleList />
            </div>
        );
    }
}
