import React from 'react';

function PintAd(){
    const href = "https://event.2performant.com/events/click?ad_type=banner&unique=4a4af8ef9&aff_code=111f66091&campaign_unique=4ae47c7ef"
    const src = "https://img.2performant.com/system/paperclip/banner_pictures/pics/91767/original/91767.jpg"

    return (
        <div className="cars-list__single-ad pint-ad">
                <a href={href} target="_blank" rel="nofollow" >
    
                    <img src={src} alt="pint" />
                </a>

            

        </div>
    )
}

export default PintAd;