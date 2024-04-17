import { useContext, useRef, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { FaGoogle } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import { Helmet } from "react-helmet-async";


const Login = () => {
    const { loginUser, googleSignIn } = useContext(AuthContext);

    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState('');
    const emailRef = useRef(null);
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        setErrorMessage('');
        setSuccess('');

        if (!/^\w+@\w+\.\w+$/.test(email)) {
            setErrorMessage("Please enter a valid email");
            return;
        }
        // use function from context to send login
        loginUser(email, password)
            .then(result => {
                if (result.user) {
                    console.log(result);
                    e.target.reset(); // resets the input fields
                    toast('Login Successful');
                }
                else {
                    setErrorMessage('Please verify your email address')
                }

            })
            .catch(error => {
                setErrorMessage(error.message);
                console.error(error);
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                toast('Login Successful');
                console.log(result);
            }).catch(error => {
                console.error(error);
            })
    }
    return (
        <div>
            <Helmet>
                <title>Eventor | Login</title>
            </Helmet>
            <div className="hero py-14">
                <div className="hero-content flex-col text-cente">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6 max-w-md">Login and browse our website to know more and track your events progress.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#1F2937]">
                        <form className="card-body" onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" ref={emailRef}
                                    placeholder="email" className="input input-bordered bg-gray-900" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative flex items-center">
                                    <input type={showPassword ? "text" : "password"}
                                        name="password" placeholder="password"
                                        className="input input-bordered w-full bg-gray-900" required />
                                    <span className="absolute right-2" onClick={handleShowPassword}>
                                        {
                                            showPassword ? <FaRegEye></FaRegEye> : <FaRegEyeSlash></FaRegEyeSlash>
                                        }
                                    </span>
                                </div>
                            </div>
                            <div>
                                {
                                    errorMessage ? <span className="text-xs text-red-400">{errorMessage}</span>
                                        : <span className="text-xs text-green-400">{success}</span>
                                }
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-yellow-600 opacity-90 text-black">Login</button>
                            </div>
                            <p className="text-xs pt-2">Don&apos;t have an account? <Link to="/register" className="text-primary-300 underline underline-offset-2">Register Here</Link></p>
                            <div className="divider">OR</div>
                            <p className="btn border border-primary bg-gray-900" onClick={handleGoogleSignIn}><FaGoogle />
                                Sign in with Google</p>
                        </form>

                    </div>
                </div>
            </div>
            <ToastContainer autoClose={2000}></ToastContainer>
        </div>
    );
};

export default Login;
