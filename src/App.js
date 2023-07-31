import React, {useState, useEffect} from 'react';
import ReactGA from 'react-ga';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import SingleAd from './components/Pages/SingleAd/SingleAd'; 
import AppHeader from './components/Organisms/AppHeader/AppHeader';
import AppFooter from 'components/Organisms/AppFooter/AppFooter';
import JobsPage from './components/Pages/Jobs';
import List from './components/Pages/AdList/carlist';
import ModelPage from './components/Pages/Model/ModelPage';

import { BrowserRouter as Router, Route, LinkProps, Routes, Link } from 'react-router-dom';
import SettingsContext from 'context/SettingsContext';

const TRACKING_ID = "G-0QER2JE1YS"; 


function App() {

  const [isProduction, setIsProduction] = useState(false);

  useEffect(() => {
    const isProduction = process.env.NODE_ENV === 'production';
    console.log('isProduction', isProduction)
    setIsProduction(isProduction);
  }, []);

  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  const trackPageview = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  };
  

  return <div className="App">
     <SettingsContext>
     <Router onUpdate={trackPageview}>
          <AppHeader />
          <section className="main-content-wrapper">
            <Routes>
                <Route path="/" element={<List />} />
                <Route path="/anunturi" element={<List />} />
                <Route path="/anunturi/:id" element={<ModelPage />} />
                <Route path="/ad/:id" element={<SingleAd />} />
                <Route path="/jobs/" element={<JobsPage />} />
            </Routes>
          </section>
          <AppFooter />
      </Router>
      </SettingsContext>
  </div>
}

export default App;
