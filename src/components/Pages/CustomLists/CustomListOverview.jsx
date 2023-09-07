import React, {useState, useEffect, useContext} from 'react';
import {useParams, Link} from 'react-router-dom';
import { getCustomListByName } from 'api/general';
import LoadingWrapper from "components/Molecules/LoadingWrapper";
import Car from "components/Organisms/AdminAdCard/AdminAdCard.jsx";


function CustomListOverview(){
    // grab list name from param
    const {id: listName} = useParams();
    const [loading, setLoading] = useState(true);
    const [cars, setCars] = useState([])
    

    const getListData = async () => {
        // get list data from api
        setLoading(true);
        const response = await getCustomListByName(listName);
        // console.log('data is', data);
        const {success, list} = response.data;
        if(success){
            setCars(list.items);
            setLoading(false);
        } else {
            setLoading(false);
        }
    }

    useEffect(() => {
        getListData();
    }, [])

    if(loading){
        return <LoadingWrapper />
    }

    return (
        <div  className="cars-list__wrapper">
            <h1>Custom list overview</h1>
            <div className="cars-list__inner-wrapper">
                {cars.length && cars.map((car, index) => {
                    return <Link to={`/admin/ads/${car.id}`}>
                        <Car key={index} data={car} />
                    </Link>
                })}
            </div>
        </div>
    )    


}

export default CustomListOverview;