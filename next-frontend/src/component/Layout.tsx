import React, { ReactNode, useEffect, useState } from 'react';
import Router from 'next/router';
import Header from './header/Header';
import Footer from './footer/Footer';
import Loading from './loading';
import '../styles/main.css';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "aos/dist/aos.css";
import AOS from 'aos';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [loading, setLoading] = useState(false); // State to manage loading screen visibility

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const startLoading = () => setLoading(true); // Show loading screen on route change start
    const endLoading = () => setLoading(false); // Hide loading screen on route change complete

    Router.events.on('routeChangeStart', startLoading);
    Router.events.on('routeChangeComplete', endLoading);
    Router.events.on('routeChangeError', endLoading);

    return () => {
      Router.events.off('routeChangeStart', startLoading);
      Router.events.off('routeChangeComplete', endLoading);
      Router.events.off('routeChangeError', endLoading);
    };
  }, []);

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      {loading && <Loading loaded={!loading} />} 
    </>
  );
};

export default Layout;
