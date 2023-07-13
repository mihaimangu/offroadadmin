import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom'; 
import { root, getSingleOffroadAd, getSingleOffroadAdImages, scrapeSingleOffroadAd } from '../../api/admin';
import style from './SingleAd.scss'
import { stripHtml } from "string-strip-html";
import {Oval} from 'react-loader-spinner';

function SingleAdDisplay({adData}){

    const {Title, description, dateAdded, isAvailable, link, dateLatestScrapped} = adData;
    const weHaveAvailabilityData = typeof isAvailable !== 'undefined';

    const cleanDescription = description ? stripHtml(description).result : "No description";

    return <div className="single-ad__display-wrapper">
        <h2>{Title}</h2>
        <p>Date added: {dateAdded}</p>
        <p>{cleanDescription}</p>
        {weHaveAvailabilityData && <p>Is available: {isAvailable ? 'Yes' : 'No'}</p>}
        <a className="single-ad__source-link" href={link}>Source link</a>
    </div>
}

function SingleAd(){

    const { id } = useParams();

    const [adData, setAdData] = useState({});
    const [loading, setLoading] = useState(false);
    const [imageList, setImageList] = useState([]);

    const scrapeAd = () => {
        setLoading(true);
        scrapeSingleOffroadAd(id).then(res => {
            console.log('we got res', res);
            if(res.data?.adData){
                setAdData(res.data.adData)
                setLoading(false);

            }    
        }).catch(err => {
            console.log('we have error for loading', err);
        })
    }

    useEffect(() => {
        setLoading(true);
        getSingleOffroadAd(id).then(async (res) => {
            if(res.data){
                setAdData(res.data?.data);
                setLoading(false);
            
                const hasImages = res.data.data.hasImages;
                if(hasImages){
                    const response = await getSingleOffroadAdImages(id);
                    if(response?.data?.images){
                        console.log('images are', response.data.images);
                        setImageList(response.data.images);

                    }
                }
                console.log('we have images', hasImages);
            
                
            }
        }).catch(err => {
            console.log('we have err', err)
        });
    }, [])


    const {Title, description} = adData;

    return <div className="single-ad__wrapper">
        
        {loading ? <Oval /> : <SingleAdDisplay adData={adData} />}
        <button onClick={scrapeAd} className="btn">Scrape ad data</button>
        {imageList.length > 0 && <div className="images-wrapper">
            {imageList.map((image, index) => {
                return <div>
                    <img src={`${root}/${image}`} alt="ad image" />
                </div>
            })}    
        </div>}
    </div>
}

export default SingleAd