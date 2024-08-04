import React from 'react';
import './AddNew.scss';

const AddNewPage = () => {
    return (
        <div className="about-page__wrapper">
            <h1>Cum adaug un anunt?</h1>
            <p>masinideteren.ro este o platforma colecteaza anunturi din alte platforme cum ar fi olx sau autovit. Momentan nu este o platforma care gestioneaza propriile anunturi, dar urmeaza</p>
            <p>Am observat ca multe persoane au cerut sa adauge propriul anunt pe platforma (fara sa fie postat pe olx sau autovit). Lucram momentan la aceasta functionalitate, care implica crearea de un cont, de pagina de login, administrare anunturi etc.</p>
            <h3>Am anunt pe alte platforme dar nu apare</h3>
            <p>Daca ai un anunt adaugat pe una dintre aceste platforme si nu apare aici, atunci il putem adauga manual. Tot ce trebuie sa faci este sa completezi un formular. <a className="link" href="https://masinideteren.ro/shop/posteaza/">Click aici pentru formular.</a></p>
          
        </div>
    )
}

export default AddNewPage