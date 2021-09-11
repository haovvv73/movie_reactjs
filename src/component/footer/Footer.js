import React from 'react';
import logo from '../../assets/img/logo.png';

export default function Footer() {
    return (
        <footer className="footer container-fluid ">
            <div className="footer__logo d-flex justify-content-center pt-5 pb-2">
                <img className="img-fluid" src={logo} alt='123' />
            </div>
            <hr />
            <div className="footer__content container py-5">
                <div className="row">
                    <div className="col-6 col-lg-3">
                        <div className="footer__item">
                            <h2>Contact us</h2>
                            <p><i className="fa fa-map-marker-alt mr-2" /> võ trần gia hào </p>
                            <p><i className="fa fa-phone mr-2" /> 0822338074</p>
                            <p><i className="fa fa-address-book mr-2" /> Monday - Friday: 8 AM - 5 PM</p>
                            <p>
                                <a href="https://www.facebook.com/votrangiahao"><i className="fab fa-twitter mr-2" /></a>
                                <a href="https://www.facebook.com/votrangiahao"><i className=" fab fa-facebook-f mr-2" /></a>
                                <a href="https://www.facebook.com/votrangiahao"><i className=" fab fa-youtube mr-2" /></a>
                                <a href="https://www.facebook.com/votrangiahao"><i className=" fab fa-instagram" /></a>
                            </p>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3">
                        <div className="footer__item footer__span">
                            <h2>Quick Links</h2>
                            <a href="https://www.facebook.com/votrangiahao">
                                <p>Home</p>
                            </a>
                            <a href="https://www.facebook.com/votrangiahao">
                                <p>Courses</p>
                            </a>
                            <a href="https://www.facebook.com/votrangiahao">
                                <p>Schedule</p>
                            </a>
                            <a href="https://www.facebook.com/votrangiahao">
                                <p>Blog</p>
                            </a>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3">
                        <div className="footer__item footer__span">
                            <h2>About</h2>
                            <a href="https://www.facebook.com/votrangiahao">
                                <p>About Us</p>
                            </a>
                            <a href="https://www.facebook.com/votrangiahao">
                                <p>Event</p>
                            </a>
                            <a href="https://www.facebook.com/votrangiahao">
                                <p>Get Quote</p>
                            </a>
                            <a href="https://www.facebook.com/votrangiahao">
                                <p>Contact</p>
                            </a>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3">
                        <div className="footer__item">
                            <p className="text-white"> CGV CINEMAS WANT YOUR CONTACT</p>
                            <form className="footer__mail">
                                <div className="form-group input">
                                    <input type="text" className="form-control" id="inputYourMail" placeholder="Your Mail" />
                                </div>
                                <button className="btnFooter" type="button">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="footer__end pb-1">
                <p className="ml-5" >Copyright Reserved © 2020 CGV Cinemas Sdn Bhd. All Rights Reserved.</p>
            </div>
        </footer>
    )
}
