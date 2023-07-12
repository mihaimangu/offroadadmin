import React, {useEffect, useState} from "react";
import { getList } from "../api/admin";
import Car from "./car";
import {Oval} from 'react-loader-spinner';

// import cars.scss
import styles from './cars.scss'


function List(props){

    const [isError, setIsError] = useState(false)
    const [cars, setCars] = useState([])
    const [loading, setLoading] = useState(false);

   useEffect(() => {
        setIsError(false);

        setLoading(true);
        getList().then((res) => {
            setLoading(false);
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
            <h2>Gasesti aici anunturi cu masini de teren</h2>
            <p>Anunturile sunt agregate din platforme precum OLX, Autovit sau LaJumate.</p>
            {isError && <div>error while getting data</div>}
            {loading ? <Oval /> : cars.length && cars.map((car) => {
                return <Car key={car._id} data={car} />
            })}
        </div>
    )
}

export default List