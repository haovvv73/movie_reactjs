import { Fragment } from "react";
import { Redirect, Route } from "react-router";
import { NavLink } from "react-router-dom";
import AdminSlidebar from "../../component/Slidebar/AdminSlidebar";
import { USER_LOGIN } from "../../util/setting";

export const AdminTemp = (props) => {

    // chưa đăng nhập đá về home
    if (!localStorage.getItem(USER_LOGIN)) {
        return <Redirect to="/" />
    }
    // loại người dùng != quản trị đá về home

    const { Component, ...restProps } = props;

    return <Route {...restProps} render={(propsRoute) => {
        return <Fragment>
            <div className="admin">
                {/* slide bar */}
                <AdminSlidebar />
                <div className="col px-0">
                    {/* nav bar */}
                    <nav className="navbar navbar-light bg-light ">
                        <NavLink className="navbar-brand text-black ml-5" to="/admin">
                            Bootstrap
                        </NavLink>
                        <form className="form-inline">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-primary my-2 my-sm-0" >Search</button>
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