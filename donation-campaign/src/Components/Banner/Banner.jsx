import PropTypes from 'prop-types';


const Banner = ({searchHandler}) => {
    const handleSearch = e => {
        e.preventDefault();
        // console.log("Form submitted");
        // console.log(e.target.search.value);
        searchHandler(e.target.search.value);
    }

    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[1280px] w-full flex flex-col items-center gap-10 px-5">
            <h1 className="text-center font-extrabold text-4xl md:text-5xl">I Grow By Helping People In Need</h1>
            <div >
                <form onSubmit={handleSearch} className="border-2 rounded-lg overflow-hidden flex max-w-[400px]">
                    <input name="search" type="text" placeholder="Search here..." className="input input-bordered w-full max-w-xs rounded-none border-none" />
                    <input type="submit" value="Search" className="btn bg-[#FF444A] text-white capitalize" />
                    {/* <submit className="btn bg-[#FF444A] text-white">Search</submit> */}
                </form>
            </div>
        </div>
    );
};

Banner.propTypes = {
    searchHandler: PropTypes.func
};

export default Banner;