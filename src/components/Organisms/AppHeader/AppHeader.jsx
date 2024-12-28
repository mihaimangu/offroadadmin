import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaBars } from "react-icons/fa";
import { FiltersContext } from "context/FiltersContext";
import { useAuth } from "context/UserContext";
import { FaLongArrowAltRight } from "react-icons/fa";

// use absolute path for importing the 4x4logo
import "./AppHeader.scss";

const AppHeader = () => {
    const { resetSearchSettings } = useContext(FiltersContext);
    const [show, setShow] = useState(false);

    const { cookies } = useAuth();
    const isAuth = typeof cookies?.token !== "undefined";

    const handleClose = () => setShow(false);
    const handleMenuClick = () => {
        resetSearchSettings();
        setShow(false);
    };

    const toggleMenu = () => {
        setShow(!show);
    };

    return (
        <>
            <header className="app-header">
                <FaBars onClick={toggleMenu} className="app-header__btn" />
                <div className="logo-wrapper">
                    <Link to="/" className="App-link">
                        <h1 className="racing-sans">masini de teren .ro</h1>
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
                            <Link
                                to="/anunturi"
                                className="side-menu__link"
                                onClick={handleMenuClick}
                            >
                                Toate anunțurile
                            </Link>
                        </li>
                        <li className="side-menu__item">
                            <Link
                                to="/selectieanunturi"
                                className="side-menu__link"
                                onClick={handleMenuClick}
                            >
                                Mașina zilei
                            </Link>
                        </li>
                        <li className="side-menu__item">
                            <Link
                                to="/defecte"
                                className="side-menu__link"
                                onClick={handleMenuClick}
                            >
                                Mașini defecte
                            </Link>
                        </li>

                        <li className="side-menu__item">
                            <Link
                                to="/despre"
                                className="side-menu__link"
                                onClick={handleMenuClick}
                            >
                                Despre
                            </Link>
                        </li>
                        <li className="side-menu__item">
                            <Link
                                to="https://masinideteren.ro/shop"
                                target="_blank"
                                className="side-menu__link"
                            >
                                Shop
                            </Link>
                            <div className="side-menu__sub-menu">
                                <li>
                                    <a href="https://masinideteren.ro/shop/categorie-produs/tricouri/">
                                        <FaLongArrowAltRight />
                                        Tricouri
                                    </a>
                                    <a href="https://masinideteren.ro/shop/categorie-produs/stickere/">
                                        <FaLongArrowAltRight />
                                        Stickere
                                    </a>
                                    <a href="https://masinideteren.ro/shop/categorie-produs/cani/">
                                        <FaLongArrowAltRight />Cani
                                    </a>
                                </li>
                            </div>
                        </li>
                        {isAuth && (
                            <li className="side-menu__item">
                                <Link
                                    to="/admin"
                                    className="side-menu__link"
                                    onClick={handleMenuClick}
                                >
                                    Admin
                                </Link>
                            </li>
                        )}
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default AppHeader;
