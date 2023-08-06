import React from 'react';
import { Link } from 'react-router-dom';
import './AppFooter.scss'

const AppFooter = () => {
    return <>
        <div className="app-menu__wrapper">
            <div className="app-menu__main">
                <Link to="/" className="app-menu__item">Anunturi</Link>
                <Link to="/despre" className="app-menu__item">Despre</Link>
            </div>
        </div> 
        <div className="app-footer__wrapper">
           <p>Masinideteren.ro este momentan un proiect in lucru si este foarte posibil sa existe buguri sau probleme </p>
            <span>Copyright masinideteren.ro</span>
        </div>
    </>
}

export default AppFooter