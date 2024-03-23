import { useEffect, useState } from "react";
import Image from "next/image";
import Layout from "@/component/Layout";
import client from "../../../sanityConfig";
import { useRouter } from "next/router";
import { Collapse, Card, Button } from 'react-bootstrap';
import Link from "next/link";




function Product() {
    const router = useRouter();
    const { slug } = router.query;
    const [product, setProduct] = useState(null);
    const [categoryTitle, setCatgegoryTitle] = useState("")


    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const productData = await client.fetch(`
                    *[_type == "product" && slug == "${slug}"][0]{
                        ...,
                        "imageUrl": images.asset->url,
                        "imageUrl1": images2.asset->url,
                        "imageUrl2": images3.asset->url,
                    }`);
    
                setProduct(productData);
    
                // Call fetchCategoryTitle only if productData has been fetched
                if (productData.categories) {
                    fetchCategoryTitle(productData.categories._ref);
                }
            } catch (error) {
                console.error("Error fetching product data:", error);
            }
        };
    
        async function fetchCategoryTitle(categoryId) {
            try {
                const categoryData = await client.fetch(`*[_type == "category" && _id == "${categoryId}"][0].title`);
                setCatgegoryTitle(categoryData);
            } catch (error) {
                console.error("Error fetching category data:", error);
                return null;
            }
        }
    
        if (slug) {
            fetchProduct();
        }
    }, [slug]);
    



    return (

        <Layout>
            {product ? (
                <>
                    <div className="bg-img">
                        <Image
                            width={150}
                            height={150}
                            src="/assets/img/bg/work-bg-03.png"
                            alt="img"
                            className="bgimg1"
                        />
                        <Image
                            width={150}
                            height={150}
                            src="/assets/img/bg/work-bg-03.png"
                            alt="img"
                            className="bgimg2"
                        />
                        <Image
                            width={150}
                            height={150}
                            src="/assets/img/bg/feature-bg-03.png"
                            alt="img"
                            className="bgimg3"
                        />
                    </div>

                    <div className="breadcrumb-bar">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 col-12">
                                    <h2 className="breadcrumb-title">{product.title}</h2>
                                    <nav aria-label="breadcrumb" className="page-breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item">
                                                <a href="index-2.html">Home</a>
                                            </li>
                                            <li
                                                className="breadcrumb-item active"
                                                aria-current="page"
                                            >
                                                Service Details
                                            </li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="content">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="serv-profile">
                                        <h4>{product.shortDescription}</h4>
                                        <ul>
                                            <li>
                                                <span className="badge">{categoryTitle}</span>
                                            </li>
                                            {/* <li className="service-map">
                                                <i className="feather-map-pin"></i> Alabama, USA
                                            </li> */}
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="serv-action">
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <i className="feather-heart"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" data-bs-toggle="tooltip" title="Share">
                                                    <i className="feather-share-2"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="feather-printer"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="feather-download"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="service-gal">
                                        <div className="row gx-2">
                                            <div className="col-md-9">
                                                <div className="service-images big-gallery">
                                                    <Image
                                                        width={500}
                                                        height={500}
                                                        src={product.imageUrl}
                                                        className="img-fluid"
                                                        alt="img"
                                                    />
                                                    <a
                                                        href="assets/img/services/service-ban-01.jpg"
                                                        data-fancybox="gallery"
                                                        className="btn btn-show"
                                                    >
                                                        <i className="feather-image me-2"></i>Show all
                                                        photos
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="service-images small-gallery">
                                                    <a
                                                        href="assets/img/services/service-ban-02.jpg"
                                                        data-fancybox="gallery"
                                                    >
                                                        <Image
                                                            width={500}
                                                            height={500}
                                                            src={product.imageUrl1}
                                                            className="img-fluid"
                                                            alt="img"
                                                        />
                                                        <span className="circle-icon">
                                                            <i className="feather-plus"></i>
                                                        </span>
                                                    </a>
                                                </div>
                                                <div className="service-images small-gallery">
                                                    <a
                                                        href="assets/img/services/service-ban-03.jpg"
                                                        data-fancybox="gallery"
                                                    >
                                                        <Image
                                                            width={500}
                                                            height={500}
                                                            src={product.imageUrl2}
                                                            className="img-fluid"
                                                            alt="img"
                                                        />
                                                        <span className="circle-icon">
                                                            <i className="feather-plus"></i>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="service-wrap">
                                        <h5>Service Details</h5>
                                        <p>{product.description}</p>
                                    </div>
                                    <div className="service-wrap provide-service">
                                        <h5>{product.howItWorksTitle}</h5>
                                        <p>{product.howItWorksDescription}</p>
                                        <div className="row">
                                            {product.howItWorks.map((item, index) => (
                                                <div key={index} className="col-sm-4">
                                                    <div className="how-it-works-item">
                                                        <Image
                                                            width={250}
                                                            height={200}
                                                            src={`https://cdn.sanity.io/images/ailgv3xs/production/${item.image.asset._ref.replace('image-', '').replace(/-([^/-]*)$/, '.$1')}`}
                                                            alt={item.title}
                                                            className="how-it-works-image"
                                                        />
                                                        <div className="how-it-works-content">
                                                            <h5 className="text-center">{item.title}</h5>
                                                            <p className="text-center">{item.description}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="service-wrap">
                                        <div className="row">
                                            <div className="col-md-9">
                                                <h5>{product.howWeDoThatWorkTitle}</h5>
                                                <p>{product.howWeDoThatWorkDescription}</p>
                                            </div>
                                            <div className="col-md-6 text-md-end">
                                                <div className="owl-nav mynav3"></div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            {product.howWeDoThatWork.map((item, index) => (
                                                <div key={index} className="col-sm-12 mb-4">
                                                    <div className="row align-items-center">
                                                        <div className={`col-md-6 text-center ${index % 2 !== 0 ? 'order-md-2' : ''}`}>
                                                            {item.image && (
                                                                <div className="how-it-works-image">
                                                                    <Image
                                                                        width={500}
                                                                        height={500}
                                                                        src={`https://cdn.sanity.io/images/ailgv3xs/production/${item.image.asset._ref.replace('image-', '').replace(/-([^/-]*)$/, '.$1')}`}
                                                                        alt={item.title}
                                                                        className="img-fluid"
                                                                    />
                                                                </div>
                                                            )}
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="how-it-works-content">
                                                                <h3>{item.title}</h3>
                                                                <p>{item.description}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>


                                    </div>
                                    {/* <div className="service-wrap">
                                        <h5>Video</h5>

                                    </div> */}
                                    {/* <div className="service-wrap">
                                        <h5>Reviews</h5>
                                        <ul>
                                    <li className="review-box">
                                        <div className="review-profile">
                                            <div className="review-img">
                                                <Image width={500} height={500} src="/assets/img/profiles/avatar-02.jpg" className="img-fluid" alt="img"/>
                                                    <div className="review-name">
                                                        <h6>Dennis</h6>
                                                        <p>a week ago</p>
                                                    </div>
                                            </div>
                                            <div className="rating">
                                                <i className="fas fa-star filled"></i>
                                                <i className="fas fa-star filled"></i>
                                                <i className="fas fa-star filled"></i>
                                                <i className="fas fa-star filled"></i>
                                                <i className="fas fa-star filled"></i>
                                            </div>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipicing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqa. Ut enim ad minim veniam, quis
                                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                                        <div className="recommend-item">
                                            <a href="#"><Image width={500} height={500} alt="Image" src="/assets/img/icons/reply-icon.svg" className="me-2"/>
                                                Reply</a>
                                            <div className="recommend-info">
                                                <p>Recommend?</p>
                                                <a href="#"><i className="feather-thumbs-up"></i> Yes</a>
                                                <a href="#"><i className="feather-thumbs-down"></i> No</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="review-box">
                                        <div className="review-profile">
                                            <div className="review-img">
                                                <Image width={500} height={500} src="/assets/img/profiles/avatar-03.jpg" className="img-fluid" alt="img"/>
                                                    <div className="review-name">
                                                        <h6>Jaime</h6>
                                                        <p>yesterday | 10:35AM </p>
                                                    </div>
                                            </div>
                                            <div className="rating">
                                                <i className="fas fa-star filled"></i>
                                                <i className="fas fa-star filled"></i>
                                                <i className="fas fa-star filled"></i>
                                                <i className="fas fa-star filled"></i>
                                                <i className="fas fa-star filled"></i>
                                            </div>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipicing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqa. Ut enim ad minim veniam, quis
                                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                                        <div className="recommend-item">
                                            <a href="#"><Image width={500} height={500} alt="Image" src="/assets/img/icons/reply-icon.svg" className="me-2"/>
                                                Reply</a>
                                            <div className="recommend-info">
                                                <p>Recommend?</p>
                                                <a href="#"><i className="feather-thumbs-up"></i> Yes</a>
                                                <a href="#"><i className="feather-thumbs-down"></i> No</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="review-box">
                                        <div className="review-profile">
                                            <div className="review-img">
                                                <Image width={500} height={500} src="/assets/img/profiles/avatar-07.jpg" className="img-fluid" alt="img"/>
                                                    <div className="review-name">
                                                        <h6>Martinez</h6>
                                                        <p>2 days ago | 14:35PM </p>
                                                    </div>
                                            </div>
                                            <div className="rating">
                                                <i className="fas fa-star filled"></i>
                                                <i className="fas fa-star filled"></i>
                                                <i className="fas fa-star filled"></i>
                                                <i className="fas fa-star filled"></i>
                                                <i className="fas fa-star filled"></i>
                                            </div>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipicing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqa. Ut enim ad minim veniam, quis
                                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                                        <div className="recommend-item">
                                            <a href="#"><Image width={500} height={500} alt="Image" src="/assets/img/icons/reply-icon.svg" className="me-2"/>
                                                Reply</a>
                                            <div className="recommend-info">
                                                <p>Recommend?</p>
                                                <a href="#"><i className="feather-thumbs-up"></i> Yes</a>
                                                <a href="#"><i className="feather-thumbs-down"></i> No</a>
                                            </div>
                                        </div>
                                        <div className="reply-area">
                                            <textarea className="form-control mb-0" rows="3"
                                                placeholder="Type your response....."></textarea>
                                        </div>
                                    </li>
                                    <li className="review-box">
                                        <div className="review-profile">
                                            <div className="review-img">
                                                <Image width={500} height={500} src="/assets/img/profiles/avatar-05.jpg" className="img-fluid" alt="img"/>
                                                    <div className="review-name">
                                                        <h6>Bradley</h6>
                                                        <p>1 month ago | 17:35PM </p>
                                                    </div>
                                            </div>
                                            <div className="rating">
                                                <i className="fas fa-star filled"></i>
                                                <i className="fas fa-star filled"></i>
                                                <i className="fas fa-star filled"></i>
                                                <i className="fas fa-star filled"></i>
                                                <i className="fas fa-star filled"></i>
                                            </div>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipicing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqa. Ut enim ad minim veniam, quis
                                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                                        <div className="recommend-item">
                                            <a href="#"><Image width={500} height={500} alt="Image" src="/assets/img/icons/reply-icon.svg" className="me-2"/>
                                                Reply</a>
                                            <div className="recommend-info">
                                                <p>Recommend?</p>
                                                <a href="#"><i className="feather-thumbs-up"></i> Yes</a>
                                                <a href="#"><i className="feather-thumbs-down"></i> No</a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                        <div className="text-center">
                                            <a
                                                href="customer-reviews.html"
                                                className="btn btn-primary btn-review"
                                            >
                                                View All Reviews
                                            </a>
                                        </div>
                                    </div> */}
                                    {/* <div className="row align-items-center">
                                        <div className="col-md-6">
                                            <div className="service-wrap">
                                                <h5>Related Services</h5>
                                            </div>
                                        </div>
                                        <div className="col-md-6 text-md-end">
                                            <div className="owl-nav mynav"></div>
                                        </div>
                                    </div> */}
                                    <div className="owl-carousel related-slider">
                                        <div className="service-widget mb-0">
                                            <div className="service-img">
                                                <a href="service-details.html">
                                                    <Image
                                                        width={500}
                                                        height={500}
                                                        className="img-fluid serv-img"
                                                        alt="Service Image"
                                                        src="/assets/img/services/service-01.jpg"
                                                    />
                                                </a>
                                                <div className="fav-item">
                                                    <a href="categories.html">
                                                        <span className="item-cat">Cleaning</span>
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
                                                                src="/assets/img/profiles/avatar-04.jpg"
                                                                className="avatar"
                                                                alt="User"
                                                            />
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="service-content">
                                                <h3 className="title">
                                                    <a href="service-details.html">
                                                        Electric Panel Repairing Service
                                                    </a>
                                                </h3>
                                                <p>
                                                    <i className="feather-map-pin"></i>Montana, USA
                                                    <span className="rate">
                                                        <i className="fas fa-star filled"></i>4.9
                                                    </span>
                                                </p>
                                                <div className="serv-info">
                                                    <h6>
                                                        AED 25.00<span className="old-price">AED 35.00</span>
                                                    </h6>
                                                    <Link href="booking.html" className="btn btn-book">
                                                        Book Now
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="service-widget mb-0">
                                            <div className="service-img">
                                                <a href="service-details.html">
                                                    <Image
                                                        width={500}
                                                        height={500}
                                                        className="img-fluid serv-img"
                                                        alt="Service Image"
                                                        src="/assets/img/services/service-02.jpg"
                                                    />
                                                </a>
                                                <div className="fav-item">
                                                    <a href="categories.html">
                                                        <span className="item-cat">Construction</span>
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
                                                                src="/assets/img/profiles/avatar-03.jpg"
                                                                className="avatar"
                                                                alt="User"
                                                            />
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="service-content">
                                                <h3 className="title">
                                                    <a href="service-details.html">
                                                        Toughened Glass Fitting Services
                                                    </a>
                                                </h3>
                                                <p>
                                                    <i className="feather-map-pin"></i>Montana, USA
                                                </p>
                                                <div className="serv-info">
                                                    <h6>AED 45.00</h6>
                                                    <a href="booking.html" className="btn btn-book">
                                                        Book Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="service-widget mb-0">
                                            <div className="service-img">
                                                <a href="service-details.html">
                                                    <Image
                                                        width={500}
                                                        height={500}
                                                        className="img-fluid serv-img"
                                                        alt="Service Image"
                                                        src="/assets/img/services/service-03.jpg"
                                                    />
                                                </a>
                                                <div className="fav-item">
                                                    <a href="categories.html">
                                                        <span className="item-cat">Carpentry</span>
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
                                                                src="/assets/img/profiles/avatar-02.jpg"
                                                                className="avatar"
                                                                alt="User"
                                                            />
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="service-content">
                                                <h3 className="title">
                                                    <a href="service-details.html">
                                                        Wooden Carpentry Work
                                                    </a>
                                                </h3>
                                                <p>
                                                    <i className="feather-map-pin"></i>Montana, USA
                                                </p>
                                                <div className="serv-info">
                                                    <h6>AED 45.00</h6>
                                                    <a href="booking.html" className="btn btn-book">
                                                        Book Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 theiaStickySidebar">
                                    <div className="card card-provide mb-0">
                                        <div className="card-body">
                                            <div className="provide-widget">
                                                <div className="service-amount">
                                                    <h5>
                                                        AED {product.price}<span>AED {product.price + 85}</span>
                                                    </h5>
                                                    <p className="serv-review">
                                                        <i className="fa-solid fa-star"></i>{" "}
                                                        <span>4.9 </span>Please hold tight while the document is synced. This usually happens right after the document has been published, and it should not take more than a few seconds
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="package-widget">
                                                <h5>Available Service Packages</h5>
                                                <ul>
                                                    {product.avaibleServices.map((item, index) => (
                                                        <li key={index}>{item}</li>
                                                    ))}

                                                </ul>
                                            </div>
                                            <div className="package-widget pack-service">
                                                <h5>Additional Service</h5>
                                                <ul>
                                                    <li>
                                                        <div className="add-serving">
                                                            <label className="custom_check">
                                                                <input type="checkbox" name="rememberme" />
                                                                <span className="checkmark"></span>
                                                            </label>
                                                            <div className="add-serv-item">
                                                                <div className="add-serv-img">
                                                                    <Image
                                                                        width={500}
                                                                        height={500}
                                                                        src="/assets/img/services/service-09.jpg"
                                                                        alt="image"
                                                                    />
                                                                </div>
                                                                <div className="add-serv-info">
                                                                    <h6>House Cleaning</h6>
                                                                    <p>
                                                                        <i className="feather-map-pin"></i> Alabama,
                                                                        USA
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="add-serv-amt">
                                                            <h6>AED 500.75</h6>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="add-serving">
                                                            <label className="custom_check">
                                                                <input type="checkbox" name="rememberme" />
                                                                <span className="checkmark"></span>
                                                            </label>
                                                            <div className="add-serv-item">
                                                                <div className="add-serv-img">
                                                                    <Image
                                                                        width={500}
                                                                        height={500}
                                                                        src="/assets/img/services/service-16.jpg"
                                                                        alt="image"
                                                                    />
                                                                </div>
                                                                <div className="add-serv-info">
                                                                    <h6>Air Conditioner Service</h6>
                                                                    <p>
                                                                        <i className="feather-map-pin"></i>{" "}
                                                                        Illinois, USA
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="add-serv-amt">
                                                            <h6>AED 500.75</h6>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="add-serving">
                                                            <label className="custom_check">
                                                                <input type="checkbox" name="rememberme" />
                                                                <span className="checkmark"></span>
                                                            </label>
                                                            <div className="add-serv-item">
                                                                <div className="add-serv-img">
                                                                    <Image
                                                                        width={500}
                                                                        height={500}
                                                                        src="/assets/img/services/service-07.jpg"
                                                                        alt="Service"
                                                                    />
                                                                </div>
                                                                <div className="add-serv-info">
                                                                    <h6>Interior Designing</h6>
                                                                    <p>
                                                                        <i className="feather-map-pin"></i>{" "}
                                                                        California, USA
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="add-serv-amt">
                                                            <h6>AED 500.75</h6>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="add-serving">
                                                            <label className="custom_check">
                                                                <input type="checkbox" name="rememberme" />
                                                                <span className="checkmark"></span>
                                                            </label>
                                                            <div className="add-serv-item">
                                                                <div className="add-serv-img">
                                                                    <Image
                                                                        width={500}
                                                                        height={500}
                                                                        src="/assets/img/services/service-03.jpg"
                                                                        alt="Service Image"
                                                                    />
                                                                </div>
                                                                <div className="add-serv-info">
                                                                    <h6>Wooden Carpentry Work</h6>
                                                                    <p>
                                                                        <i className="feather-map-pin"></i> Alabama,
                                                                        USA
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="add-serv-amt">
                                                            <h6>AED 354.45</h6>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="card card-available">
                                                <div className="card-body">
                                                    <div className="available-widget">
                                                        <div className="available-info">
                                                            <h5>Service Availability</h5>
                                                            <ul>
                                                                <li>
                                                                    Monday <span>9:30 AM - 7:00 PM</span>{" "}
                                                                </li>
                                                                <li>
                                                                    Tuesday <span>9:30 AM - 7:00 PM</span>{" "}
                                                                </li>
                                                                <li>
                                                                    Wednesday <span>9:30 AM - 7:00 PM</span>{" "}
                                                                </li>
                                                                <li>
                                                                    Thursday <span>9:30 AM - 7:00 PM</span>{" "}
                                                                </li>
                                                                <li>
                                                                    Friday <span>9:30 AM - 7:00 PM</span>{" "}
                                                                </li>
                                                                <li>
                                                                    Saturday <span>9:30 AM - 7:00 PM</span>{" "}
                                                                </li>
                                                                <li>
                                                                    Sunday{" "}
                                                                    <span className="text-danger">Closed</span>{" "}
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="map-grid">
                                                {/* <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6509170.989457427!2d-123.80081967108484!3d37.192957227641294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sin!4v1669181581381!5m2!1sen!2sin"
                                            style="border:0;" allowfullscreen loading="lazy"
                                            referrerpolicy="no-referrer-when-downgrade" className="contact-map"></iframe> */}
                                            </div>
                                            <Link href={`../booking/${slug}`} className="btn btn-primary">
                                                Book Service
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <p>Loading</p>
            )}
        </Layout>
    );
}

export default Product;
