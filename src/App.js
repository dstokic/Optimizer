import logo from './logo.svg';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Preferences from './components/Preferences';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element= {<Preferences/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;