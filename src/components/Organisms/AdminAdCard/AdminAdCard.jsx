import React from 'react';
import { Link } from 'react-router-dom';
import dateFormat from 'dateformat';
import {root} from 'api/general';
import Dropdown from 'react-bootstrap/Dropdown';

function Car({data: {Title, _id, dateAdded, price, adSource, mainImage, hasImages }, onShow, onHide, onAddToList}){ 

    const dateAddedObject = new Date(dateAdded);
    const dateAddedString = dateAddedObject.toLocaleString('ro-RO', {timeZone: 'Europe/Bucharest'});

    const imageUrl = hasImages ? `${root}/${mainImage}` : 'https://via.placeholder.com/150';
    const imageStyle = {
        backgroundImage: `url(${imageUrl})`,
    }

    return (
        <div className="car-ad__wrapper">
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
        </div>
    )
}

export default Car