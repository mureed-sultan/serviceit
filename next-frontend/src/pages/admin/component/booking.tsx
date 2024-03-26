import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import client from '../../../../sanityConfig';
import Image from 'next/image';

interface Order {
  _id: string;
  titleOfWork: string;
  workingDate: string;
  hoursNeeded: string;
  location: string;
  email: string;
  username: string;
  status: string;
}
function Booking() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const orders = await client.fetch(
          `*[_type == "order"]`
        );
        setLoading(false)
        setOrders(orders);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, [])

  const handleStatusUpdate = async (orderId, newStatus) => {
    try {
      // Update the status of the order in the backend
      await client.patch(orderId).set({ status: newStatus }).commit();

      // Update the local state with the updated orders
      const updatedOrders = orders.map(order => {
        if (order._id === orderId) {
          return { ...order, status: newStatus };
        }
        return order;
      });
      setOrders(updatedOrders);

      // Log success message
      alert('Order status updated successfully!');
    } catch (error) {
      alert('Error updating order status:');
    }
  };
  // console.log(orders)
  return (
    <>
      <div className="page-header">
        <div className="row">
          <div className="col-md-4">
            <div className="provider-subtitle">
              <h6>Booking List</h6>
            </div>
          </div>
          <div
            className="col-md-8 d-flex align-items-center justify-content-md-end flex-wrap"
          >
            <div className="review-sort me-2">
              <p>Sort</p>
              <select className="select">
                <option>A -{'>'} Z</option>
                <option>Most Helpful</option>
              </select>
            </div>
            <div className="grid-listview">
              <ul>
                <li>
                  <a href="javascript:void(0);">
                    <i className="feather-filter"></i>
                  </a>
                </li>
                <li>
                  <a href="provider-book-details.html">
                    <i className="feather-calendar"></i>
                  </a>
                </li>
                <li>
                  <a href="provider-services.html">
                    <i className="feather-grid"></i>
                  </a>
                </li>
                <li>
                  <a href="provider-booking.html" className="active">
                    <i className="feather-list"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          {loading ? (
            <p>Loading...</p>
          ) : (
            orders.map((order, index) => (

              <div key={index} className="booking-list">
                <div className="booking-widget">
                  <div className="booking-img">
                    <a href="service-details.html">
                      <Image width={100} height={100}
                        src="/assets/img/services/service-08.jpg"
                        alt="User Image"
                      />
                    </a>
                    <div className="fav-item">
                      <a href="javascript:void(0)" className="fav-icon">
                        <i className="feather-heart"></i>
                      </a>
                    </div>
                  </div>
                  <div className="booking-det-info">
                    <h3>
                      <a>{order.titleOfWork} </a>
                    </h3>
                    <ul className="booking-details">
                      <li>
                        <span className="book-item">Booking Date</span> : {order.workingDate}
                      </li>
                      <li>
                        <span className="book-item">Time</span> : {order.hoursNeeded}
                      </li>
                      <li>
                        <span className="book-item">Location</span> : {order.location}
                      </li>      <li>
                        <span className="book-item">Email</span> : {order.email}
                      </li> <li>
                        <span className="book-item">Username</span> : {order.username}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="booking-action">
                  <select value={order.status} onChange={(e) => handleStatusUpdate(order._id, e.target.value)}>
                    <option value="pending">Pending</option>
                    <option value="inprogress">In Progress</option>
                    <option value="complete">Complete</option>
                  </select>
                  {/* Button to update status */}
                  <button className="btn btn-secondary" onClick={() => handleStatusUpdate(order._id, order.status)}>Update</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>


      <div className="row">
        <div className="col-sm-6">
          <div className="review-entries">
            <span>Show</span>
            <select>
              <option>07</option>
              <option>08</option>
            </select>
            <span>entries</span>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="review-pagination">
            <p>1 - 09 of 09</p>

          </div>
        </div>
      </div>

      <div className="modal fade custom-modal" id="add-review">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content doctor-profile p-0">
            <div
              className="modal-header border-bottom-0 text-strat justify-content-between mb-0 p-4"
            >
              <h5 className="modal-title">Write A Review</h5>
              <button
                type="button"
                className="close-btn"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="feather-x"></i>
              </button>
            </div>
            <div className="modal-body pt-0">
              <form
                action="https://truelysell.dreamstechnologies.com/html/template/provider-booking.html"
              >
                <div className="write-review">
                  <div className="review-add">
                    <div className="rev-img">
                      <Image width={100} height={100}
                        src="/assets/img/services/service-19.jpg"
                        alt="image"
                      />
                    </div>
                    <div className="rev-info">
                      <h6>Computer Services</h6>
                      <p>Newyork, USA</p>
                    </div>
                  </div>
                  <div className="form-group form-info">
                    <label className="col-form-label">Rate The Service</label>
                    <div className="rating rating-select mb-0">
                      <a href="javascript:void(0);"
                      ><i className="fas fa-star"></i
                      ></a>
                      <a href="javascript:void(0);"
                      ><i className="fas fa-star"></i
                      ></a>
                      <a href="javascript:void(0);"
                      ><i className="fas fa-star"></i
                      ></a>
                      <a href="javascript:void(0);"
                      ><i className="fas fa-star"></i
                      ></a>
                      <a href="javascript:void(0);"
                      ><i className="fas fa-star"></i
                      ></a>
                    </div>
                  </div>
                  <div className="form-group form-info">
                    <label className="col-form-label">Write your Review</label>
                    <textarea
                      className="form-control"
                      placeholder="Please write your review"
                    ></textarea>
                  </div>
                  <div className="modal-submit text-end">
                    <button type="submit" className="btn btn-primary">
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Booking;
