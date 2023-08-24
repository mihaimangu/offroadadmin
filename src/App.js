import React, {useState, useEffect} from 'react';
import ReactGA from 'react-ga4';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Home from './components/Home';
import SingleAd from './components/Pages/SingleAd/SingleAd'; 
import AppHeader from './components/Organisms/AppHeader/AppHeader';
import AppFooter from 'components/Organisms/AppFooter/AppFooter';
import JobsPage from './components/Pages/Jobs';
import List from './components/Pages/AdList/carlist';
import ModelPage from './components/Pages/Model/ModelPage';
import AppRoutes from './AppRoutes';

import { BrowserRouter as Router, Route, LinkProps, Routes, Link, useNavigation } from 'react-router-dom';
import SettingsContext from 'context/SettingsContext';
import FiltersContext from 'context/FiltersContext';
import UserContext from 'context/UserContext';

function App() {

  return <div className="App">
    <FiltersContext>
      <UserContext >
        <SettingsContext>
          <Router >
                <AppHeader />
                <section className="main-content-wrapper">
                  <AppRoutes />
                </section>
                <AppFooter />
            </Router>
          </SettingsContext>
        </UserContext>
      </FiltersContext>
  </div>
}

export default App;
