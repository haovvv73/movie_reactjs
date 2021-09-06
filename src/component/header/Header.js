import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import img_logo from '../../assets/img/logo.png';
import { USER_LOGIN } from '../../util/setting';

export default function Header() {

    // dữ liệu user
    const { loginUser } = useSelector(state => state.LoginReducer);

    const [login,setLogin] = useState(false);

    useEffect(() => {
        if(localStorage.getItem(USER_LOGIN)){
            setLogin(true);
        }
    },[loginUser])

    // hiển thị user
    const userRender = () => {
        return <ul className="navbar-nav mr-5 header__user">
            <li className="nav-item dropdown mr-3 mt-2">
                <span className=" dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >{`hi, ${loginUser.taiKhoan}`}</span>
                <div className="dropdown-menu text-dark text-center" aria-labelledby="navbarDropdown">
                    <NavLink to="/in"><p className="text-dark"><i className="fa fa-user mr-2"></i> Thông Tin</p></NavLink>
                    <NavLink to="/login"><span className="text-dark" role="button" onClick={() => {
                        localStorage.clear();
                    }}> <i className="fa fa-door-closed mr-2"></i> Đăng Xuất</span></NavLink> 
                </div>
            </li>
            <li className="nav-item">
                <img src="https://i.pravatar.cc/50" alt="123" style={{ borderRadius: '50%' }} />
            </li>
        </ul>
    }
    // khi không có user
    const loginRender = () => {
        return <ul className="navbar-nav mr-5">
            <li className="nav-item">
                <NavLink to="/login" className="nav-link" >Đăng Nhập </NavLink>
            </li>
            <li className="nav-item">
                <a className="nav-link text-white">/</a>
            </li>
            <li className="nav-item">
                <NavLink to="/register" className="nav-link" >Đăng Ký</NavLink>
            </li>
        </ul>
    }

    return (
        <header className="header">
            <nav className="header__navbar navbar navbar-expand-lg navbar-light fixed-top">
                <NavLink className="header__grand navbar-brand ml-5" to="/" >
                    <img className="img-fluid" src={img_logo} alt='123' />
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="header__content collapse navbar-collapse" id="navbarSupportedContent" >
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item ">
                            <a className="nav-link " href="#" >Phim</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#">Rạp Phim</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#">Khuyến Mãi</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#">Giới Thiệu</a>
                        </li>
                    </ul>
                    { login ? userRender() : loginRender() }
                </div>
            </nav>
        </header>
    )
}
