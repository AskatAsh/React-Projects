import { NavLink } from "react-router-dom";
import logo from '../../assets/images/Logo.png'
import './Navbar.css'
import { useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    // console.log(location.pathname === '/');
    
    const lists = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/donation">Donations</NavLink></li>
        <li><NavLink to="/statistics">Statistics</NavLink></li>
    </>

    return (
        <div className={`max-w-[1320px] mx-auto px-7 xl:px-0 pt-6 ${location.pathname === '/' ? 'position' : ''}`}>
            <div className="navbar">
                <div className="navbar-start flex-grow justify-between lg:justify-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden pl-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {lists}
                        </ul>
                    </div>
                    <div>
                        <NavLink to="/"><img src={logo} alt="" className="max-w-[200px]"/></NavLink>
                    </div>
                </div>

                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-6">
                        {lists}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;