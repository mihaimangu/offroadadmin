import React from 'react';
import ImgTricouri from 'images/cumpara-tricouri.jpg'

function PintAd(){
    const href = "https://masinideteren.ro/shop"

    return (
        <div className="cars-list__single-ad pint-ad">
            <a href={href} target="_blank" rel="nofollow" >
                <img src={ImgTricouri} alt="ad-tricouri" />
            </a>
        </div>
    )
}

export default PintAd;