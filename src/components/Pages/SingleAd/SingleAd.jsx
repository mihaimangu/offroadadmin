import React, {useEffect, useState, useContext} from 'react';
import { TranslationContext } from 'context/SettingsContext';
import { useParams, Link } from 'react-router-dom'; 
import { root, getSingleOffroadAd, getSingleOffroadAdImages, scrapeSingleOffroadAd } from '../../../api/general';
import style from './SingleAd.scss'
import { stripHtml } from "string-strip-html";
import LoadingWrapper from 'components/Molecules/LoadingWrapper';
import { FaGlobeAmericas } from 'react-icons/fa';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Button from 'react-bootstrap/Button';
import ReactGA from 'react-ga4';


import Table from 'react-bootstrap/Table';
import AdGallery from './AdImageGallery';


function DetailsTable({details}){
    return <div>
        <Table striped variant="dark">
            <tbody>
            {details.map((detail, index) => {
                return <tr key={index}>
                    <td>{detail[0]}</td>
                    <td>{detail[1]}</td>
                </tr>
            })}
            </tbody>
            
        </Table>
    </div>
}

function SingleAdDisplay({id, adData}){

    const translations = useContext(TranslationContext);

    const {Title, description, dateAdded, isAvailable, link, dateLatestScrapped, details, price, adSource, county, location} = adData;
    const weHaveAvailabilityData = typeof isAvailable !== 'undefined';

    const cleanDescription = description ? stripHtml(description).result : "No description";
    const descriptionWithLineBreaks = cleanDescription.replace(/<br\s*\/?>/mg,"\n");

    // convert dateAdded to readable format and gmt +3
    const dateAddedObject = new Date(dateAdded);
    const dateAddedString = dateAddedObject.toLocaleString('ro-RO', {timeZone: 'Europe/Bucharest'});

    const hasDetails = typeof details !== 'undefined' && Object.keys(details).length > 0;
    
    // transform the details from an object to an array. Each array contains first the key and then the value
    const detailsArray = hasDetails ? Object.keys(details).map((key, index) => {
        const label = translations[key] ? translations[key] : key;
        const value = details[key];
        const translatedValue = translations[value] ? translations[value] : value;
        return [label, translatedValue];
    }) : [];

    let locationString = '';

    if(county){
        detailsArray.push(['Judet', county]);
        locationString += county;
    }

    if(location){
        detailsArray.push(['Localitate', location]);
        locationString += ' ' + location;
    }


    
    return <div className="single-ad__display-wrapper">
        <Link to="/anunturi" className="single-ad__back-button">
            <p>  &#8592; Inapoi la anunturi</p>
        </Link>
        <h1>{Title}</h1>
        {price && <h3>Pret: {price} €</h3>}
        {locationString && <div className="single-ad__location"><FaGlobeAmericas />{locationString}</div>}
        <p>Data adaugarii: {dateAddedString}</p>
        <p dangerouslySetInnerHTML={{__html: descriptionWithLineBreaks.replace(/\n/g, '<br>')}}></p>
        {weHaveAvailabilityData && <p>Anunt disponibil: {isAvailable ? 'Yes' : 'No'}</p>}
        {adSource && <h4>Preluat din {adSource}</h4>}
        
        {hasDetails && <DetailsTable details={detailsArray} />}
        <Button onClick={() => ReactGA.send({hitType: "clickexternal", title: id })} href={link}>Vezi anuntul original</Button>
       
    </div>
}

function SingleAd(){

    const { id } = useParams();

    const [adData, setAdData] = useState({});
    const [loading, setLoading] = useState(false);
    const [imageList, setImageList] = useState([]);

    const scrapeAd = () => {
        setLoading(true);
        scrapeSingleOffroadAd(id).then(async (res) => {
            console.log('we got res', res);
            if(res.data?.adData){
                setAdData(res.data.adData)
                setLoading(false);

                const hasImages = res.data.adData.hasImages;
                if(hasImages){
                    const imagesResponse = await getSingleOffroadAdImages(id);
                    if(imagesResponse?.data?.images){
                        setImageList(imagesResponse.data.images);

                    }
                }

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
            
                
            }
        }).catch(err => {
            console.log('we have err', err)
        });
    }, [])

    return <div className="single-ad__wrapper">
        
       
        {loading ? <LoadingWrapper /> : <div>
            <SingleAdDisplay id={id} adData={adData} />
            {imageList.length > 0 && <div className="single-ad__images-wrapper">
                <AdGallery images={imageList} root={root} />
            </div>}
        </div>}
      
      
        {/* <Button variant="outline-light" onClick={scrapeAd} className="btn">Scrape ad data</Button> */}

    </div>
}

export default SingleAd