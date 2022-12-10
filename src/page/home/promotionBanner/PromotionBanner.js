import React from 'react';
import promo1 from '../../../assets/img/pormo1.jpg';
import promo2 from '../../../assets/img/promo2.jpg';
import promo3 from '../../../assets/img/promo3.jpg';
import promo4 from '../../../assets/img/promo4.jpg';
import promo5 from '../../../assets/img/promo5.jpg';
import promo6 from '../../../assets/img/promo6.jpg';
import promo7 from '../../../assets/img/promo7.jpg';
import promo8 from '../../../assets/img/promo8.png';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function PromotionBanner() {

    const settings = {
        focusOnSelect: true,
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dotsClass:"slick-dots custome__dots",
        customPaging: i => (
            <div></div>
        )
    };

    return (
        <div className="promotionBanner ">
            <div className="text-dark">
                <Slider {...settings}>
                    <div className="d-flex justify-content-center">
                        <div className="l-container ">
                            <div className="b-game-card">
                                <div className="b-game-card__cover" style={{ backgroundImage: `url(${promo1})` }} />
                            </div>
                            <div className="b-game-card">
                                <div className="b-game-card__cover" style={{ backgroundImage: `url(${promo2})` }} />
                            </div>
                            <div className="b-game-card">
                                <div className="b-game-card__cover" style={{ backgroundImage: `url(${promo3})` }} />
                            </div>
                            <div className="b-game-card">
                                <div className="b-game-card__cover" style={{ backgroundImage: `url(${promo4})` }} />
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="l-container">
                            <div className="b-game-card">
                                <div className="b-game-card__cover" style={{ backgroundImage: `url(${promo5})` }} />
                            </div>
                            <div className="b-game-card">
                                <div className="b-game-card__cover" style={{ backgroundImage: `url(${promo6})` }} />
                            </div>
                            <div className="b-game-card">
                                <div className="b-game-card__cover" style={{ backgroundImage: `url(${promo7})` }} />
                            </div>
                            <div className="b-game-card">
                                <div className="b-game-card__cover" style={{ backgroundImage: `url(${promo8})` }} />
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="l-container">
                            <div className="b-game-card">
                                <div className="b-game-card__cover" style={{ backgroundImage: `url(${promo1})` }} />
                            </div>
                            <div className="b-game-card">
                                <div className="b-game-card__cover" style={{ backgroundImage: `url(${promo2})` }} />
                            </div>
                            <div className="b-game-card">
                                <div className="b-game-card__cover" style={{ backgroundImage: `url(${promo3})` }} />
                            </div>
                            <div className="b-game-card">
                                <div className="b-game-card__cover" style={{ backgroundImage: `url(${promo4})` }} />
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}
