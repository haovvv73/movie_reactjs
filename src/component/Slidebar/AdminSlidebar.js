import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { history } from '../../App';

export default function AdminSlidebar() {



    // tình trạng hide slide bar
    const [slidebar, setSlidebar] = useState(false);
    const [hide, setHide] = useState("")



    useEffect(() => {
        if (slidebar) {
            // hide slide bar
            setHide("admin__slidebarHide")
        } else {
            // on slide bar
            setHide("")
        }
    }, [slidebar])

    return (
        <div>
            <div className={`admin__slidebar ${hide}`}>
                <div className="admin__img p-3 text-center">
                    <img src="https://i.pravatar.cc/150" alt="123" />
                    <p role="button" className="mt-3" onClick={()=>{
                        localStorage.clear();
                        history.replace("/")
                    }}>Đăng suất</p>
                </div>
                <div>
                    <ul>
                        <li className="admin__text">
                            <NavLink to="/admin"><i className="fa fa-home mr-3"></i> trang chủ </NavLink>
                        </li>
                        <li className="admin__text">
                            <NavLink to="/userManage"><i className="fa fa-user-edit mr-3"></i>  người dùng </NavLink>
                        </li>
                        <li className="admin__text">
                            <NavLink to="/filmManage"><i className="fa fa-film mr-3"></i> quản lý phim </NavLink>
                        </li>
                        <li className="admin__text">
                            <NavLink to="/showtimeManage"><i className="fa fa-hourglass-half mr-3"></i> thêm lịch chiếu </NavLink>
                        </li>
                        <li className="admin__text">
                            <NavLink to="/admin"><i className="fa fa-info-circle mr-3"></i> about </NavLink>
                        </li>
                        <li className="admin__text">
                            <NavLink to="/admin"><i className="fa fa-sliders-h mr-3"></i> setting </NavLink>
                        </li>
                    </ul>
                    <div className="admin__btnSlidebar " onClick={() => {
                        setSlidebar(!slidebar)
                    }}>
                        <i className="fa fa-bars"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
