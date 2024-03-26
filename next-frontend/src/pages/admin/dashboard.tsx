import React,{useState, useEffect} from 'react'
import Image from 'next/image'
import Layout from '@/component/Layout'
import Booking from './component/booking'
import { Provider, useSelector } from 'react-redux'
import store, { RootState } from '@/redux/store'
import Router, { useRouter } from 'next/router'

function Dashboard() {

  const user = useSelector((state: RootState) => state.admin);

  console.log(user)
    const [pageState, setPageState] = useState(1)
    const router = useRouter()
    useEffect(() => {

        if (!user.name) {
            router.push('/admin/login')
        }
    }, [])




    let componentToRender;
    switch (pageState) {
        case 1:
          componentToRender = <Booking />;
          break;
        default:
          componentToRender = null; 
          break;
      }
  return (
    <Layout>
     
     <div  className="sidebar" id="sidebar">
            <div  className="sidebar-inner slimscroll">
                <div id="sidebar-menu"  className="sidebar-menu">
                    <ul>
                        <li  className="active">
                            <a href="provider-dashboard.html"><i  className="feather-grid"></i> <span>Dashboard</span></a>
                        </li>
                        <li>
                            <a href="provider-services.html"><i  className="feather-briefcase"></i> <span>My
                                    Services</span></a>
                        </li>
                        <li>
                            <a href="provider-booking.html"><i  className="feather-calendar"></i> <span>Bookings </span></a>
                        </li>
                        <li>
                            <a href="provider-payout.html"><i  className="feather-credit-card"></i> <span>Payout</span></a>
                        </li>
                        <li>
                            <a href="provider-availability.html"><i  className="feather-clock"></i>
                                <span>Availability</span></a>
                        </li>
                        <li>
                            <a href="provider-holiday.html"><i  className="feather-calendar"></i> <span>Holidays &
                                    Leave</span></a>
                        </li>
                        <li>
                            <a href="provider-coupons.html"><i  className="feather-bookmark"></i> <span>Coupons</span></a>
                        </li>
                        <li>
                            <a href="provider-subscription.html"><i  className="feather-dollar-sign"></i>
                                <span>Subscription</span></a>
                        </li>
                        <li>
                            <a href="provider-offers.html"><i  className="feather-percent"></i> <span>Offers</span></a>
                        </li>
                        <li>
                            <a href="provider-reviews.html"><i  className="feather-star"></i> <span>Reviews</span></a>
                        </li>
                        <li>
                            <a href="provider-earnings.html"><i  className="feather-dollar-sign"></i>
                                <span>Earnings</span></a>
                        </li>
                        <li>
                            <a href="provider-chat.html"><i  className="feather-message-circle"></i> <span>Chat</span></a>
                        </li>
                        <li  className="submenu">
                            <a href="provider-settings.html"><i  className="feather-settings"></i> <span>Settings</span>
                                <span  className="menu-arrow"></span></a>
                            <ul>
                                <li>
                                    <a href="provider-appointment-settings.html">Appointment Settings</a>
                                </li>
                                <li>
                                    <a href="provider-profile-settings.html">Account Settings</a>
                                </li>
                                <li>
                                    <a href="provider-social-profile.html">Social Profiles</a>
                                </li>
                                <li>
                                    <a href="provider-security-settings.html">Security Setting</a>
                                </li>
                                <li>
                                    <a href="provider-plan.html">Plan & Billings</a>
                                </li>
                                <li>
                                    <a href="payment-settings.html">Payment Settings</a>
                                </li>
                                <li>
                                    <a href="provider-notifcations.html">Notifications</a>
                                </li>
                                <li>
                                    <a href="provider-connected-apps.html">Connected Apps</a>
                                </li>
                                <li>
                                    <a href="verification.html">Profile Verification</a>
                                </li>
                                <li>
                                    <a href="#" data-bs-toggle="modal" data-bs-target="#del-account">Delete Account</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="index-2.html"><i  className="feather-log-out"></i> <span>Logout</span></a>
                        </li>
                    </ul>
                    <div  className="menu-bottom">
                        <div  className="menu-user">
                            <div  className="menu-user-img avatar-online">
                                <Image width={100} height={100}  src="/assets/img/profiles/avatar-02.jpg" alt="user"/>
                            </div>
                            <div  className="menu-user-info">
                                <h6>John Smith</h6>
                                <p><a href="https://truelysell.dreamstechnologies.com/cdn-cgi/l/email-protection"
                                         className="__cf_email__"
                                        data-cfemail="08626760667b65617c60486d70696578646d266b6765">[email&#160;protected]</a>
                                </p>
                            </div>
                        </div>
                        <a href="#"  className="select-set"><i  className="feather-settings"></i></a>
                        <div  className="dropdown-menu user-drop" id="dropboxes">
                            <div  className="menu-user">
                                <div  className="menu-user-img avatar-online">
                                    <Image width={100} height={100}  src="/assets/img/profiles/avatar-02.jpg" alt="user"/>
                                </div>
                                <div  className="menu-user-info">
                                    <h6>John Smith</h6>
                                    <p>Active</p>
                                </div>
                            </div>
                            <div  className="set-user">
                                <p>Set as Away</p>
                                <div  className="status-toggle">
                                    <input type="checkbox" id="active-user"  className="check"/>
                                    <label htmlFor="active-user"  className="checktoggle">checkbox</label>
                                </div>
                            </div>
                            <ul  className="set-menu">
                                <li>
                                    <a href="provider-security-settings.html">
                                        <i  className="feather-settings me-2"></i> Settings
                                    </a>
                                </li>
                                <li>
                                    <a href="provider-profile-settings.html">
                                        <i  className="feather-user me-2"></i> Your Account
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        <i  className="feather-check-circle me-2"></i> Identity Verification
                                    </a>
                                </li>
                            </ul>
                            <ul  className="help-menu">
                                <li>
                                    <a href="#">
                                        Help Center
                                    </a>
                                </li>
                                <li>
                                    <a href="terms-condition.html">
                                        Terms of Condition
                                    </a>
                                </li>
                                <li>
                                    <a href="privacy-policy.html">
                                        Privacy Policy
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div  className="dashboard-wrapper">
            <div  className="content container-fluid">
            {componentToRender}


            </div>
        </div>

   



    </Layout>
  )
}

// export default Dashboard


const AuthDashboardProvider = () => {
    return (
        <Provider store={store}>
            <Dashboard />
        </Provider>
    );
};
export default AuthDashboardProvider
