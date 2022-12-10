import React from 'react';

export default function Footer() {
    return (
        <footer className="footer container-fluid ">
            <hr className="footer__hr mt-0"/>
            <div className="footer__content container py-5">
                <div className="row justify-content-around">
                    <div className="col-6 col-lg-3">
                        <div className="footer__item footer__span">
                            <p className="text-white">Quick Links</p>
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
                            <p className="text-white">About</p>
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
                    <div className="col-12 col-lg-5">
                        <div className="footer__item">
                            <p className="text-white"> CGV CINEMAS WANT YOUR CONTACT</p>
                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque temporibus.</p>
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
            <hr className="footer__hr" />
            <div className="footer__end pb-1">
                <p className="ml-5" >Copyright Reserved © 2020 CGV Cinemas Sdn Bhd. All Rights Reserved.</p>
            </div>
        </footer>
    )
}
