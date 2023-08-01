import React from 'react';
import { Carousel } from 'react-responsive-carousel';


function AdCarousel({images, root}){

    return (
        <div className="ad-carousel__wrapper">
            {images.length > 0 && <div className="single-ad__images-wrapper">
            <Carousel>
                {images.map((image, index) => {
                    return <div className="single-ad__carousel-image" key={index}>
                        <img src={`${root}/${image}`} alt="ad image" />
                    </div>
                })}  
            </Carousel>
            </div>}
        </div>
    )
}

export default AdCarousel;