import { useEffect, useState } from "react";
import Course from "../Course/Course";
import '../../../src/App.css'
import PropTypes from 'prop-types';

const AllCourses = ({handleSelected}) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])
    return (
        <div className="grid-responsive justify-center gap-5 flex-1">
            {
                courses.map(course => <Course 
                    key={course.id}
                    course={course}
                    handleSelected={handleSelected}
                    ></Course>)
            }
        </div>
    );
};

AllCourses.propTypes = {
    handleSelected: PropTypes.func.isRequired
}

export default AllCourses;