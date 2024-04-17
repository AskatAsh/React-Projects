import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center mt-28 md:mt-40">
            <Helmet>
                <title>Eventor | Error</title>
            </Helmet>
            <div className="relative flex items-center justify-center">
                <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
                <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
                    Page Not Found
                </div>
            </div>

            <div className="text-xl md:text-3xl font-semibold my-4">
                Oops..! This page has gone missing.
            </div>
            <div className="text-lg mb-8">
                You may have mistyped the address or the page may have moved.
            </div>
            <button className="mt-5">
                <a
                    className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring"
                >
                    <span
                        className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"
                    ></span>

                    <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
                        <Link to="/">Go Home</Link>
                    </span>
                </a>
            </button>
        </div>
    );
};

export default ErrorPage;