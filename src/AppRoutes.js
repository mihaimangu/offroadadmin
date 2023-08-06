import React, {useEffect} from 'react';
import ReactGA from 'react-ga4';
import JobsPage from './components/Pages/Jobs';
import List from './components/Pages/AdList/carlist';
import ModelPage from './components/Pages/Model/ModelPage';
import AboutPage  from './components/Pages/About/About';
import SingleAd from './components/Pages/SingleAd/SingleAd'; 
import AdminPage from './components/Pages/Admin/Admin';
import { BrowserRouter as Router, Route, LinkProps, Routes, useLocation } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Protected from 'components/Pages/Protected/Protected';

const TRACKING_ID = "G-0QER2JE1YS"; 
const isProduction = process.env.NODE_ENV === 'production';


function AppRoutes() {
    const location = useLocation();

  useEffect(() => {
      const {pathname} = location;
      console.log('location changed', {pathname})
      
    if(isProduction){
        ReactGA.send({ hitType: "pageview", page: pathname, title: "Custom Page" });
    }
  }, [location])

    useEffect(() => {
        console.log('isProduction', isProduction)
        if(isProduction){
            ReactGA.initialize(TRACKING_ID);
        }
    }, []);

    return   <Routes>
        <Route path="/" element={<List />} />
        <Route path="/anunturi" element={<List />} />
        <Route path="/despre" element={<AboutPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/anunturi/:id" element={<ModelPage />} />
        <Route path="/ad/:id" element={<SingleAd />} />
        <Route path="/protected" element={<Protected />} />
        <Route path="/admin/jobs/" element={<ProtectedRoute><JobsPage /></ProtectedRoute>} />
    </Routes>
}

export default AppRoutes