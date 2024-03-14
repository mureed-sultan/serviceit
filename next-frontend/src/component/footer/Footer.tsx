import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
<footer className="footer">

<div className="footer-top aos" data-aos="fade-up">
    <div className="container">
        <div className="row">
            <div className="col-lg-4 col-md-6">

                <div className="footer-widget">
                    <div className="footer-logo">
                        <a href="index-2.html"><Image width={500} height={500}  src="/assets/img/logo.svg" alt="logo"/></a>
                    </div>
                    <div className="footer-content">
                        <p>Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod tempor commodo
                            consequat. </p>
                    </div>
                    <div className="footer-selects">
                        <h2 className="footer-title">Language & Currency</h2>
                        <div className="row">
                            <div className="col-lg-12 d-flex">
                                <div className="footer-select">
                                    {/* <Image width={50} height={50}  src="/assets/img/icons/global.svg" alt="img"/> */}
                                    <select className="select">
                                        <option>English</option>
                                        <option>France</option>
                                        <option>Spanish</option>
                                    </select>
                                </div>
                                <div className="footer-select">
                                    {/* <Image width={10} height={10}  src="/assets/img/icons/dropdown.svg" className="footer-dropdown" alt="img"/>*/}
                                    <select className="select">
                                        <option>US Dollars</option>
                                        <option>INR</option>
                                        <option>Kuwait</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="col-lg-2 col-md-6">

                <div className="footer-widget footer-menu">
                    <h2 className="footer-title">Quick Links</h2>
                    <ul>
                        <li>
                            <a href="about-us.html">About Us</a>
                        </li>
                        <li>
                            <a href="blog-grid.html">Blogs</a>
                        </li>
                        <li>
                            <a href="contact-us.html">Contact Us</a>
                        </li>
                        <li>
                            <a href="provider-signup.html">Become a Professional</a>
                        </li>
                        <li>
                            <a href="user-signup.html">Become a User</a>
                        </li>
                    </ul>
                </div>

            </div>
            <div className="col-lg-3 col-md-6">

                <div className="footer-widget footer-contact">
                    <h2 className="footer-title">Contact Us</h2>
                    <div className="footer-contact-info">
                        <div className="footer-address">
                            <p><span><i className="feather-map-pin"></i></span> 367 Hillcrest Lane, Irvine,
                                California, United States</p>
                        </div>
                        <p><span><i className="feather-phone"></i></span> 321 546 8764</p>
                        <p className="mb-0"><span><i className="feather-mail"></i></span> <a
                                href="https://truelysell.dreamstechnologies.com/cdn-cgi/l/email-protection"
                                className="__cf_email__"
                                data-cfemail="9febedeafaf3e6ecfaf3f3dffae7fef2eff3fab1fcf0f2">[email&#160;protected]</a>
                        </p>
                    </div>
                </div>

            </div>
            <div className="col-lg-3 col-md-6">

                <div className="footer-widget">
                    <h2 className="footer-title">Follow Us</h2>
                    <div className="social-icon">
                        <ul>
                            <li>
                                <a href="javascript:void(0);"><i className="fa-brands fa-facebook"></i> </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);"><i className="fab fa-twitter"></i> </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);"><i className="fa-brands fa-instagram"></i></a>
                            </li>
                            <li>
                                <a href="javascript:void(0);"><i className="fa-brands fa-linkedin"></i></a>
                            </li>
                        </ul>
                    </div>
                    <h2 className="footer-subtitle">Newsletter Signup</h2>
                    <div className="subscribe-form">
                        <input type="email" className="form-control" placeholder="Enter Email Address"/>
                        <button type="submit" className="btn footer-btn">
                            <i className="feather-send"></i>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>


<div className="footer-bottom">
    <div className="container">

        <div className="copyright">
            <div className="row align-items-center">
                <div className="col-md-4">
                    <div className="copyright-text">
                        <p className="mb-0">Copyright &copy; 2023. All Rights Reserved.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="payment-image">
                        <ul>
                            <li>
                                <a href="javascript:void(0);"><Image width={500} height={500}  src="/assets/img/payment/visa.png"
                                        alt="img"/></a>
                            </li>
                            <li>
                                <a href="javascript:void(0);"><Image width={500} height={500}  src="/assets/img/payment/mastercard.png"
                                        alt="img"/></a>
                            </li>
                            <li>
                                <a href="javascript:void(0);"><Image width={500} height={500}  src="/assets/img/payment/stripe.png"
                                        alt="img"/></a>
                            </li>
                            <li>
                                <a href="javascript:void(0);"><Image width={500} height={500}  src="/assets/img/payment/discover.png"
                                        alt="img"/></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-4">

                    <div className="copyright-menu">
                        <ul className="policy-menu">
                            <li>
                                <a href="privacy-policy.html">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="terms-condition.html">Terms & Conditions</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>

    </div>
</div>

</footer>
  )
}

export default Footer
