import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import client from '../../../../sanityConfig';

function Setting(props: any) {
    const [userData, setUserData] = useState<any>(null);

    // State hooks for form fields
    const [name, setName] = useState('');
    const [profilePicture, setProfilePicture] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [gender, setGender] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [bio, setBio] = useState('');
    const [address, setCountrysetAddress] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    useEffect(() => {
        async function fetchUserData() {
            try {
                const query = `*[_type == "user" && username == "${props.name}"]{
                    ...,
                    "profilePictureUrl": profilepicture.asset->url // Fetching the profilePicture URL

                }`;
                const userData = await client.fetch(query);
                setUserData(userData[0]);
                setName(userData[0].username)
                setEmail(userData[0].email)
                setPhoneNumber(userData[0].phonenumber)
                setGender(userData[0].gender)
                setDateOfBirth(userData[0].dateOfBirth)
                setBio(userData[0].bio)
                setCountrysetAddress(userData[0].address)
                setCountry(userData[0].country)
                setState(userData[0].state)
                setCity(userData[0].city)
                setPostalCode(userData[0].postalCode)
                setProfilePicture(userData[0].profilePictureUrl)
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        }

        fetchUserData();
    }, [props.name]);
    // console.log(profilePicture)
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await client
                .patch(userData._id)
                .set({
                    username: name,
                    email,
                    phonenumber: phoneNumber,
                    gender,
                    dateOfBirth,
                    bio,
                    address,
                    country,
                    state,
                    city,
                    postalCode,
                })
                .commit();

            console.log('User data updated successfully!');
            alert("Your information is updated")
        } catch (error) {
            console.error('Error updating user data:', error);
        }
    };
    return (
        <div className="col-lg-9">
            <div className="widget-title">
                <h4>Account Settings</h4>
            </div>
            <h6 className="user-title">Profile Picture</h6>
            <div className="pro-picture">
                <div className="pro-img">
                    <Image width={50} height={50} src={profilePicture} alt="user" />
                </div>
                <div className="pro-info">
                    <div className="d-flex">
                        <div className="img-upload">
                            <i className="feather-upload-cloud me-1"></i>Upload
                            <input type='file' />
                        </div>
                        <a href="#" className="btn btn-remove">Remove</a>
                    </div>
                    <p>*image size should be at least 320px big,and less then 500kb. Allowed files .png and
                        .jpg.</p>
                </div>
            </div>
            <h6 className="user-title">General Information</h6>
            <form onSubmit={handleSubmit}>
                <div className="general-info">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="col-form-label">Name <span className="text-danger">*</span></label>
                                <input value={name} onChange={(e) => { setName(e.target.value) }} type="text" className="form-control" placeholder="Enter Your Name" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="col-form-label">User Name</label>
                                <input type="text" className="form-control" placeholder="Enter Your User Name" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="col-form-label">Email <span className="text-danger">*</span></label>
                                <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" className="form-control" placeholder="Enter Email Address" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="col-form-label">Mobile Number <span
                                    className="text-danger">*</span></label>
                                <input value={phoneNumber} onChange={(e) => { setPhoneNumber(e.target.value) }} type="text" className="form-control" placeholder="Enter Mobile Number" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="col-form-label">Gender</label>
                                <select className="select" value={gender} onChange={e => { setGender(e.target.value) }}>
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
                                    <input value={dateOfBirth} onChange={(e) => { setDateOfBirth(e.target.value) }} type="text" className="form-control datetimepicker"
                                        placeholder="DD/MM/YYYY" />
                                    <span className="cus-icon"><i className="feather-calendar"></i></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label className="col-form-label d-block">Your Bio <span
                                    className="brief-bio float-end"></span></label>
                                <textarea value={bio} onChange={(e) => { setBio(e.target.value) }} className="form-control"
                                    placeholder="Add a Short Bio....."></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label className="col-form-label">Address</label>
                            <input value={address} onChange={(e) => { setCountrysetAddress(e.target.value) }} type="text" className="form-control" placeholder="Enter Your Address" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="col-form-label">Country</label>
                            <input value={country} onChange={(e) => { setCountry(e.target.value) }} type="text" className="form-control" placeholder="Enter Your Country" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="col-form-label">State</label>
                            <input value={state} onChange={(e) => { setState(e.target.value) }} type="text" className="form-control" placeholder="Enter Your State" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="col-form-label">City</label>
                            <input value={city} onChange={(e) => { setCity(e.target.value) }} type="text" className="form-control" placeholder="Enter Your City" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="col-form-label">Postal Code</label>
                            <input value={postalCode} onChange={(e) => { setPostalCode(e.target.value) }} type="text" className="form-control" placeholder="Enter Your Postal Code" />
                        </div>
                    </div>
                </div>
                <div className="acc-submit">
                    <button className="btn btn-secondary">Cancel</button>
                    <button type='submit' className="btn btn-primary">Save Changes</button>
                </div>
            </form>

        </div>
    )
}

export default Setting
