
import react, {useEffect, useContext} from 'react';
import List from 'components/Pages/AdList/carlist';
import { useParams } from 'react-router-dom'; 

import { FiltersConfigurationContext } from 'context/SettingsContext';


function ModelPage(){

    const { id } = useParams();
    console.log('modal id is', id)

    const predefinedFilterSettings = useContext(FiltersConfigurationContext);
    const filters = predefinedFilterSettings.filters;

    const {model} = predefinedFilterSettings;
    console.log('model filters is ', model);


    useEffect(() => {

    }, [])

    return (
            <List />
      );
}


export default ModelPage;