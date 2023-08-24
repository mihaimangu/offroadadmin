import React, {useState, useContext} from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './AdFilters.scss';

import { FiltersConfigurationContext } from 'context/SettingsContext';
import { FiltersContext } from 'context/FiltersContext';
import { FaSearch } from "react-icons/fa";


function SelectList({ initialStateText, values, currentValue, ariaLabel = 'default example', onSelect}) {
    return (
      <Form.Select aria-label={ariaLabel} value={currentValue || "selecteaza"} onChange={(e) => onSelect(e.target.value)}>
        <option value="selecteaza" disabled>{initialStateText}</option>
       
        {values.map((value) => {
             const isSelected = currentValue === value;
            return isSelected ? <option selected key={value} value={value}>{value}</option> : <option key={value} value={value}>{value}</option>
        })}
      </Form.Select>
    );
  }
  

const AdFilters = ({onSearch, onReset}) => {
    const {searchSettings, updateSearchSettings, resetSearchSettings, isInitialState} = useContext(FiltersContext);
    const predefinedFilterSettings = useContext(FiltersConfigurationContext);
    const {model} = predefinedFilterSettings;

    const updateSearchProperty = (property, value) => {
        updateSearchSettings(property, value)
    }

    const searchAdsWithExistingConfiguration = () => {
        onSearch(searchSettings)
    }

    const resetFilters = () => {
        resetSearchSettings();
        onReset();
      
      }
    
    return (
        <div className="filter-ads__wrapper">
            
            <Form>
                <div className="filter-ads__row">
                    <Form.Group className="filter-ads__input-group">
                        <Form.Label className="filter-ads__group-label">Pret de la</Form.Label>
                        <Form.Control type="number" placeholder="Pret de la" value={searchSettings.priceFrom} onChange={(e) => updateSearchProperty('priceFrom', e.target.value)} />
                    </Form.Group>
                    <Form.Group  className="filter-ads__input-group">
                        <Form.Label className="filter-ads__group-label">Pret pana la</Form.Label>
                        <Form.Control type="number" placeholder="Pret pana la" value={searchSettings.priceTo} onChange={(e) => updateSearchProperty('priceTo', e.target.value)} />
                    </Form.Group>
                </div>
                <div className="filters-ads__row">
                    {model && <div className="filter-ads__group">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="filter-ads__group-label">Modelul</Form.Label>
                            <SelectList initialStateText="Selecteaza modelul" currentValue={searchSettings.model}   values={model.allowedValues} onSelect={(value) => updateSearchProperty('model', value)} />
                        </Form.Group>
                    </div>}
                </div>
               
            </Form>

            <div className="filter-ads__buttons">
                <Button onClick={() => searchAdsWithExistingConfiguration(searchSettings)} className="filter-ads__search-btn" ><FaSearch />Aplica filtre</Button>
               <Button disabled={isInitialState} onClick={resetFilters} className="filter-ads__search-btn" >Reseteaza</Button>

            </div>

        </div>
    );
}

export default AdFilters;