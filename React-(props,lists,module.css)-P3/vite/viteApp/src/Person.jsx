import React from "react";

export const Person = (props) => {
  const { name, age } = props;
  return (
    <article className="person">
      {/* // name component */}
      <div>
        <h4>{name}</h4>
        <p>{age}</p>
      </div>
    </article>
  );
};

// this is generic  component for person
