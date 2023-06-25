import React, {useEffect, useState} from "react";
import { getList } from "../api/admin";
import Car from "./car";

// import cars.scss
import styles from './cars.scss'


function List(props){

    const [isError, setIsError] = useState(false)
    const [cars, setCars] = useState([])

   useEffect(() => {
        setIsError(false);

        getList().then((res) => {
            console.log('we got data', {res})
            if(res.data?.offroadCars){
                setCars(res.data.offroadCars);
            }
        }).catch(err => {
            console.log('we have err', err)
            setIsError(true)
        });
   }, [])

    return (
        <div className="cars-list__wrapper">
            <h2>This is the list</h2>
            {isError && <div>error while getting data</div>}
            {cars.length && cars.map((car) => {
                return <Car key={car._id} data={car} />
            })}
        </div>
    )
}

export default List