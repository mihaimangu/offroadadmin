import React from 'react';
import "react-image-gallery/styles/scss/image-gallery.scss";
import ImageGallery from "react-image-gallery";


function AdGallery({images, root}){

    const allItems = images.map((image, index) => {
        return {
            original: `${root}/${image}`,
            thumbnail: `${root}/${image}`,
        
        }
    })

    return (
        <div className="ad-carousel__wrapper">
            {images.length > 0 && <div className="single-ad__images-wrapper">
                <ImageGallery items={allItems}  />
            </div>}
        </div>
    )
}

export default AdGallery;