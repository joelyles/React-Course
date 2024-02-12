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
    }

    return (
      <main>
        <ul>
          {items.map((item) => (
            <li className='item' key={item.id}>
              <input 
                type="checkbox" 
                onChange={() => handleCheck(item.id)}
                checked={item.checked} 
              />
              <label>{item.item}</label>
              <FaTrashAlt 
                role="button" 
                tabIndex="0" 
              />
            </li>
          ))}
        </ul>
      </main>
    )
};

export default Content