import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, LinkProps, Routes, useLocation } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import ReactGA from 'react-ga4';

import JobsPage from './components/Pages/Jobs';
import List from './components/Pages/AdList/carlist';
import AdminAdList from 'components/Pages/AdList/AdminList';
import ModelPage from './components/Pages/Model/ModelPage';
import AboutPage  from './components/Pages/About/About';
import SingleAd from './components/Pages/SingleAd/SingleAd'; 
import SingleAdAdmin from './components/Pages/SingleAd/AdminSingleAd'; 
import AdminPage from './components/Pages/Admin/Admin';
import Protected from 'components/Pages/Protected/Protected';
import CustomLists from 'components/Pages/CustomLists/AdminCustomLists';
import CustomListOverview from 'components/Pages/CustomLists/CustomListOverview';

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
        <Route path="/ad/:id/edit" element={<ProtectedRoute><SingleAdAdmin /></ProtectedRoute>} />
        <Route path="/admin/jobs/" element={<ProtectedRoute><JobsPage /></ProtectedRoute>} />
        <Route path="/admin/ads" element={<ProtectedRoute><AdminAdList /></ProtectedRoute>} />
        <Route path="/admin/customlists" element={<ProtectedRoute><CustomLists /></ProtectedRoute>} />
        <Route path="/admin/customlists/:id" element={<ProtectedRoute><CustomListOverview /></ProtectedRoute>} />

    </Routes>
}

export default AppRoutes