import React from 'react';
import User from './models/User';
import ItemModel from './models/ItemModel';
import ItemList from './components/ItemList';
import NewItem from './components/NewItem';

function App() {
  let user = new User();
  user.name = "user.name"
  let item1 = new ItemModel(user);
  let item2 = new ItemModel(user);
  let item3 = new ItemModel(user);

  item1.name = "Item 1"
  item1.description = "A random item."
  item2.name = "Item 2"
  item2.quantity = 2;

  item3.name = "item 3";
  item3.quantity = 6;
  item3.checkedOut = true;

  let items = [item1, item2, item3]
  return (
    <div>
      <h1>Ghatak's shopping list</h1>
      <ItemList items={items} />
      <NewItem onItemCreated={(item: ItemModel) => { console.log(item)} } />
    </div>
  );
}

export default App;
