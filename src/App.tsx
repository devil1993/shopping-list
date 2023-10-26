import React from 'react';
import User from './models/User';
import ItemModel from './models/ItemModel';
import ItemList from './components/ItemList';

function App() {
  let user = new User();
  user.name = "user.name"
  let item1 = new ItemModel(user);
  let item2 = new ItemModel(user);

  item1.name = "Item 1"
  item2.name = "Item 2"

  let items = [item1, item2]
  return (
    <div>
      <h1>Ghatak's shopping list</h1>
      <ItemList items={items} />
    </div>
  );
}

export default App;
