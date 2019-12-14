import React, { useState } from "react";
import "./NewGoal.css";

const NewGoal = props => {
  const [text, setText] = useState("");

  const addGoalHandler = e => {
    e.preventDefault();
    props.addGoal({ id: Math.random(), text });
    setText("");
  };

  return (
    <form className="new-goal" onSubmit={addGoalHandler}>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <button>Add goal</button>
    </form>
  );
};

export default NewGoal;
