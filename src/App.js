import logo from './logo.svg';
import './App.css';

// component
function App() {

  {/* (array) objects will not render, boolean will not render */}

  const name = 'Joe';
  const myArray = [{name: 'joe', hobby: 'coding'}, {name: 'andrew', hobby: 'soccer'}];

{/* functions should be named with "handle" */}

  const handleNameChange = () => {
    const names = ['bilbo', 'andrew', 'joe'];
    const int = Math.floor(Math.random() * names.length);
    return names[int];
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='paragraph'>Hello {handleNameChange()}</p>
      </header>
    </div>
  );
}

export default App;
