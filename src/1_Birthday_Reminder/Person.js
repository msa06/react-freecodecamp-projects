import React, { useState, useEffect } from "react";

const Person = ({ person }) => {
  const [daysRem, setRemDays] = useState(0);

  useEffect(() => {
    const calculateRemainingDays = () => {
      let dob = new Date(person.dob);
      let today = new Date();
      let datetocome = new Date(
        today.getFullYear(),
        dob.getMonth(),
        dob.getDay()
      );
      // One day in milliseconds
      const oneDay = 1000 * 60 * 60 * 24;
      const diffInTime = datetocome.getTime() - today.getTime();
      const diffInDays = Math.round(diffInTime / oneDay);
      console.log("Difference", diffInDays);
      setRemDays(diffInDays);
    };
    calculateRemainingDays();
  }, []);

  return (
    <div className="element">
      <img src={person.imgsrc} className="item-img" alt="person-img" />
      <div className="element-item">
        <h4>{person.name}</h4>
        <h4>{person.age} years</h4>
        <h4>Days Remaining : {daysRem}</h4>
      </div>
    </div>
  );
};

export default Person;
