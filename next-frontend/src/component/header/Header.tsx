import React from 'react'
import Image from 'next/image'

function Header() {
  return (
     <header className="header header-one">
            <div className="container">
                <nav className="navbar navbar-expand-lg header-nav">
                    <div className="navbar-header">
                        <a id="mobile_btn" href="javascript:void(0);">
                            <span className="bar-icon">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </a>
                        <a href="index-2.html" className="navbar-brand logo">
                            <Image  width={500} height={500} src="/assets/img/logo.svg" className="Image-fluid" alt="Logo"/>
                        </a>
                        <a href="index-2.html" className="navbar-brand logo-small">
                            <Image  width={500} height={500} src="/assets/img/logo-small.png" className="Image-fluid" alt="Logo"/>
                        </a>
                    </div>
                    <div className="main-menu-wrapper">
                        <div className="menu-header">
                            <a href="index-2.html" className="menu-logo">
                                <Image  width={500} height={500} src="/assets/img/logo.svg" className="Image-fluid" alt="Logo"/>
                            </a>
                            <a id="menu_close" className="menu-close" href="javascript:void(0);"> <i
                                    className="fas fa-times"></i></a>
                        </div>
                        <ul className="main-nav">
                            <li className="has-submenu megamenu active">
                                <a href="javascript:void(0);">Home <i className="fas fa-chevron-down"></i></a>
                                {/* <ul className="submenu mega-submenu">
                                    <li>
                                        <div className="megamenu-wrapper">
                                            <div className="row">
                                                <div className="col-lg-2">
                                                    <div className="single-demo active">
                                                        <div className="demo-Image">
                                                            <a href="index-2.html"><Image  width={500} height={500} src="/assets/img/home-01.jpg"
                                                                    className="Image-fluid" alt="Image"/></a>
                                                        </div>
                                                        <div className="demo-info">
                                                            <a href="index-2.html">Electrical Home</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-2">
                                                    <div className="single-demo">
                                                        <div className="demo-Image">
                                                            <a href="index-3.html"><Image  width={500} height={500} src="/assets/img/home-02.jpg"
                                                                    className="Image-fluid" alt="Image"/></a>
                                                        </div>
                                                        <div className="demo-info">
                                                            <a href="index-3.html">Cleaning Home</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-2">
                                                    <div className="single-demo">
                                                        <div className="demo-Image">
                                                            <a href="index-4.html"><Image  width={500} height={500} src="/assets/img/home-03.jpg"
                                                                    className="Image-fluid" alt="Image"/></a>
                                                        </div>
                                                        <div className="demo-info">
                                                            <a href="index-4.html">Saloon Home</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-2">
                                                    <div className="single-demo">
                                                        <div className="demo-Image">
                                                            <a href="index-5.html"><Image  width={500} height={500} src="/assets/img/home-04.jpg"
                                                                    className="Image-fluid" alt="Image"/></a>
                                                        </div>
                                                        <div className="demo-info">
                                                            <a href="index-5.html">Catering Home</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-2">
                                                    <div className="single-demo">
                                                        <div className="demo-Image">
                                                            <a href="index-6.html"><Image  width={500} height={500} src="/assets/img/home-05.jpg"
                                                                    className="Image-fluid" alt="Image"/></a>
                                                        </div>
                                                        <div className="demo-info">
                                                            <a href="index-6.html">Car Wash Home</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-2">
                                                    <div className="single-demo">
                                                        <div className="demo-Image">
                                                            <a href="index-7.html"><Image  width={500} height={500} src="/assets/img/home-06.jpg"
                                                                    className="Image-fluid" alt="Image"/></a>
                                                        </div>
                                                        <div className="demo-info">
                                                            <a href="index-7.html">Cleaning Home</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-2">
                                                    <div className="single-demo">
                                                        <div className="demo-Image">
                                                            <a href="index-8.html"><Image  width={500} height={500} src="/assets/img/home-07.jpg"
                                                                    className="Image-fluid" alt="Image"/></a>
                                                        </div>
                                                        <div className="demo-info">
                                                            <a href="index-8.html">House Problem Home</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-2">
                                                    <div className="single-demo">
                                                        <div className="demo-Image">
                                                            <a href="index-9.html"><Image  width={500} height={500} src="/assets/img/home-08.jpg"
                                                                    className="Image-fluid" alt="Image"/></a>
                                                        </div>
                                                        <div className="demo-info">
                                                            <a href="index-9.html">Pet Grooming Home</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-2">
                                                    <div className="single-demo">
                                                        <div className="demo-Image">
                                                            <a href="index-10.html"><Image  width={500} height={500} src="/assets/img/home-09.jpg"
                                                                    className="Image-fluid" alt="Image"/></a>
                                                        </div>
                                                        <div className="demo-info">
                                                            <a href="index-10.html">Mechanic Home</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul> */}
                            </li>
                            <li className="has-submenu">
                                <a href="javascript:void(0);">Services <i className="fas fa-chevron-down"></i></a>
                                <ul className="submenu">
                                    <li><a href="service-grid.html">Service Grid</a></li>
                                    <li><a href="service-list.html">Service List</a></li>
                                    <li className="has-submenu">
                                        <a href="javascript:void(0);">Service Details</a>
                                        <ul className="submenu">
                                            <li><a href="service-details.html">Service Details 1</a></li>
                                            <li><a href="service-details2.html">Service Details 2</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="search.html">Search</a></li>
                                    <li className="has-submenu">
                                        <a href="javascript:void(0);">Providers</a>
                                        <ul className="submenu">
                                            <li><a href="providers.html">Providers List</a></li>
                                            <li><a href="provider-details.html">Providers Details</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="create-service.html">Create Service</a></li>
                                </ul>
                            </li>
                            <li className="has-submenu">
                                <a href="javascript:void(0);">Customers <i className="fas fa-chevron-down"></i></a>
                                <ul className="submenu">
                                    <li><a href="customer-dashboard.html">Dashboard</a></li>
                                    <li><a href="customer-booking.html">Booking</a></li>
                                    <li><a href="customer-favourite.html">Favorites</a></li>
                                    <li><a href="customer-wallet.html">Wallet</a></li>
                                    <li><a href="customer-reviews.html">Reviews</a></li>
                                    <li><a href="customer-chat.html">Chat</a></li>
                                    <li><a href="customer-profile.html">Settings</a></li>
                                </ul>
                            </li>
                            <li className="has-submenu">
                                <a href="javascript:void(0);">Providers <i className="fas fa-chevron-down"></i></a>
                                <ul className="submenu">
                                    <li><a href="provider-dashboard.html">Dashboard</a></li>
                                    <li><a href="provider-services.html">My Services</a></li>
                                    <li><a href="provider-booking.html">Booking</a></li>
                                    <li><a href="provider-payout.html">Payout</a></li>
                                    <li className="has-submenu">
                                        <a href="javascript:void(0);">Settings</a>
                                        <ul className="submenu">
                                            <li><a href="provider-appointment-settings.html">Appointment Settings</a>
                                            </li>
                                            <li><a href="provider-profile-settings.html">Account Settings</a></li>
                                            <li><a href="provider-social-profile.html">Social Profiles</a></li>
                                            <li><a href="provider-security-settings.html">Security</a></li>
                                            <li><a href="provider-plan.html">Plan & Billings</a></li>
                                            <li><a href="provider-notifcations.html">Notifications</a></li>
                                            <li><a href="provider-connected-apps.html">Connected Apps</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="provider-availability.html">Availability</a></li>
                                    <li><a href="provider-holiday.html">Holidays & Leave</a></li>
                                    <li><a href="provider-coupons.html">Coupons</a></li>
                                    <li><a href="provider-offers.html">Offers</a></li>
                                    <li><a href="provider-reviews.html">Reviews</a></li>
                                    <li><a href="provider-earnings.html">Earnings</a></li>
                                    <li><a href="provider-chat.html">Chat</a></li>
                                </ul>
                            </li>
                            <li className="has-submenu">
                                <a href="javascript:void(0);">Pages <i className="fas fa-chevron-down"></i></a>
                                <ul className="submenu">
                                    <li><a href="about-us.html">About</a></li>
                                    <li><a href="contact-us.html">Contact Us</a></li>
                                    <li><a href="how-it-works.html">How It Works</a></li>
                                    <li className="has-submenu">
                                        <a href="javascript:void(0);">Error Page</a>
                                        <ul className="submenu">
                                            <li><a href="error-404.html">404 Error</a></li>
                                            <li><a href="error-500.html">500 Error</a></li>
                                        </ul>
                                    </li>
                                    <li className="has-submenu">
                                        <a href="javascript:void(0);">Authentication</a>
                                        <ul className="submenu">
                                            <li><a href="choose-signup.html">Signup Choose </a></li>
                                            <li><a href="user-signup.html">Customer Signup</a></li>
                                            <li><a href="provider-signup.html">Provider Signup</a></li>
                                            <li><a href="login.html">Login</a></li>
                                            <li><a href="reset-password.html">Reset Password</a></li>
                                            <li><a href="password-recovery.html">Password Update</a></li>
                                            <li><a href="phone-otp.html">Phone OTP</a></li>
                                            <li><a href="email-otp.html">Email OTP</a></li>
                                            <li><a href="free-trial.html">Free Trial</a></li>
                                        </ul>
                                    </li>
                                    <li className="has-submenu">
                                        <a href="javascript:void(0);">Booking</a>
                                        <ul className="submenu">
                                            <li><a href="booking.html">Booking 1</a></li>
                                            <li><a href="booking-2.html">Booking 2</a></li>
                                            <li><a href="booking-payment.html">Booking Checkout</a></li>
                                            <li><a href="booking-done.html">Booking Success</a></li>
                                            <li><a href="booking-details.html">Booking Details</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="categories.html">Categories</a></li>
                                    <li><a href="pricing.html">Pricing Plan</a></li>
                                    <li><a href="faq.html">FAQ</a></li>
                                    <li><a href="maintenance.html">Maintenance</a></li>
                                    <li><a href="coming-soon.html">Coming Soon</a></li>
                                    <li><a href="privacy-policy.html">Privacy Policy</a></li>
                                    <li><a href="terms-condition.html">Terms & Conditions</a></li>
                                    <li><a href="session-expired.html">Session Expired</a></li>
                                    <li><a href="installer.html">Installer</a></li>
                                </ul>
                            </li>
                            <li className="has-submenu">
                                <a href="blog-grid.html">Blog <i className="fas fa-chevron-down"></i></a>
                                <ul className="submenu">
                                    <li><a href="blog-grid.html">Blog Grid</a></li>
                                    <li><a href="blog-list.html">Blog List</a></li>
                                    <li><a href="blog-details.html">Blog Details</a></li>
                                </ul>
                            </li>
                            <li><a href="admin/index.html">Admin</a></li>
                            <li className="login-link">
                                <a href="choose-signup.html">Register</a>
                            </li>
                            <li className="login-link">
                                <a href="login.html">Login</a>
                            </li>
                        </ul>
                    </div>
                    <ul className="nav header-navbar-rht">
                        <li className="nav-item">
                            <a className="nav-link header-reg" href="choose-signup.html">Register</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link header-login" href="login.html"><i
                                    className="fa-regular fa-circle-user me-2"></i>Login</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
  )
}

export default Header
