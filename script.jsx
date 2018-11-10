class List extends React.Component {
  constructor() {
    super();
    this.changeHandler = this.changeHandler.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  state = {
    list: [],
    word: "",
    formErrors: ""
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
    v;
  }

  render() {
    // render the list with a map() here

    console.log("rendering");
    return (
      <div className="list">
        <input onChange={this.changeHandler} value={this.state.word} />
        <button onClick={this.addItem}>Add item</button>
        {/* Using && to render Form Errors Message only if formErrors Exist */}
        {this.state.formErrors && <h5>{this.state.formErrors}</h5> }
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
