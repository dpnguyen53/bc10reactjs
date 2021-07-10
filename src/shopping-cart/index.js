import React, { Component } from "react";
import DanhSachSanPham from "./danh-sach-san-pham";
import Modal from "./modal";
import data from "./data.json";

export default class ShoppingCart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listProduct: data,
            detailProduct: data[0],
            listCart: [],
        };
    }

    handleGetProduct = (product) => {
        this.setState({
            detailProduct: product,
        });
    };

    handleAddProductCart = (product) => {
        const productCart = {
            maSP: product.maSP,
            tenSP: product.tenSP,
            hinhAnh: product.hinhAnh,
            soLuong: 1,
            dongGia: product.giaBan,
        };

        //copy this.state.listCart => mảng mới listCart
        let listCart = this.state.listCart;
        listCart.push(productCart);

        this.setState({
            listCart: listCart,
        });
    };

    render() {
        const { listProduct, detailProduct, listCart } = this.state;
        return (
            <div>
                <h3 className="title">Bài tập giỏ hàng</h3>
                <div className="container">
                    <button
                        className="btn btn-danger"
                        data-toggle="modal"
                        data-target="#modelId"
                    >
                        Giỏ hàng (0)
                    </button>
                </div>
                <DanhSachSanPham
                    listProduct={listProduct}
                    getDetailProduct={this.handleGetProduct}
                    getProductAddCart={this.handleAddProductCart}
                />
                <Modal listCart={listCart} />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5">
                            <img
                                className="img-fluid"
                                src={detailProduct.hinhAnh}
                                alt=""
                            />
                        </div>
                        <div className="col-sm-7">
                            <h3>Thông số kỹ thuật</h3>
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>Màn hình</td>
                                        <td>{detailProduct.manHinh}</td>
                                    </tr>
                                    <tr>
                                        <td>Hệ điều hành</td>
                                        <td>{detailProduct.heDieuHanh}</td>
                                    </tr>
                                    <tr>
                                        <td>Camera trước</td>
                                        <td>{detailProduct.cameraTruoc}</td>
                                    </tr>
                                    <tr>
                                        <td>Camera sau</td>
                                        <td>{detailProduct.cameraSau}</td>
                                    </tr>
                                    <tr>
                                        <td>RAM</td>
                                        <td>{detailProduct.ram}</td>
                                    </tr>
                                    <tr>
                                        <td>ROM</td>
                                        <td>{detailProduct.rom}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}