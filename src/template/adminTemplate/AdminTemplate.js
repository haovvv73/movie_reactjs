import React from 'react'
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { NavLink } from "react-router-dom";
import AdminSlidebar from "../../component/Slidebar/AdminSlidebar";
import { ListFilmPhanTrangAction } from "../../redux/Actions/adminAction/AdminAction";
import { USER_LOGIN } from "../../util/setting";

export const AdminTemp = (props) => {
    const dispatch = useDispatch();

    const {loginUser} = useSelector( state => state.LoginReducer)

    // chưa đăng nhập đá về home
    if (!localStorage.getItem(USER_LOGIN)) {
        return <Redirect to="/" />
    }
    // loại người dùng != quản trị đá về home
    if(loginUser.maLoaiNguoiDung !== "QuanTri"){
        return <Redirect to="/" />
    }

    const { Component, ...restProps } = props;

    return <Route {...restProps} render={(propsRoute) => {
        return <Fragment>
            <div className="admin d-flex">
                {/* slide bar */}
                <AdminSlidebar />
                <div className="col px-0">
                    {/* nav bar */}
                    <nav className="navbar navbar-light bg-light ">
                        <NavLink className="navbar-brand text-black ml-5" to="/admin">
                            Bootstrap
                        </NavLink>
                        <form className="form-inline">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={e => {
                                let param = 'soTrang=1&soPhanTuTrenTrang=5';
                                let txtPhim = e.target.value;
                                dispatch(ListFilmPhanTrangAction(param, txtPhim));
                            }} />

                            <i className="fa fa-search mx-3 text-dark"></i>
                        </form>
                    </nav>
                    <div className="p-4 " >
                        <Component {...propsRoute} />
                    </div>
                </div>
            </div>
        </Fragment>
    }} />


}