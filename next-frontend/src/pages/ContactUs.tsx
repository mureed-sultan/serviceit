import React from 'react'
import Layout from '@/component/Layout'
import Image from 'next/image'
function ContactUs() {
    return (
        <Layout>
            <div className="bg-img">
                <Image width={500} height={500} src="/assets/img/bg/work-bg-03.png" alt="img" className="bgimg1" />
                <Image width={500} height={500} src="/assets/img/bg/work-bg-03.png" alt="img" className="bgimg2" />
                <Image width={500} height={500} src="/assets/img/bg/feature-bg-03.png" alt="img" className="bgimg3" />
            </div>

            <div className="breadcrumb-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-12">
                            <h2 className="breadcrumb-title">Contact Us</h2>
                            <nav aria-label="breadcrumb" className="page-breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index-2.html">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content">
                <div className="container">

                    <div className="contact-details">
                        <div className="row justify-content-center">
                            <div className="col-md-6 col-lg-4 d-flex">
                                <div className="contact-info flex-fill">
                                    <span><i className="feather-phone"></i></span>
                                    <div className="contact-data">
                                        <h4>Phone Number</h4>
                                        <p>(888) 888-8888</p>
                                        <p>(123) 456-7890</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 d-flex">
                                <div className="contact-info flex-fill">
                                    <span><i className="feather-mail"></i></span>
                                    <div className="contact-data">
                                        <h4>Email Address</h4>
                                        <p>main nei bato ga @gmail.com</p>
                                        <p>nomail.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 d-flex">
                                <div className="contact-info flex-fill">
                                    <span><i className="feather-map-pin"></i></span>
                                    <div className="contact-data">
                                        <h4>Address</h4>
                                        <p>367 Hillcrest Lane, Irvine, California, United States</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-md-6">
                            <div className="contact-img">
                                <Image width={500} height={500} src="/assets/img/contact.jpg" className="img-fluid" alt="img" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="contact-queries">
                                <h2>Get In Touch</h2>
                                <form action="https://truelysell.dreamstechnologies.com/html/template/contact-us.html">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="col-form-label">Name</label>
                                                <input className="form-control" type="text" placeholder="Enter Name*" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="col-form-label">Email</label>
                                                <input className="form-control" type="email" placeholder="Enter Email Address*" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label className="col-form-label">Phone Number</label>
                                                <input className="form-control" type="text" placeholder="Enter Phone Number" />
                                            </div>
                                            <div className="form-group">
                                                <label className="col-form-label">Message</label>
                                                <textarea className="form-control"
                                                    placeholder="Type Message"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <button className="btn btn-primary" type="submit">Send Message<i
                                                className="feather-arrow-right-circle ms-2"></i></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="map-grid">
                {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6509170.989457427!2d-123.80081967108484!3d37.192957227641294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sin!4v1669181581381!5m2!1sen!2sin"
                style="border:0;" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                className="contact-map"></iframe> */}
            </div>
        </Layout>
    )
}

export default ContactUs
