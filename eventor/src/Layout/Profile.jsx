import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const Profile = () => {
    const { user } = useContext(AuthContext);
    const {displayName, photoURL, email, phoneNumber, emailVerified, metadata} = user;
    return (
        <section className="bg-gray-800 overflow-hidden shadow rounded-lg border border-gray-500 max-w-md mx-auto mt-14 mb-10">
            <Helmet>
                <title>Eventor | Profile</title>
            </Helmet>
            <div className="px-4 py-5 sm:px-6">
                <div className="overflow-hidden flex items-center justify-center mb-5">
                    {
                        photoURL ? <img src={photoURL} 
                        alt="user profile image" className="rounded-full"/>
                        : <FaUserCircle className="text-7xl mr-2"></FaUserCircle>
                    }
                    
                </div>
                <h3 className="text-lg leading-6 font-medium text-gray-300">
                    User Profile
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-400">
                    This is some information about the user.
                </p>
            </div>
            <div className="border-t border-gray-500 px-4 py-5 sm:p-0">
                <dl className="sm:divide-y sm:divide-gray-500">
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-400">
                            Full name
                        </dt>
                        <dd className="mt-1 text-sm text-gray-300 sm:mt-0 sm:col-span-2 font-semibold">
                            {displayName}
                        </dd>
                    </div>
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-400">
                            Email address
                        </dt>
                        <dd className="mt-1 text-sm text-gray-300 sm:mt-0 sm:col-span-2 font-semibold">
                            {email || "Not Provided"}
                        </dd>
                    </div>
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-400">
                            Phone number
                        </dt>
                        <dd className="mt-1 text-sm text-gray-300 sm:mt-0 sm:col-span-2 font-semibold">
                            {phoneNumber || "Not Provided"}
                        </dd>
                    </div>
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-400">
                            Verification
                        </dt>
                        <dd className="mt-1 text-sm text-gray-300 sm:mt-0 sm:col-span-2 font-semibold">
                            {emailVerified ? "Yes, Verified" : "Not Verified"}
                        </dd>
                    </div>
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-400">
                            Registered In
                        </dt>
                        <dd className="mt-1 text-sm text-gray-300 sm:mt-0 sm:col-span-2 font-semibold">
                            {metadata.creationTime || "Not Available"}
                        </dd>
                    </div>
                </dl>
            </div>
        </section>
    );
};

export default Profile;