import React, { useState, useEffect } from 'react'
import Layout from '@/component/Layout'
import Image from 'next/image'
import Link from 'next/link';
import client from '../../../sanityConfig';
import { Provider, useSelector } from 'react-redux';
import store, { RootState } from '@/redux/store';
import { setAuthInfo } from '@/redux/actions/authAction';
import { useAppDispatch } from '@/redux/hooks';
import { useRouter } from 'next/router';

function Signin() {
    const [passType, setPassType] = useState("password")
    const [eyeIconClass, setEyeIconClass] = useState("toggle-password feather-eye-off");
    const [emailOrUsername, setEmailOrUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useAppDispatch()
    const router = useRouter()
    const user = useSelector((state: RootState) => state.auth);
    useEffect(() => {
        if (user.name) {
            router.push('/users/dashboard')
        }
    }, [])
    const togglePassType = () => {
        setPassType(prevPassType => prevPassType === "text" ? "password" : "text");
        setEyeIconClass(prevClass => prevClass.includes("feather-eye-off") ? "toggle-password feather-eye" : "toggle-password feather-eye-off");

    };
    const handleSignin = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        try {
            const userData: any = await client.fetch(`*[_type == 'user' && (email == $emailOrUsername || username == $emailOrUsername)][0]{
                ...,
                "pictureUrl": profilepicture.asset->url,

            }`, { emailOrUsername });

            if (userData) {
                if (userData.password === password) {
                    alert("User logged in successfully!");
                    console.log(userData)
                    dispatch(setAuthInfo(userData.username, userData.email, userData._id, userData.pictureUrl));
                    router.push('/users/dashboard')
                } else {
                    alert("Incorrect password. Please try again.");
                }
            } else {
                alert("User not found. Please check your email/username.");
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
            alert("An error occurred while signing in. Please try again later.");
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
                                    <h3>Login</h3>
                                    <p>Please enter your details</p>
                                </div>

                                <form onSubmit={handleSignin}>
                                    <div className="log-form">
                                        <div className="form-group">
                                            <label className="col-form-label">Email</label>
                                            <input type="text" className="form-control" placeholder="johndoe@example.com" onChange={(e) => { setEmailOrUsername(e.target.value) }} />
                                        </div>
                                        <div className="form-group">
                                            <div className="row">
                                                <div className="col">
                                                    <label className="col-form-label">Password</label>
                                                </div>
                                                <div className="col-auto">
                                                    {/* <a className="forgot-link" href="password-recovery.html">
                                                    Forgot password?
                                                </a> */}
                                                </div>
                                            </div>
                                            <div className="pass-group">
                                                <input type={passType} className="form-control pass-input"
                                                    placeholder="*************" onChange={(e) => { setPassword(e.target.value) }} />
                                                <a onClick={togglePassType} className={eyeIconClass}></a>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <label className="custom_check">
                                                    <input type="checkbox" name="rememberme" className="rememberme" />
                                                    <span className="checkmark"></span>Remember Me
                                                </label>
                                            </div>
                                            <div className="col-6 text-end">
                                                <label className="custom_check">
                                                    <input type="checkbox" name="loginotp" className="loginotp" />
                                                    <span className="checkmark"></span>Login with OTP
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="btn btn-primary w-100 login-btn" type="submit">
                                        Login
                                    </button>
                                    <div className="login-or">
                                        <span className="or-line"></span>
                                        <span className="span-or">OR</span>
                                    </div>
                                    <div className="social-login">
                                        <a href="#" className="btn btn-google w-100"><Image width={30} height={30} src="/assets/img/icons/google.svg"
                                            className="me-2" alt="img" />Login with Google</a>
                                        <a href="#" className="btn btn-google w-100"><Image width={30} height={30} src="/assets/img/icons/fb.svg"
                                            className="me-2" alt="img" />Login with Facebook</a>
                                    </div>
                                    <p className="no-acc">
                                        Don't have an account ?
                                        <Link href="/users/signup">Register</Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

const SigninWithProvider = () => {
    return (
        <Provider store={store}>
            <Signin />
        </Provider>
    );
};
export default SigninWithProvider
