class Item extends React.Component {
  render() {
    const { index, word, doneStatus, onDelete, onEdit, onDone } = this.props;
    return <li>
        <input onChange={event => onEdit(event, index)} value={word} />
        <button onClick={() => onDelete(index)}>Delete</button>
        <button onClick={event => onDone()}>Mark Done</button>
      <h3>{doneStatus === true ? "Done" : "Undo"}</h3>
      </li>;
  }
}
class List extends React.Component {
  constructor() {
    super();
    this.changeHandler = this.changeHandler.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  state = {
    list: [],
    word: "",
    formErrors: "",
    doneStatus: true
  };

  changeHandler(event) {
    this.setState({ word: event.target.value });
    console.log("change", event.target.value);
  }

  addItem() {
    this.state.word.length < 5
      ? this.setState({ formErrors: "Please enter more than 5 characters" })
      : this.setState({
          list: [...this.state.list, this.state.word],
          word: ""
        });
  }

  onEdit = (event, index) => {
    const todo = event.target.value;
    const list = [...this.state.list];
    list[index] = todo;
    this.setState({ list });
  };

  onDelete = index => {
    let { list } = this.state;
    list = [...list];
    list.splice(index, 1);
    this.setState({ list });
  };

  onDone = index => {
    let prevState = this.state;
    list = [...this.state.list]
    this.setState({
      doneStatus: !this.state.doneStatus
    })
  }

  render() {
    // render the list with a map() here

    console.log("rendering");
    return (
      <div className="list">
        <input onChange={this.changeHandler} value={this.state.word} />
        <button onClick={this.addItem}>Add item</button>
        {/* Using && to render Form Errors Message only if formErrors Exist */}
        {this.state.formErrors && <h5>{this.state.formErrors}</h5>}
        <ul>
          {this.state.list.map((todo, index, doneStatus) => (
            <Item
              key={index}
              index={index}
              word={todo}
              doneStatus={doneStatus}
              onEdit={this.onEdit}
              onDelete={this.onDelete}
              onDone={this.onDone}
            />
          ))}
        </ul>
        <h3>{this.state.doneStatus === true ? "Done" : "Undo"}</h3>

      </div>
    );
  }
}

ReactDOM.render(<List />, document.getElementById("root"));
