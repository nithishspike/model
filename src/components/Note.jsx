import React from "react";

function Note(props) {
  // {array.map((i,j)=>(
  //   <Note key={j}title={i[0]} content={i[1]}/>

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={props.new}>DELETE</button>
    </div>
  );
}

export default Note;
