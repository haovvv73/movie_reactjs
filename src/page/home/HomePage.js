import React from 'react'
import BannerCarousel from './banner/BannerCarousel'
import Cinema from './cinema/Cinema'
import FilmList from './filmList/FilmList'
import PromotionBanner from './promotionBanner/PromotionBanner'
import logo from '../../assets/img/logo.png'

export default function HomePage() {
    return (
        // trang chính của web
        <div className="home">
            <BannerCarousel />
            <div className="home__banner container-fluid p-5">
                <div className="home__content row justify-content-center p-3">
                    <div className="text-center m-5">
                        <img src={logo} alt="123" className="img-fluid" />
                    </div>
                    <div className="home__items m-5 text-center">
                        <h5>Introducing CGV Plus, the exclusive loyalty program that pays you back!</h5>
                        <h4>ROXY PLUS. MORE MOVIES. MORE REWARDS.</h4>
                    </div>
                </div>
            </div>
            <div className="text-center m-5">
                <hr className="hr__head" />
                <p className="tittle m-1 " id="phim">PHIM</p>
                <hr className="hr__foot" />
            </div>
            <FilmList />
            <div className="text-center m-5">
                <hr className="hr__head" />
                <p className="tittle m-1 " id="rapPhim" >RẠP PHIM</p>
                <hr className="hr__foot" />
            </div>
            <Cinema />
            <div className="text-center m-5">
                <hr className="hr__head" />
                <p className="tittle m-1 " id="khuyenMai">KHUYẾN MÃI</p>
                <hr className="hr__foot" />
            </div>
            <PromotionBanner />
            <div className="text-center m-5 pt-5">
                <hr className="hr__head" />
                <p className="tittle m-1 " id="gioiThieu" >GIỚI THIỆU</p>
                <hr className="hr__foot" />
            </div>
            <div className="pb-5 container">
                <iframe width="100%" height="550" src="https://www.youtube.com/embed/NeJ3k3bl174" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </div>
    )
}
