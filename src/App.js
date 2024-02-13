/* import logo from './logo.svg'; */
/* import './App.css'; */
/* delete logo.svg and App.css */
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';

// component

/* (array) objects will not render, boolean will not render */
function App() {
      const [items, setItems] = useState([
        {
          id: 1,
          checked: false,
          item: "milk"
        },
        {
          id: 2,
          checked: false,
          item: "flour"
        },
        {
          id: 3,
          checked: false,
          item: "almonds"
        }
      ]);

      const handleCheck = (id) => {
        const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
        setItems(listItems);
        localStorage.setItem('shoppinglist', JSON.stringify(listItems));
      }

      const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id);
        setItems(listItems);
        localStorage.setItem('shoppinglist', JSON.stringify(listItems));
      }


  return (
    <div className="App">
      <Header title='groceries' />
      <Content 
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
