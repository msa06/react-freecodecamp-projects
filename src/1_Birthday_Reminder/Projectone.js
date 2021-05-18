import React from "react";
import Person from "./Person";
import { data } from "./data";
import "./Projectone.css";

const Projectone = () => {
  let count = data.length;
  return (
    <div className="card">
      <h2>Upcoming Birthday : {count}</h2>
      {data.map((person) => {
        return <Person key={person.id} person={person} />;
      })}
    </div>
  );
};

export default Projectone;
