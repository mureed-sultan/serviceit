import React, { useState } from 'react'
import Layout from '@/component/Layout'
import Image from 'next/image'
import DatePicker, { ReactDatePickerProps } from 'react-datepicker'; // Import the ReactDatePickerProps type
import 'react-datepicker/dist/react-datepicker.css';


function Booking() {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null); // Specify the type as Date | null


    const handleDateChange: ReactDatePickerProps['onChange'] = (date) => { // Define the type for handleDateChange
        setSelectedDate(date);
    };
    return (
        <Layout>
            <div className="main-wrapper">
                <div className="bg-img">
                    <Image width={100} height={150} src="/assets/img/bg/work-bg-03.png" alt="img" className="bgimg1" />
                    <Image width={100} height={150} src="/assets/img/bg/work-bg-03.png" alt="img" className="bgimg2" />
                    <Image width={100} height={150} src="/assets/img/bg/feature-bg-03.png" alt="img" className="bgimg3" />
                </div>
                <div className="content">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-10 mx-auto">

                                <ul className="step-register row">
                                    <li className="active col-md-4">
                                        <div className="multi-step-icon">
                                            <Image width={100} height={150} src="/assets/img/icons/calendar-icon.svg" alt="img" />
                                        </div>
                                        <div className="multi-step-info">
                                            <h6>Appointment</h6>
                                            <p>Choose time & date for the service</p>
                                        </div>
                                    </li>
                                    <li className="col-md-4">
                                        <div className="multi-step-icon">
                                            <Image width={100} height={150} src="/assets/img/icons/wallet-icon.svg" alt="img" />
                                        </div>
                                        <div className="multi-step-info">
                                            <h6>Payment</h6>
                                            <p>Select Payment Gateway</p>
                                        </div>
                                    </li>
                                    <li className="col-md-4">
                                        <div className="multi-step-icon">
                                            <Image width={100} height={150} src="/assets/img/icons/book-done.svg" alt="img" />
                                        </div>
                                        <div className="multi-step-info">
                                            <h6>Done </h6>
                                            <p>Completion of Booking</p>
                                        </div>
                                    </li>
                                </ul>


                                <div className="booking-service">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="service-book">
                                                <div className="service-book-img">
                                                    <Image width={100} height={150} src="/assets/img/booking.jpg" alt="img" />
                                                </div>
                                                <div className="serv-profile">
                                                    <span className="badge">Car Wash</span>
                                                    <h2>Car Repair Services</h2>
                                                    <ul>
                                                        <li className="serv-pro">
                                                            <Image width={100} height={150} src="/assets/img/profiles/avatar-01.jpg" alt="img" />
                                                            <div className="serv-pro-info">
                                                                <h6>Thomas Herzberg</h6>
                                                                <p className="serv-review"><i className="fa-solid fa-star"></i>
                                                                    <span>4.9 </span>(255 reviews)</p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="row align-items-center">
                                                <div className="col-md-7 col-sm-6">
                                                    <div className="provide-box">
                                                        <span><i className="feather-phone"></i></span>
                                                        <div className="provide-info">
                                                            <h6>Phone</h6>
                                                            <p>+1 888 888 8888</p>
                                                        </div>
                                                    </div>
                                                    <div className="provide-box">
                                                        <span><i className="feather-mail"></i></span>
                                                        <div className="provide-info">
                                                            <h6>Email</h6>
                                                            <p><a href="https://truelysell.dreamstechnologies.com/cdn-cgi/l/email-protection"
                                                                className="__cf_email__"
                                                                data-cfemail="54203c3b3935273c31262e3631263314312c35392438317a373b39">[email&#160;protected]</a>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-5 col-sm-6">
                                                    <div className="provide-box">
                                                        <span><i className="feather-map-pin"></i></span>
                                                        <div className="provide-info">
                                                            <h6>Address</h6>
                                                            <p>Hanover, Maryland</p>
                                                        </div>
                                                    </div>
                                                    <div className="provide-box">
                                                        <span><Image width={100} height={150} src="/assets/img/icons/service-icon.svg" alt="img" /></span>
                                                        <div className="provide-info">
                                                            <h6>Service Amount</h6>
                                                            <h5>$150.00 </h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="book-form">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label className="col-form-label">City</label>
                                                <select className="select">
                                                    <option>Select City</option>
                                                    <option>Tornoto</option>
                                                    <option>Texas</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label className="col-form-label">State</label>
                                                <select className="select">
                                                    <option>Select State</option>
                                                    <option>Tornoto</option>
                                                    <option>Texas</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label className="col-form-label">Country</label>
                                                <select className="select">
                                                    <option>Select Country</option>
                                                    <option>US</option>
                                                    <option>UK</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="book-title">
                                            <h5>Appointment Date</h5>
                                        </div>
                                        <div>
                                            <DatePicker
                                                selected={selectedDate}
                                                onChange={handleDateChange}
                                                timeIntervals={15}
                                                dateFormat="MMMM d, yyyy"
                                                placeholderText="Select Date and Time"
                                                inline // Set inline to true to show only the calendar
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="book-title">
                                                    <h5>Appointment Time</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="token-slot mt-2">
                                            <div className="form-check-inline visits me-0">
                                                <label className="visit-btns">
                                                    <input type="radio" className="form-check-input" name="appintment" />
                                                    <span className="visit-rsn">09.00 AM</span>
                                                </label>
                                            </div>
                                            <div className="form-check-inline visits me-0">
                                                <label className="visit-btns">
                                                    <input type="radio" className="form-check-input" name="appintment" />
                                                    <span className="visit-rsn">09.30 AM</span>
                                                </label>
                                            </div>
                                            <div className="form-check-inline visits me-0">
                                                <label className="visit-btns">
                                                    <input type="radio" className="form-check-input" name="appintment" />
                                                    <span className="visit-rsn">10.00 AM</span>
                                                </label>
                                            </div>
                                            <div className="form-check-inline visits me-0">
                                                <label className="visit-btns">
                                                    <input type="radio" className="form-check-input" name="appintment" />
                                                    <span className="visit-rsn">10.30 AM</span>
                                                </label>
                                            </div>
                                            <div className="form-check-inline visits me-0">
                                                <label className="visit-btns">
                                                    <input type="radio" className="form-check-input" name="appintment" />
                                                    <span className="visit-rsn">11.00 AM</span>
                                                </label>
                                            </div>
                                            <div className="form-check-inline visits me-0">
                                                <label className="visit-btns">
                                                    <input type="radio" className="form-check-input" name="appintment" />
                                                    <span className="visit-rsn">11.30 AM</span>
                                                </label>
                                            </div>
                                            <div className="form-check-inline visits me-0">
                                                <label className="visit-btns">
                                                    <input type="radio" className="form-check-input" name="appintment" />
                                                    <span className="visit-rsn">12.00 PM</span>
                                                </label>
                                            </div>
                                            <div className="form-check-inline visits me-0">
                                                <label className="visit-btns">
                                                    <input type="radio" className="form-check-input" name="appintment" />
                                                    <span className="visit-rsn">12.30 PM</span>
                                                </label>
                                            </div>
                                            <div className="form-check-inline visits me-0">
                                                <label className="visit-btns">
                                                    <input type="radio" className="form-check-input" name="appintment" />
                                                    <span className="visit-rsn">01.00 PM</span>
                                                </label>
                                            </div>
                                            <div className="form-check-inline visits me-0">
                                                <label className="visit-btns">
                                                    <input type="radio" className="form-check-input" name="appintment" />
                                                    <span className="visit-rsn">01.30 PM</span>
                                                </label>
                                            </div>
                                            <div className="form-check-inline visits me-0">
                                                <label className="visit-btns">
                                                    <input type="radio" className="form-check-input" name="appintment" />
                                                    <span className="visit-rsn">02.00 PM</span>
                                                </label>
                                            </div>
                                            <div className="form-check-inline visits me-0">
                                                <label className="visit-btns">
                                                    <input type="radio" className="form-check-input" name="appintment" />
                                                    <span className="visit-rsn">02.30 PM</span>
                                                </label>
                                            </div>
                                            <div className="form-check-inline visits me-0">
                                                <label className="visit-btns">
                                                    <input type="radio" className="form-check-input" name="appintment" />
                                                    <span className="visit-rsn">03.00 PM</span>
                                                </label>
                                            </div>
                                            <div className="form-check-inline visits me-0">
                                                <label className="visit-btns">
                                                    <input type="radio" className="form-check-input" name="appintment" />
                                                    <span className="visit-rsn">03.30 PM</span>
                                                </label>
                                            </div>
                                            <div className="form-check-inline visits me-0">
                                                <label className="visit-btns">
                                                    <input type="radio" className="form-check-input" name="appintment" />
                                                    <span className="visit-rsn">04.00 PM</span>
                                                </label>
                                            </div>
                                            <div className="form-check-inline visits me-0">
                                                <label className="visit-btns">
                                                    <input type="radio" className="form-check-input" name="appintment" />
                                                    <span className="visit-rsn">04.30 PM</span>
                                                </label>
                                            </div>
                                            <div className="form-check-inline visits me-0">
                                                <label className="visit-btns">
                                                    <input type="radio" className="form-check-input" name="appintment" />
                                                    <span className="visit-rsn">05.00 PM</span>
                                                </label>
                                            </div>
                                            <div className="form-check-inline visits me-0">
                                                <label className="visit-btns">
                                                    <input type="radio" className="form-check-input" name="appintment" />
                                                    <span className="visit-rsn">05.30 PM</span>
                                                </label>
                                            </div>
                                            <div className="form-check-inline visits me-0">
                                                <label className="visit-btns">
                                                    <input type="radio" className="form-check-input" name="appintment" />
                                                    <span className="visit-rsn">06.00 PM</span>
                                                </label>
                                            </div>
                                            <div className="form-check-inline visits me-0">
                                                <label className="visit-btns">
                                                    <input type="radio" className="form-check-input" name="appintment" />
                                                    <span className="visit-rsn">06.30 PM</span>
                                                </label>
                                            </div>
                                            <div className="form-check-inline visits me-0">
                                                <label className="visit-btns">
                                                    <input type="radio" className="form-check-input" name="appintment" />
                                                    <span className="visit-rsn">07.00 PM</span>
                                                </label>
                                            </div>
                                            <div className="form-check-inline visits me-0">
                                                <label className="visit-btns">
                                                    <input type="radio" className="form-check-input" name="appintment" />
                                                    <span className="visit-rsn">07.30 PM</span>
                                                </label>
                                            </div>
                                            <div className="form-check-inline visits me-0">
                                                <label className="visit-btns">
                                                    <input type="radio" className="form-check-input" name="appintment" />
                                                    <span className="visit-rsn">08.00 PM</span>
                                                </label>
                                            </div>
                                            <div className="form-check-inline visits me-0">
                                                <label className="visit-btns">
                                                    <input type="radio" className="form-check-input" name="appintment" />
                                                    <span className="visit-rsn">08.30 PM</span>
                                                </label>
                                            </div>
                                            <div className="form-check-inline visits me-0">
                                                <label className="visit-btns">
                                                    <input type="radio" className="form-check-input" name="appintment" />
                                                    <span className="visit-rsn">09.00 PM</span>
                                                </label>
                                            </div>
                                            <div className="form-check-inline visits me-0">
                                                <label className="visit-btns">
                                                    <input type="radio" className="form-check-input" name="appintment" />
                                                    <span className="visit-rsn">09.30 PM</span>
                                                </label>
                                            </div>
                                            <div className="form-check-inline visits me-0">
                                                <label className="visit-btns">
                                                    <input type="radio" className="form-check-input" name="appintment" />
                                                    <span className="visit-rsn">10.00 PM</span>
                                                </label>
                                            </div>
                                            <div className="form-check-inline visits me-0">
                                                <label className="visit-btns">
                                                    <input type="radio" className="form-check-input" name="appintment" />
                                                    <span className="visit-rsn">10.30 PM</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="book-submit text-end">
                                            <a href="#" className="btn btn-secondary">Cancel</a>
                                            <a href="booking-payment.html" className="btn btn-primary">Book Appointment</a>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

                <div className="mouse-cursor cursor-outer"></div>
                <div className="mouse-cursor cursor-inner"></div>

            </div>
        </Layout>
    )
}

export default Booking
