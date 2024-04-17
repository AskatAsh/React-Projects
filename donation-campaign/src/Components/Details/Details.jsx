import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveAppliedDonation } from '../../Utilities/LocalStorage';
import { sumofYourDonations } from "../../Utilities/SumOfDonations";

const Details = () => {
    const donationDetails = useLoaderData();
    // console.log(donationDetails);
    const { id } = useParams();

    const details = donationDetails.find(donated => donated.id === parseInt(id));
    // const donatedId = details.id;

    const { img_rec, title, text_color, description, price } = details;
    

    const handleDonation = () => {
        // console.log("Donation made...", id);
        sumofYourDonations(price);
        saveAppliedDonation(parseInt(id));
        toast("You have Donated Successfully...!");
    }

    return (
        <div className="max-w-[1320px] mx-auto my-12 md:my-20 px-7">

            <section className="relative">
                <div className="bg-slate-900">
                    <img src={img_rec} alt={`image of ${title}`} className="w-full max-h-[700px]" />
                </div>
                <div className="bg-[#0B0B0B80] w-full bg-opacity-25 absolute bottom-0">
                    <button style={{ backgroundColor: `${text_color}` }} onClick={() => handleDonation(id)}
                        className="btn m-5 md:m-10 text-white capitalize text-sm md:text-xl rounded-md font-medium border-none">Donate ${price}
                    </button>
                </div>

            </section>

            <section className="my-14">
                <h2 className="text-5xl font-bold mb-6">{title}</h2>
                <p className="text-[#0B0B0BB2] leading-8 text-justify">{description}</p>
            </section>

            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Details;