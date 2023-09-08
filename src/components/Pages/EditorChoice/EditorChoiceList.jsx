import React, {useState, useEffect, useContext} from "react";
import {useParams, Link} from 'react-router-dom';
import { getCustomListByName } from 'api/general';
import LoadingWrapper from "components/Molecules/LoadingWrapper";
import Car from "components/Organisms/AdminAdCard/AdminAdCard.jsx";


function EditorChoiceList() {
    const listName = 'custom';
    const [loading, setLoading] = useState(true);
    const [cars, setCars] = useState([]);

    const getListData = async () => {
        // get list data from api
        setLoading(true);
        const response = await getCustomListByName(listName);
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
            <h1>Selectie anunțuri mașini 4x4 de teren</h1>
            <p>Lista aceasta este o selecție de anunțuri cu mașini 4x4 de teren, care au fost adăugate de către editorii platformei.</p>
            <p>Aici poți să vezi anunțurile care au fost postate pe TikTok / Instagram etc</p>
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

export default EditorChoiceList