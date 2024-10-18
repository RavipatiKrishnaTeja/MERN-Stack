import React from "react";
import { Person } from "./Person";

// array for items
export const List = ({ people }) => {
  return (
    <section>
      {people.map((person) => {
        // const {name,age}= person;
        return <Person key={person.id} {...person} />;
      })}
    </section>
  );
};
