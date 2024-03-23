import React, { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <header className="header header-one">
            <div className="container">
                <nav className="navbar navbar-expand-lg header-nav">
                    <div className="navbar-header">
                        <a id="mobile_btn" onClick={toggleMobileMenu}>
                            <span className="bar-icon">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </a>
                        <Link legacyBehavior href="/">

                            <a className="navbar-brand logo">
                                <Image width={250} height={80} src="/assets/img/logofooter.png" className="Image-fluid" alt="Logo" />
                            </a>
                        </Link>

                        <Link legacyBehavior href="/">
                            <a className="navbar-brand logo-small">
                                <Image width={200} height={200} src="/assets/img/logofooter.png" className="Image-fluid" alt="Logo" />
                            </a></Link>
                    </div>
                    {/* <div className={`main-menu-wrapper ${isMobileMenuOpen ? 'show-mobile-menu' : ''}`}>
                        <div className="menu-header">
                            <Link legacyBehavior href="/">

                                <a className="menu-logo">
                                    <Image width={100} height={100} src="/assets/img/logofooter.png" className="Image-fluid" alt="Logo" />
                                </a></Link>
                            <a onClick={toggleMobileMenu} className="menu-close"  > <i
                                className="fas fa-times"></i></a>
                        </div>
                        <ul className="main-nav">
                            <li className="has-submenu megamenu active">
                                <Link legacyBehavior href="/">

                                    Home
                                    
                                </Link></li>
                            <li>
                                <Link legacyBehavior href="/About">

                                    About 
                                    
                                </Link></li>
                            <li>
                                <Link legacyBehavior href="/ContactUs">

                                  Contact Us 
                                  
                                </Link></li>     
                                <li>
                                <Link legacyBehavior href="/service">

                                    Service 
                                        
                                </Link></li>
                            <li>
                                <Link legacyBehavior href="/Categories">

                                    categories 
                                    
                                </Link></li>
                           
                            <li className="login-link">
                                <Link href="/users/signin">Register</Link>
                            </li>
                            <li className="login-link">
                                <a href="login.html">Login</a>
                            </li>
                        </ul>
                    </div> */}
                    <ul className="nav header-navbar-rht">
                        <li className="nav-item">
                            <Link className="nav-link header-reg" href="/users/signup">Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link header-login" href="/users/signin"><i
                                className="fa-regular fa-circle-user me-2"></i>Login</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
