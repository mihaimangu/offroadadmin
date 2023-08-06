import React from 'react';
import { Link } from 'react-router-dom';

// use absolute path for importing the 4x4logo
import logo4x4 from 'images/jeeplogo.png';
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
                
            </header>
        </div>
    )
}

export default AppHeader;