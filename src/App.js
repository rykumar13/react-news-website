import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';

import { BrowserRouter as Router } from 'react-router-dom'
import NewsCard from './components/NewsCard';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      {/* <Main /> */}
      <NewsCard />
    </Router>
  );
}

export default App;
