import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    const { id, img_rec, title, category_name, category_bg, card_bg, text_color } = category;

    
    return (
        <Link to={`/details/${id}`}>
            <div style={{ backgroundColor: `${card_bg}` }} className='rounded-lg'>
                <div>
                    <img src={img_rec} alt={`image of ${title}`} />
                </div>
                <div className='p-4'>
                    <span className='px-3 py-1 rounded-md font-semibold'
                        style={{ backgroundColor: `${category_bg}`, color: `${text_color}` }}>{category_name}</span>
                    <h2 style={{ color: `${text_color}` }} className='mt-2 font-semibold text-xl'>{title}</h2>
                </div>
            </div>
        </Link>
    );
};

Category.propTypes = {
    category: PropTypes.object
};
export default Category;