import './App.css';
import Navbar from './components/Navbar';
import { FooterContainer } from './containers/footer'

import { BrowserRouter as Router } from 'react-router-dom'
import NewsCard from './components/NewsCard';

function App() {
  return (
    <Router>
      <Navbar />
      <NewsCard />
      <FooterContainer />
    </Router>
  );
}

export default App;
