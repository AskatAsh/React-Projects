import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Donation = ({ donated }) => {
    const { id, img_sqr, title, category_name, category_bg, card_bg, text_color, price } = donated;
    return (
        <div className="flex flex-col md:flex-row gap-6 rounded-lg overflow-hidden items-center mx-5 md:mx-0 pt-10 pb-5 md:pb-0 md:pt-0" style={{ backgroundColor: `${card_bg}` }}>
            <div>
                <img src={img_sqr} alt={`image of ${title}`} className='rounded-lg md:rounded-none max-h-[240px]' />
            </div>
            <div className='py-6'>
                <div className='mb-2 text-center md:text-left'>
                    <span className='px-3 py-1 rounded-md font-normal text-sm'
                        style={{ backgroundColor: `${category_bg}`, color: `${text_color}` }}>{category_name}
                    </span>
                </div>
                <h2 style={{ color: `${text_color}` }} className='mb-2 font-semibold text-xl text-center md:text-left'>{title}</h2>
                <p style={{ color: `${text_color}` }} className='font-semibold mb-2 text-center md:text-left'>$<span>{price}.00</span></p>
                <div className='text-center md:text-left'>
                    <Link to={`/details/${id}`}>
                        <button style={{ backgroundColor: `${text_color}` }} className="btn text-white">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

Donation.propTypes = {
    donated: PropTypes.object
};
export default Donation;