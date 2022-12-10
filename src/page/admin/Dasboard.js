import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Dasboard() {
    return (
        <div className="text-dark">
            <div className="row justify-content-center">

                <span className="col-6 col-lg-3 text-center m-3 admin_box d-flex align-items-center justify-content-center">
                    <NavLink to="/userManage">
                        <div>
                            <i className="fa fa-user" style={{ fontSize: '100px' }} ></i>
                            <p className="mt-3">danh sách người dùng</p>
                        </div>
                    </NavLink>
                </span>

                <span className="col-6 col-lg-3 text-center m-3 admin_box d-flex align-items-center justify-content-center">
                    <NavLink to="/filmManage">
                        <div>
                            <i className="fa fa-ticket-alt" style={{ fontSize: '100px' }} ></i>
                            <p className="mt-3">danh sách phim</p>
                        </div>
                    </NavLink>
                </span>

                <span className="col-6 col-lg-3 text-center m-3 admin_box d-flex align-items-center justify-content-center">
                    <NavLink to="/filmManage/addFilm">
                        <div>
                            <i className="fa fa-plus" style={{ fontSize: '100px' }} ></i>
                            <p className="mt-3">thêm phim</p>
                        </div>
                    </NavLink>
                </span>

            </div>
        </div>
    )
}
