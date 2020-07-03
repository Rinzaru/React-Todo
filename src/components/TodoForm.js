import React from "react";
import { Button } from "reactstrap";
class ToDoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      item: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.item);
  };

  handleChanges = (e) => {
    //something
    this.setState({
      item: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name="item"
            placeholder="Add Todo Item"
            value={this.state.item}
            onChange={this.handleChanges}
            style={{ marginTop: "10px", marginLeft: "45%", width: "10%" }}
          />
          <Button style={{ marginTop: "5px", marginLeft: "5px" }}>Add</Button>
        </form>
      </div>
    );
  }
}

export default ToDoForm;
