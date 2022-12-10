import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { history } from '../../App';

export default function AdminSlidebar() {

    // tình trạng hide slide bar
    const [slidebar, setSlidebar] = useState(false);

    return (
        <div className={`admin__slidebar ${slidebar ? "admin__slidebarHide" : ""}`}>
            <div className="admin__img p-3 text-center">
                <img src="https://i.pravatar.cc/150" alt="123" />
                <p role="button" className="mt-3" onClick={() => {
                    localStorage.clear();
                    history.replace("/")
                }}>Đăng suất</p>
            </div>
            <div>
                <ul>
                    <li className="admin__text">
                        <NavLink to="/admin" activeStyle={{
                            backgroundColor: "#1a83ff",
                        }}><i className="fa fa-home mr-3"></i> trang chủ </NavLink>
                    </li>

                    <li className="admin__text">
                        <NavLink to="/userManage" activeStyle={{
                            backgroundColor: "#1a83ff",
                        }}><i className="fa fa-user-edit mr-3"></i>  người dùng </NavLink>
                    </li>

                    <li className="admin__text">
                        <NavLink to="/filmManage" activeStyle={{
                            backgroundColor: "#1a83ff",
                        }}><i className="fa fa-film mr-3"></i> quản lý phim </NavLink>
                    </li>
                </ul>
                <div className="admin__btnSlidebar " onClick={() => {
                    setSlidebar(!slidebar)
                }}>
                    <i className="fa fa-bars"></i>
                </div>
            </div>
        </div>
    )
}
