import React from 'react';
import { Link } from 'react-router-dom';
import dateFormat from 'dateformat';


function Car({data: {Title, _id, dateAdded, price, adSource}}){

    const formatedDate = dateFormat(new Date(dateAdded), "dd-mm-yyyy - hh:mm");

    return (
        <Link to={`/ad/${_id}`}>
            <div className="cars-list__single-ad">
                <div className="car-ad__image">
                    <img src="https://via.placeholder.com/150" alt="car" />
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
                            {formatedDate}
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