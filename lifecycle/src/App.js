import logo from './logo.svg';
import './App.css';
import React from 'react';
import Item from './Components/Item/Item';
import Item2 from './Components/Item2/Item2';
import Image from './Components/Image/Image';
import DropDown from './Components/'

const crs = {course:"course" , description:"hello"};
const course_list = [
  { course: "Mern", description: "This is mern class" },
  { course: "Python", description: "This is python class" }
]

class App extends React.Component {

  render() {
    return (
      <div className="App">
       {/* <Item crs={crs}/> */}
       <p>
          {
            course_list.map((item) => {
              return (
                <Item crs={item}/>
                // <p>{item.course}</p>
              )
            })
          }
          </p>

        <input type='text' placeholder='Course' id='txt_crs' /><br /><br />
        <input type='text' placeholder='Description' id='txt_desc' /><br />
        <input type='button' onClick={() => {

          var course_name = document.getElementById('txt_crs');
          var course_description = document.getElementById('txt_desc');

          // console.log(course_name.value)
          // console.log(course_description.value)
          var course = { course: course_name.value, description: course_description.value };
          course_list.push(course);
          console.log(course_list);

          this.setState(course_list);

        }} id='txt_btn' value="Enter" />
       <Item2 />
       <Image />
       {/* <Employee /> */}
       <DropDown />
      </div>
     
    );
  }
}

export default App;
