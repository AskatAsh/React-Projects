import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";

const EventProgress = () => {
    const services = useLoaderData();

    return (
        <section className="bg-white dark:bg-gray-900 text-left">
            <Helmet>
                <title>Eventor | Event Progress</title>
            </Helmet>
            <div className="container flex items-center justify-center px-6 my-20 mx-auto max-w-lg">
                <div>
                    <p className="text-sm font-medium text-yellow-500">Hi There..!</p>
                    <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">You don&apos;t have any event</h1>
                    <p className="mt-4 text-gray-500 dark:text-gray-400">Please explore our website to learn more and select your event.</p>

                    <div className="flex items-center mt-6 gap-x-3">
                        <Link to="/" className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
                        
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                                </svg>
                                <span>Go Home</span>
                        </Link>


                        <Link to="/contact" className="w-1/2 px-5 py-2 text-sm tracking-wide text-black font-bold transition-colors duration-200 bg-yellow-500 rounded-lg shrink-0 sm:w-auto hover:bg-yellow-600 dark:hover:bg-yellow-500 dark:bg-yellow-600">
                            Get in Touch
                        </Link>
                    </div>

                    <div className="mt-10 space-y-6">
                        <div>
                            <Link to="/about" className="inline-flex items-center text-sm text-yellow-500 gap-x-2 dark:text-yellow-400 hover:underline">
                                <span>About Us</span>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </Link>

                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Dive in to learn all about our Work.</p>
                        </div>

                        <div>
                            <Link to="/" className="inline-flex items-center text-sm text-yellow-500 gap-x-2 dark:text-yellow-400 hover:underline">
                                <span>Our Events</span>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </Link>

                            <ul className="flex flex-wrap items-center justify-center md:justify-start gap-2 mt-4">
                                {
                                    services.map(service => <li key={service.id}
                                        className="p-2 bg-gray-800 border border-gray-500 rounded-full text-sm text-center"
                                    >{service.event_title}</li>)
                                }
                            </ul>
                        </div>

                        <div>
                            <Link to="/contact" className="inline-flex items-center text-sm text-yellow-500 gap-x-2 dark:text-yellow-400 hover:underline">
                                <span>Contact to support</span>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </Link>

                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Our friendly team is here to help.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventProgress;