import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BannerCarouselAction } from '../../../redux/Actions/BannercarouselAction';
// import picture
import bghead from '../../../assets/img/header-before-bg.png';
import bgfoot from '../../../assets/img/banner-shadow-btm.png';
import banner1 from '../../../assets/img/banner1.jpg';
import banner2 from '../../../assets/img/banner2.jpg';
import banner3 from '../../../assets/img/banner3.jpg';
import banner4 from '../../../assets/img/banner4.jpg';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function BannerCarousel(props) {
    const dispatch = useDispatch();

    // dữ liệu banner 
    const { arrBanner } = useSelector(state => state.BannerCarouselReducer);

    // biến add margin
    const [addMargin, setAddMargin] = useState("bannerCarousel__marginOff");

    useEffect(() => {
        // lấy dữ liệu banner
        dispatch(BannerCarouselAction());
    }, [])

    // animation add margin 
    useEffect(() => {
        const onSmallNav = () => {
            if (window.innerWidth < 650) {
                // on bannerCarousel__margin
                setAddMargin("bannerCarousel__marginOn");
            } else {
                // width > 650 off bannerCarousel__margin
                setAddMargin("bannerCarousel__marginOff");
            }
        }
        setTimeout(onSmallNav,1000)
        window.addEventListener('resize', onSmallNav);
        return () => {
            window.removeEventListener('resize', onSmallNav);
        }
    }, [])

    //scss background 
    const bannerStyle = {
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
    }

    // hàm hiển thị banner
    const renderBanner = () => {
        return arrBanner.map((pic, index) => {
            return <div className="bannerCarousel__backGround" key={index} >
                <div className="backGround" style={{ ...bannerStyle, backgroundImage: `url(${pic.hinhAnh})` }} >
                    <div className="bannerCarousel__txt">
                        <p className="txt__title">showing in april</p>
                        <button className="txt__button"> HOT PHIM </button>
                    </div>
                </div>
            </div>
        })
    }

    // setting thư viện cho banner 
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dotsClass: "slick-dots custome__dots",
        customPaging: i => (
            <div></div>
        )
    };

    return (
        <div className={`bannerCarousel`}>
            <div className={`${addMargin}`}></div>
            <Slider {...settings} className="position-relative">
                <div className="bannerCarousel__backGround">
                    <img src={banner1} className="img-fluid backGround" alt='123' />
                    <div className="bannerCarousel__txt">
                        <button className="txt__button"> HOT EVENT </button>
                    </div>
                </div>
                <div className="bannerCarousel__backGround">
                    <img src={banner2} className="img-fluid backGround" alt='123' />
                    <div className="bannerCarousel__txt">
                        <button className="txt__button"> HOT EVENT </button>
                    </div>
                </div>
                <div className="bannerCarousel__backGround">
                    <img src={banner3} className="img-fluid backGround" alt='123' />
                    <div className="bannerCarousel__txt">
                        <p className="txt__title"> QUEENPINS </p>
                        <div className="row justify-content-between col-12 txt__type">
                            <p> Adventure, Fantasy </p>
                        </div>
                        <button className="txt__button"> HOT PHIM </button>
                    </div>
                </div>
                <div className="bannerCarousel__backGround">
                    <img src={banner4} className="img-fluid backGround" alt='123' />
                    <div className="bannerCarousel__txt">
                        <p className="txt__title">The Legends of the 10 Rings </p>
                        <div className="row justify-content-between col-10 col-md-9 col-lg-5 txt__type">
                            <p> Adventure, Fantasy </p>
                            <p>2 hrs 12 mins</p>
                        </div>
                        <button className="txt__button"> HOT PHIM </button>
                    </div>
                </div>
                {renderBanner()}
            </Slider>
            <img src={bgfoot} alt="123" className="img-fluid bgfoot" />
            <img src={bghead} alt="123" className="img-fluid bghead" />
        </div>
    )
}
