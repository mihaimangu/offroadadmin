import React from 'react';
import { Link } from 'react-router-dom';
import dateFormat from 'dateformat';


function Car({data: {Title, _id, dateAdded}}){

    const formatedDate = dateFormat(new Date(dateAdded), "dd-mm-yyyy - hh:mm");

    return (
        <Link to={`/ad/${_id}`}>
            <div className="cars-list__single-ad">
                <section>
                    {Title}
                </section>
                <section className="date">
                    {formatedDate}
                </section>
            </div>
        </Link>
    )
}

export default Car