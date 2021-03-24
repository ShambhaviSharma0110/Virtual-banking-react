import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Home from './Components/Pages/Home/index';
import Hero from './Components/HeroSection/index'; 

function App() {
  return (
    <>
    <Router>
      <Home/>
      <Hero/>
    </Router>
    </>
  );
}

export default App;
