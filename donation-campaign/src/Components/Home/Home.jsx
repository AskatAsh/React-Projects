import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import '../../App.css'
import { useState } from "react";

const Home = () => {
    const [searchValue, setSearchValue] = useState('');

    const searchHandler = (value) => {
        setSearchValue(value);
    }
    return (
        <div>
            <div className='bg-image'>
                <div className="overlay"></div>
                <Banner searchHandler={searchHandler}></Banner>
            </div>
            <Categories searchValue={searchValue}></Categories>
        </div>
    );
};

export default Home;