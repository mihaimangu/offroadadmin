import './App.css';
import Home from './components/Home';
import SingleAd from './components/SingleAd/SingleAd'; 
import AppHeader from './components/Organisms/AppHeader/AppHeader';
import AppFooter from 'components/Organisms/AppFooter/AppFooter';
import JobsPage from './components/Pages/Jobs';

import { BrowserRouter as Router, Route, LinkProps, Routes, Link } from 'react-router-dom';

function App() {
  return <div className="App">
        
     <Router>
          <AppHeader />
          <section className="main-content-wrapper">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ad/:id" element={<SingleAd />} />
                <Route path="/jobs/" element={<JobsPage />} />
            </Routes>
          </section>
          <AppFooter />
      </Router>
  </div>
}

export default App;
