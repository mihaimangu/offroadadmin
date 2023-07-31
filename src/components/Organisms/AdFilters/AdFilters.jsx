import React, {useState, useContext} from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './AdFilters.scss';

import { FiltersContext } from 'context/SettingsContext';

function SelectList({initialStateText, values, ariaLabel = 'default example', onSelect}) {
    return (
      <Form.Select aria-label={ariaLabel}   onChange={(e) => onSelect(e.target.value)}>
        <option value="" disabled defaultValue={initialStateText}>{initialStateText}</option>
        {values.map((value) => {
            return <option key={value}>{value}</option>
        })}
      </Form.Select>
    );
  }
  

const AdFilters = ({onSearch}) => {
    let [searchSettings, setSearchSettings] = useState({})
    const predefinedFilterSettings = useContext(FiltersContext);
    const {model} = predefinedFilterSettings;

    const updateSearchProperty = (property, value) => {
        setSearchSettings({...searchSettings, [property]: value})
    }

    const searchAdsWithExistingConfiguration = () => {
        onSearch(searchSettings)
    }
    
    return (
        <div className="filter-ads__wrapper">
            
            <Form>
                <div className="filter-ads__row">
                    <Form.Group className="filter-ads__input-group">
                        <Form.Label className="filter-ads__group-label">Pret de la</Form.Label>
                        <Form.Control type="number" placeholder="Pret de la" onChange={(e) => updateSearchProperty('priceFrom', e.target.value)} />
                    </Form.Group>
                    <Form.Group  className="filter-ads__input-group">
                        <Form.Label className="filter-ads__group-label">Pret pana la</Form.Label>
                        <Form.Control type="number" placeholder="Pret pana la" onChange={(e) => updateSearchProperty('priceTo', e.target.value)} />
                    </Form.Group>
                </div>
                <div className="filters-ads__row">
                    {model && <div className="filter-ads__group">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="filter-ads__group-label">Modelul</Form.Label>
                            <SelectList initialStateText="Selecteaza modelul" values={model.allowedValues} onSelect={(value) => updateSearchProperty('model', value)} />
                        </Form.Group>
                    </div>}
                </div>
               
            </Form>
            <Button onClick={() => searchAdsWithExistingConfiguration(searchSettings)} className="filter-ads__search-btn" >Cauta anunturi</Button>
        </div>
    );
}

export default AdFilters;