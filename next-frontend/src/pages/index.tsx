import React, { useState ,useEffect } from "react";
import Layout from "@/component/Layout";
import Image from "next/image";
import dynamic from "next/dynamic";
const ReactOwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
import AOS from 'aos';
import { useRouter } from 'next/router';



function Home() {
  const router = useRouter();

  useEffect(() => {
    AOS.init({ 
        duration: 1000 
      });
  
  }, []);
const findService = (e: { preventDefault: () => void; })=>{
  e.preventDefault();
  // const location = e.target.elements.location.value;
  // const service = e.target.elements.service.value;
  
  
}
  const serviceWidgets = [
    {
      serviceImgSrc: "/assets/img/services/service-01.jpg",
      serviceImgAlt: "Service Image",
      category: "Cleaning",
      itemName: "Electric Panel Repairing Service",
      location: "New Jersey, USA",
      rate: "4.9",
      price: "$25.00",
      oldPrice: "$35.00",
      providerImgSrc: "/assets/img/profiles/avatar-01.jpg",
    },
    {
      serviceImgSrc: "/assets/img/services/service-02.jpg",
      serviceImgAlt: "Service Image",
      category: "Construction",
      itemName: "Toughened Glass Fitting Services",
      location: "Montana, USA",
      rate: "4.9",
      price: "$45.00",
      providerImgSrc: "/assets/img/profiles/avatar-02.jpg",
    },
    {
      serviceImgSrc: "/assets/img/services/service-03.jpg",
      serviceImgAlt: "Service Image",
      category: "Carpentry",
      itemName: "Wooden Carpentry Work",
      location: "Montana, USA",
      rate: "4.9",
      price: "$45.00",
      providerImgSrc: "/assets/img/profiles/avatar-03.jpg",
    },
    {
      serviceImgSrc: "/assets/img/services/service-11.jpg",
      serviceImgAlt: "Service Image",
      category: "Construction",
      itemName: "Plumbing Services",
      location: "Georgia, USA",
      rate: "4.9",
      price: "$45.00",
      providerImgSrc: "/assets/img/profiles/avatar-04.jpg",
    },
  ];

  const serviceWidgets2 = [
    {
      serviceImgSrc: "/assets/img/services/service-04.jpg",
      serviceImgAlt: "Service Image",
      category: "Car Wash",
      itemName: "Car Repair Services",
      location: "Maryland City, MD, USA",
      rate: "4.9",
      price: "$20.00",
      oldPrice: "$35.00",
      providerImgSrc: "/assets/img/profiles/avatar-01.jpg"
    },
    {
      serviceImgSrc: "/assets/img/services/service-05.jpg",
      serviceImgAlt: "Service Image",
      category: "Cleaning",
      itemName: "Commercial Painting Services",
      location: "Alabama, USA",
      rate: "4.9",
      price: "$500.00",
      providerImgSrc: "/assets/img/profiles/avatar-02.jpg"
    },
    {
      serviceImgSrc: "/assets/img/services/service-06.jpg",
      serviceImgAlt: "Service Image",
      category: "Computer",
      itemName: "Computer & Server AMC Service",
      location: "California, USA",
      rate: "4.9",
      price: "$80.00",
      oldPrice: "$96.00",
      providerImgSrc: "/assets/img/profiles/avatar-03.jpg"
    },
    {
      serviceImgSrc: "/assets/img/services/service-08.jpg",
      serviceImgAlt: "Service Image",
      category: "Cleaning",
      itemName: "Steam Car Wash",
      location: "Texas, USA",
      rate: "4.9",
      price: "$500.00",
      providerImgSrc: "/assets/img/profiles/avatar-04.jpg"
    }
  ];
  const testimonials = [
    {
      imgSrc: "/assets/img/profiles/avatar-01.jpg",
      name: "Sophie Moore",
      role: "Director",
      rating: 5,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    },
    {
      imgSrc: "/assets/img/profiles/avatar-02.jpg",
      name: "Mike Hussy",
      role: "Lead",
      rating: 5,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    },
    {
      imgSrc: "/assets/img/profiles/avatar-03.jpg",
      name: "John Doe",
      role: "CEO",
      rating: 5,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    },
  ];
  return (
    <Layout>
      <section className="hero-section">
        <div className="container">
          <div className="home-banner">
            <div className="row align-items-center w-100">
              <div className="col-lg-7 col-md-10 mx-auto">
                <div className="section-search aos" data-aos="fade-up">
                  <h1>Professional Services For Your Home & Commercial </h1>
                  <p>Search From 100 Awesome Verified Ads!</p>
                  <div className="search-box">
                    <form onSubmit={findService}>
                      <div className="search-input line">
                        <div className="search-group-icon">
                          <i className="feather-map-pin"></i>
                        </div>
                        <div className="form-group mb-0">
                          <label>Your Location</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="America"
                            name="location"
                          />
                        </div>
                      </div>
                      <div className="search-input">
                        <div className="search-group-icon search-icon">
                          <i className="feather-search"></i>
                        </div>
                        <div className="form-group mb-0">
                          <label>What are you looking for?</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Car Repair Services"
                            name="service"
                           
                          />
                        </div>
                      </div>
                      <div className="search-btn">
                        <button className="btn btn-primary" type="submit">
                          <i className="feather-search me-2"></i>Search
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="banner-imgs">
                  <div className="banner-1 shape-1">
                    <Image
                      width={500}
                      height={500}
                      className="img-fluid"
                      alt="banner"
                      src="/assets/img/banner1.png"
                    />
                  </div>
                  <div className="banner-2 shape-3">
                    <Image
                      width={500}
                      height={500}
                      className="img-fluid"
                      alt="banner"
                      src="/assets/img/banner2.png"
                    />
                  </div>
                  <div className="banner-3 shape-3">
                    <Image
                      width={500}
                      height={500}
                      className="img-fluid"
                      alt="banner"
                      src="/assets/img/banner3.png"
                    />
                  </div>
                  <div className="banner-4 shape-2">
                    <Image
                      width={500}
                      height={500}
                      className="img-responsive"
                      alt="banner"
                      src="/assets/img/banner4.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-section">
        <div className="container">
          <div className="section-heading">
            <div className="row align-items-center">
              <div className="col-md-6 aos" data-aos="fade-up">
                <h2>Featured Categories</h2>
                <p>What do you need to find?</p>
              </div>
              <div className="col-md-6 text-md-end aos" data-aos="fade-up">
                <a href="categories.html" className="btn btn-primary btn-view">
                  View All<i className="feather-arrow-right-circle"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <a
                href="service-details.html"
                className="feature-box aos"
                data-aos="fade-up"
              >
                <div className="feature-icon">
                  <span>
                    <Image
                      width={50}
                      height={50}
                      src="/assets/img/icons/feature-icon-01.svg"
                      alt="img"
                    />
                  </span>
                </div>
                <h5>Construction</h5>
                <div className="feature-overlay">
                  <Image
                    width={500}
                    height={500}
                    src="/assets/img/services/service-02.jpg"
                    alt="img"
                  />
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-3">
              <a
                href="service-details.html"
                className="feature-box aos"
                data-aos="fade-up"
              >
                <div className="feature-icon">
                  <span>
                    <Image
                      width={50}
                      height={50}
                      src="/assets/img/icons/feature-icon-02.svg"
                      alt="img"
                    />
                  </span>
                </div>
                <h5>Car Wash</h5>
                <div className="feature-overlay">
                  <Image
                    width={500}
                    height={500}
                    src="/assets/img/feature.jpg"
                    alt="img"
                  />
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-3">
              <a
                href="service-details.html"
                className="feature-box aos"
                data-aos="fade-up"
              >
                <div className="feature-icon">
                  <span>
                    <Image
                      width={50}
                      height={50}
                      src="/assets/img/icons/feature-icon-03.svg"
                      alt="img"
                    />
                  </span>
                </div>
                <h5>Electrical</h5>
                <div className="feature-overlay">
                  <Image
                    width={500}
                    height={500}
                    src="/assets/img/services/service-01.jpg"
                    alt="img"
                  />
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-3">
              <a
                href="service-details.html"
                className="feature-box aos"
                data-aos="fade-up"
              >
                <div className="feature-icon">
                  <span>
                    <Image
                      width={50}
                      height={50}
                      src="/assets/img/icons/feature-icon-04.svg"
                      alt="img"
                    />
                  </span>
                </div>
                <h5>Cleaning</h5>
                <div className="feature-overlay">
                  <Image
                    width={500}
                    height={500}
                    src="/assets/img/services/service-09.jpg"
                    alt="img"
                  />
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-3">
              <a
                href="service-details.html"
                className="feature-box aos"
                data-aos="fade-up"
              >
                <div className="feature-icon">
                  <span>
                    <Image
                      width={50}
                      height={50}
                      src="/assets/img/icons/feature-icon-05.svg"
                      alt="img"
                    />
                  </span>
                </div>
                <h5>Interior</h5>
                <div className="feature-overlay">
                  <Image
                    width={500}
                    height={500}
                    src="/assets/img/services/service-07.jpg"
                    alt="img"
                  />
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-3">
              <a
                href="service-details.html"
                className="feature-box aos"
                data-aos="fade-up"
              >
                <div className="feature-icon">
                  <span>
                    <Image
                      width={50}
                      height={50}
                      src="/assets/img/icons/feature-icon-06.svg"
                      alt="img"
                    />
                  </span>
                </div>
                <h5>Carpentry</h5>
                <div className="feature-overlay">
                  <Image
                    width={500}
                    height={500}
                    src="/assets/img/services/service-03.jpg"
                    alt="img"
                  />
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-3">
              <a
                href="service-details.html"
                className="feature-box aos"
                data-aos="fade-up"
              >
                <div className="feature-icon">
                  <span>
                    <Image
                      width={50}
                      height={50}
                      src="/assets/img/icons/feature-icon-07.svg"
                      alt="img"
                    />
                  </span>
                </div>
                <h5>Computer</h5>
                <div className="feature-overlay">
                  <Image
                    width={500}
                    height={500}
                    src="/assets/img/services/service-06.jpg"
                    alt="img"
                  />
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-3">
              <a
                href="service-details.html"
                className="feature-box aos"
                data-aos="fade-up"
              >
                <div className="feature-icon">
                  <span>
                    <Image
                      width={50}
                      height={50}
                      src="/assets/img/icons/feature-icon-08.svg"
                      alt="img"
                    />
                  </span>
                </div>
                <h5>Plumbing</h5>
                <div className="feature-overlay">
                  <Image
                    width={500}
                    height={500}
                    src="/assets/img/services/service-11.jpg"
                    alt="img"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section">
        <div className="container">
          <div className="section-heading">
            <div className="row align-items-center">
              <div className="col-md-6 aos" data-aos="fade-up">
                <h2>Featured Services</h2>
                <p>Explore the greatest services. You won’t be disappointed</p>
              </div>
            </div>
          </div>
          <div className="owl-carousel-wrapper">
            <ReactOwlCarousel
              className="owl-carousel service-slider"
              items={3}
              margin={0}
              nav
              loop
              dots={false} 
            >
              {serviceWidgets.map((service, index) => (
                <div
                  key={index}
                  className="service-widget aos"
                  data-aos="fade-up"
                >
                  <div className="service-img">
                    <a href="service-details.html">
                      <Image
                        width={500}
                        height={500}
                        className="img-fluid serv-img"
                        alt={service.serviceImgAlt}
                        src={service.serviceImgSrc}
                      />
                    </a>
                    <div className="fav-item">
                      <a href="categories.html">
                        <span className="item-cat">{service.category}</span>
                      </a>
                      <a  className="fav-icon">
                        <i className="feather-heart"></i>
                      </a>
                    </div>
                    <div className="item-info">
                      <a href="providers.html">
                        <span className="item-img">
                          <Image
                            width={500}
                            height={500}
                            src={service.providerImgSrc}
                            className="avatar"
                            alt="User"
                          />
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="service-content">
                    <h3 className="title">
                      <a href="service-details.html">{service.itemName}</a>
                    </h3>
                    <p>
                      <i className="feather-map-pin"></i>
                      {service.location}
                      <span className="rate">
                        <i className="fas fa-star filled"></i>
                        {service.rate}
                      </span>
                    </p>
                    <div className="serv-info">
                      <h6>
                        {service.price}
                        <span className="old-price">{service.oldPrice}</span>
                      </h6>
                      <a href="service-details.html" className="btn btn-book">
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </ReactOwlCarousel>
          </div>
          <div className="btn-sec aos" data-aos="fade-up">
            <a href="search.html" className="btn btn-primary btn-view">
              View All<i className="feather-arrow-right-circle"></i>
            </a>
          </div>
        </div>
      </section>

      <section className="providers-section">
        <div className="container">
          <div className="section-heading">
            <div className="row align-items-center">
              <div className="col-md-6 aos" data-aos="fade-up">
                <h2>Top Providers</h2>
                <p>Meet Our Experts</p>
              </div>
              <div className="col-md-6 text-md-end aos" data-aos="fade-up">
                <a href="providers.html" className="btn btn-primary btn-view">
                  View All<i className="feather-arrow-right-circle"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="row  aos" data-aos="fade-up">
            <div className="col-lg-3 col-sm-6">
              <div className="providerset">
                <div className="providerset-img">
                  <a href="provider-details.html">
                    <Image
                      width={267}
                      height={238}
                      src="/assets/img/provider/provider-11.jpg"
                      alt="img"
                    />
                  </a>
                </div>
                <div className="providerset-content">
                  <div className="providerset-price">
                    <div className="providerset-name">
                      <h4>
                        <a href="provider-details.html">John Smith</a>
                        <i
                          className="fa fa-check-circle"
                          aria-hidden="true"
                        ></i>
                      </h4>
                      <span>Electrician</span>
                    </div>
                    <div className="providerset-prices">
                      <h6>
                        $20.00<span>/hr</span>
                      </h6>
                    </div>
                  </div>
                  <div className="provider-rating">
                    <div className="rating">
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fa-solid fa-star-half-stroke filled"></i>
                      <span>(320)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="providerset">
                <div className="providerset-img">
                  <a href="provider-details.html">
                    <Image
                      width={267}
                      height={238}
                      src="/assets/img/provider/provider-12.jpg"
                      alt="img"
                    />
                  </a>
                </div>
                <div className="providerset-content">
                  <div className="providerset-price">
                    <div className="providerset-name">
                      <h4>
                        <a href="provider-details.html">Michael</a>
                        <i
                          className="fa fa-check-circle"
                          aria-hidden="true"
                        ></i>
                      </h4>
                      <span>Carpenter</span>
                    </div>
                    <div className="providerset-prices">
                      <h6>
                        $50.00<span>/hr</span>
                      </h6>
                    </div>
                  </div>
                  <div className="provider-rating">
                    <div className="rating">
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fa-solid fa-star-half-stroke filled"></i>
                      <span>(228)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="providerset">
                <div className="providerset-img">
                  <a href="provider-details.html">
                    <Image
                      width={267}
                      height={238}
                      src="/assets/img/provider/provider-13.jpg"
                      alt="img"
                    />
                  </a>
                </div>
                <div className="providerset-content">
                  <div className="providerset-price">
                    <div className="providerset-name">
                      <h4>
                        <a href="provider-details.html">Antoinette</a>
                        <i
                          className="fa fa-check-circle"
                          aria-hidden="true"
                        ></i>
                      </h4>
                      <span>Cleaner</span>
                    </div>
                    <div className="providerset-prices">
                      <h6>
                        $25.00<span>/hr</span>
                      </h6>
                    </div>
                  </div>
                  <div className="provider-rating">
                    <div className="rating">
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fa-solid fa-star-half-stroke filled"></i>
                      <span>(130)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="providerset">
                <div className="providerset-img">
                  <a href="provider-details.html">
                    <Image
                      width={267}
                      height={238}
                      src="/assets/img/provider/provider-14.jpg"
                      alt="img"
                    />
                  </a>
                </div>
                <div className="providerset-content">
                  <div className="providerset-price">
                    <div className="providerset-name">
                      <h4>
                        <a href="provider-details.html">Thompson</a>
                        <i
                          className="fa fa-check-circle"
                          aria-hidden="true"
                        ></i>
                      </h4>
                      <span>Mechanic</span>
                    </div>
                    <div className="providerset-prices">
                      <h6>
                        $25.00<span>/hr</span>
                      </h6>
                    </div>
                  </div>
                  <div className="provider-rating">
                    <div className="rating">
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fa-solid fa-star-half-stroke filled"></i>
                      <span>(95)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="work-section pt-0">
        <div className="container">
          <div className="row  aos" data-aos="fade-up">
            <div className="col-md-12">
              <div className="offer-paths">
                <div className="offer-pathimg">
                  <Image
                    width={500}
                    height={500}
                    src="/assets/img/offer.png"
                    alt="img"
                  />
                </div>
                <div className="offer-path-content">
                  <h3>Use Promo code for Discounted Deals</h3>
                  <p>
                  MT::20
                  </p>
                  <a
                    className="btn btn-primary btn-views"
                  >
                    Book Now
                    <i className="feather-arrow-right-circle"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="section-heading aos" data-aos="fade-up">
                <h2>How It Works</h2>
                <p>Aliquam lorem ante, dapibus in, viverra quis</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box aos" data-aos="fade-up">
                <div className="work-icon">
                  <span>
                    <Image
                      width={50}
                      height={50}
                      src="/assets/img/icons/work-icon.svg"
                      alt="img"
                    />
                  </span>
                </div>
                <h5>Choose What To Do</h5>
                <p>
                  Lorem ipsum dolor amet, consectetur adipiscing tempor labore
                  et dolore magna aliqua.
                </p>
                <h4>01</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box aos" data-aos="fade-up">
                <div className="work-icon">
                  <span>
                    <Image
                      width={50}
                      height={50}
                      src="/assets/img/icons/find-icon.svg"
                      alt="img"
                    />
                  </span>
                </div>
                <h5>Find What You Want</h5>
                <p>
                  Lorem ipsum dolor amet, consectetur adipiscing tempor labore
                  et dolore magna aliqua.
                </p>
                <h4>02</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box aos" data-aos="fade-up">
                <div className="work-icon">
                  <span>
                    <Image
                      width={50}
                      height={50}
                      src="/assets/img/icons/place-icon.svg"
                      alt="img"
                    />
                  </span>
                </div>
                <h5>Service deliver at your door step</h5>
                <p>
                  Lorem ipsum dolor amet, consectetur adipiscing tempor labore
                  et dolore magna aliqua.
                </p>
                <h4>03</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section">
        <div className="container">
          <div className="section-heading">
            <div className="row align-items-center">
              <div className="col-md-6 aos" data-aos="fade-up">
                <h2>Most Popular Services</h2>
                <p>
                  Explore the greates our services. You won’t be disappointed
                </p>
              </div>
              <div className="col-md-6 text-md-end aos" data-aos="fade-up">
                <div className="owl-nav mynav1"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
            <div className="popular-slider">
      <ReactOwlCarousel
        className="owl-carousel service-slider"
        items={3}
        margin={0}
        nav
        loop
        dots={false}
      >
        {serviceWidgets2.map((service, index) => (
          <div key={index} className="service-widget aos" data-aos="fade-up">
            <div className="service-img">
              <a href="service-details.html">
                <Image
                  width={500}
                  height={500}
                  className="img-fluid serv-img"
                  alt={service.serviceImgAlt}
                  src={service.serviceImgSrc}
                />
              </a>
              <div className="fav-item">
                <a href="categories.html">
                  <span className="item-cat">{service.category}</span>
                </a>
                <a href=" " className="fav-icon">
                  <i className="feather-heart"></i>
                </a>
              </div>
              <div className="item-info">
                <a href="providers.html">
                  <span className="item-img">
                    <Image
                      width={500}
                      height={500}
                      src={service.providerImgSrc}
                      className="avatar"
                      alt="User"
                    />
                  </span>
                </a>
              </div>
            </div>
            <div className="service-content">
              <h3 className="title">
                <a href="service-details.html">{service.itemName}</a>
              </h3>
              <p>
                <i className="feather-map-pin"></i>{service.location}
                <span className="rate">
                  <i className="fas fa-star filled"></i>{service.rate}
                </span>
              </p>
              <div className="serv-info">
                <h6>{service.price}<span className="old-price">{service.oldPrice}</span></h6>
                <a href="service-details.html" className="btn btn-book">Book Now</a>
              </div>
            </div>
          </div>
        ))}
      </ReactOwlCarousel>
    </div>
            </div>
            <div className="btn-sec aos" data-aos="fade-up">
              <a href="search.html" className="btn btn-primary btn-view">
                View All<i className="feather-arrow-right-circle"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section pricing-sections pt-0">
        <div className="container">
          <div className="section-heading">
            <div className="row">
              <div className="col-md-12 text-center aos" data-aos="fade-up">
                <h2>Annual Maintenance Contracts</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
          </div>
          <div className="row aos" data-aos="fade-up">
            <div className="col-lg-4 col-sm-12">
              <div className="pricing-popular">
                <span className="btn w-100">Popular</span>
              </div>
              <div className="pricing-plans">
                <div className="pricing-planshead">
                  <h4>Basic</h4>
                  <h5>Lorem ipsum dolor sit amet, consectetur</h5>
                  <h6>
                    $50<span>/month</span>
                  </h6>
                </div>
                <div className="pricing-planscontent">
                  <ul>
                    <li>
                      <i className="fa fa-check-circle me-2 text-primary"></i>
                      <span>Sed perspiciatis unde omnis natus error</span>
                    </li>
                    <li>
                      <i className="fa fa-check-circle me-2 text-primary"></i>
                      <span>Lorem dolor consecteturadipiscing elit</span>
                    </li>
                    <li>
                      <i className="fa fa-check-circle me-2 text-primary"></i>
                      <span>Duis irure dolor reprehenderit voluptate</span>
                    </li>
                    <li className="inactive">
                      <i className="fa fa-check-circle me-2 text-primary"></i>
                      <span>Nemo enim ipsam voluptatem quia </span>
                    </li>
                    <li className="inactive">
                      <i className="fa fa-check-circle me-2 text-primary"></i>
                      <span>Sed perspiciatis iste natus error </span>
                    </li>
                    <li className="inactive">
                      <i className="fa fa-check-circle me-2 text-primary"></i>
                      <span>Lorem dolor consecteturadipiscing elit </span>
                    </li>
                  </ul>
                  <div className="pricing-btn">
                    <a href="search.html" className="btn btn-primary btn-view">
                      Get Started<i className="feather-arrow-right-circle"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12">
              <div className="pricing-popular active">
                <span className="btn w-100">Popular</span>
              </div>
              <div className="pricing-plans active">
                <div className="pricing-planshead">
                  <h4>Standard</h4>
                  <h5>Lorem ipsum dolor sit amet, consectetur</h5>
                  <h6>
                    $100<span>/month</span>
                  </h6>
                </div>
                <div className="pricing-planscontent">
                  <ul>
                    <li>
                      <i className="fa fa-check-circle me-2 text-primary"></i>
                      <span>Sed perspiciatis unde omnis natus error</span>
                    </li>
                    <li>
                      <i className="fa fa-check-circle me-2 text-primary"></i>
                      <span>Lorem dolor consecteturadipiscing elit</span>
                    </li>
                    <li>
                      <i className="fa fa-check-circle me-2 text-primary"></i>
                      <span>Duis irure dolor reprehenderit voluptate</span>
                    </li>
                    <li>
                      <i className="fa fa-check-circle me-2 text-primary"></i>
                      <span>Nemo enim ipsam voluptatem quia </span>
                    </li>
                    <li>
                      <i className="fa fa-check-circle me-2 text-primary"></i>
                      <span>Sed perspiciatis iste natus error </span>
                    </li>
                    <li className="inactive">
                      <i className="fa fa-check-circle me-2 text-primary"></i>
                      <span>Lorem dolor consecteturadipiscing elit </span>
                    </li>
                  </ul>
                  <div className="pricing-btn">
                    <a href="search.html" className="btn btn-primary btn-view">
                      Get Started<i className="feather-arrow-right-circle"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12">
              <div className="pricing-popular ">
                <span className="btn w-100">Popular</span>
              </div>
              <div className="pricing-plans ">
                <div className="pricing-planshead">
                  <h4>Premium</h4>
                  <h5>Lorem ipsum dolor sit amet, consectetur</h5>
                  <h6>
                    $150<span>/month</span>
                  </h6>
                </div>
                <div className="pricing-planscontent">
                  <ul>
                    <li>
                      <i className="fa fa-check-circle me-2 text-primary"></i>
                      <span>Sed perspiciatis unde omnis natus error</span>
                    </li>
                    <li>
                      <i className="fa fa-check-circle me-2 text-primary"></i>
                      <span>Lorem dolor consecteturadipiscing elit</span>
                    </li>
                    <li>
                      <i className="fa fa-check-circle me-2 text-primary"></i>
                      <span>Duis irure dolor reprehenderit voluptate</span>
                    </li>
                    <li>
                      <i className="fa fa-check-circle me-2 text-primary"></i>
                      <span>Nemo enim ipsam voluptatem quia </span>
                    </li>
                    <li>
                      <i className="fa fa-check-circle me-2 text-primary"></i>
                      <span>Sed perspiciatis iste natus error </span>
                    </li>
                    <li>
                      <i className="fa fa-check-circle me-2 text-primary"></i>
                      <span>Lorem dolor consecteturadipiscing elit </span>
                    </li>
                  </ul>
                  <div className="pricing-btn">
                    <a href="search.html" className="btn btn-primary btn-view">
                      Get Started<i className="feather-arrow-right-circle"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="client-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="section-heading aos" data-aos="fade-up">
                <h2>What our client says</h2>
                <p>Lorem ipsum dolor sit amet, consectetur elit</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
            <ReactOwlCarousel
      className="owl-carousel testimonial-slider"
      items={2}
      margin={0}
      nav
      loop
    >
      {testimonials.map((testimonial, index) => (
        <div key={index} className="client-widget aos" data-aos="fade-up">
          <div className="client-img">
            <a href="#">
              <Image
                width={500}
                height={500}
                className="img-fluid"
                alt="Image"
                src={testimonial.imgSrc}
              />
            </a>
          </div>
          <div className="client-content">
            <div className="rating">
              {[...Array(testimonial.rating)].map((_, i) => (
                <i key={i} className="fas fa-star filled"></i>
              ))}
            </div>
            <p>{testimonial.content}</p>
            <h5>{testimonial.name}</h5>
            <h6>{testimonial.role}</h6>
          </div>
        </div>
      ))}
    </ReactOwlCarousel>
            </div>
          </div>
        </div>
      </section>


      <section className="app-section">
        <div className="container">
          <div className="app-sec">
            <div className="row">
              <div className="col-lg-6 col-12">
                <div className="col-md-12">
                  <div className="heading aos" data-aos="fade-up">
                    <h2>Download Our App</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <h6>Scan the QR code to get the app now</h6>
                    <div className="scan-img">
                      <Image
                        width={50}
                        height={50}
                        src="/assets/img/scan-img.png"
                        className="img-fluid"
                        alt="img"
                      />
                    </div>
                  </div>
                </div>
                <div className="downlaod-btn aos" data-aos="fade-up">
                  <a >
                    <Image
                      width={180}
                      height={50}
                      src="/assets/img/googleplay.svg"
                      alt="img"
                    />
                  </a>
                  <a >
                    <Image
                      width={180}
                      height={50}
                      src="/assets/img/appstore.svg"
                      alt="img"
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="appimg-set aos" data-aos="fade-up">
                  <Image
                    width={500}
                    height={500}
                    src="/assets/img/app-img.png"
                    className="img-fluid"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Home;
