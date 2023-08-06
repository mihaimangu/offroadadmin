import React from 'react';
import './About.scss';
import ImgVitara from 'images/mihaivitaraoptimized.jpg'

const AboutPage = () => {
    return (
        <div className="about-page__wrapper">
            <h1>Despre masinideteren.ro</h1>
            <p>masinideteren.ro este o platforma care isi propune sa adune anunturi cu masini offroad din Romania si sa le afiseze intr-un singur loc, in beneficiul celor care sunt interesati de astfel de masini.</p>
            <h2>Cine este in spatele proiectului?</h2>
            <p>Eu sunt Mihai si ca si tine, sunt pasionat de masini de teren. Am inceput hobby-ul asta acum cativa ani cu un suzuki vitara in 4 usi. </p>
            <img src={ImgVitara} alt="Mihai Vitara masinideteren.ro"></img>
            <h2>Cum a inceput proiectul?</h2>
            <p>Am inceput proiectul pentru ca eu mereu intram pe OLX sau Autovit sa vad ce mai este de vanzare si cam la ce preturi mai merg masinile. De profesie sunt programator, asa ca natural m-am gandit sa fac un robot prin care sa scanez piata in mod automat.</p>
            <h2>Metode de contact</h2>
            <p>Daca ai un mesaj de trimis, te rog sa scrii pe instagram sau tiktok la @masinideteren</p>
        </div>
    )
}

export default AboutPage