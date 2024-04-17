# Project: Course Registration using React
## Four Unique Feature of this project:

##### The First Feature is -
when a user selects a course by clicking the selected button, the **course title** is shown in the course list sidebar.

###### Challange faced to add this feature -
When the user clicks the selected Button the course title gets added in the course list sidbar section. The challange is that, **if the user clicks the same button multiple times the course ttle should not be added in the list as it already exits.**

##### The Second Feature is -
when a user selects a course by clicking the selected button, the **course credit hour** is added and is shown in the course list sidebar.

###### Challange faced to add this feature -
When the user clicks the selected Button the course credit hour gets added to the previous hour in the course list sidbar section. The challange is that, **if the total credit hour.exceeds 20 than the user cannot add any more course in the course list.**

##### The Third Feature is -
when a user selects a course by clicking the selected button, the **Remaining credit hour** is added to show the user.

###### Challange faced to add this feature -
When the user clicks the selected Button the course credit hour gets added to the previous hour in the course list sidbar section and after substracting the total credit hour from 20 hour the remaining hour is shown on top of course list sidebar. The challange is that, **I had to make sure the remaining hour is not a negative value.**

##### The Fourth Feature is -
The courses cards are design using grid layout and the layout is **responsive for all devices.**

## I have used 4 states in this project

Dillinger uses a number of open source projects to work properly:

- [useState in App.jsx](https://github.com/programming-hero-web-course2/my-course-roster-AskatAsh/blob/main/Course-Registration/src/App.jsx) - Used this state to store selected courses
- [useState in AllCourses.jsx](https://github.com/programming-hero-web-course2/my-course-roster-AskatAsh/blob/main/Course-Registration/src/Components/AllCourses/AllCourses.jsx) - Used this state to store fetched course data
- [usedState in CourseList.jsx](https://github.com/programming-hero-web-course2/my-course-roster-AskatAsh/blob/main/Course-Registration/src/Components/CourseList/CourseList.jsx) - Used two states in this component.


### useState in App.jsx -
This state is used to store the selected courses. There is a button in the [Course.jsx](https://github.com/programming-hero-web-course2/my-course-roster-AskatAsh/blob/main/Course-Registration/src/Components/Course/Course.jsx) component which acts as a trigger to pass selected course data to **handleSelected() function**.

When the button is clicked the function is passed in the **AllCourses.jsx** component. Now in this component the function is again passed now as a prop to the **App.jsx** component.

In the **App.jsx** component the function **handleSelected()** is used which checks if the user selected the same course twice and stores the unique selection to **selected** state using **useState()**.

### useState in AllCourses.jsx -
This state is used to store the fetched json data from **courses.json** file. I used useEffect to fetch the data and **useState()** to store that data in **courses** as an array of objects.

### useState in CourseList.jsx -
I used **Two states** in this component.

First state is used to store **Added credit hour**. I achieved this by using **reduce array method** to add selected courses duration and store the total time in **time**. I got the selected courses array as a prop from **App.jsx** component.

Second state is used to store selected courses that don't exceed 20 hour limit. I achieved this by using **useEffect** and **if-else** condition.
