import React, { useState } from 'react'
import Image from 'next/image'
import Layout from '@/component/Layout'
import { useSelector } from 'react-redux';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import { RootState } from '@/redux/store';
import { useRouter } from 'next/navigation';
import DashboardMain from './component/dashboard';
import Booking from './component/booking';
import Setting from './component/setting';


function Dashboard() {
    const router = useRouter()
    const [activeLink, setActiveLink] = useState('Dashboard');

    const user = useSelector((state: RootState) => state.auth);
    if (!user.name) {
        router.push('/users/signin');
    }

    return (
        <Layout>
            <div className="content">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-3 theiaStickySidebar">
                            <div className="settings-widget">
                                <div className="settings-header">
                                    <div className="settings-img">
                                        <Image width={100} height={100} src="/assets/img/profiles/avatar-02.jpg" alt="user" />
                                    </div>
                                    <h6>{user.name}</h6>
                                    <p>Member Since Sep 2021</p>
                                </div>
                                <div className="settings-menu">
                                    <ul>
                                        <li>
                                            <a className={activeLink === 'Dashboard' ? 'active' : ''} onClick={() => { setActiveLink("Dashboard") }}>
                                                <i className="feather-grid"></i> <span>Dashboard</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className={activeLink === 'Booking' ? 'active' : ''} onClick={() => { setActiveLink("Booking") }}>
                                                <i className="feather-smartphone"></i> <span>Bookings</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className={activeLink === 'Favorites' ? 'active' : ''} onClick={() => { setActiveLink("Favorites") }}>
                                                <i className="feather-heart"></i> <span>Favorites</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className={activeLink === 'Wallet' ? 'active' : ''} onClick={() => { setActiveLink("Wallet") }}>                                            <i className="feather-credit-card"></i> <span>Wallet</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className={activeLink === 'Setting' ? 'active' : ''} onClick={() => { setActiveLink("Setting") }}>                                               <i className="feather-settings"></i> <span>Settings</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className={activeLink === 'Logout' ? 'active' : ''} onClick={() => { setActiveLink("Logout") }}>                                                <i className="feather-log-out"></i> <span>Logout</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {(() => {
                            switch (activeLink) {
                                case 'Dashboard':
                                    return <DashboardMain />;
                                case 'Booking':
                                    return <Booking />;       
                                case 'Setting':
                                    return <Setting />;
                                default:
                                    return null;
                            }
                        })()}

                    </div>
                </div>
            </div>
        </Layout>

    )
}

// export default dashboard


const DashboardPrivider = () => {
    return (
        <Provider store={store}>
            <Dashboard />
        </Provider>
    );
};

export default DashboardPrivider;