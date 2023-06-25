import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom'; 
import { getSingleOffroadAd } from '../api/admin';


function SingleAd(){

    const [adData, setAdData] = useState({});

    useEffect(() => {
        console.log('api call')
    }, [])

    const { id } = useParams();
    console.log('id id', id);

    return <div className="single-ad__wrapper">This is a single ad</div>
}

export default SingleAd