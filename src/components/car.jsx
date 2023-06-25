import React from 'react';
import { Link } from 'react-router-dom';


function Car({data: {Title, _id}}){
    return (
        <Link to={`/ad/${_id}`}>
            <div className="cars-list__single-ad">
            {Title}
            </div>
        </Link>
    )
}

export default Car