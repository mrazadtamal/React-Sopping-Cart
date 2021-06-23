import React, { useState } from "react";
import Course from "../Course/Course";
import courseData from "./../../fakeData/courseData";
import Cart from "./../Cart/Cart";
import "./Shop.css";
const Shop = () => {
  const [course, setCourse] = useState(courseData);
  const [cart, setCart] = useState([]);

  const handelButton = (course) => {
    const newCart = [...cart, course];
    setCart(newCart);
  };

  return (
    <div className="shop">
      <div className="courseContainer">
        {course.map((course) => (
          <Course course={course} handelButton={handelButton} />
        ))}
      </div>
      <div className="cartContainer">
        <Cart cart={cart} />
      </div>
    </div>
  );
};
export default Shop;
