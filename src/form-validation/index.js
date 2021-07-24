import React, { Component } from "react";

export default class FormValidation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: {
                manv: "",
                tennv: "",
                email: "",
            },
            errors: {
                manv: "",
                tennv: "",
                email: "",
            },
            manvValid: false,
            tennvValid: false,
            emailValid: false,
            formValid: false,

            //formValid = manvValid && tennvValid && emailValid
        };
    }

    handleOnchange = (e) => {
        const { name, value } = e.target;
        this.setState({
            values: { ...this.state.values, [name]: value },
        });
    };

    handleErrors = (e) => {
        const { name, value } = e.target;

        let mess = value.trim() === "" ? name + " Khong dc rong" : "";
        let { manvValid, tennvValid, emailValid } = this.state;

        switch (name) {
            case "manv":
                manvValid = mess === "" ? true : false;
                if (value && value.length <= 4) {
                    mess = "Do dai ky tự từ 5 trở lên";
                    manvValid = false;
                }
                break;

            case "tennv":
                tennvValid = mess === "" ? true : false;
                break;

            case "email":
                emailValid = mess === "" ? true : false;
                if (
                    value &&
                    !value.match(
                        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                    )
                ) {
                    mess = "Email k đúng định dạng";
                    emailValid = false;
                }
                break;

            default:
                break;
        }

        this.setState(
            {
                errors: { ...this.state.errors, [name]: mess },
                manvValid,
                tennvValid,
                emailValid,
            },
            () => {
                this.handleFormValid();
            }
        );
    };

    handleFormValid = () => {
        const { manvValid, tennvValid, emailValid } = this.state;
        this.setState({
            formValid: manvValid && tennvValid && emailValid,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    };

    render() {
        const { errors } = this.state;
        return (
            <div className="container">
                <h3 className="title">*FormValidation</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Mã nhân viên</label>
                        <input
                            type="text"
                            className="form-control"
                            name="manv"
                            onChange={this.handleOnchange}
                            onBlur={this.handleErrors}
                        />
                        {errors.manv ? (
                            <div className="alert alert-danger">
                                {errors.manv}
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="form-group">
                        <label>Tên nhân viên</label>
                        <input
                            type="text"
                            className="form-control"
                            name="tennv"
                            onChange={this.handleOnchange}
                            onBlur={this.handleErrors}
                        />
                        {errors.tennv ? (
                            <div className="alert alert-danger">
                                {errors.tennv}
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            onChange={this.handleOnchange}
                            onBlur={this.handleErrors}
                        />
                        {errors.email ? (
                            <div className="alert alert-danger">
                                {errors.email}
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                    <button
                        type="submit"
                        className="btn btn-success"
                        disabled={!this.state.formValid}
                    >
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}
