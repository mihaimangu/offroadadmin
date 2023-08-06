import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';

import { FaBars } from "react-icons/fa6";

// use absolute path for importing the 4x4logo
import logo4x4 from 'images/jeeplogo.png';
import './AppHeader.scss';

const AppHeader = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const toggleMenu = () => {setShow(!show)};

    return (
        <>
            <header className="app-header">
                <Button className="app-header__btn" onClick={toggleMenu}><FaBars /></Button>

                <div className="logo-wrapper">
                    <Link to="/" className="App-link">
                        <img src={logo4x4} className="App-logo" alt="logo" />
                    </Link>
                </div>

           

            
                
            </header>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Meniu principal</Offcanvas.Title>
                </Offcanvas.Header>
                    <Offcanvas.Body>
                        <ul className="side-menu__wrapper">
                            <li className="side-menu__item">
                                <Link to="/" className="side-menu__link" onClick={handleClose}>Anunturi</Link>
                            </li>
                            <li className="side-menu__item">
                                <Link to="/despre" className="side-menu__link" onClick={handleClose}>Despre</Link>
                            </li>
                        </ul>

                    </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default AppHeader;