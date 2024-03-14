import React from 'react'
import Layout from '@/component/Layout'

function About() {
  return (
    <Layout>
      <main>
      <div className="breadcrumb-bar">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <h2 className="breadcrumb-title">About Us</h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index-2.html">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    About Us
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="content p-0">
        <div className="about-sec">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="about-img">
                  <div className="about-exp">
                    <span>12+ years of experiences</span>
                  </div>
                  <div className="abt-img">
                    <img src="assets/img/about-01.jpg" className="img-fluid" alt="img" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content">
                  <h6>ABOUT OUR COMPANY</h6>
                  <h2>Best Solution For Cleaning Services</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim minim veniam, quis nostrud exercitation ullamco
                    laboris nisi esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                  </p>
                  <div className="row">
                    <div className="col-md-6">
                      <ul>
                        <li>At vero et accusamus iusto dignissimos</li>
                        <li>At vero et accusamus iusto dignissimos</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul>
                        <li>Nam libero tempore, cum soluta nobis</li>
                        <li>Nam libero tempore, cum soluta nobis</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="work-section work-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="section-heading">
                  <h2>How It Works</h2>
                  <p>Aliquam lorem ante, dapibus in, viverra quis</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="work-box">
                  <div className="work-icon">
                    <span>
                      <img src="assets/img/icons/work-icon.svg" alt="img" />
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
                <div className="work-box">
                  <div className="work-icon">
                    <span>
                      <img src="assets/img/icons/find-icon.svg" alt="img" />
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
                <div className="work-box">
                  <div className="work-icon">
                    <span>
                      <img src="assets/img/icons/place-icon.svg" alt="img" />
                    </span>
                  </div>
                  <h5>Amazing Places</h5>
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

        <div className="chooseus-sec">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="choose-content">
                  <h2>Why Choose Us</h2>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                  </p>
                  <div className="support-card">
                    <h4 className="support-title">
                      <a className="collapsed" data-bs-toggle="collapse" href="#aboutone"
                        aria-expanded="false">24/7 Supports</a>
                    </h4>
                    <div id="aboutone" className="card-collapse collapse">
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                    </div>
                  </div>
                  <div className="support-card">
                    <h4 className="support-title">
                      <a className="collapsed" data-bs-toggle="collapse" href="#abouttwo"
                        aria-expanded="false">Client’s reviews</a>
                    </h4>
                    <div id="abouttwo" className="card-collapse collapse">
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                    </div>
                  </div>
                  <div className="support-card">
                    <h4 className="support-title">
                      <a className="collapsed" data-bs-toggle="collapse" href="#about3"
                        aria-expanded="false">Professional Team</a>
                    </h4>
                    <div id="about3" className="card-collapse collapse">
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                    </div>
                  </div>
                  <div className="support-card">
                    <h4 className="support-title">
                      <a className="collapsed" data-bs-toggle="collapse" href="#about4"
                        aria-expanded="false">Best Services</a>
                    </h4>
                    <div id="about4" className="card-collapse collapse">
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="chooseus-img">
                  <img src="assets/img/about-02.png" className="img-fluid" alt="img" />
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="choose-icon">
                  <img src="assets/img/icons/choose-icon.svg" className="img-fluid" alt="img" />
                  <div className="choose-info">
                    <h5>2583+</h5>
                    <p>Satisfied Clients</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="choose-icon">
                  <img src="assets/img/icons/choose-icon-01.svg" className="img-fluid" alt="img" />
                  <div className="choose-info">
                    <h5>2383+</h5>
                    <p>Expert Team</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="choose-icon">
                  <img src="assets/img/icons/choose-icon.png" className="img-fluid" alt="img" />
                  <div className="choose-info">
                    <h5>2129+</h5>
                    <p>Project Completed</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="choose-icon border-0">
                  <img src="assets/img/icons/choose-icon-03.svg" className="img-fluid" alt="img" />
                  <div className="choose-info">
                    <h5>30+</h5>
                    <p>Years of experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="providers-section abt-provider">
          <div className="container">
            <div className="section-heading">
              <div className="row">
                <div className="col-md-6">
                  <h2>Top Providers</h2>
                  <p>Meet Our Experts</p>
                </div>
                <div className="col-md-6 text-md-end">
                  <a href="providers.html" className="btn btn-primary btn-view">View All<i
                    className="feather-arrow-right-circle"></i></a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="providerset">
                  <div className="providerset-img">
                    <a href="provider-details.html">
                      <img src="assets/img/provider/provider-11.jpg" alt="img" />
                    </a>
                  </div>
                  <div className="providerset-content">
                    <div className="providerset-price">
                      <div className="providerset-name">
                        <h4>
                          <a href="provider-details.html">John Smith</a><i
                            className="fa fa-check-circle" aria-hidden="true"></i>
                        </h4>
                        <span>Electrician</span>
                      </div>
                      <div className="providerset-prices">
                        <h6>$20.00<span>/hr</span></h6>
                      </div>
                    </div>
                    <div className="provider-rating">
                      <div className="rating">
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fa-solid fa-star-half-stroke filled"></i><span>(320)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="providerset">
                  <div className="providerset-img">
                    <a href="provider-details.html">
                      <img src="assets/img/provider/provider-12.jpg" alt="img" />
                    </a>
                  </div>
                  <div className="providerset-content">
                    <div className="providerset-price">
                      <div className="providerset-name">
                        <h4>
                          <a href="provider-details.html">Michael</a><i className="fa fa-check-circle"
                            aria-hidden="true"></i>
                        </h4>
                        <span>Carpenter</span>
                      </div>
                      <div className="providerset-prices">
                        <h6>$50.00<span>/hr</span></h6>
                      </div>
                    </div>
                    <div className="provider-rating">
                      <div className="rating">
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fa-solid fa-star-half-stroke filled"></i><span>(228)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="providerset">
                  <div className="providerset-img">
                    <a href="provider-details.html">
                      <img src="assets/img/provider/provider-13.jpg" alt="img" />
                    </a>
                  </div>
                  <div className="providerset-content">
                    <div className="providerset-price">
                      <div className="providerset-name">
                        <h4>
                          <a href="provider-details.html">Antoinette</a><i
                            className="fa fa-check-circle" aria-hidden="true"></i>
                        </h4>
                        <span>Cleaner</span>
                      </div>
                      <div className="providerset-prices">
                        <h6>$25.00<span>/hr</span></h6>
                      </div>
                    </div>
                    <div className="provider-rating">
                      <div className="rating">
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fa-solid fa-star-half-stroke filled"></i><span>(130)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="providerset">
                  <div className="providerset-img">
                    <a href="provider-details.html">
                      <img src="assets/img/provider/provider-14.jpg" alt="img" />
                    </a>
                  </div>
                  <div className="providerset-content">
                    <div className="providerset-price">
                      <div className="providerset-name">
                        <h4>
                          <a href="provider-details.html">Thompson</a><i
                            className="fa fa-check-circle" aria-hidden="true"></i>
                        </h4>
                        <span>Mechanic</span>
                      </div>
                      <div className="providerset-prices">
                        <h6>$25.00<span>/hr</span></h6>
                      </div>
                    </div>
                    <div className="provider-rating">
                      <div className="rating">
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fa-solid fa-star-half-stroke filled"></i><span>(95)</span>
                      </div>
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
                <div className="section-heading">
                  <h2>What our client says</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur elit</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="owl-carousel testimonial-slider">
                  <div className="client-widget">
                    <div className="client-img">
                      <a href="#">
                        <img className="img-fluid" alt="Image"
                          src="assets/img/profiles/avatar-01.jpg" />
                      </a>
                    </div>
                    <div className="client-content">
                      <div className="rating">
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi
                      </p>
                      <h5>Mike Hussy</h5>
                      <h6>Director</h6>
                    </div>
                  </div>
                  <div className="client-widget">
                    <div className="client-img">
                      <a href="#">
                        <img className="img-fluid" alt="Image"
                          src="assets/img/profiles/avatar-02.jpg" />
                      </a>
                    </div>
                    <div className="client-content">
                      <div className="rating">
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi
                      </p>
                      <h5>Mike Hussy</h5>
                      <h6>Director</h6>
                    </div>
                  </div>
                  <div className="client-widget">
                    <div className="client-img">
                      <a href="#">
                        <img className="img-fluid" alt="Image"
                          src="assets/img/profiles/avatar-03.jpg" />
                      </a>
                    </div>
                    <div className="client-content">
                      <div className="rating">
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi
                      </p>
                      <h5>Mike Hussy</h5>
                      <h6>Director</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="service-offer">
          <div className="container">
            <div className="col-md-12">
              <div className="offer-paths about-offer">
                <div className="offer-path-content">
                  <h3>Looking for the Best Service Finder & Bookings</h3>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore architecto beatae
                    vitae dicta sunt explicabo.
                  </p>
                  <a href="service-grid.html" className="btn btn-primary btn-views">Get Started<i
                    className="feather-arrow-right-circle"></i></a>
                </div>
                <div className="offer-pathimg">
                  <img src="assets/img/service-img.png" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </main>
    </Layout>
  )
}

export default About
