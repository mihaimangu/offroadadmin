import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import SingleAd from './components/Pages/SingleAd/SingleAd'; 
import AppHeader from './components/Organisms/AppHeader/AppHeader';
import AppFooter from 'components/Organisms/AppFooter/AppFooter';
import JobsPage from './components/Pages/Jobs';

import { BrowserRouter as Router, Route, LinkProps, Routes, Link } from 'react-router-dom';
import { getTranslations } from 'api/admin';

export const TranslationContext = React.createContext();


function App() {
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    console.log("fetching translations")
    const fetchTranslations = async() => {
      const response = await getTranslations();
      const {translations} = response.data;
      setTranslations(translations);

    }
    fetchTranslations();
  }, []);

  return <div className="App">
     <TranslationContext.Provider value={translations}>
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
      </TranslationContext.Provider>
  </div>
}

export default App;
