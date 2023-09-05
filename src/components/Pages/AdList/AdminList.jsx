import React, {useEffect, useState} from "react";
import { getList, hideSingleAd, showSingleAd } from "../../../api/general";
import Car from "components/Organisms/AdminAdCard/AdminAdCard.jsx";
import AdFilters from "components/Organisms/AdFilters/AdFilters.jsx";
import LoadingWrapper from "components/Molecules/LoadingWrapper";
import Pagination from "components/Organisms/Pagination/Pagination.jsx";

// import cars.scss
import styles from './cars.scss'


function AdminAdList(props){

    const [isError, setIsError] = useState(false)
    const [cars, setCars] = useState([])
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(15);
    const [filterSettings, setFilterSettings] = useState({})
    const [hiddenCarsCount, setHiddenCarsCount] = useState(0);
    const [unscrapedCarsCount, setUnscrapedCarsCount] = useState(0);
    const [totalCount, setTotalCount] = useState(0);


    const grabAdsFromApi = (settings = {}) => {
        setLoading(true);
        settings.includeUnscraped = true;
        settings.includeHidden = true;
        getList(settings).then((res) => {
            setLoading(false);
            if(res.data?.offroadCars){
                setCars(res.data.offroadCars);
            }
            if(res.data?.hiddenCars){
                setHiddenCarsCount(res.data.hiddenCars);
            }
            if(res.data?.notScrapedCars){
                setUnscrapedCarsCount(res.data.notScrapedCars);
            }
            if(res.data?.totalCount){
                setTotalCount(res.data.totalCount);
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
            page: currentPage,
        }
        grabAdsFromApi(searchParams)

    }, [currentPage, filterSettings])
 
   useEffect(() => {
        setIsError(false);

        setLoading(true);
        grabAdsFromApi();
   }, [])

   const onShow = (itemId) => {
        console.log('show item', itemId)
        showSingleAd(itemId).then(res => {
            console.log('item shown', res)
        }).catch(err => {
            console.log('error showing item', err)
        })
   }

   const onHide = (itemId) => {
        console.log('hide item', itemId)
        hideSingleAd(itemId).then(res => {
            console.log('item hidden', res)
        }).catch(err => {
            console.log('error hiding item', err)
        })
   }

   const onAddToCustomList = (itemId, listId) => {
        console.log('add to custom list', itemId, listId)
   }

    return (
        <div className="cars-list__wrapper">
            <h1>Administreaza anunturi</h1>
            {isError && <div>error while getting data</div>}
            <AdFilters onSearch={filterAds}  />
            <div className="cars-list__admin-details">
                {cars.length && <div className="cars-list__admin-details__item">Total: {totalCount}</div>}
                <div className="cars-list__admin-details__item">Unscraped: {unscrapedCarsCount}</div>
                <div className="cars-list__admin-details__item">Hidden: {hiddenCarsCount}</div>
            </div>
            <div className="cars-list__inner-wrapper">
                {loading ? <LoadingWrapper /> : cars.length && cars.map((car) => {
                    return <Car key={car._id} data={car} onShow={onShow} onHide={onHide} onAddToList={onAddToCustomList} />
                })}
            </div>
       
            <Pagination currentPage={currentPage} totalPages={totalPages} onSetPage={updateCurrentPageandSearchSettings} />    
        </div>
    )
}

export default AdminAdList