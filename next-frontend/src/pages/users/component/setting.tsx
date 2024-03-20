import React from 'react'
import Image from 'next/image'

function Setting() {
  return (
    <div className="col-lg-9">
    <div className="widget-title">
        <h4>Account Settings</h4>
    </div>
    <h6 className="user-title">Profile Picture</h6>
    <div className="pro-picture">
        <div className="pro-img">
            <Image width={50} height={50}  src="/assets/img/profiles/avatar-02.jpg" alt="user"/>
        </div>
        <div className="pro-info">
            <div className="d-flex">
                <div className="img-upload">
                    <i className="feather-upload-cloud me-1"></i>Upload
                    <input type="file"/>
                </div>
                <a href="#" className="btn btn-remove">Remove</a>
            </div>
            <p>*image size should be at least 320px big,and less then 500kb. Allowed files .png and
                .jpg.</p>
        </div>
    </div>
    <h6 className="user-title">General Information</h6>
    <div className="general-info">
        <div className="row">
            <div className="col-md-6">
                <div className="form-group">
                    <label className="col-form-label">Name <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" placeholder="Enter Your Name"/>
                </div>
            </div>
            <div className="col-md-6">
                <div className="form-group">
                    <label className="col-form-label">User Name</label>
                    <input type="text" className="form-control" placeholder="Enter Your User Name"/>
                </div>
            </div>
            <div className="col-md-6">
                <div className="form-group">
                    <label className="col-form-label">Email <span className="text-danger">*</span></label>
                    <input type="email" className="form-control" placeholder="Enter Email Address"/>
                </div>
            </div>
            <div className="col-md-6">
                <div className="form-group">
                    <label className="col-form-label">Mobile Number <span
                            className="text-danger">*</span></label>
                    <input type="text" className="form-control" placeholder="Enter Mobile Number"/>
                </div>
            </div>
            <div className="col-md-6">
                <div className="form-group">
                    <label className="col-form-label">Gender</label>
                    <select className="select">
                        <option>Select Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>
            </div>
            <div className="col-md-6">
                <div className="form-group">
                    <label className="col-form-label">Date of birth</label>
                    <div className="form-icon">
                        <input type="text" className="form-control datetimepicker"
                            placeholder="DD/MM/YYYY"/>
                        <span className="cus-icon"><i className="feather-calendar"></i></span>
                    </div>
                </div>
            </div>
            <div className="col-md-12">
                <div className="form-group">
                    <label className="col-form-label d-block">Your Bio <span
                            className="brief-bio float-end">Brief description for your profile. URLs are
                            hyperlinked.</span></label>
                    <textarea className="form-control"
                        placeholder="Add a Short Bio....."></textarea>
                </div>
            </div>
        </div>
    </div>
    <h6 className="user-title">Address </h6>
    <div className="row">
        <div className="col-md-12">
            <div className="form-group">
                <label className="col-form-label">Address</label>
                <input type="text" className="form-control" placeholder="Enter Your Address"/>
            </div>
        </div>
        <div className="col-md-6">
            <div className="form-group">
                <label className="col-form-label">Country</label>
                <input type="text" className="form-control" placeholder="Enter Your Country"/>
            </div>
        </div>
        <div className="col-md-6">
            <div className="form-group">
                <label className="col-form-label">State</label>
                <input type="email" className="form-control" placeholder="Enter Your State"/>
            </div>
        </div>
        <div className="col-md-6">
            <div className="form-group">
                <label className="col-form-label">City</label>
                <input type="text" className="form-control" placeholder="Enter Your City"/>
            </div>
        </div>
        <div className="col-md-6">
            <div className="form-group">
                <label className="col-form-label">Postal Code</label>
                <input type="text" className="form-control" placeholder="Enter Your Postal Code"/>
            </div>
        </div>
        <div className="col-md-6">
            <div className="form-group">
                <label className="col-form-label">Currency Code</label>
                <select className="select">
                    <option>Choose Currency</option>
                    <option>Eur</option>
                    <option>Aud</option>
                </select>
            </div>
        </div>
        <div className="col-md-6">
            <div className="form-group">
                <label className="col-form-label">Language</label>
                <input className="input-tags form-control" type="text" data-role="tagsinput"
                    name="specialist" value="English,French" id="specialist"/>
            </div>
        </div>
    </div>
    <div className="acc-submit">
        <a href="#" className="btn btn-secondary">Cancel</a>
        <a href="#" className="btn btn-primary">Save Changes</a>
    </div>
</div>
  )
}

export default Setting
