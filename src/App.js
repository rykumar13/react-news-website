import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';

import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
      <Main />
    </Router>
  );
}

export default App;
