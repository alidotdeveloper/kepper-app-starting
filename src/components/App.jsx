import { useState } from "react";
import React from "react";

function App() {
  const [item, setitem] = useState("");
  const [items, setitems] = useState([]);

  function name(e) {
    const itemchange = e.target.value;
    setitem(itemchange);
  }
  function click() {
    setitems((previtem) => {
      return [...previtem, item];
    });
    setitem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={name} value={item} type="text" />
        <button onClick={click}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((newitems) => (
            <li> {newitems} </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
