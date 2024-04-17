import { useEffect, useState } from "react";
import Category from "../Category/Category";
import { sumofTotalDonations } from "../../Utilities/SumOfDonations";
import PropTypes from 'prop-types';


const Categories = ({searchValue}) => {
    const [categories, setCategories] = useState([]);
    const [showData, setShowData] = useState([]);

    useEffect(() => {
        fetch('donation.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    useEffect(() => {
        const searchData = categories.filter(data => data.category_name.toLowerCase() == searchValue);
        // console.log(searchData)
        if(searchData.length){
            setShowData(searchData)
        } else {
            setShowData(categories);
        }
    }, [categories, searchValue])

    sumofTotalDonations(categories);

    return (
        <div className="max-w-[1320px] mx-auto px-5 md:px-0 my-28">
            <div className="grid justify-center gap-5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 312px))' }}>
                {
                    showData.map(category => <Category key={category.id} category={category}></Category>)
                }
            </div>
        </div>
    );
};

Categories.propTypes = {
    searchValue: PropTypes.string
};

export default Categories;