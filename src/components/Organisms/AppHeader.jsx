import React from 'react';
import { Link } from 'react-router-dom';
import logo4x4 from '../../images/4x4-logo.png';
import './AppHeader.scss';


const AppHeader = () => {
    return (
        <div>
            <header className="App-header">
                <div className="logo-wrapper">
                    <Link to="/" className="App-link">
                        <img src={logo4x4} className="App-logo" alt="logo" />
                    </Link>
                </div>
                <div className="app-menu__wrapper">
                    <div className="app-menu__main">
                        <Link className="app-menu__item">Home</Link>
                        <Link to="/jobs" className="app-menu__item">Jobs</Link>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default AppHeader;