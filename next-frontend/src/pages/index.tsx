import React, { useState, useEffect } from "react";
import Layout from "@/component/Layout";
import Image from "next/image";
import dynamic from "next/dynamic";
const ReactOwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
import AOS from 'aos';
import { useRouter } from 'next/router';
import client from "../../sanityConfig";
import Link from "next/link";
import Loading from "@/component/loading";

interface category {
  title: string,
  _id: string,
  imageUrl: string
}
interface featuredProducts {
  title: string,
  price: number,
  imageUrl: string,
  slug: string
}interface popularProducts {
  title: string,
  price: number,
  imageUrl: string,
  rating: number,
  slug: string
}

function Home() {
  const router = useRouter();
  const [search, setSearch] = useState("")
  const [categories, setCategories] = useState<category[]>([]);
  const [featuredProducts, setFeaturedProducts] = useState<featuredProducts[]>([]);
  const [popularProducts, setPopularProducts] = useState<popularProducts[]>([]);
  const [productTitle, setProductTitle] = useState([])
  const [loaded, setLoaded] = useState(false);



  useEffect(() => {
    AOS.init({
      duration: 1000
    });

    const fetchData = async () => {
      try {
        const [categoryData, featuredData, popularData, productTitles] = await Promise.all([
          client.fetch(`*[_type == "category"]{..., "imageUrl": image.asset->url}`),
          client.fetch(`*[_type == "product" && homepagelayout == "feature"]{..., "imageUrl": images.asset->url}`),
          client.fetch(`*[_type == "product"] | order(rating desc) [0..4] {..., "imageUrl": images.asset->url}`),
          client.fetch(`*[_type == "product"]{title}`),
        ]);

        setCategories(categoryData);
        setFeaturedProducts(featuredData);
        setPopularProducts(popularData);
        setProductTitle(productTitles.map((product: { title: any; }) => product.title));
        setLoaded(true);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);



  const navSearch = () => {
    setLoaded(false); 
    router.push(`/search/${search}`)
  }
  const findService = (e: { preventDefault: () => void; }) => {
    e.preventDefault();


  }
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
    <>
      {categories.length > 0 && popularProducts.length > 0 ? (
        <Layout>

          <section className="hero-section">
            <div className="container">
              <div className="home-banner">
                <div className="row align-items-center w-100">
                  <div className="col-lg-7 col-md-10 mx-auto">
                    <div className="section-search aos" data-aos="fade-up">
                      <h1>Professional Services For Your Home & Commercial </h1>
                      <p>Search From 100 Awesome Available services!</p>
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
                                onChange={(e) => { setSearch(e.target.value) }}
                                type="text"
                                className="form-control"
                                placeholder="Car Repair Services"
                                name="service"
                                list="productOptions" // Connect the input to the datalist
                              />
                              <datalist id="productOptions">
                                {productTitle.map((product, index) => (
                                  <option key={index} value={typeof product === 'string' ? product : product} />
                                ))}
                              </datalist>
                            </div>
                          </div>
                          <div className="search-btn">
                            <button onClick={navSearch} className="btn btn-primary" type="submit">
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
                    <Link href="/service" className="btn btn-primary btn-view">
                      View All<i className="feather-arrow-right-circle"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row">
                {categories.map(category => (
                  <div key={category._id} className="col-md-6 col-lg-3">
                    <Link href={`/category/${category._id}`}>
                      <span className="feature-box aos" data-aos="fade-up">
                        <div className="feature-icon">
                          <span>
                            <Image width={50} height={50} src="/assets/img/icons/feature-icon-01.svg" alt="img" />
                          </span>
                        </div>
                        <h5>{category.title}</h5>
                        <div className="feature-overlay">
                          <Image width={500} height={500} src={category.imageUrl} alt="img" />
                        </div>
                      </span>
                    </Link>
                  </div>
                ))}
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
                  items={4}
                  margin={0}
                  nav
                  loop
                  dots={false}
                >
                  {featuredProducts.map((service, index) => (
                    <div
                      key={index}
                      className="service-widget aos"
                      data-aos="fade-up"
                    >
                      <Link href={`/service/${service.slug}`}>
                        <div className="service-img">
                          <span>
                            <Image
                              width={500}
                              height={500}
                              className="img-fluid serv-img"
                              alt="Demo text"
                              src={service.imageUrl}
                            />
                          </span>
                          <div className="fav-item">
                            <span className="fav-icon">
                              <i className="feather-heart"></i>
                            </span>
                          </div>
                        </div>
                        <div className="service-content">
                          <h3 className="title">
                            <span>{service.title}</span>
                          </h3>

                          <div className="serv-info">
                            <h6>
                              AED {service.price}
                            </h6>
                            <Link href={`/booking/${service.slug}`} className="feture-book-now-btn">
                              Book Now
                            </Link>
                          </div>
                        </div>
                      </Link>
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

          <section className="work-section pt-0 mt-44">
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
                      {popularProducts.map((service, index) => (
                        <div key={index} className="service-widget aos" data-aos="fade-up">
                          <Link href={`/service/${service.slug}`}>
                            <div className="service-img">
                              <a>
                                <Image
                                  width={500}
                                  height={300}
                                  className="img-fluid serv-img"
                                  alt="Demo Image"
                                  src={service.imageUrl}
                                />
                              </a>
                              <div className="fav-item">
                                <a className="fav-icon">
                                  <i className="feather-heart"></i>
                                </a>
                              </div>
                            </div>
                            <div className="service-content">
                              <h3 className="title">
                                <a >{service.title}</a>
                              </h3>
                              <p>
                                <span className="rate">
                                  <i className="fas fa-star filled"></i>{service.rating}
                                </span>
                              </p>
                              <div className="serv-info">
                                <h6>AED {service.price}</h6>
                                <a href="service-details.html" className="btn btn-book">Book Now</a>
                              </div>
                            </div>
                          </Link>
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
                        AED 50<span>/month</span>
                      </h6>
                    </div>
                    <div className="pricing-planscontent">
                      <div className="form-group mb-3">
                        <label htmlFor="productSearch">Search for a product:</label>
                        <input
                          onChange={(e) => { setSearch(e.target.value) }}
                          type="text"
                          className="form-control"
                          id="productSearch"
                          list="productOptions1" // Connect the input to the datalist
                        />
                        <datalist id="productOptions1">
                          {productTitle.map((title, index) => (
                            <option key={index} value={title} />
                          ))}
                        </datalist>
                      </div>
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
                        AED 100<span>/month</span>
                      </h6>
                    </div>
                    <div className="pricing-planscontent">
                      <div className="form-group mb-3">
                        <label htmlFor="productSearch">Search for a product:</label>
                        <input
                          onChange={(e) => { setSearch(e.target.value) }}
                          type="text"
                          className="form-control"
                          id="productSearch"
                          list="productOptions2" // Connect the input to the datalist
                        />
                        <datalist id="productOptions2">
                          {productTitle.map((title, index) => (
                            <option key={index} value={title} />
                          ))}
                        </datalist>
                      </div>
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
                        AED 150<span>/month</span>
                      </h6>
                    </div>
                    <div className="pricing-planscontent">

                      <div className="form-group mb-3">
                        <label htmlFor="productSearch">Search for a product:</label>
                        <input
                          onChange={(e) => { setSearch(e.target.value) }}
                          type="text"
                          className="form-control"
                          id="productSearch"
                          list="productOptions3" // Connect the input to the datalist
                        />
                        <datalist id="productOptions3">
                          {productTitle.map((title, index) => (
                            <option key={index} value={title} />
                          ))}
                        </datalist>
                      </div>
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
      ) : (
        <Loading loaded={loaded} />
      )}
    </>

  );
}

export default Home;
