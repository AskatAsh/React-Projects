import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
// import { ToastContainer, toast } from "react-toastify";
import { GiGlassCelebration } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import '../../App.css';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log("Successfully signed out");
                // toast("You have successfully logged out");
            }).catch(error => console.error(error));
    }

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About Us</NavLink></li>
        <li><NavLink to="/contact">Contact Us</NavLink></li>
        {
            user && <>
                <li><NavLink to="/eventprogress">Event Progress</NavLink></li>
                <li><NavLink to="/profile">Profile</NavLink></li>
            </>
        }

    </>
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown z-50">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden px-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                        <li><Link to="/register" className="py-2 bg-gray-900 flex items-center justify-center hover:text-yellow-400">Register</Link></li>
                        {
                            user && <li onClick={handleLogOut}
                                className="btn btn-primary">Log Out</li>
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl logo"><GiGlassCelebration className="text-5xl text-yellow-400" />Eventor</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <div>
                    {
                        user ? <div className="flex items-center">
                            {user.photoURL ? <div className="w-[40px] rounded-full overflow-hidden mr-1">
                                <img src={user.photoURL} alt="" />
                            </div> : <FaUserCircle className="text-3xl mr-2"></FaUserCircle>}


                            <span className="mr-3">{ user.displayName }</span>
                            <button onClick={handleLogOut}
                                className="btn hidden md:flex text-yellow-500">Log Out</button>
                        </div>
                            : <Link to='/login'>
                                <button className="btn text-yellow-500">Login</button>
                            </Link>
                    }
                </div>
                <Link to="/register" className="btn bg-yellow-500 text-black hidden md:flex">Register</Link>
            </div>
            {/* <ToastContainer></ToastContainer> */}
        </div>
    );
};

export default Navbar;