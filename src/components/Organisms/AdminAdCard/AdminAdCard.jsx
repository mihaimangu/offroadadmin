import React from 'react';
import { Link } from 'react-router-dom';
import {root} from 'api/general';
import Dropdown from 'react-bootstrap/Dropdown';
import { FaEye } from 'react-icons/fa';
import classNames from 'classnames';
import { FaGasPump, FaRegCalendarAlt, FaCogs, FaGlobeAmericas } from "react-icons/fa";


function Car({data: {Title, _id, dateAdded, price, adSource, mainImage, hasImages, hidden, details = {}, county }, onShow, onHide, onAddToList}){ 

    const {fuelType, yearBuild, engineCapacity } = details;

    const dateAddedObject = new Date(dateAdded);
    const dateAddedString = dateAddedObject.toLocaleString('ro-RO', {timeZone: 'Europe/Bucharest'});

    const imageUrl = hasImages ? `${root}/${mainImage}` : 'https://via.placeholder.com/150';
    const imageStyle = {
        backgroundImage: `url(${imageUrl})`,
    }

    return (
        <div className="car-ad__wrapper">
            {hidden && <div className="car-ad__hidden-mark">
                <FaEye />
            </div>}
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Actiuni
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => onShow(_id)} >Afiseaza</Dropdown.Item>
                    <Dropdown.Item onClick={() => onHide(_id)} >Ascunde</Dropdown.Item>
                    <Dropdown.Item onClick={() => onAddToList(_id) } >Adauga in lista</Dropdown.Item>
                </Dropdown.Menu>

            </Dropdown>
            <Link to={`/ad/${_id}/edit`}>
                <div className={classNames("cars-list__single-ad", {'hidden': hidden})}>
                    <div className="car-ad__image" style={imageStyle}>
                        
                        {/* <img src={imageUrl} alt="car" /> */}
                        {adSource && <div className="car-ad__source">
                            {adSource}
                        </div>}
                    </div>
                    <div className='car-ad__details'>
                    <section >
                        <div className="car-ad__title">
                            {Title}
                        </div>
                      
                    </section>
                    <section  className="car-ad__details-row">
                        {yearBuild &&<div className="car-ad__year-build"><FaRegCalendarAlt />{yearBuild}</div>}
                        {fuelType && <div className="car-ad__fuel-type"><FaGasPump />{fuelType}</div>}
                        {engineCapacity && <div className="car-ad__engine-size"><FaCogs />{engineCapacity}cmc</div>}
                        {county && <div className="car-ad__county"><FaGlobeAmericas />{county}</div>}
                    </section>
                    <section className="car-ad__details-lower">
                       
                        <div className="date">
                            {dateAddedString}
                        </div>
                        {price && <div className="car-ad__price">
                            {price} €
                        </div>}
                       
                    </section>
                    </div>
                
                </div>
            </Link>
        </div>
    )
}

export default Car