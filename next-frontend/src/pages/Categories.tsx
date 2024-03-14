import React from 'react'
import Layout from '@/component/Layout'
import Image from 'next/image'

function Categories() {
  return (
    <Layout>
              <div className="bg-img">
            <Image width={500} height={500}  src="/assets/img/bg/work-bg-03.png" alt="img" className="bgimg1"/>
            <Image width={500} height={500}  src="/assets/img/bg/work-bg-03.png" alt="img" className="bgimg2"/>
        </div>

        <div className="breadcrumb-bar">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-12">
                        <h2 className="breadcrumb-title">Categories</h2>
                        <nav aria-label="breadcrumb" className="page-breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index-2.html">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Categories</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>

        <div className="content">
            <div className="container">
                <div className="row">

                    <div className="col-md-6 col-lg-4 d-flex">
                        <div className="category-card flex-fill">
                            <div className="category-img">
                                <a href="search.html">
                                    <Image width={500} height={500}  src="/assets/img/services/service-06.jpg" className="img-fluid" alt="Service"/>
                                </a>
                            </div>
                            <div className="category-info">
                                <div className="category-name">
                                    <span className="category-icon">
                                        <Image width={500} height={500}  src="/assets/img/icons/category-01.svg" alt="Service"/>
                                    </span>
                                    <h6><a href="search.html">Computer</a></h6>
                                </div>
                                <p>22 Services</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 d-flex">
                        <div className="category-card flex-fill">
                            <div className="category-img">
                                <a href="search.html">
                                    <Image width={500} height={500}  src="/assets/img/services/service-09.jpg" className="img-fluid" alt="Service"/>
                                </a>
                            </div>
                            <div className="category-info">
                                <div className="category-name">
                                    <span className="category-icon">
                                        <Image width={500} height={500}  src="/assets/img/icons/category-02.svg" alt="Service"/>
                                    </span>
                                    <h6><a href="search.html">Cleaning</a></h6>
                                </div>
                                <p>22 Services</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 d-flex">
                        <div className="category-card flex-fill">
                            <div className="category-img">
                                <a href="search.html">
                                    <Image width={500} height={500}  src="/assets/img/services/service-01.jpg" className="img-fluid" alt="Service"/>
                                </a>
                            </div>
                            <div className="category-info">
                                <div className="category-name">
                                    <span className="category-icon">
                                        <Image width={500} height={500}  src="/assets/img/icons/category-03.svg" alt="Service"/>
                                    </span>
                                    <h6><a href="search.html">Electrical</a></h6>
                                </div>
                                <p>22 Services</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 d-flex">
                        <div className="category-card flex-fill">
                            <div className="category-img">
                                <a href="search.html">
                                    <Image width={500} height={500}  src="/assets/img/services/service-10.jpg" className="img-fluid" alt="Service"/>
                                </a>
                            </div>
                            <div className="category-info">
                                <div className="category-name">
                                    <span className="category-icon">
                                        <Image width={500} height={500}  src="/assets/img/icons/category-04.svg" alt="Service"/>
                                    </span>
                                    <h6><a href="search.html">Construction</a></h6>
                                </div>
                                <p>22 Services</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 d-flex">
                        <div className="category-card flex-fill">
                            <div className="category-img">
                                <a href="search.html">
                                    <Image width={500} height={500}  src="/assets/img/services/service-15.jpg" className="img-fluid" alt="Service"/>
                                </a>
                            </div>
                            <div className="category-info">
                                <div className="category-name">
                                    <span className="category-icon">
                                        <Image width={500} height={500}  src="/assets/img/icons/category-05.svg" alt="Service"/>
                                    </span>
                                    <h6><a href="search.html">Interior</a></h6>
                                </div>
                                <p>22 Services</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 d-flex">
                        <div className="category-card flex-fill">
                            <div className="category-img">
                                <a href="search.html">
                                    <Image width={500} height={500}  src="/assets/img/services/service-08.jpg" className="img-fluid" alt="Service"/>
                                </a>
                            </div>
                            <div className="category-info">
                                <div className="category-name">
                                    <span className="category-icon">
                                        <Image width={500} height={500}  src="/assets/img/icons/category-06.svg" alt="Service"/>
                                    </span>
                                    <h6><a href="search.html">Car Wash</a></h6>
                                </div>
                                <p>22 Services</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 d-flex">
                        <div className="category-card flex-fill">
                            <div className="category-img">
                                <a href="search.html">
                                    <Image width={500} height={500}  src="/assets/img/services/service-11.jpg" className="img-fluid" alt="Service"/>
                                </a>
                            </div>
                            <div className="category-info">
                                <div className="category-name">
                                    <span className="category-icon">
                                        <Image width={500} height={500}  src="/assets/img/icons/category-07.svg" alt="Service"/>
                                    </span>
                                    <h6><a href="search.html">Plumbing</a></h6>
                                </div>
                                <p>22 Services</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 d-flex">
                        <div className="category-card flex-fill">
                            <div className="category-img">
                                <a href="search.html">
                                    <Image width={500} height={500}  src="/assets/img/services/service-03.jpg" className="img-fluid" alt="Service"/>
                                </a>
                            </div>
                            <div className="category-info">
                                <div className="category-name">
                                    <span className="category-icon">
                                        <Image width={500} height={500}  src="/assets/img/icons/category-08.svg" alt="Service"/>
                                    </span>
                                    <h6><a href="search.html">Carpentry</a></h6>
                                </div>
                                <p>22 Services</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 d-flex">
                        <div className="category-card flex-fill">
                            <div className="category-img">
                                <a href="search.html">
                                    <Image width={500} height={500}  src="/assets/img/services/service-16.jpg" className="img-fluid" alt="Service"/>
                                </a>
                            </div>
                            <div className="category-info">
                                <div className="category-name">
                                    <span className="category-icon">
                                        <Image width={500} height={500}  src="/assets/img/icons/category-09.svg" alt="Service"/>
                                    </span>
                                    <h6><a href="search.html">Appliance</a></h6>
                                </div>
                                <p>22 Services</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Categories

