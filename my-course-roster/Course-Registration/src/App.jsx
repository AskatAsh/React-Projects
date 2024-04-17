import { useState } from 'react';
import './App.css'
import AllCourses from './Components/AllCourses/AllCourses'
import CourseList from './Components/CourseList/CourseList'

function App() {
  const [selected, setSelected] = useState([]);
  

  const handleSelected = (course) => {
    // console.log(course.id);
    // const unique = selected.filter(s => s.id != course.id)
    const unique = selected.filter(s => {
      if(s.id != course.id){
        return s;
      }
      else{
        alert("This Course is Already Selected!");
      }
    })
    // console.log(unique);
    const selectedCourses = [...unique, course];
    setSelected(selectedCourses);
    // console.log(selectedCourses);
  }

  return (
    <>

      <h1 className='text-4xl font-bold text-center mb-5'>Course Registration</h1>
      <div className='flex flex-col md:flex-row justify-between items-center md:items-start gap-5'>
        <AllCourses handleSelected={handleSelected}></AllCourses>
        <CourseList selected={selected}></CourseList>
      </div>

    </>
  )
}

export default App
