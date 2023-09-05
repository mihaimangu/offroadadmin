import React, {useState, useEffect} from 'react';
import { getAllCustomLists } from 'api/general';

export const AdminContext = React.createContext();

function AdminProvider({children}){
    const [customLists, setCustomLists] = useState([]);

    const fetchCustomLists = async() => {
        const response = await getAllCustomLists();
        const {lists} = response.data;
        if(lists){
            console.log('we have custom lists', lists)
            setCustomLists(lists);
        } else {
            console.log('no custom lists')
        }
    }

    useEffect(() => {
        fetchCustomLists();
    }, [])

    // ToDo: fetch the custom lists only if the user is admin

    return (<>
        <AdminContext.Provider value={{customLists}}>
            {children}
        </AdminContext.Provider>

    </>)
}

export default AdminProvider