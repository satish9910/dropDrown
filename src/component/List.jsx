import React, { useState } from "react";
import "./List.css";

const List = () => {
  const [input, setInput] = useState([]);
  const onHandleInput = (e) => {
    setInput(e.target.value);
    console.log(e.target.value)
  };

  return (
    <div className="listContainer">
      <ul>
        <input onChange={onHandleInput} type="text" />
        <li>
          <a href="/">Data of registration</a>
        </li>
        <li>
          <a href="/">Vendor Score</a>
        </li>
        <li>
          <a href="/">Rating</a>
        </li>
        <li>
          <a href="/">Status</a>
        </li>
        <li>
          <a href="/">Typing of business</a>
        </li>
        <li>
          <a href="/">Location</a>
        </li>
        <li>
          <a href="/">Assign to</a>
        </li>
           <li>
          <a href="/">{input}</a>
        </li>
      </ul>
    </div>
  );
};

export default List;
