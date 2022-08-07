import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages';
import Pokedex from './pages/pokedex';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home></Home>} exact></Route>
        <Route path="/pokedex" element={<Pokedex></Pokedex>} exact></Route>
      </Routes>
    </Router>
  );
}

export default App;
