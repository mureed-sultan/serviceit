import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import client from '../../../../sanityConfig';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';


interface Order {
    _id: string;
    workingDate: string,
    titleOfWork: string,
    location: string
}

function Booking(props: any) {


    const [orders, setOrders] = useState<Order[]>([]);
    const user = useSelector((state: RootState) => state.auth);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const orders = await client.fetch(
                    `*[_type == "order" && username == "${user.name}"]`
                );
                setOrders(orders); // Update state with fetched orders
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        fetchOrders();
    }, [props, user])
    // console.log(orders)
    return (
        <div className="col-lg-9">

            <div className="row align-items-center">
                <div className="col-md-4">
                    <div className="widget-title">
                        <h4>Booking List</h4>
                    </div>
                </div>
            </div>


            <div className="booking-list">
                {orders.map((item: any, index: React.Key | null | undefined) => (
                    <div key={index} className="booking-widget">
                        <div className="booking-img">
                            <a href="booking-details.html">
                                <Image width={100} height={100} src="/assets/img/services/service-08.jpg" alt="User Image" />
                            </a>
                            <div className="fav-item">
                                <a href=" " className="fav-icon">
                                    <i className="feather-heart"></i>
                                </a>
                            </div>
                        </div>
                        <div className="booking-det-info">
                            <h3>
                                <a href="booking-details.html">{item.titleOfWork}</a>
                                <span className={`badge ${(() => {
                                    switch (item.status) {
                                        case 'complete':
                                            return 'badge-success';
                                        case 'inprogress':
                                            return 'badge-warning';
                                        case 'pending':
                                        default:
                                            return 'badge-danger';
                                    }
                                })()}`}>
                                    {(() => {
                                        switch (item.status) {
                                            case 'complete':
                                                return 'Order booked';
                                            case 'inprogress':
                                                return 'In Progress';
                                            case 'pending':
                                            default:
                                                return 'Pending';
                                        }
                                    })()}
                                </span>


                            </h3>
                            <ul className="booking-details">
                                <li>
                                    <span className="book-item">Booking Date</span> : {item.workingDate}
                                </li>
                                <li>
                                    <span className="book-item">Working Time</span> : {item.hoursNeeded}
                                </li>
                                <li>
                                    <span className="book-item">Location</span> : {item.location}
                                </li>
                                <li>
                                    <span className="book-item">Customer</span> :
                                    <div className="user-book">
                                        {item.username}
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="booking-action action-popup-btn">
                            <Link href="../service" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#reschedule"><i className="fa-regular fa-calendar-days"></i>Reschedule</Link>
                        </div>
                    </div>
                ))}
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
