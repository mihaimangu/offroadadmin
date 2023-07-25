import React, {useEffect, useState} from "react";
import { getList } from "../../../api/admin";
import Car from "components/car.jsx";
import AdFilters from "components/Organisms/AdFilters/AdFilters.jsx";
import LoadingWrapper from "components/Molecules/LoadingWrapper";
import Pagination from "components/Organisms/Pagination/Pagination.jsx";

// import cars.scss
import styles from './cars.scss'


function List(props){

    const [isError, setIsError] = useState(false)
    const [cars, setCars] = useState([])
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(15);
    const [filterSettings, setFilterSettings] = useState({})

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

    const filterAds = (searchSettings) => {
        console.log('searching ads', searchSettings)
        setFilterSettings(searchSettings);
        setCurrentPage(1);
        grabAdsFromApi(searchSettings);
    }

    const updateCurrentPageandSearchSettings = (page) => {
        setCurrentPage(page);
    }

    useEffect(() => {

        let searchParams = {
            ...filterSettings,
            page: currentPage
        }
        grabAdsFromApi(searchParams)

    }, [currentPage, filterSettings])
 
   useEffect(() => {
        setIsError(false);

        setLoading(true);
        grabAdsFromApi();
   }, [])

    return (
        <div className="cars-list__wrapper">
            <h2>Gasesti aici anunturi cu masini de teren</h2>
            <p>Anunturile sunt agregate din platforme precum OLX, Autovit sau LaJumate.</p>
            {isError && <div>error while getting data</div>}
            <AdFilters onSearch={filterAds}  />
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