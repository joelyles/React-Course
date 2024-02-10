// use state code below
import { useState } from 'react';

const Content = () => {
    const [name, setName] = useState('joe');
    const [count, setCount] = useState(0);
    
    const handleNameChange = () => {
      const names = ['bilbo', 'andrew', 'joe'];
      const int = Math.floor(Math.random() * names.length);
      setName(names[int]);
  }

  // click events

  const handleClick = () => {
    setCount(count + 1)
    console.log(count)
  }
  const handleClick2 = (name) => {
    console.log(`${name} was clicked`)
  }
  const handleClick3 = (e) => {
    console.log(e.target.innerText)
  }

    return (
      <main>
        <p onDoubleClick={handleClick}>   
          Hello {name}!!      
        </p>
        <button onClick={handleNameChange}>Change Name</button>
        {/* <button onClick={() => handleClick2('Joe')}>Click Here</button> */}
        <button onClick={handleClick}>Click Here</button>
        <button onClick={(e) => handleClick3(e)}>Click Here</button>
      </main>
    )
};

export default Content
//