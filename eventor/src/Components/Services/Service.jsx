import { FaArrowRight } from "react-icons/fa6";
import PropTypes from 'prop-types';
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { GiGlassCelebration } from "react-icons/gi";


const Service = ({ service }) => {
    const { id, price, event_category, event_title, event_description, event_image } = service;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleContinueReading = () => {
        if (user) {
            // If the user is logged in, navigate to the desired page
            navigate(`/servicedetails/${id}`);
        } else {
            // If the user is not logged in, show the modal with login route
            document.getElementById('my_modal_2').showModal();
        }
    };

    return (
        <div className="overflow-hidden bg-[#1F2937] rounded shadow" data-aos="zoom-in" data-aos-duration="3000">
            <div className="p-5 flex flex-col h-full">
                <div className="relative">
                    <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                        <img className="object-cover w-full h-full" src={event_image} alt="" />
                    </a>

                    <div className="absolute top-4 left-4">
                        <span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-gray-300 rounded-full opacity-90"> {event_category} </span>
                    </div>
                </div>
                <p className="block mt-6 text-sm font-semibold tracking-widest text-gray-400"> ${price}, Only </p>
                <p className="mt-5 text-2xl font-semibold text-gray-200 flex-1"> {event_title} </p>
                <p className="mt-4 text-base text-gray-400">
                    {event_description}
                </p>
                <button onClick={handleContinueReading}
                    className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-yellow-400 transition-all duration-200">
                    <span className="pr-1 hover:pr-2 transition-all duration-300">Continue Reading</span>
                    <FaArrowRight className=""></FaArrowRight>
                </button>
            </div>

            {/* Modal for show login route in case user logged out */}
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box border-2 border-yellow-400">
                    <p className="btn btn-ghost text-7xl logo"><GiGlassCelebration className="text-9xl text-yellow-400" />Eventor</p>
                    <h3 className="font-bold text-5xl text-yellow-400 my-5">Oops!</h3>
                    <p className="py-4 my-5">Seems like you logged out or you don&apos;t have an account.</p>
                    <div className="flex justify-center gap-4 my-5">
                        <Link to="/login" className="btn text-yellow-400">Login</Link>
                        <Link to="/register" className="btn bg-yellow-500 text-black hidden md:flex">Register</Link>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>

    );
};

Service.propTypes = {
    service: PropTypes.object
};
export default Service;