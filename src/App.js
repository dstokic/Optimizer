import logo from './logo.svg';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Preferences from './components/Preferences';
import Results from './components/Results';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <style>{'body { background-color: #f3f9ed; }'}</style>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element= {<Preferences/>}></Route>
          <Route path="/results" element= {<Results/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;