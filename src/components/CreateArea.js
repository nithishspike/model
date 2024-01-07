import React, { useState } from "react";
import Note from "./Note";
function CreateArea() {
  let [title, setTitle] = useState("");
  let [note, setNote] = useState("");
  let [array, setArray] = useState([]);
  function update(e) {
    //console.log(e.target.value)
    setTitle(e.target.value);
  }
  function change(e) {
    setNote(e.target.value);
    //console.log(e.target.value);
    //console.log(array);
  }
  function add(e) {
    setTitle("");
    setNote("");
    e.preventDefault();
    setArray((prev) => {
      return [...prev, [title, note]];
    });
    //console.log(array);
  }

  function delete1(key) {
    setArray((prev) => {
      return prev.filter((k, index) => key !== index);
    });
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={update}
          value={title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={change}
          value={note}
        />
        <button onClick={add}>Add</button>
      </form>
      {array.map((i, j) => (
        <Note
          key={j}
          title={i[0]}
          content={i[1]}
          new={() => {
            delete1(j);
          }}
        />
      ))}
    </div>
  );
}

export default CreateArea;
