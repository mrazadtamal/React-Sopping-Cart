import React from "react";
import "./Course.css";

const Course = (props) => {
  const { name, instructor, price, image } = props.course;

  return (
    <div className="course">
      <div>
        <img src={image} alt="image" />
      </div>
      <div>
        <h1>name : {name} </h1>
        <h1>instructor : {instructor} </h1>
        <h1>price : {price} </h1>
        <button onClick={() => props.handelButton(props.course)}>
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default Course;
