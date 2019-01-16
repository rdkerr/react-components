// TODO
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  onListItemHover() {
    this.setState({
      hover: true
    });
  }

  onListItemLeave() {
    this.setState({
      hover: false
    });
  }

  render() {
    var style = {
      fontWeight: this.state.hover ? 'bold' : 'normal'
    };
    return  (
      <li style={style} onMouseOver={this.onListItemHover.bind(this)} onMouseOut={this.onListItemLeave.bind(this)}>{this.props.grocery}</li>
    );
  }
}

var GroceryList = (props) => (
  <ul>
    {props.groceries.map(grocery =>
      <GroceryListItem grocery={grocery} />
    )}
  </ul>
);


var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList groceries={['kale', 'cucumber']}/>
  </div>
);


ReactDOM.render(<App />, document.getElementById("app"));
