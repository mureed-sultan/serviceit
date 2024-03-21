import React from 'react'
import Image from 'next/image'

function DashboardMain() {
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
                                <tr>
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
                                    <td>
                                        <h2 className="table-avatar table-user">
                                            <a href="#" className="avatar avatar-m me-2"><Image width={100} height={100} className="avatar-img"
                                                src="/assets/img/profiles/avatar-02.jpg"
                                                alt="User Image" /></a>
                                            <a href="#">
                                                John Smith
                                                <span><span className="__cf_email__"
                                                    data-cfemail="2a404542446a4f524b475a464f04494547">[email&#160;protected]</span></span>
                                            </a>
                                        </h2>
                                    </td>
                                    <td className="text-end">
                                        <a href="#" className="btn btn-light-danger">Cancel</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h2 className="table-avatar">
                                            <a href="#" className="avatar avatar-m me-2"><Image
                                                width={100} height={100}
                                                className="avatar-img rounded"
                                                src="/assets/img/services/service-04.jpg"
                                                alt="User Image" /></a>
                                            <a href="#">Car Repair Services<span><i
                                                className="feather-calendar"></i> 20 Sep 2023</span></a>
                                        </h2>
                                    </td>
                                    <td>
                                        <h2 className="table-avatar table-user">
                                            <a href="#" className="avatar avatar-m me-2"><Image width={100} height={100} className="avatar-img"
                                                src="/assets/img/profiles/avatar-03.jpg"
                                                alt="User Image" /></a>
                                            <a href="#">
                                                Timothy
                                                <span><span className="__cf_email__"
                                                    data-cfemail="3f4b5652504b57467f5a475e524f535a115c5052">[email&#160;protected]</span></span>
                                            </a>
                                        </h2>
                                    </td>
                                    <td className="text-end">
                                        <a href="#" className="btn btn-light-danger">Cancel</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h2 className="table-avatar">
                                            <a href="#" className="avatar avatar-m me-2"><Image width={100} height={100}
                                                className="avatar-img rounded"
                                                src="/assets/img/services/service-07.jpg"
                                                alt="User Image" /></a>
                                            <a href="#">Interior Designing<span><i
                                                className="feather-calendar"></i> 19 Sep 2023</span></a>
                                        </h2>
                                    </td>
                                    <td>
                                        <h2 className="table-avatar table-user">
                                            <a href="#" className="avatar avatar-m me-2"><Image width={100} height={100} className="avatar-img"
                                                src="/assets/img/profiles/avatar-06.jpg"
                                                alt="User Image" /></a>
                                            <a href="#">
                                                Jordan
                                                <span><span className="__cf_email__"
                                                    data-cfemail="1b7174697f7a755b7e637a766b777e35787476">[email&#160;protected]</span></span>
                                            </a>
                                        </h2>
                                    </td>
                                    <td className="text-end">
                                        <a href="#" className="btn btn-light-danger">Cancel</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h2 className="table-avatar">
                                            <a href="#" className="avatar avatar-m me-2"><Image width={100} height={100}
                                                className="avatar-img rounded"
                                                src="/assets/img/services/service-08.jpg"
                                                alt="User Image" /></a>
                                            <a href="#">Steam Car Wash<span><i className="feather-calendar"></i>
                                                18 Sep 2023</span></a>
                                        </h2>
                                    </td>
                                    <td>
                                        <h2 className="table-avatar table-user">
                                            <a href="#" className="avatar avatar-m me-2"><Image width={100} height={100} className="avatar-img"
                                                src="/assets/img/profiles/avatar-09.jpg"
                                                alt="User Image" /></a>
                                            <a href="#">
                                                Armand
                                                <span><span className="__cf_email__"
                                                    data-cfemail="0263706f636c6642677a636f726e672c616d6f">[email&#160;protected]</span></span>
                                            </a>
                                        </h2>
                                    </td>
                                    <td className="text-end">
                                        <a href="#" className="btn btn-light-danger">Cancel</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h2 className="table-avatar">
                                            <a href="#" className="avatar avatar-m me-2"><Image width={100} height={100}
                                                className="avatar-img rounded"
                                                src="/assets/img/services/service-09.jpg"
                                                alt="User Image" /></a>
                                            <a href="#">House Cleaning Services<span><i
                                                className="feather-calendar"></i> 17 Sep 2023</span></a>
                                        </h2>
                                    </td>
                                    <td>
                                        <h2 className="table-avatar table-user">
                                            <a href="#" className="avatar avatar-m me-2"><Image width={100} height={100} className="avatar-img"
                                                src="/assets/img/profiles/avatar-10.jpg"
                                                alt="User Image" /></a>
                                            <a href="#">
                                                Joseph
                                                <span><span className="__cf_email__"
                                                    data-cfemail="ddb7b2aeb8adb59db8a5bcb0adb1b8f3beb2b0">[email&#160;protected]</span></span>
                                            </a>
                                        </h2>
                                    </td>
                                    <td className="text-end">
                                        <a href="#" className="btn btn-light-danger">Cancel</a>
                                    </td>
                                </tr>
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
