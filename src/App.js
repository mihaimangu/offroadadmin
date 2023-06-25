import './App.css';
import Home from './components/Home';
import SingleAd from './components/SingleAd'; 
import logo4x4 from './images/4x4-logo.png';

import { BrowserRouter as Router, Route, LinkProps, Routes } from 'react-router-dom';

function App() {


  return <div className="App">
         <header className="App-header">
            <div className="logo-wrapper">
              <img src={logo4x4} className="App-logo" alt="logo" />
            </div>
          </header>
     <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ad/:id" element={<SingleAd />} />
            
        </Routes>
      </Router>
  </div>
}

export default App;
