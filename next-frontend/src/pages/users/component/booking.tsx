import React from 'react'
import Image from 'next/image'
function Booking() {
    return (
        <div className="col-lg-9">

            <div className="row align-items-center">
                <div className="col-md-4">
                    <div className="widget-title">
                        <h4>Booking List</h4>
                    </div>
                </div>
                <div className="col-md-8 d-flex align-items-center justify-content-md-end flex-wrap">
                    <div className="review-sort me-2">
                        <p>Sort</p>
                        <select className="select">
                            <option>Recent</option>
                            <option>Older</option>
                            <option>A to Z</option>
                            <option>Z to A</option>
                        </select>
                    </div>
                    <div className="grid-listview">
                        <ul>
                            <li>
                                <a href="customer-booking-calendar.html">
                                    <i className="feather-calendar"></i>
                                </a>
                            </li>
                            <li>
                                <a href=" ;">
                                    <i className="feather-filter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="feather-grid"></i>
                                </a>
                            </li>
                            <li>
                                <a href="customer-booking.html" className="active">
                                    <i className="feather-list"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className="booking-list">
                <div className="booking-widget">
                    <div className="booking-img">
                        <a href="booking-details.html">
                            <Image width={100} height={100}  src="/assets/img/services/service-08.jpg" alt="User Image"/>
                        </a>
                        <div className="fav-item">
                            <a href=" " className="fav-icon">
                                <i className="feather-heart"></i>
                            </a>
                        </div>
                    </div>
                    <div className="booking-det-info">
                        <h3>
                            <a href="booking-details.html">Computer Services </a><span className="badge badge-danger">Cancelled by User</span>
                        </h3>
                        <ul className="booking-details">
                            <li>
                                <span className="book-item">Booking Date</span> : 27 Sep, 17:00-18:00
                            </li>
                            <li>
                                <span className="book-item">Amount</span> : $100.00 <span className="badge-grey badge-new">Paypal</span>
                            </li>
                            <li>
                                <span className="book-item">Location</span> : Newyork, USA
                            </li>
                            <li>
                                <span className="book-item">Customer</span> :
                                <div className="user-book">
                                    <div className="avatar avatar-xs">
                                        <Image width={100} height={100}  className="avatar-img rounded-circle" alt="User Image" src="/assets/img/profiles/avatar-02.jpg"/>
                                    </div>
                                    John Doe
                                </div>
                                <p><a href="https://truelysell.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="462f282029062c292e282229236825292b">[email&#160;protected]</a></p>
                                <p>+1 888 888 8888</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="booking-action action-popup-btn">
                    <a href=" ;" className="btn btn-secondary"><i className="fa-solid fa-circle-info"></i>Reason</a>
                    <a href="booking.html" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#reschedule"><i className="fa-regular fa-calendar-days"></i>Reschedule</a>
                </div>
            </div>


            <div className="booking-list">
                <div className="booking-widget">
                    <div className="booking-img">
                        <a href="booking-details.html">
                            <Image width={100} height={100}  src="/assets/img/services/service-18.jpg" alt="User Image"/>
                        </a>
                        <div className="fav-item">
                            <a href=" " className="fav-icon">
                                <i className="feather-heart"></i>
                            </a>
                        </div>
                    </div>
                    <div className="booking-det-info">
                        <h3>
                            <a href="booking-details.html">Car Repair Services</a> <span className="badge badge-success">Completed</span>
                        </h3>
                        <ul className="booking-details">
                            <li>
                                <span className="book-item">Booking Date</span> : 23 Sep, 10:00-11:00
                            </li>
                            <li><span className="book-item">Amount</span> : $50.00 <span className="badge-grey">COD</span></li>
                            <li><span className="book-item">Location</span> : Alabama, USA</li>
                            <li>
                                <span className="book-item">Customer</span> :
                                <div className="user-book">
                                    <div className="avatar avatar-xs">
                                        <Image width={100} height={100}  className="avatar-img rounded-circle" alt="User Image" src="/assets/img/profiles/avatar-03.jpg"/>
                                    </div>
                                    John Smith
                                </div>
                                <p><a href="https://truelysell.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="335a5d555c73595c5b5d575c561d505c5e">[email&#160;protected]</a></p>
                                <p>+1 607-276-5393</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="booking-action action-popup-btn">
                    <a href="booking.html" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#reschedule"><i className="fa-regular fa-calendar-days"></i>Rebook</a>
                    <a className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add-review"><i className="fa-solid fa-star"></i>Add Review</a>
                </div>
            </div>


            <div className="booking-list">
                <div className="booking-widget">
                    <div className="booking-img">
                        <a href="booking-details.html">
                            <Image width={100} height={100}  src="/assets/img/services/service-10.jpg" alt="User Image"/>
                        </a>
                        <div className="fav-item">
                            <a href=" " className="fav-icon">
                                <i className="feather-heart"></i>
                            </a>
                        </div>
                    </div>
                    <div className="booking-det-info">
                        <h3>
                            <a href="booking-details.html">Car Repair Services</a> <span className="badge badge-success">Completed</span>
                        </h3>
                        <ul className="booking-details">
                            <li>
                                <span className="book-item">Booking Date</span> : 23 Sep, 10:00-11:00
                            </li>
                            <li><span className="book-item">Amount</span> : $50.00 <span className="badge-grey">COD</span></li>
                            <li><span className="book-item">Location</span> : Alabama, USA</li>
                            <li>
                                <span className="book-item">Customer</span> :
                                <div className="user-book">
                                    <div className="avatar avatar-xs">
                                        <Image width={100} height={100}  className="avatar-img rounded-circle" alt="User Image" src="/assets/img/profiles/avatar-03.jpg"/>
                                    </div>
                                    John Smith
                                </div>
                                <p><a href="https://truelysell.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="5a33343c351a303532343e353f74393537">[email&#160;protected]</a></p>
                                <p>+1 607-276-5393</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="booking-action action-popup-btn">
                    <a href="booking.html" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#reschedule"><i className="fa-regular fa-calendar-days"></i>Rebook</a>
                    <div className="view-action mt-3 mb-0 me-0 ms-0">
                        <div className="rating text-center">
                            <i className="fas fa-star filled"></i>
                            <i className="fas fa-star filled"></i>
                            <i className="fas fa-star filled"></i>
                            <i className="fas fa-star filled"></i>
                            <i className="fas fa-star filled"></i>
                        </div>
                        <a href="booking-details.html" className="view-btn p-0">View Details</a>
                    </div>
                </div>
            </div>


            <div className="booking-list">
                <div className="booking-widget">
                    <div className="booking-img">
                        <a href="booking-details.html">
                            <Image width={100} height={100}  src="/assets/img/services/service-07.jpg" alt="User Image"/>
                        </a>
                        <div className="fav-item">
                            <a href=" " className="fav-icon">
                                <i className="feather-heart"></i>
                            </a>
                        </div>
                    </div>
                    <div className="booking-det-info">
                        <h3>
                            <a href="booking-details.html">Interior Designing</a> <span className="badge badge-info">Inprogress</span>
                        </h3>
                        <ul className="booking-details">
                            <li>
                                <span className="book-item">Booking Date</span> : 27 Sep, 17:00-18:00
                            </li>
                            <li><span className="book-item">Amount</span> : $50.00 <span className="badge-grey">COD</span></li>
                            <li><span className="book-item">Location</span> : Washington, DC, USA</li>
                            <li>
                                <span className="book-item">Customer</span> :
                                <div className="user-book">
                                    <div className="avatar avatar-xs">
                                        <Image width={100} height={100}  className="avatar-img rounded-circle" alt="User Image" src="/assets/img/profiles/avatar-06.jpg"/>
                                    </div>
                                    Quentin
                                </div>
                                <p><a href="https://truelysell.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="c6afa8a0a986b7b3a3a8b2afa8e8a5a9ab">[email&#160;protected]</a></p>
                                <p>+1 601-810-9218</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="booking-action action-popup-btn">
                    <a href="customer-chat.html" className="btn btn-secondary"><i className="fa-brands fa-rocketchat"></i> Chat</a>
                    <a href=" ;" className="btn btn-primary"><i className="fa-solid fa-circle-xmark"></i>Cancel</a>
                </div>
            </div>


            <div className="booking-list">
                <div className="booking-widget">
                    <div className="booking-img">
                        <a href="booking-details.html">
                            <Image width={100} height={100}  src="/assets/img/services/service-13.jpg" alt="User Image"/>
                        </a>
                        <div className="fav-item">
                            <a href=" " className="fav-icon">
                                <i className="feather-heart"></i>
                            </a>
                        </div>
                    </div>
                    <div className="booking-det-info">
                        <h3>
                            <a href="booking-details.html">House Cleaning Services</a> <span className="badge badge-warning">Pending</span>
                        </h3>
                        <ul className="booking-details">
                            <li>
                                <span className="book-item">Booking Date</span> : 27 Sep, 17:00-18:00
                            </li>
                            <li><span className="book-item">Amount</span> : $375.00 <span className="badge-grey">COD</span></li>
                            <li><span className="book-item">Location</span> : Virginia, USA</li>
                            <li>
                                <span className="book-item">Customer</span> :
                                <div className="user-book">
                                    <div className="avatar avatar-xs">
                                        <Image width={100} height={100}  className="avatar-img rounded-circle" alt="User Image" src="/assets/img/profiles/avatar-02.jpg"/>
                                    </div>
                                    Johnson
                                </div>
                                <p><a href="https://truelysell.dreamstechnologies.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="d3babdb5bc93b9bcbbbda0bcbdfdb0bcbe">[email&#160;protected]</a></p>
                                <p>+1 312-328-3970</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="booking-action action-popup-btn">
                    <a href="customer-chat.html" className="btn btn-secondary"><i className="fa-brands fa-rocketchat"></i> Chat</a>
                    <a href=" ;" className="btn btn-primary"><i className="fa-solid fa-circle-xmark"></i>Cancel</a>
                </div>
            </div>


            <div className="row">
                <div className="col-sm-6">
                    <div className="review-entries">
                        <span>Show</span>
                        <select>
                            <option>10</option>
                            <option>25</option>
                            <option>50</option>
                            <option>100</option>
                        </select>
                        <span>entries</span>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="review-pagination">
                        <p>1 - 5 of 10</p>
                        <ul className="pagination">
                            <li className="page-item">
                                <a className="page-link" href=" ;">1</a>
                            </li>
                            <li className="page-item active">
                                <a className="page-link" href=" ;">2 <span className="visually-hidden">(current)</span></a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href=" ;">3</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Booking
