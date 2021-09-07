import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BannerCarouselAction } from '../../../redux/Actions/BannercarouselAction';
// import picture
import bghead from '../../../assets/img/header-before-bg.png';
import bgfoot from '../../../assets/img/banner-shadow-btm.png';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function BannerCarousel(props) {
    const dispatch = useDispatch();

    // dữ liệu banner 
    const { arrBanner } = useSelector(state => state.BannerCarouselReducer);
    
    // biến add margin
    const [addMargin,setAddMargin] = useState("");

    useEffect(() => {
        // lấy dữ liệu banner
        dispatch(BannerCarouselAction());
    },[])

    // width < 650 add margin 
    useEffect(() => {
        const onSmallNav = () => {
            if(window.innerWidth < 650){
                // on bannerCarousel__margin
                setAddMargin("bannerCarousel__margin");
            }else{
                // width > 650 off bannerCarousel__margin
                setAddMargin("");
            }
        }
        window.addEventListener('resize',onSmallNav);
        return ()=>{
            window.removeEventListener('resize', onSmallNav);
        }
    }, [])

    //scss background 
    const bannerStyle ={
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
    }

    // hàm hiển thị banner
    const renderBanner = () => {
        return arrBanner.map((pic, index) => {
            return <div className="bannerCarousel__backGround" key={index} >
                <div className="backGround" style={{...bannerStyle,backgroundImage:`url(${pic.hinhAnh})`}} >
                </div>
            </div>
        })
    }

    // setting thư viện cho banner 
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 2000,
        arrows:false,
        dotsClass:"slick-dots custome__dots",
        customPaging: i => (
            <div></div>
        )
      };

    return (
        <div className={`bannerCarousel ${addMargin} `}>
            <Slider {...settings}>
                {renderBanner()}
            </Slider>
            <img src={bghead} alt="123" className="img-fluid bghead"/>
            <img src={bgfoot} alt="123" className="img-fluid bgfoot"/>
        </div>
    )
}
