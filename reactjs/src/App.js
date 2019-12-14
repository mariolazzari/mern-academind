import React, { useState } from "react";
import "./App.css";
import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { id: 1, text: "Step 1" },
    { id: 2, text: "Step 2" },
    { id: 3, text: "Step 3" }
  ]);

  const addGoalHandler = goal =>
    setCourseGoals(prevGoals => [...prevGoals, goal]);

  return (
    <div className="course-goals">
      <h2>Course goals</h2>
      <NewGoal addGoal={addGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  );
};

export default App;
