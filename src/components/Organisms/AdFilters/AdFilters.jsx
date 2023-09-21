import React, {useState, useContext, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
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
    const location = useLocation();
    const {pathname} = location;
    const locationContainsAdmin = pathname.includes('admin');

    const {searchSettings, updateSearchSettings, resetSearchSettings, isInitialState, isExpanded, setIsExpanded} = useContext(FiltersContext);
    const predefinedFilterSettings = useContext(FiltersConfigurationContext);
    const {model, fuelType, county} = predefinedFilterSettings;

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
    

    if(!isExpanded){
        return (
            <div className="filter-ads__wrapper">
                <Button onClick={() => setIsExpanded(true)} className="filter-ads__search-btn" >Filtreaza anunturi</Button>
            </div>
        )
    }
    

    return (
        <div className="filter-ads__wrapper">
            
            <div className="filter-ads__column">
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
                <div className="filter-ads__row">
                    {fuelType && <div className="filter-ads__group">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="filter-ads__group-label">Combustibil</Form.Label>
                            <SelectList initialStateText="Selecteaza combustibil" currentValue={searchSettings.fuelType} values={fuelType.allowedValues} onSelect={(value) => updateSearchProperty('fuelType', value)} />
                        </Form.Group>
                    </div>}
                </div>
            </div>
            <div className="filter-ads__column">
                <div className="filter-ads__row">
                    <Form.Group className="filter-ads__input-group">
                        <Form.Label className="filter-ads__group-label">An de la</Form.Label>
                        <Form.Control type="number" placeholder="An de la" value={searchSettings.yearBuildFrom} onChange={(e) => updateSearchProperty('yearBuildFrom', e.target.value)} />
                    </Form.Group>
                    <Form.Group className="filter-ads__input-group">
                        <Form.Label className="filter-ads__group-label">An pana la</Form.Label>
                        <Form.Control type="number" placeholder="An pana la" value={searchSettings.yearBuildTo} onChange={(e) => updateSearchProperty('yearBuildTo', e.target.value)} />
                    </Form.Group>
                </div>
                <div className="filter-ads__row">
                    {model && <div className="filter-ads__group">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="filter-ads__group-label">Modelul</Form.Label>
                            <SelectList initialStateText="Selecteaza modelul" currentValue={searchSettings.model} values={model.allowedValues} onSelect={(value) => updateSearchProperty('model', value)} />
                        </Form.Group>
                    </div>}
                </div>
            
            </div>
            {locationContainsAdmin && <div className="filter-ads__column">
                <div className="filter-ads__row">
                    <Form.Group className="filter-ads__input-group">
                        <Form.Label className="filter-ads__group-label">Motor de la</Form.Label>
                        <Form.Control type="number" placeholder="Capacitate de la" value={searchSettings.engineCapacityFrom} onChange={(e) => updateSearchProperty('engineCapacityFrom', e.target.value)} />
                    </Form.Group>
                    <Form.Group className="filter-ads__input-group">
                        <Form.Label className="filter-ads__group-label">Motor pana la</Form.Label>
                        <Form.Control type="number" placeholder="Capacitate pana la" value={searchSettings.engineCapacityTo} onChange={(e) => updateSearchProperty('engineCapacityTo', e.target.value)} />
                    </Form.Group>
                </div>
                {county && <Form.Group className="filter-ads__input-group">
                    <Form.Label className="filter-ads__group-label">Judet</Form.Label>
                    <SelectList initialStateText="Selecteaza judet" currentValue={searchSettings.county} values={county.allowedValues} onSelect={(value) => updateSearchProperty('county', value)} />
                </Form.Group>}
            </div>}
            <div className="filter-ads__column">
                <div className="filter-ads__buttons">
                    <Button disabled={isInitialState} onClick={resetFilters} className="filter-ads__search-btn" >Reseteaza</Button>
                    <Button onClick={() => searchAdsWithExistingConfiguration(searchSettings)} className="filter-ads__search-btn" ><FaSearch />Aplica filtre</Button>
                </div>
            </div>
         
            
        </div>
    );
}

export default AdFilters;