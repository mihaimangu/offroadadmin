import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import SingleAd from './components/Pages/SingleAd/SingleAd'; 
import AppHeader from './components/Organisms/AppHeader/AppHeader';
import AppFooter from 'components/Organisms/AppFooter/AppFooter';
import JobsPage from './components/Pages/Jobs';

import { BrowserRouter as Router, Route, LinkProps, Routes, Link } from 'react-router-dom';
import SettingsContext from 'context/SettingsContext';


function App() {

  return <div className="App">
     <SettingsContext>
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
      </SettingsContext>
  </div>
}

export default App;
