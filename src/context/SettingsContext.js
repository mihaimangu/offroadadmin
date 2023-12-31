import React, {useEffect, useState} from 'react';
import { getTranslations, getFilters } from 'api/general';

export const TranslationContext = React.createContext();
export const FiltersConfigurationContext = React.createContext();

function SettingsProvider({children}){
    const [translations, setTranslations] = useState({});
    const [filters, setFilters] = useState({});
  
    useEffect(() => {
        const fetchTranslations = async() => {
            const response = await getTranslations();
            const {translations} = response.data;
            setTranslations(translations);

        }
        fetchTranslations();
    }, []);

    useEffect(() => {
        const fetchFilters = async() => {
            const response = await getFilters();
            const {filters} = response.data;

            if(filters){
                let filterObject = {};
                filters.map(filter => {
                    const {filterName, ...filterData } = filter;
                    filterObject[filterName] = filterData;
                })
    
                setFilters(filterObject);
            }

        
        }
        fetchFilters();
    }, [])

    return (<>
        <FiltersConfigurationContext.Provider value={filters}>
            <TranslationContext.Provider value={translations}>
                {children}
            </TranslationContext.Provider>
        </FiltersConfigurationContext.Provider>
    </>)
}

export default SettingsProvider;