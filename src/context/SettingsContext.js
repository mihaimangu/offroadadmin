import React, {useEffect, useState} from 'react';
import { getTranslations, getFilters } from 'api/admin';

export const TranslationContext = React.createContext();
export const FiltersContext = React.createContext();

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
        <FiltersContext.Provider value={filters}>
            <TranslationContext.Provider value={translations}>
                {children}
            </TranslationContext.Provider>
        </FiltersContext.Provider>
    </>)
}

export default SettingsProvider;