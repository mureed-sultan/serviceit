import React, { useState, useEffect } from "react";
import Image from "next/image";
import Layout from "@/component/Layout";
import client from "../../sanityConfig";
import Link from "next/link";

interface Product {
    title: string;
    imageUrl: string;
    categories: string[];
    price: number;
    rating: number;
    _id: string;
    slug: string;
    category: string;
}

interface Category {
    _id: string;
    title: string;
}
function Service() {
    const [products, setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [checkedCategories, setCheckedCategories] = useState("");
    const [activeLink, setActiveLink] = useState("grid");
    const [priceFilter, setPriceFilter] = useState('');

console.log(priceFilter)
    const handleLinkClick = (link: string) => {
        setActiveLink(link);
    };
    useEffect(() => {
        async function fetchProducts() {
            try {
                let query = `
                    *[_type == "product"`;
                
                if (checkedCategories) { 
                    query += ` && categories._ref == '${checkedCategories}'`; 
                }
                
                query += `]{
                    title,
                    "imageUrl": images.asset->url,
                    categories,
                    price,
                    rating,
                    slug
                }`;
                
                // console.log("Product Query:", query); 
                
                const productsData = await client.fetch(query);
                
                // console.log("Products Data:", productsData); 
                const parentCategoriesData = await client.fetch(`
                    *[_type == "category" && !defined(parentCategory)] {
                        _id,
                        title,
                        children[]->{_id, title, key, references[]->{_id, title}}
                    }
                `);
                
                setCategories(parentCategoriesData);
                setProducts(productsData);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        }
        
        
        fetchProducts();
    }, [checkedCategories]);

    // console.log(checkedCategories);
    return (

        <Layout>
                    <div className="bg-img">
                        <Image width={150}
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
                                    <h2 className="breadcrumb-title">Service Grid</h2>
                                    <nav aria-label="breadcrumb" className="page-breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item">
                                                <a href="index-2.html">Home</a>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">
                                                Service Grid
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
                                <div className="col-lg-3 col-sm-12 theiaStickySidebar">
                                    <div className="filter-div">
                                        <div className="filter-head">
                                            <h5>Filter by</h5>
                                            <a onClick={()=>{setCheckedCategories("")}} className="reset-link">
                                                Reset Filters
                                            </a>
                                        </div>
                                        ContactUs
                                        <div className="filter-content">
                                            <h2>Keyword</h2>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="What are you looking for?"
                                            />
                                        </div>
                                        <div className="filter-content">
                                            <h2>
                                                Categories
                                                <span>
                                                    <i className="feather-chevron-down"></i>
                                                </span>
                                            </h2>
                                            <div className="filter-checkbox" id="fill-more">
                                                <ul>
                                                    {categories.map(category => (
                                                        <li key={category._id}>
                                                            <label className="checkboxs">
                                                                <input
                                                                    type="checkbox"
                                                                    checked={checkedCategories.includes(category._id)}
                                                                    onChange={() => setCheckedCategories(category._id)}
                                                                />
                                                                <span>
                                                                    <i></i>
                                                                </span>
                                                                <b className="check-content">{category.title}</b>
                                                            </label>
                                                        </li>
                                                    ))}

                                                </ul>
                                            </div>
                                            <a id="more" className="more-view">
                                                View More <i className="feather-arrow-down-circle ms-1"></i>
                                            </a>
                                        </div>
                                        <div className="filter-content">
                                            <h2>Sub Category</h2>
                                            <select className="form-control select">
                                                <option>All Sub Category</option>
                                                <option>Computer</option>
                                                <option>Construction</option>
                                            </select>
                                        </div>
                                        <div className="filter-content">
                                            <h2>Location</h2>
                                            <div className="group-img">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Select Location"
                                                />
                                                <i className="feather-map-pin"></i>
                                            </div>
                                        </div>
                                        <div className="filter-content">
                                            <h2 className="mb-4">Price Range</h2>
                                            <div className="filter-range">
                                                <input type="text" id="range_03" />
                                            </div>
                                            <div className="filter-range-amount">
                                                <h5>
                                                    Price: <span>AED 5 - AED 210</span>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="filter-content">
                                            <h2>
                                                By Rating
                                                <span>
                                                    <i className="feather-chevron-down"></i>
                                                </span>
                                            </h2>
                                            <ul className="rating-set">
                                                <li>
                                                    <label className="checkboxs d-inline-flex">
                                                        <input type="checkbox" />
                                                        <span>
                                                            <i></i>
                                                        </span>
                                                    </label>
                                                    <a className="rating" >
                                                        <i className="fa-regular fa-star filled"></i>
                                                        <i className="fa-regular fa-star filled"></i>
                                                        <i className="fa-regular fa-star filled"></i>
                                                        <i className="fa-regular fa-star filled"></i>
                                                        <i className="fa-regular fa-star"></i>
                                                        <span className="d-inline-block average-rating float-end">
                                                            (35)
                                                        </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <label className="checkboxs d-inline-flex">
                                                        <input type="checkbox" />
                                                        <span>
                                                            <i></i>
                                                        </span>
                                                    </label>
                                                    <a className="rating" >
                                                        <i className="fa-regular fa-star filled"></i>
                                                        <i className="fa-regular fa-star filled"></i>
                                                        <i className="fa-regular fa-star filled"></i>
                                                        <i className="fa-regular fa-star filled"></i>
                                                        <i className="fa-regular fa-star"></i>
                                                        <span className="d-inline-block average-rating float-end">
                                                            (40)
                                                        </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <label className="checkboxs d-inline-flex">
                                                        <input type="checkbox" />
                                                        <span>
                                                            <i></i>
                                                        </span>
                                                    </label>
                                                    <a className="rating" >
                                                        <i className="fa-regular fa-star filled"></i>
                                                        <i className="fa-regular fa-star filled"></i>
                                                        <i className="fa-regular fa-star filled"></i>
                                                        <i className="fa-regular fa-star"></i>
                                                        <i className="fa-regular fa-star"></i>
                                                        <span className="d-inline-block average-rating float-end">
                                                            (40)
                                                        </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <label className="checkboxs d-inline-flex">
                                                        <input type="checkbox" />
                                                        <span>
                                                            <i></i>
                                                        </span>
                                                    </label>
                                                    <a className="rating" >
                                                        <i className="fa-regular fa-star filled"></i>
                                                        <i className="fa-regular fa-star filled"></i>
                                                        <i className="fa-regular fa-star"></i>
                                                        <i className="fa-regular fa-star"></i>
                                                        <i className="fa-regular fa-star"></i>
                                                        <span className="d-inline-block average-rating float-end">
                                                            (20)
                                                        </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <label className="checkboxs d-inline-flex">
                                                        <input type="checkbox" />
                                                        <span>
                                                            <i></i>
                                                        </span>
                                                    </label>
                                                    <a className="rating" >
                                                        <i className="fa-regular fa-star filled"></i>
                                                        <i className="fa-regular fa-star"></i>
                                                        <i className="fa-regular fa-star"></i>
                                                        <i className="fa-regular fa-star"></i>
                                                        <i className="fa-regular fa-star"></i>
                                                        <span className="d-inline-block average-rating float-end">
                                                            (5)
                                                        </span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <button className="btn btn-primary">Search</button>
                                    </div>
                                </div>

                                <div className="col-lg-9 col-sm-12">
                                    <div className="row sorting-div">
                                        <div className="col-lg-4 col-sm-12 ">
                                            <div className="count-search">
                                                <h6>Found {products.length} Services</h6>
                                            </div>
                                        </div>
                                        <div className="col-lg-8 col-sm-12 d-flex justify-content-end ">
                                            <div className="sortbyset">
                                                <div className="sorting-select">
                                                    <select onChange={(e)=>{setPriceFilter(e.target.value)}} className="form-control select">
                                                        <option>Price Low to High</option>
                                                        <option>Price High to Low</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="grid-listview">
                                                <ul>
                                                    <li>
                                                        <a className={activeLink === "grid" ? "active" : ""} onClick={() => handleLinkClick("grid")}>
                                                            <i className="feather-grid"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className={activeLink === "list" ? "active" : ""} onClick={() => handleLinkClick("list")}>
                                                            <i className="feather-list"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        {activeLink == "grid" ?
                                            <div className="row">
                                                {products.length == 0?(<p>No items found</p>):
                                                products.map((product, index) => (
                                                    <div className="col-xl-4 col-md-6" key={index}>
                                                        <Link href={`/service/${product.slug}`} className="service-widget servicecontent">
                                                            <div className="service-img">
                                                                <figure>
                                                                    <Image
                                                                        width={300}
                                                                        height={300}
                                                                        src={product.imageUrl}
                                                                        className="img-fluid serv-img"
                                                                        alt="Service Image"
                                                                    />
                                                                </figure>
                                                                <div className="fav-item">
                                                                    <a className="fav-icon">
                                                                        <i className="feather-heart"></i>
                                                                    </a>
                                                                </div>
                                                                {/* <div className="item-info">
                                                                    <a href="providers.html">
                                                                        <span className="item-img">
                                                                            <Image
                                                                                width={300}
                                                                                height={300}
                                                                                src="/assets/img/profiles/avatar-01.jpg"
                                                                                className="avatar"
                                                                                alt="User"
                                                                            />
                                                                        </span>
                                                                    </a>
                                                                </div> */}
                                                            </div>
                                                            <div className="service-content">
                                                                <h3 className="title">
                                                                    <a>{product.title}</a>
                                                                </h3>
                                                                <p>
                                                                    <i className="feather-map-pin"></i>Maryland City, USA
                                                                    <span className="rate">
                                                                        <i className="fas fa-star filled"></i>
                                                                        {product.rating}
                                                                    </span>
                                                                </p>
                                                                <div className="serv-info">
                                                                    <h6>AED {product.price}</h6>
                                                                    <a className="btn btn-book">
                                                                        Book Now
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                ))}
                                            </div>
                                            : <div className="row">
                                                {products.map((product, index) => (
                                                    <Link href={`/service/${product.slug}`} className="service-list" key={index}>
                                                        <div className="service-cont">
                                                            <div className="service-cont-img">
                                                                <p>
                                                                    <Image
                                                                        width={300}
                                                                        height={300} className="img-fluid serv-img" alt="Service Image" src={product.imageUrl} />
                                                                </p>
                                                                <div className="fav-item">
                                                                    <p className="fav-icon">
                                                                        <i className="feather-heart"></i>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="service-cont-info">
                                                                <span className="item-cat">{product.category}</span>
                                                                <h3 className="title">
                                                                    <p>{product.title}</p>
                                                                </h3>
                                                                <p><i className="feather-map-pin"></i>This is demo location</p>
                                                                <div className="service-pro-img">
                                                                    <span><i className="fas fa-star filled"></i>{product.rating}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="service-action">
                                                            <h6>AED {product.price}<span className="old-price">99999</span></h6>
                                                            <a href="booking.html" className="btn btn-secondary">Book Now</a>
                                                        </div>
                                                    </Link>
                                                ))}

                                            </div>}


                                    </div>

                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="blog-pagination rev-page">
                                                <nav>
                                                    <ul className="pagination justify-content-center">
                                                        <li className="page-item disabled">
                                                            <a
                                                                className="page-link page-prev"

                                                            >
                                                                <i className="fa-solid fa-arrow-left me-1"></i> PREV
                                                            </a>
                                                        </li>
                                                        <li className="page-item active">
                                                            <a className="page-link" >
                                                                1
                                                            </a>
                                                        </li>
                                                        <li className="page-item">
                                                            <a className="page-link" >
                                                                2
                                                            </a>
                                                        </li>
                                                        <li className="page-item">
                                                            <a className="page-link" >
                                                                3
                                                            </a>
                                                        </li>
                                                        <li className="page-item">
                                                            <a
                                                                className="page-link page-next"
                                                            >
                                                                NEXT
                                                                <i className="fa-solid fa-arrow-right ms-1"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

        </Layout>
    );
}

export default Service;
