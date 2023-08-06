import React from 'react';
import { Link } from 'react-router-dom';
import dateFormat from 'dateformat';
import {root} from '../api/general';


function Car({data: {Title, _id, dateAdded, price, adSource, mainImage, hasImages }}){ 

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