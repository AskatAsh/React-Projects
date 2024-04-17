import '../../../src/App.css'
import book from '../../assets/icons/book.svg'
import dollar from '../../assets/icons/dollar.svg'
import PropTypes from 'prop-types';

const Course = ({course, handleSelected}) => {
    const {cover_img, title, description, price, duration} = course;
    return (
        <div className="flex flex-col gap-3 bg-white p-4 rounded-xl">
            <div>
                <img src={cover_img} alt="" />
            </div>
            <h2 className='font-semibold'>{title}</h2>
            <p className='text-sm'>{description}</p>
            <div className='flex justify-between items-center'>
                <p className='flex gap-2'><img src={dollar} alt="" /><span>Price: {price}</span></p>
                <p className='flex gap-2'><img src={book} alt="" /><span>Credit: {duration}hr</span></p>
            </div>
            <button onClick={() => handleSelected(course)} className='btn bg-[#2F80ED] text-white rounded-lg py-2 font-semibold active:bg-[#386fb7]'>Select</button>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleSelected: PropTypes.func.isRequired
}

export default Course;