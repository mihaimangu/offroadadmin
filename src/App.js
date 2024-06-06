import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import AppHeader from './components/Organisms/AppHeader/AppHeader';
import AppFooter from 'components/Organisms/AppFooter/AppFooter';
import AppRoutes from './AppRoutes'; 

import { BrowserRouter as Router } from 'react-router-dom';
import SettingsContext from 'context/SettingsContext';
import FiltersContext from 'context/FiltersContext';
import UserContext from 'context/UserContext';
import AdminContext from 'context/AdminContext';

function App() {

  return <div className="App">
    <FiltersContext>
      <UserContext >
        <SettingsContext>
          <AdminContext>
          <Router >
                <AppHeader />
                <section className="main-content-wrapper">
                  <AppRoutes />
                </section>
                <AppFooter />
            </Router>
            </AdminContext>
          </SettingsContext>
        </UserContext>
      </FiltersContext>
  </div>
}

export default App;
