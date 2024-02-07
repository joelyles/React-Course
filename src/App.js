/* import logo from './logo.svg'; */
/* import './App.css'; */
/* delete logo.svg and App.css */
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

// component

/* (array) objects will not render, boolean will not render */
function App() {

  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
