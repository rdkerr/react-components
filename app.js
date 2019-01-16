// TODO
var GroceryListItem = (props) => {
  var onListItemClick = (event) => {
    console.log('I got clicked');
  };

  return (
    <ul>
      <li onClick={onListItemClick}>{props.groceries[0]}</li>
      <li onClick={onListItemClick}>{props.groceries[1]}</li>
    </ul>
  );
}

var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryListItem groceries={['kale', 'cucumber']}/>
  </div>
);


ReactDOM.render(<App />, document.getElementById("app"));
