import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";


const Register = () => {
    const { createUser } = useContext(AuthContext);
    // console.log(createUser);

    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);


    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        setErrorMessage('');
        setSuccess('');

        if (password.length < 6) {
            setErrorMessage("Password must contain at least 6 characters.");
            return;
        }
        else if (!/(?=.*[A-Z])(?=.*[^a-zA-Z0-9_]).*/.test(password)) {
            setErrorMessage("Password must contain at least an uppercase letter and a special character.");
            return;
        }

        // using function passed from context which returns firebase create new user
        createUser(email, password)
            .then(result => {
                console.log(result);
                e.target.reset(); // resets the input fields
                updateProfile(result.user, {
                    displayName: name
                }).then(() => {
                    console.log("Username verified");
                }).catch(error => {
                    console.log(error);
                })
                toast("Registered Successfully");
                setTimeout(() => {
                    window.location.reload();
                }, 2040);
            }).catch(error => {
                console.error(error);
                setErrorMessage(error.message);
            })
    }
    return (
        <div>
            <Helmet>
                <title>Eventor | Register</title>
            </Helmet>
            <div className="hero py-14">
                <div className="hero-content flex-col max-w-md w-full">
                    <div className="text-center flex flex-col gap-3">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p>What are you waiting for? register now and get the best event of your life.</p>
                    </div>
                    <div className="card w-full shadow-2xl bg-[#1F2937]">
                        <form className="card-body" onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Username</span>
                                </label>
                                <input name="name" type="text" placeholder="your name" className="input input-bordered bg-gray-900" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered bg-gray-900" required />
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
                                <button className="btn bg-yellow-600 opacity-90 text-black">Register</button>
                            </div>
                            <p className="text-xs py-2">Already have an account? <Link to="/login" className="text-primary-300 underline underline-offset-2">Login Here</Link></p>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer autoClose={2000}></ToastContainer>
        </div>
    );
};

export default Register;