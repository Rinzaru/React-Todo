import React from "react";
import { Card } from "reactstrap";

const Task = (props) => {
  console.log(props.list.task, "props");
  return (
    <div
      className={`task${props.list.completed ? " completed" : ""}`}
      onClick={() => props.toggleItem(props.list.id)}
    >
      <Card style={{ textAlign: "center" }}>
        <p>{props.list.task}</p>
      </Card>
    </div>
  );
};

export default Task;
