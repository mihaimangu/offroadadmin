import React from 'react';
import { Link } from 'react-router-dom';
import './AppFooter.scss'

const AppFooter = () => {
    return <>
        <div className="app-menu__wrapper">
            <div className="app-menu__main">
                <Link to="/" className="app-menu__item">Anunturi</Link>
                <Link to="/jobs" className="app-menu__item">Jobs</Link>
            </div>
        </div> 
        <div className="app-footer__wrapper">
           
            <span>Copyright masinideteren.ro</span>
        </div>
    </>
}

export default AppFooter