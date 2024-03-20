import React, { useState, useEffect } from 'react'
import Layout from '@/component/Layout'
import Image from 'next/image'
import Link from 'next/link';
import client from '../../../sanityConfig';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import { useRouter } from 'next/router';

function Signup() {
    // const user = useSelector((state: RootState) => state.auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSignup = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (!name || !email || !password || !phoneNumber) {
            alert("Please fill in all fields");
            return;
        }
        const newUser = {
            username: name,
            email: email,
            password: password,
            phonenumber: phoneNumber
        };
        const existingUserWithEmail = await client.fetch(`*[_type == 'user' && email == $email]`, { email });
        const existingUserWithUsername = await client.fetch(`*[_type == 'user' && username == $username]`, { username: name });
        const existingUserWithPhoneNumber = await client.fetch(`*[_type == 'user' && phonenumber == $phoneNumber]`, { phoneNumber });

        if (existingUserWithEmail.length > 0) {
            alert("Email already exists. Please use a different email.");
            return;
        }
        else if (existingUserWithUsername.length > 0) {
            alert("Username already exists. Please use a different username.");
            return;
        } else if (existingUserWithPhoneNumber.length > 0) {
            alert("Phone number already exists. Please use a different phone number.");
            return;
        }
        else {
            try {
                await client.create({
                    _type: 'user',
                    ...newUser
                });
                alert("User Created Successfully");
                router.push('/users/signin');
            } catch (error) {
                console.error('Error creating user:', error);
                throw new Error('Failed to create user');
            }
        }
    };

    return (
        <Layout>
            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-6 mx-auto">
                            <div className="login-wrap">
                                <div className="login-header">
                                    <h3>User Signup</h3>
                                </div>

                                <form onSubmit={handleSignup}>
                                    <div className="form-group">
                                        <label className="col-form-label">Name</label>
                                        <input type="text" className="form-control" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label className="col-form-label">Email</label>
                                        <input type="email" className="form-control" placeholder="johndoe@example.com" onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <label className="col-form-label">Phone Number</label>
                                            <div className="form-group">
                                                <input type="text" className="form-control form-control-lg group_formcontrol" id="phone" name="phone" placeholder="(256) 789-6253" onChange={(e) => setPhoneNumber(e.target.value)} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-form-label d-block">Password<span className="brief-bio float-end">Must
                                            be 8 Characters at Least</span></label>
                                        <div className="pass-group">
                                            <input type="password" className="form-control pass-input" placeholder="*************" onChange={(e) => setPassword(e.target.value)} />
                                            <span className="toggle-password feather-eye-off"></span>
                                        </div>
                                    </div>
                                    <button className="btn btn-primary w-100 login-btn" type="submit">Signup</button>
                                    <div className="login-or">
                                        <span className="or-line"></span>
                                        <span className="span-or">Or, log in with your email</span>
                                    </div>
                                    <div className="social-login">
                                        <a href="#" className="btn btn-google w-100"><Image width={30} height={30} src="/assets/img/icons/google.svg"
                                            className="me-2" alt="img" />Log in with Google</a>
                                        <a href="#" className="btn btn-google w-100"><Image width={30} height={30} src="/assets/img/icons/fb.svg"
                                            className="me-2" alt="img" />Log in with Facebook</a>
                                    </div>
                                    <p className="no-acc">Already have an account ? <Link href="/users/signin"> Sign In</Link></p>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

const SignupWithProvider = () => {
    return (
        <Provider store={store}>
            <Signup />
        </Provider>
    );
};
export default SignupWithProvider


// export default Signup
