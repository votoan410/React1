import React, { useState } from "react";

const HelloMessage2 = ({ name }) => {
  const [count, setCount] = useState(" useState Val ");

  return (
    <div>
      <header>Hello {name}</header>
      <header>This is the value from UseState: {count}</header>

      <h1> from Antra</h1>
      <ul>
        <li>Hello</li>
        <li>Hello</li>
        <li>Hello</li>
        <li>Hello</li>
        <li>Hello</li>
        <li>Hello</li>
        <li>Hello</li>
      </ul>
    </div>
  );
};

export default HelloMessage2;
