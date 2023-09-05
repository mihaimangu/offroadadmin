import React from 'react';
import { Link } from 'react-router-dom';
import dateFormat from 'dateformat';
import {root} from '../api/general';
import { FaGasPump, FaRegCalendarAlt, FaCogs } from "react-icons/fa";


function Car({data: {Title, _id, dateAdded, price, adSource, mainImage, hasImages, details = {}, hidden }}){ 

    const {fuelType, yearBuild, engineCapacity } = details;

    const dateAddedObject = new Date(dateAdded);
    const dateAddedString = dateAddedObject.toLocaleString('ro-RO', {timeZone: 'Europe/Bucharest'});

    const imageUrl = hasImages ? `${root}/${mainImage}` : 'https://via.placeholder.com/150';

    const imageStyle = {
        backgroundImage: `url(${imageUrl})`,
    }

    return (
        <Link to={`/ad/${_id}`}>
            <div className="cars-list__single-ad">
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
    )
}

export default Car