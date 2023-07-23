import React, {useEffect, useState} from 'react';
import { getTranslations } from 'api/admin';

export const TranslationContext = React.createContext();


function SettingsProvider({children}){
    const [translations, setTranslations] = useState({});
  
    useEffect(() => {
        console.log("fetching translations")
        const fetchTranslations = async() => {
        const response = await getTranslations();
        const {translations} = response.data;
        setTranslations(translations);

        }
        fetchTranslations();
    }, []);

    return (<>
        <TranslationContext.Provider value={translations}>
            {children}
        </TranslationContext.Provider>
    </>)
}

export default SettingsProvider;