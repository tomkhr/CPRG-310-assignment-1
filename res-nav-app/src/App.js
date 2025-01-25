import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Nav from './components/Nav';
import Products from './components/Products';
import Story from './components/Story';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">

      <Nav />

      <Routes>
          <Route path='/' element={ <Home/>} />
          <Route path='products' element={ <Products/>} />
          <Route path='story' element={ <Story/>} />
          <Route path='contact' element={ <Contact/>} />
      </Routes>



    </div>
  );
}

export default App;
