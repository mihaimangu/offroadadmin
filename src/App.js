import './App.css';
import Home from './components/Home';
import SingleAd from './components/SingleAd/SingleAd'; 
import AppHeader from './components/Organisms/AppHeader';
import JobsPage from './components/Pages/Jobs';

import { BrowserRouter as Router, Route, LinkProps, Routes, Link } from 'react-router-dom';

function App() {
  return <div className="App">
        
     <Router>
          <AppHeader />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ad/:id" element={<SingleAd />} />
              <Route path="/jobs/" element={<JobsPage />} />
          </Routes>
      </Router>
  </div>
}

export default App;
