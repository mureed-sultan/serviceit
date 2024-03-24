import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import client from '../../../../sanityConfig';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

interface Order {
    _id: string;
    workingDate: string,
    titleOfWork: string,
    location: string
}

function DashboardMain(props: any) {
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
    return (
        <div className="col-lg-9">
            <div className="widget-title">
                <h4>Dashboard</h4>
            </div>

            <div className="row">
                <div className="col-md-6 col-lg-3">
                    <div className="dash-widget">
                        <div className="dash-img">
                            <span className="dash-icon bg-yellow">
                                <Image width={100} height={100} src="/assets/img/icons/dash-icon-01.svg" alt="image" />
                            </span>
                            <div className="dash-value"><Image width={20} height={20} src="/assets/img/icons/up-icon.svg" alt="image" />
                                +16.24%</div>
                        </div>
                        <div className="dash-info">
                            <div className="dash-order">
                                <h6>Total Orders</h6>
                                <h5>27</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="dash-widget">
                        <div className="dash-img">
                            <span className="dash-icon bg-blue">
                                <Image width={100} height={100} src="/assets/img/icons/wallet-icon-01.svg" alt="image" />
                            </span>
                            <div className="dash-value text-danger"><Image width={20} height={20} src="/assets/img/icons/down-icon.svg"
                                alt="image" /> +18.52%</div>
                        </div>
                        <div className="dash-info">
                            <div className="dash-order">
                                <h6>Total Spend</h6>
                                <h5>$2500</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="dash-widget">
                        <div className="dash-img">
                            <span className="dash-icon bg-blue">
                                <Image width={100} height={100} src="/assets/img/icons/wallet-add.svg" alt="image" />
                            </span>
                            <div className="dash-value"><Image width={20} height={20} src="/assets/img/icons/up-icon.svg" alt="image" />
                                +12.10%</div>
                        </div>
                        <div className="dash-info">
                            <div className="dash-order">
                                <h6>Wallet</h6>
                                <h5>$200</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="dash-widget">
                        <div className="dash-img">
                            <span className="dash-icon bg-light-danger">
                                <Image width={100} height={100} src="/assets/img/icons/wallet-amt.svg" alt="image" />
                            </span>
                            <div className="dash-value"><Image width={20} height={20} src="/assets/img/icons/up-icon.svg" alt="image" />
                                +08.15%</div>
                        </div>
                        <div className="dash-info">
                            <div className="dash-order">
                                <h6>Total Savings</h6>
                                <h5>$354</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">

                <div className="col-lg-8 d-flex flex-column">
                    <h6 className="user-title">Recent Booking</h6>
                    <div className="table-responsive recent-booking flex-fill">
                        <table className="table mb-0">
                            <tbody>
                                {orders.length === 0 ? (
                                    <tr>
                                        <td colSpan={2}>No Order Found</td>
                                    </tr>
                                ) : (
                                    orders.map((item: any, index: React.Key | null | undefined) => (
                                        <tr key={index}>
                                            <td>
                                                <h2 className="table-avatar">
                                                    <a href="#" className="avatar avatar-m me-2">
                                                        <Image
                                                            width={100}
                                                            height={100}
                                                            className="avatar-img rounded"
                                                            src="/assets/img/services/service-06.jpg"
                                                            alt="User Image"
                                                        />
                                                    </a>
                                                    <span>
                                                        <h6>{item.titleOfWork} </h6><br/>
                                                        {item.location}
                                                        <span>
                                                            <i className="feather-calendar"></i>{item.workingDate}
                                                        </span>
                                                    </span>
                                                </h2>
                                            </td>
                                            <td className="text-end">
                                                <a href="#" className="btn btn-light-danger">Cancel</a>
                                            </td>
                                        </tr>
                                    ))
                                )}


                                {/* <tr>
                                    <td>
                                        <h2 className="table-avatar">
                                            <a href="#" className="avatar avatar-m me-2"><Image
                                                width={100} height={100}
                                                className="avatar-img rounded"
                                                src="/assets/img/services/service-06.jpg"
                                                alt="User Image" /></a>
                                            <a href="#">Computer Repair<span><i
                                                className="feather-calendar"></i> 22 Sep 2023</span></a>
                                        </h2>
                                    </td>
                                    <td className="text-end">
                                        <a href="#" className="btn btn-light-danger">Cancel</a>
                                    </td>
                                </tr> */}
                            </tbody>
                        </table>
                    </div>
                </div>


                <div className="col-lg-4 d-flex flex-column">
                    <h6 className="user-title">Recent Transaction</h6>
                    <div className="table-responsive transaction-table flex-fill">
                        <table className="table mb-0">
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="table-book d-flex align-items-center">
                                            <span className="book-img">
                                                <Image width={100} height={100} src="/assets/img/icons/trans-icon-01.svg" alt="Icon" />
                                            </span>
                                            <div>
                                                <h6>Service Booking</h6>
                                                <p><i className="feather-calendar"></i>22 Sep 2023 <span><i
                                                    className="feather-clock"></i> 10:12 AM</span></p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-end">
                                        <h5 className="trans-amt">$280.00</h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="table-book d-flex align-items-center">
                                            <span className="book-img">
                                                <Image width={100} height={100} src="/assets/img/icons/trans-icon-02.svg" alt="image" />
                                            </span>
                                            <div>
                                                <h6>Service Refund</h6>
                                                <p><i className="feather-calendar"></i>22 Sep 2023 <span><i
                                                    className="feather-clock"></i> 10:12 AM</span></p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-end">
                                        <h5 className="trans-amt">$100.00</h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="table-book d-flex align-items-center">
                                            <span className="book-img">
                                                <Image width={100} height={100} src="/assets/img/icons/trans-icon-03.svg" alt="image" />
                                            </span>
                                            <div>
                                                <h6>Wallet Topup</h6>
                                                <p><i className="feather-calendar"></i>22 Sep 2023 <span><i
                                                    className="feather-clock"></i> 10:12 AM</span></p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-end">
                                        <h5 className="trans-amt">$1000.00</h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="table-book d-flex align-items-center">
                                            <span className="book-img">
                                                <Image width={100} height={100} src="/assets/img/icons/trans-icon-01.svg" alt="Icon" />
                                            </span>
                                            <div>
                                                <h6>Service Booking</h6>
                                                <p><i className="feather-calendar"></i>22 Sep 2023 <span><i
                                                    className="feather-clock"></i> 10:12 AM</span></p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-end">
                                        <h5 className="trans-amt">$280.00</h5>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="table-book d-flex align-items-center">
                                            <span className="book-img">
                                                <Image width={100} height={100} src="/assets/img/icons/trans-icon-01.svg" alt="Icon" />
                                            </span>
                                            <div>
                                                <h6>Service Booking</h6>
                                                <p><i className="feather-calendar"></i>22 Sep 2023 <span><i
                                                    className="feather-clock"></i> 10:12 AM</span></p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-end">
                                        <h5 className="trans-amt">$280.00</h5>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DashboardMain
