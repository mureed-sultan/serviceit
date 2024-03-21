import React, { useState, useEffect } from 'react'
import Layout from '@/component/Layout'
import Image from 'next/image'
import DatePicker, { ReactDatePickerProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useRouter } from "next/router";
import client from '../../../sanityConfig';
import Link from 'next/link';


interface Product {
    title: string;
    imageUrl: string;
}
function Booking() {
    const router = useRouter();
    const { slug } = router.query;
    const [product, setProduct] = useState<Product | undefined>(); // Define the type for product
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [bookingState, setBookingState] = useState(1)
    const [bookTime , setbookTime] = useState("")
    const [paymentMethod, setPaymentMethod] = useState("")

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const productData = await client.fetch(`
                *[_type == "product" && slug == "${slug}"][0]{
                    title,
                    "imageUrl": images.asset->url,
                    price
                }`);

                setProduct(productData);
            } catch (error) {
                console.error("Error fetching product data:", error);
            }
        };

        if (slug) {
            fetchProduct();
        }
    }, [slug]);

    const handleDateChange: ReactDatePickerProps['onChange'] = (date) => {
        setSelectedDate(date ? new Date(date.setHours(0, 0, 0, 0)) : null);
    };
    console.log(product)

    return (
        <Layout>
            {!product ? <p>Loading</p> :
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
                                        <li className={`col-md-4 ${bookingState === 1 ? 'active' : ''}`}>
                                            <div className="multi-step-icon">
                                                <Image width={100} height={150} src="/assets/img/icons/calendar-icon.svg" alt="img" />
                                            </div>
                                            <div className="multi-step-info">
                                                <h6>Appointment</h6>
                                                <p>Choose time & date for the service</p>
                                            </div>
                                        </li>
                                        <li className={`col-md-4 ${bookingState === 2 ? 'active' : ''}`}>
                                            <div className="multi-step-icon">
                                                <Image width={100} height={150} src="/assets/img/icons/wallet-icon.svg" alt="img" />
                                            </div>
                                            <div className="multi-step-info">
                                                <h6>Payment</h6>
                                                <p>Select Payment Gateway</p>
                                            </div>
                                        </li>
                                        <li className={`col-md-4 ${bookingState === 3 ? 'active' : ''}`}>
                                            <div className="multi-step-icon">
                                                <Image width={100} height={150} src="/assets/img/icons/book-done.svg" alt="img" />
                                            </div>
                                            <div className="multi-step-info">
                                                <h6>Done </h6>
                                                <p>Completion of Booking</p>
                                            </div>
                                        </li>
                                    </ul>

                                    {(() => {
                                        switch (bookingState) {
                                            case 1: return <>
                                                <div className="booking-service">
                                                    <div className="row align-items-center">
                                                        <div className="col-lg-6">
                                                            <div className="service-book">
                                                                <div className="service-book-img">
                                                                    <Image width={100} height={150} src={product.imageUrl} alt="img" />
                                                                </div>
                                                                <div className="serv-profile">
                                                                    <span className="badge">Car Wash</span>
                                                                    <h2>{product.title}</h2>
                                                                    {/* <ul>
                                                                        <li className="serv-pro">
                                                                            <Image width={100} height={150} src="/assets/img/profiles/avatar-01.jpg" alt="img" />
                                                                            <div className="serv-pro-info">
                                                                                <h6>Thomas Herzberg</h6>
                                                                                <p className="serv-review"><i className="fa-solid fa-star"></i>
                                                                                    <span>4.9 </span>(255 reviews)</p>
                                                                            </div>
                                                                        </li>
                                                                    </ul> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* <div className="col-lg-6">
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
                                                        </div> */}
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
                                                                    <input onChange={(e)=>{setbookTime("09.00 AM")}} type="radio" className="form-check-input" name="appintment" />
                                                                    <span className="visit-rsn">09.00 AM</span>
                                                                </label>
                                                            </div>
                                                            <div className="form-check-inline visits me-0">
                                                                <label className="visit-btns">
                                                                <input onChange={(e)=>{setbookTime("09.30 AM")}} type="radio" className="form-check-input" name="appintment" />
                                                                    <span className="visit-rsn">09.30 AM</span>
                                                                </label>
                                                            </div>
                                                            <div className="form-check-inline visits me-0">
                                                                <label className="visit-btns">
                                                                <input onChange={(e)=>{setbookTime("10.00 AM")}} type="radio" className="form-check-input" name="appintment" />
                                                                    <span className="visit-rsn">10.00 AM</span>
                                                                </label>
                                                            </div>
                                                            <div className="form-check-inline visits me-0">
                                                                <label className="visit-btns">
                                                                <input onChange={(e)=>{setbookTime("10.30 AM")}} type="radio" className="form-check-input" name="appintment" />
                                                                    <span className="visit-rsn">10.30 AM</span>
                                                                </label>
                                                            </div>
                                                            <div className="form-check-inline visits me-0">
                                                                <label className="visit-btns">
                                                                <input onChange={(e)=>{setbookTime("11.00 AM")}} type="radio" className="form-check-input" name="appintment" />
                                                                    <span className="visit-rsn">11.00 AM</span>
                                                                </label>
                                                            </div>
                                                            <div className="form-check-inline visits me-0">
                                                                <label className="visit-btns">
                                                                <input onChange={(e)=>{setbookTime("11.30 AM")}} type="radio" className="form-check-input" name="appintment" />
                                                                    <span className="visit-rsn">11.30 AM</span>
                                                                </label>
                                                            </div>
                                                            <div className="form-check-inline visits me-0">
                                                                <label className="visit-btns">
                                                                <input onChange={(e)=>{setbookTime("12.00 PM")}} type="radio" className="form-check-input" name="appintment" />
                                                                    <span className="visit-rsn">12.00 PM</span>
                                                                </label>
                                                            </div>
                                                            <div className="form-check-inline visits me-0">
                                                                <label className="visit-btns">
                                                                <input onChange={(e)=>{setbookTime("12.30 PM")}} type="radio" className="form-check-input" name="appintment" />
                                                                    <span className="visit-rsn">12.30 PM</span>
                                                                </label>
                                                            </div>
                                                            <div className="form-check-inline visits me-0">
                                                                <label className="visit-btns">
                                                                <input onChange={(e)=>{setbookTime("01.00 PM")}} type="radio" className="form-check-input" name="appintment" />
                                                                    <span className="visit-rsn">01.00 PM</span>
                                                                </label>
                                                            </div>
                                                            <div className="form-check-inline visits me-0">
                                                                <label className="visit-btns">
                                                                <input onChange={(e)=>{setbookTime("01.30 PM")}} type="radio" className="form-check-input" name="appintment" />
                                                                    <span className="visit-rsn">01.30 PM</span>
                                                                </label>
                                                            </div>
                                                            <div className="form-check-inline visits me-0">
                                                                <label className="visit-btns">
                                                                <input onChange={(e)=>{setbookTime("02.00 PM")}} type="radio" className="form-check-input" name="appintment" />
                                                                    <span className="visit-rsn">02.00 PM</span>
                                                                </label>
                                                            </div>
                                                            <div className="form-check-inline visits me-0">
                                                                <label className="visit-btns">
                                                                <input onChange={(e)=>{setbookTime("02.30 PM")}} type="radio" className="form-check-input" name="appintment" />
                                                                    <span className="visit-rsn">02.30 PM</span>
                                                                </label>
                                                            </div>
                                                            <div className="form-check-inline visits me-0">
                                                                <label className="visit-btns">
                                                                <input onChange={(e)=>{setbookTime("03.00 PM")}} type="radio" className="form-check-input" name="appintment" />
                                                                    <span className="visit-rsn">03.00 PM</span>
                                                                </label>
                                                            </div>
                                                            <div className="form-check-inline visits me-0">
                                                                <label className="visit-btns">
                                                                <input onChange={(e)=>{setbookTime("03.30 PM")}} type="radio" className="form-check-input" name="appintment" />
                                                                    <span className="visit-rsn">03.30 PM</span>
                                                                </label>
                                                            </div>
                                                            <div className="form-check-inline visits me-0">
                                                                <label className="visit-btns">
                                                                <input onChange={(e)=>{setbookTime("04.00 PM")}} type="radio" className="form-check-input" name="appintment" />
                                                                    <span className="visit-rsn">04.00 PM</span>
                                                                </label>
                                                            </div>
                                                            <div className="form-check-inline visits me-0">
                                                                <label className="visit-btns">
                                                                <input onChange={(e)=>{setbookTime("04.30 PM")}} type="radio" className="form-check-input" name="appintment" />
                                                                    <span className="visit-rsn">04.30 PM</span>
                                                                </label>
                                                            </div>
                                                            <div className="form-check-inline visits me-0">
                                                                <label className="visit-btns">
                                                                <input onChange={(e)=>{setbookTime("05.00 PM")}} type="radio" className="form-check-input" name="appintment" />
                                                                    <span className="visit-rsn">05.00 PM</span>
                                                                </label>
                                                            </div>
                                                            <div className="form-check-inline visits me-0">
                                                                <label className="visit-btns">
                                                                <input onChange={(e)=>{setbookTime("05.30 PM")}} type="radio" className="form-check-input" name="appintment" />
                                                                    <span className="visit-rsn">05.30 PM</span>
                                                                </label>
                                                            </div>
                                                            <div className="form-check-inline visits me-0">
                                                                <label className="visit-btns">
                                                                <input onChange={(e)=>{setbookTime("06.00 PM")}} type="radio" className="form-check-input" name="appintment" />
                                                                    <span className="visit-rsn">06.00 PM</span>
                                                                </label>
                                                            </div>
                                                            <div className="form-check-inline visits me-0">
                                                                <label className="visit-btns">
                                                                <input onChange={(e)=>{setbookTime("06.30 PM")}} type="radio" className="form-check-input" name="appintment" />
                                                                    <span className="visit-rsn">06.30 PM</span>
                                                                </label>
                                                            </div>
                                                            <div className="form-check-inline visits me-0">
                                                                <label className="visit-btns">
                                                                <input onChange={(e)=>{setbookTime("07.00 PM")}} type="radio" className="form-check-input" name="appintment" />
                                                                    <span className="visit-rsn">07.00 PM</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="book-submit text-end">
                                                            <a href="#" className="btn btn-secondary">Cancel</a>
                                                            <a onClick={() => { setBookingState(2) }} className="btn btn-primary">Book Appointment</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>;
                                            case 2: return <div className="row">
                                                <div className="col-lg-6">
                                                    <h5 className="pay-title">Payment Methods</h5>
                                                    <div className="payment-card payment-bg">
                                                        <div className="payment-head">
                                                            <div className="payment-title">
                                                                <label className="custom_radio">
                                                                    <input onChange={()=>{setPaymentMethod("Wallet")}} type="radio" name="payment" className="card-payment" />
                                                                    <span className="checkmark"></span>
                                                                </label>
                                                                <h6>Wallet</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="payment-card">
                                                        <div className="payment-head">
                                                            <div className="payment-title">
                                                                <label className="custom_radio">
                                                                    <input onChange={()=>{setPaymentMethod("COD")}} type="radio" name="payment" className="card-payment" />
                                                                    <span className="checkmark"></span>
                                                                </label>
                                                                <h6>Cash On Delivery</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="payment-card">
                                                        <div className="payment-head">
                                                            <div className="payment-title">
                                                                <label className="custom_radio credit-card-option">
                                                                    <input onChange={()=>{setPaymentMethod("Card")}} type="radio" name="payment" className="card-payment" />
                                                                    <span className="checkmark"></span>
                                                                </label>
                                                                <h6>Credit / Debit Card</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="payment-list" >
                                                        <div className="row align-items-center">
                                                            <div className="col-md-12">
                                                                <div className="form-group">
                                                                    <label className="col-form-label">Name on Card</label>
                                                                    <input className="form-control" type="text"
                                                                        placeholder="Enter Name on Card" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-8">
                                                                <div className="form-group">
                                                                    <label className="col-form-label">Card Number</label>
                                                                    <input className="form-control" placeholder="**** **** **** ****"
                                                                        type="text" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4 text-end">
                                                                <div className="form-group">
                                                                    <label className="col-form-label">&nbsp;</label>
                                                                    <Image width={100} height={150} src="/assets/img/payment-card.png" className="img-fluid" alt="image" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <label className="col-form-label">Expiration date</label>
                                                                    <input className="form-control" placeholder="MM/YY" type="text" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <label className="col-form-label">Security code</label>
                                                                    <input className="form-control" placeholder="CVV" type="text" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <h5 className="pay-title">Booking Summary</h5>
                                                    <div className="summary-box">
                                                        <div className="booking-info">
                                                            <div className="service-book">
                                                                <div className="service-book-img">
                                                                    <Image width={100} height={150} src={product.imageUrl} alt="img" />
                                                                </div>
                                                                <div className="serv-profile">
                                                                    <span className="badge">Car Wash</span>
                                                                    <h2>{product.title}</h2>
                                                                    <ul>
                                                                        <li className="serv-pro">
                                                                            <Image width={100} height={150} src="/assets/img/profiles/avatar-01.jpg" alt="img" />
                                                                        </li>
                                                                        <li className="serv-review">
                                                                            <i className="fa-solid fa-star"></i>
                                                                            <span>4.9 </span>(255 reviews)
                                                                        </li>
                                                                        <li className="service-map">
                                                                            <i className="feather-map-pin"></i> Alabama, USA
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="booking-summary">
                                                            <ul className="booking-date">
                                                                <li>Date <span>07/09/2023</span></li>
                                                                <li>Time <span>12.30 Pm - 01. 00 PM</span></li>
                                                                <li>Service Provider <span>Thomas Herzberg</span></li>
                                                            </ul>
                                                            <ul className="booking-date">
                                                                <li>Subtotal <span>${product.price}.00</span></li>
                                                                <li>Coupoun Discount <span>$5.00</span></li>
                                                                <li>Services Charges <span>$3.00</span></li>
                                                            </ul>
                                                            <div className="booking-total">
                                                                <ul className="booking-total-list">
                                                                    <li>
                                                                        <span>Total</span>
                                                                        <span className="total-cost">${product.price + 3}.00</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="booking-coupon">
                                                        <div className="form-group w-100">
                                                            <div className="coupon-icon">
                                                                <input type="text" className="form-control" placeholder="Coupon Code" />
                                                                <span><Image width={20} height={20} src="/assets/img/icons/coupon-icon.svg" alt="image" /></span>
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <button className="btn btn-primary apply-btn">Apply</button>
                                                        </div>
                                                    </div>
                                                    <div className="save-offer">
                                                        <p>
                                                            <i className="fa-solid fa-circle-check"></i> Your total saving
                                                            on this order $5.00
                                                        </p>
                                                    </div>
                                                    <div className="booking-pay">
                                                        <a onClick={() => { setBookingState(3) }} className="btn btn-primary btn-pay w-100">Proceed to Pay
                                                            ${product.price + 3}</a>
                                                        <a href=" ;" className="btn btn-secondary btn-skip">Skip</a>
                                                    </div>
                                                </div>
                                            </div>
                                                ;
                                            case 3: return <div className="row align-items-center">
                                                <div className="col-md-7">
                                                    <div className="booking-done">
                                                        <h6>Successfully Completed Payment</h6>
                                                        <p>Your Booking has been Successfully Competed</p>
                                                        <div className="book-submit">
                                                            <Link legacyBehavior href='../'>
                                                            <a  className="btn btn-primary"><i className="feather-arrow-left-circle"></i> Go to Home</a>
                                                            </Link>
                                                            <a href="#" className="btn btn-secondary"><i
                                                                className="fa-solid fa-calendar-days me-2"></i>Add to Calender</a>
                                                            <a href="customer-booking.html" className="btn btn-secondary">Booking History</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-5">
                                                    <div className="booking-done">
                                                        <Image width={400} height={400} src="/assets/img/booking-done.png" className="img-fluid" alt="image" />
                                                    </div>
                                                </div>
                                            </div>;
                                        }
                                    })()}

                                </div>

                            </div>
                        </div>
                    </div>

                </div>


            }
        </Layout>
    )
}

export default Booking
