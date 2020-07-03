// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

import Task from "./task";

const ToDoList = (props) => {
  return (
    <div className="task">
      {props.todoProps.map((list) => (
        <Task toggleItem={props.toggleItem} key={list.id} list={list} />
      ))}
    </div>
  );
};

export default ToDoList;
