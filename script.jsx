class List extends React.Component {
  constructor() {
    super();
    this.changeHandler = this.changeHandler.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  state = {
    list: [],
    word: ""
  };

  changeHandler(event) {
    this.setState({ word: event.target.value });
    console.log("change", event.target.value);
  }

  addItem() {
    this.setState({ list: [...this.state.list, this.state.word] });
  }

  render() {
    // render the list with a map() here

    console.log("rendering");
    return (
      <div className="list">
        <input onChange={this.changeHandler} value={this.state.word} />
        <button onClick={this.addItem}>Add item</button>
        <ul>
          {this.state.list.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<List />, document.getElementById("root"));
