import React, {useEffect, useState, useContext} from "react";
import { getList } from "../../../api/general";
import Car from "components/car.jsx";
import AdFilters from "components/Organisms/AdFilters/AdFilters.jsx";
import LoadingWrapper from "components/Molecules/LoadingWrapper";
import Pagination from "components/Organisms/Pagination/Pagination.jsx";
import { FiltersContext } from 'context/FiltersContext';

// import cars.scss
import styles from './cars.scss'



function List(props){

    const [isError, setIsError] = useState(false)
    const [cars, setCars] = useState([])
    const [loading, setLoading] = useState(false);
    const [totalPages, setTotalPages] = useState(15);
    const {searchSettings, currentPage, setCurrentPage, isInitialState, initialState} = useContext(FiltersContext);


    const grabAdsFromApi = (settings = {}) => {
        setLoading(true);
        getList(settings).then((res) => {
            setLoading(false);
            if(res.data?.offroadCars){
                setCars(res.data.offroadCars);
            }
            if(res.data?.totalPages){
                setTotalPages(res.data.totalPages);
            }
        }).catch(err => {
            console.log('we have err', err)
            setIsError(true)
        });
    }

    const filterAds = () => {
        setCurrentPage(1);
        let searchParams = {
            ...searchSettings,
            page: 1,
        }
        grabAdsFromApi(searchParams);
    }

    const resetAndSearch = () => {
        setCurrentPage(1);
        grabAdsFromApi(initialState);
    }

    const updateCurrentPageandSearchSettings = (page) => {
        console.log('updateCurrentPageandSearchSettings', page)
        setCurrentPage(page);
        let searchParams = {
            ...searchSettings,
            page
        }
        grabAdsFromApi(searchParams);
    }

 
   useEffect(() => {
        setIsError(false);

        setLoading(true);
        let searchParams = {
            ...searchSettings,
            page: currentPage
        }
        grabAdsFromApi(searchParams);
   }, [])

    return (
        <div className="cars-list__wrapper">
            <div className="cars-list__description">
                <h2>Gasesti aici anunturi cu masini de teren</h2>
                <p>Anunturile sunt agregate din platforme precum OLX, Autovit sau LaJumate. Poti folosi optiunile de mai jos pentru a filtra anunturile.</p>
            </div>
            {isError && <div>error while getting data</div>}
            <AdFilters onSearch={filterAds} onReset={resetAndSearch}  />
            <div className="cars-list__inner-wrapper">
                {loading ? <LoadingWrapper /> : cars.length && cars.map((car) => {
                    return <Car key={car._id} data={car} />
                })}
            </div>
       
            <Pagination currentPage={currentPage} totalPages={totalPages} onSetPage={updateCurrentPageandSearchSettings} />    
        </div>
    )
}

export default List