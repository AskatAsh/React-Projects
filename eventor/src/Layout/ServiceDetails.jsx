import { Helmet } from "react-helmet-async";
import { Link, useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
    const services = useLoaderData();
    const idx = useParams();
    // console.log(idx.id);
    const serviceDetails = services.find(service => service.id == idx.id);
    // console.log(serviceDetails);

    const { price, event_category, event_title, event_description, event_image } = serviceDetails;

    return (
        <section className="py-10 sm:py-16 lg:py-24">
            <Helmet>
                <title>Eventor | Service Details</title>
            </Helmet>
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                    <div>
                        <p className="text-base font-semibold tracking-wider text-yellow-500 uppercase">{event_category}</p>
                        <h1 className="mt-4 text-4xl font-bold text-gray-300 lg:mt-8 sm:text-6xl xl:text-7xl">{event_title}</h1>
                        <p className="mt-4 text-base text-gray-400 lg:mt-8">{event_description}</p>
                        <p className="mt-5 text-gray-300 text-2xl">How much for this event? <span className="text-yellow-300 font-bold">Only {price}$</span></p>
                        <Link to="/contact" className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400" role="button">
                            Want us to manage this event?
                            <svg className="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </Link>
                    </div>

                    <div>
                        <img className="w-full" src={event_image} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceDetails;