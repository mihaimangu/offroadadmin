import React, {useEffect, useState, useContext} from "react";
import { getList } from "../../../api/general";
import Car from "components/car.jsx";
import AdFilters from "components/Organisms/AdFilters/AdFilters.jsx";
import LoadingWrapper from "components/Molecules/LoadingWrapper";
import Pagination from "components/Organisms/Pagination/Pagination.jsx";
import { FiltersContext } from 'context/FiltersContext';
import TricouriAd from 'components/Atoms/TricouriAd';

// import cars.scss

const CardList = ({cars}) => {

    const AllCards = cars.map((car, index) => ({
        type: "Car",
        component: <Car key={car._id} data={car} />
    }))

    // when index is midpoint, push the promo among the cards
    const middleNumber = Math.floor(cars.length / 2);

    AllCards.splice(middleNumber, 0, {
        type: "Promo",
        component: <TricouriAd />
    })

    
    return (
        <>
          {AllCards.map((card, index) => {
            return <div key={index}>
                {card.component}
            </div>;
          })}
        </>
      );
}


function List(props){

    const [isError, setIsError] = useState(false)
    const [cars, setCars] = useState([])
    const [loading, setLoading] = useState(false);
    const [totalPages, setTotalPages] = useState(15);
    const {searchSettings, currentPage, setCurrentPage, initialState} = useContext(FiltersContext);

    const grabAdsFromApi = (settings = {}) => {
        setLoading(true);

        settings.adSource = 'olx'

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
            page: currentPage,
            hasDefect: true,
        }
        grabAdsFromApi(searchParams);
   }, [])

    return (
        <div className="cars-list__wrapper">
            <div className="cars-list__description">
                <h2>Gasesti aici selectie cu masini defecte</h2>
                <p>Aici sunt anunturile scanate de un robot, care analizeaza anunturile si arata masinile potential defecte</p>
            </div>
            {isError && <div>error while getting data</div>}
            <AdFilters onSearch={filterAds} onReset={resetAndSearch}  />
            {loading? <LoadingWrapper /> : <div className="cars-list__inner-wrapper">
               <CardList cars={cars} />
            </div>}
       
            <Pagination currentPage={currentPage} totalPages={totalPages} onSetPage={updateCurrentPageandSearchSettings} />    
        </div>
    )
}

export default List