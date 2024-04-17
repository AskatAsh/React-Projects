import PropTypes from 'prop-types';
import SelectedCourses from './SelectedCourses';
import { useEffect, useState } from 'react';

const CourseList = ({ selected }) => {
    const [allowSelected, setAllowSelected] = useState([]);
    const [time, setTime] = useState(0);
    let creditHour = selected.reduce((prev, next) => prev + parseInt(next.duration), 0);

    useEffect(() => {
        if (creditHour <= 20) {
            setAllowSelected(selected);
            setTime(creditHour);
        }
        else {
            alert("Total Credit hour cannot exceed 20 hour!");
        }
    }, [creditHour, selected])

    let remaining = 20 - time;

    const totalPrice = allowSelected.reduce((prev, next) => prev + parseInt(Math.ceil(next.price)), 0);
    return (
        <div className="bg-white rounded-xl w-[312px] p-5">
            <h3 className="text-[#2F80ED] font-bold">Credit Hour Remaining {remaining} hr</h3>
            <hr className="my-3" />
            <h3 className="font-bold text-xl">Course Name</h3>

            <ol className="my-3 list-decimal pl-5">
                {/* <li>{selected.length}</li> */}
                {
                    allowSelected.map((selectedCourse, idx) => <SelectedCourses key={idx} selectedCourse={selectedCourse}></SelectedCourses>)
                }
            </ol>


            <hr className="my-3" />
            <h4 className="font-medium">Total Credit Hour : {time} hr</h4>
            <hr className="my-3" />
            <h4 className="font-medium">Total Price : {totalPrice} USD</h4>
        </div>
    );
};

CourseList.propTypes = {
    selected: PropTypes.array
}

export default CourseList;