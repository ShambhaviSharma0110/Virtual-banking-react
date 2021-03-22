import './App.css';
import Navbar from './Components/Navbar/index';
import {BrowserRouter as Router} from 'react-router-dom';
import Sidebar from './Components/Sidebar/index';
function App() {
  return (
    <>
    <Router>
      <Sidebar/>
      <Navbar/>
  </Router>
    </>
  );
}

export default App;
