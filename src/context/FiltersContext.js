import React, {useEffect, useState} from 'react';

const initialState = {
    priceFrom: "",
    priceTo: "",
    model: "",
    yearBuildFrom: "",
    yearBuildTo: "",
};
export const FiltersContext = React.createContext();

function FiltersProvider({children}){
    let [searchSettings, setSearchSettings] = useState(initialState);
    const [currentPage, setCurrentPage] = useState(1);
    const [isInitialState, setIsInitialState] = useState(true);



    const updateSearchSettings = (property, value) => {
        setSearchSettings({...searchSettings, [property]: value});
        setIsInitialState(false);
    }

    const resetSearchSettings = async () => {
        setSearchSettings(initialState);
        setCurrentPage(1);
        setIsInitialState(true);
    }

    return (
        <FiltersContext.Provider value={{initialState, searchSettings, isInitialState, currentPage, setCurrentPage, updateSearchSettings, resetSearchSettings}}>
            {children}
        </FiltersContext.Provider>
    )
}

export default FiltersProvider;