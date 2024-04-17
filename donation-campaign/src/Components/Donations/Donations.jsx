import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../../Utilities/LocalStorage";
import Donation from "../Donation/Donation";


const Donations = () => {
    const [appliedDonations, setAppliedDonations] = useState([]);
    const [seeAll, setSeeAll] = useState(4);

    const donations = useLoaderData();
    useEffect(() => {
        const storedDonatinIds = getStoredDonation();
        if (donations.length) {
            const donationsApplied = donations.filter(donation => storedDonatinIds.includes(donation.id));

            setAppliedDonations(donationsApplied);
        }
    }, [donations])

    let lengthOfDonations = appliedDonations.length;

    if (!lengthOfDonations) {
        return (
            <div className="flex justify-center my-14 md:my-32 px-10">
                <h2 className=" text-center text-3xl md:text-5xl font-bold max-w-2xl leading-relaxed md:leading-relaxed">
                    <span className="text-orange-500">SORRY!!!</span> <br /> No Donations have been made Yet!!!</h2>
            </div>
        )
    }


    const handleSeeAll = () => {
        setSeeAll(lengthOfDonations);
    }

    return (
        <div className="max-w-[1320px] mx-auto mt-20">
            {/* <h2>Total Donations: {appliedDonations.length}</h2> */}

            <div className="grid gap-6 justify-center px-7 md:px-0" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 648px)' }}>
                {
                    appliedDonations.slice(0, seeAll).map(donation => <Donation key={donation.id} donated={donation}></Donation>)
                }
            </div>
            <div className="flex justify-center my-10">
                <button onClick={handleSeeAll}
                    className={`btn bg-[#009444] text-white capitalize w-[110px] h-[48px]
                ${lengthOfDonations <= seeAll && 'hidden'}`}>See All</button>
            </div>

        </div>
    );
};

export default Donations;