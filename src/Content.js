import { useState } from 'react';
// icons inporded from https://www.npmjs.com/package/react-icons
import { FaTrashAlt } from 'react-icons/fa'

const Content = () => {
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
      <main>
        {items.length ? (
          <ul>
            {items.map((item) => (
              <li className='item' key={item.id}>
                <input 
                  type="checkbox" 
                  onChange={() => handleCheck(item.id)}
                  checked={item.checked} 
                />
                <label
                  style={(item.checked) ? { textDecoration: 'line-through'} : null}
                  onDoubleClick={() => handleCheck(item.id)}
                >{item.item}</label>
                <FaTrashAlt 
                  onClick={() => handleDelete(item.id)}
                  role="button" 
                  tabIndex="0" 
                />
              </li>
            ))}
          </ul>
        ) : (
          <p style={{ marginTop: '2rem'}}>your list is empty</p>
        )} 
      </main>
    )
};

export default Content