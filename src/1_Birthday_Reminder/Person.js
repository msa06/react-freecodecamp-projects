import React from "react";

const Person = ({ person }) => {
  return (
    <div className="element">
      <img src={person.imgsrc} className="item-img" alt="person-img" />
      <div className="element-item">
        <h4>{person.name}</h4>
        <h5>{person.age} years</h5>
      </div>
    </div>
  );
};

export default Person;
