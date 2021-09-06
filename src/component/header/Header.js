import React, { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import img_logo from '../../assets/img/logo.png';
import { USER_LOGIN } from '../../util/setting';

export default function Header() {

    // dữ liệu user
    const { loginUser } = useSelector(state => state.LoginReducer);

    // tình trạng hiển thị info
    const [login, setLogin] = useState(false);
    // tình trạng navbar
    const [nav, setNav] = useState("");
    // tình trạng slide bar
    const [slidebar, setSlidebar] = useState("")

    // xét điều kiện hiển thị thôg tin
    useEffect(() => {
        if (localStorage.getItem(USER_LOGIN)) {
            setLogin(true);
        }
    }, [])
    // xét điều kiện hiệu animation nav
    useEffect(() => {
        const changeBackGround = () => {
            if (window.scrollY >= 80) {
                setNav("header__stick");
            } else {
                setNav("");
            }
        }
        window.addEventListener('scroll', changeBackGround)
    }, [])
    // hide slidebar khi width > 1000
    useEffect(()=>{
        const hide=()=>{
            if(window.innerWidth >= 1000){
                setSlidebar(false)
            }
        }
        window.addEventListener('resize',hide);
    },[])

    // hiển thị user
    const userRender = () => {
        return <ul className="navbar-nav mr-5 header__user">
            <li className="nav-item dropdown mr-3 mt-2">
                <span className=" dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                    {`hi, ${loginUser.taiKhoan}`}
                </span>
                {/* dropdown menu */}
                <div className="dropdown-menu text-dark text-center" aria-labelledby="navbarDropdown">
                    <NavLink to="/info">
                        <p className="text-dark"><i className="fa fa-user mr-2"></i> Thông Tin</p>
                    </NavLink>
                    <NavLink to="/login">
                        <span className="text-dark" role="button" onClick={() => {
                            localStorage.clear();
                        }}> <i className="fa fa-sign-out-alt mr-2"></i> Đăng Xuất</span>
                    </NavLink>
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
    // hiển thị slide bar
    const slideBarRender = () => {
        return <div className={`nav__slide ${slidebar}  `}>
            <div className="nav__close text-center p-3">
                <i className="fa fa-times-circle" onClick={()=>{
                    setSlidebar(false);
                }}></i>
            </div>
            {
                login ? <ul >
                    <li className="nav__slideTxt">
                        <NavLink to="/info"><i className="fa fa-user mr-2"></i>{` hi, ${loginUser.taiKhoan}`}</NavLink>
                    </li>
                    <li className="nav__slideTxt">
                        <NavLink to="/login">
                            <span onClick={() => {
                                localStorage.clear();
                            }}> <i className="fa fa-sign-out-alt mr-2"></i> Đăng Xuất</span>
                        </NavLink>
                    </li>
                </ul> : <ul>
                    <li className="nav__slideTxt">
                        <NavLink to="/login">Đăng Nhập </NavLink>
                    </li>
                    <li className="nav__slideTxt">
                        <NavLink to="/register">Đăng Ký</NavLink>
                    </li>
                </ul>
            }
            <ul>
                <li className="nav__slideTxt">
                    <a className="nav-link" href="#" >Phim</a>
                </li>
                <li className="nav__slideTxt">
                    <a className="nav-link" href="#">Rạp Phim</a>
                </li>
                <li className="nav__slideTxt">
                    <a className="nav-link" href="#">Khuyến Mãi</a>
                </li>
                <li className="nav__slideTxt">
                    <a className="nav-link" href="#">Giới Thiệu</a>
                </li>
            </ul>
        </div>
    }

    return (
        <Fragment>
            <header className="header">
                <nav className={`${nav} header__navbar navbar navbar-expand-lg navbar-light fixed-top`}>
                    <NavLink className="header__grand navbar-brand ml-5" to="/" >
                        <img className="img-fluid" src={img_logo} alt='123' />
                    </NavLink>
                    <button className="navbar-toggler text-white" type="button" data-toggle="collapse" data-target="#a" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa fa-stream" onClick={()=>{
                            setSlidebar("nav__slideActive")
                        }}></i>
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
                        {login ? userRender() : loginRender()}
                    </div>
                </nav>
            </header>
            {slideBarRender()}
        </Fragment>
    )
}
