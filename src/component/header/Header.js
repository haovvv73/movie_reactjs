import React, { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import picture
import img_logo from '../../assets/img/logo.png';
// import types
import { USER_LOGIN } from '../../util/setting';
//import libs
import { Link } from 'react-scroll';

export default function Header() {

    // dữ liệu user
    const { loginUser } = useSelector(state => state.LoginReducer);

    // tình trạng hiển thị info
    const [login, setLogin] = useState(false);
    // tình trạng navbar
    const [nav, setNav] = useState("");
    // tình trạng slide bar
    const [slidebar, setSlidebar] = useState("");
    // tình trạng navbar khi width > 650
    const [smallNav, setSmallNav] = useState("");

    // check DK hiển thị user 
    useEffect(() => {
        if (localStorage.getItem(USER_LOGIN)) {
            setLogin(true);
        }
    }, [])
    // active animation navbar khi scroll
    useEffect(() => {
        const changeBackGround = () => {
            if (window.scrollY >= 80) {
                // add animation
                setNav("header__stick");
            } else {
                setNav("");
            }
        }
        window.addEventListener('scroll', changeBackGround);
        return () => {
            window.removeEventListener('scroll', changeBackGround);
        }
    }, [])
    // slider responsive
    useEffect(() => {
        const hide = () => {
            if (window.innerWidth >= 1000) {
                setSlidebar(false)
            }
        }
        window.addEventListener('resize', hide);
        return () => {
            window.removeEventListener('resize', hide);
        }
    }, [])
    // navbar responsive
    useEffect(() => {
        const onSmallNav = () => {
            if (window.innerWidth < 650) {
                // on header__stick
                setSmallNav("header__stick");
            } else {
                // width > 650 off header__stick
                setSmallNav("");
            }
        };
        onSmallNav();
        window.addEventListener('resize', onSmallNav);
        return () => {
            window.removeEventListener('resize', onSmallNav);
        }
    }, [])

    //  render user header
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
    // render login header
    const loginRender = () => {
        return <ul className="navbar-nav mr-5">
            <li className="nav-item">
                <NavLink to="/login" className="nav-link" >Đăng Nhập </NavLink>
            </li>
            <li className="nav-item">
                <span className="nav-link text-white" >/</span>
            </li>
            <li className="nav-item">
                <NavLink to="/register" className="nav-link" >Đăng Ký</NavLink>
            </li>
        </ul>
    }
    // slide bar
    const slideBarRender = () => {
        return <div className={`nav__slide ${slidebar}  `}>
            <div className="nav__close text-center p-3">
                <i className="fa fa-times-circle" onClick={() => {
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
                    <Link className="nav-link " to="phim" smooth={true} duration={1000}  >Phim</Link>
                </li>
                <li className="nav__slideTxt">
                    <Link className="nav-link " to="rapPhim" smooth={true} duration={1000}  >Rạp Phim</Link>
                </li>
                <li className="nav__slideTxt">
                    <Link className="nav-link " to="khuyenMai" smooth={true} duration={1000}  >Khuyến Mãi</Link>
                </li>
                <li className="nav__slideTxt">
                    <Link className="nav-link " to="gioiThieu" smooth={true} duration={1000}  >Giới Thiệu</Link>
                </li>
            </ul>
        </div>
    }

    return (
        <Fragment>
            <header className="header">
                <nav className={`${nav} ${smallNav} header__navbar navbar navbar-expand-lg`}>
                    <NavLink className="header__grand navbar-brand" to="/" >
                        <img className="img-fluid" src={img_logo} alt='123' />
                    </NavLink>
                    <button className="navbar-toggler text-white bg-dark" onClick={() => {
                        //hiện slide bar
                        setSlidebar("nav__slideActive")
                    }}>
                        <i className="fa fa-stream" ></i>
                    </button>
                    <div className="header__content collapse navbar-collapse" id="navbarSupportedContent" >
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link " to="phim" smooth={true} duration={1000}  >Phim</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="rapPhim" smooth={true} duration={1000}  >Rạp Phim</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="khuyenMai" smooth={true} duration={1000}  >Khuyến Mãi</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="gioiThieu" smooth={true} duration={1000}  >Giới Thiệu</Link>
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
