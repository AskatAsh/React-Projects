import PropTypes from 'prop-types';
const SelectedCourses = ({selectedCourse}) => {
    // console.log(selectedCourse.id);
    return (
            <li>{selectedCourse.title}</li>
    );
};

SelectedCourses.propTypes = {
    selectedCourse: PropTypes.object
}
export default SelectedCourses;