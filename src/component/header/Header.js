import React from 'react';
import { NavLink } from 'react-router-dom';
import img_logo from '../../assets/img/logo.png';

export default function Header() {
    return (
        <header className="header">
            <nav className="header__navbar navbar navbar-expand-lg navbar-light fixed-top">
                <NavLink className="header__grand navbar-brand ml-5" to="/" >
                    <img className="img-fluid" src={img_logo} alt='123'/>
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
                    <ul className="navbar-nav mr-5">
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
                </div>
            </nav>
        </header>
    )
}
