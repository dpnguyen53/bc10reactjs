import React, { Component } from "react";
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";
import data from "./data.json";

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userList: data,
            keyword: "",
            userEdit: null,
        };
    }

    _findIndex = (id) => {
        return this.state.userList.findIndex((user) => {
            return user.id === id;
        });
    };

    handleDeleteUser = (user) => {
        let userList = [...this.state.userList];
        const index = this._findIndex(user.id);
        if (index !== -1) {
            userList.splice(index, 1);

            this.setState({
                userList,
            });
        }
    };

    handleGetKeyword = (keyword) => {
        this.setState({
            keyword,
        });
    };

    /**
     * Add && Update
     */
    handleSubmit = (user) => {
        let userList = [...this.state.userList];

        if (user.id) {
            //Update
            const index = this._findIndex(user.id);
            if (index !== -1) {
                userList[index] = user;
            }
        } else {
            //Add
            const userClone = { ...user, id: new Date().getTime() };
            userList = [...this.state.userList, userClone];
        }

        this.setState({
            userList,
        });
    };

    hanldeGetUserEdit = (user) => {
        this.setState({
            userEdit: user,
        });
    };

    render() {
        let { userList, keyword, userEdit } = this.state;
        //Filter userList trước khi truyền vào Component Users
        userList = this.state.userList.filter((user) => {
            return (
                user.fullname.toLowerCase().indexOf(keyword.toLowerCase()) !==
                -1
            );
        });

        return (
            <div className="container">
                <h1 className="display-4 text-center my-3">User Management</h1>
                <div className="d-flex justify-content-between align-items-center">
                    <Search getKeyword={this.handleGetKeyword} />
                    <button
                        className="btn btn-success"
                        data-toggle="modal"
                        data-target="#modelIdUser"
                        onClick={() => {
                            this.setState({
                                userEdit: null,
                            });
                        }}
                    >
                        Add User
                    </button>
                </div>
                <Users
                    userList={userList}
                    getUserDelete={this.handleDeleteUser}
                    getUserEdit={this.hanldeGetUserEdit}
                />
                <Modal onSubmit={this.handleSubmit} userEdit={userEdit} />
            </div>
        );
    }
}

export default Home;
