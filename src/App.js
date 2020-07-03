import React from "react";
import ToDoForm from "./components/TodoForm";
import ToDoList from "./components/TodoList";
import Todo from "./components/Todo";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todo: Todo,
    };
  }

  addItem = (todoTask) => {
    const newTask = {
      task: todoTask,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      todo: [...this.state.todo, newTask],
    });
    console.log(newTask);
  };

  toggleItem = (taskId) => {
    this.setState({
      todo: this.state.todo.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            completed: !task.completed,
          };
        } else {
          return task;
        }
      }),
    });
  };

  render() {
    return (
      <div>
        <h1 style={{ marginLeft: "45%" }}>What are we doing Today!</h1>
        <ToDoForm addItem={this.addItem} />
        <ToDoList todoProps={this.state.todo} toggleItem={this.toggleItem} />
      </div>
    );
  }
}

export default App;
