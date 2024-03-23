import React, { ReactNode, useEffect, useState } from 'react';
import Router from 'next/router';
import Header from './header/Header';
import Footer from './footer/Footer';
import '../styles/main.css';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "aos/dist/aos.css";
import AOS from 'aos';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {


  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // const myCursor = $(".mouse-cursor");

    // if (myCursor.length) {
    //   if ($("body")) {
    //     const innerCursor = document.querySelector(
    //       ".cursor-inner"
    //     ) as HTMLElement;
    //     const outerCursor = document.querySelector(
    //       ".cursor-outer"
    //     ) as HTMLElement;
    //     let mouseY = 0;
    //     let mouseX = 0;
    //     let hoveredElements = $("a, .cursor-pointer");

    //     window.onmousemove = function (event: MouseEvent) {
    //       if (!hoveredElements.is(event.target as Element)) {
    //         outerCursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
    //       }
    //       innerCursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
    //       mouseY = event.clientY;
    //       mouseX = event.clientX;
    //     };

    //     window.addEventListener("click", () => {
    //       outerCursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    //       innerCursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    //     });

    //     $("body").on("mouseenter", "a, .cursor-pointer", function () {
    //       innerCursor.classList.add("cursor-hover");
    //       outerCursor.classList.add("cursor-hover");
    //     });

    //     $("body").on("mouseleave", "a, .cursor-pointer", function () {
    //       innerCursor.classList.remove("cursor-hover");
    //       outerCursor.classList.remove("cursor-hover");
    //     });

    //     $("a, .cursor-pointer").on("mouseleave", function () {
    //       innerCursor.classList.remove("cursor-hover");
    //       outerCursor.classList.remove("cursor-hover");
    //     });

    //     innerCursor.style.visibility = "visible";
    //     outerCursor.style.visibility = "visible";
    //   }
    // }
    AOS.init({ duration: 1000 });

  }, []);
  // useEffect(() => {
  //   const startLoading = () => setLoading(true);
  //   const endLoading = () => setLoading(false);

  //   Router.events.on('routeChangeStart', startLoading);
  //   Router.events.on('routeChangeComplete', endLoading);
  //   Router.events.on('routeChangeError', endLoading);


  //   return () => {
  //     Router.events.off('routeChangeStart', startLoading);
  //     Router.events.off('routeChangeComplete', endLoading);
  //     Router.events.off('routeChangeError', endLoading);
  //   };
  // }, []);

  return (
    <>
      <Header />
      {loading && (
        <div className="progress-bar-container">
          <div className="progress-bar"></div>
        </div>
      )}
      <main>{children}</main>
      <Footer />
      {/* <div className="mouse-cursor cursor-outer"></div>
      <div className="mouse-cursor cursor-inner"></div> */}
    </>
  );
};

export default Layout;
