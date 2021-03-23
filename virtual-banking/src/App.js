import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Home from './Components/Pages/Home/index';

function App() {
  return (
    <>
    <Router>
      <Home/>
  </Router>
    </>
  );
}

export default App;
