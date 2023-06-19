import React, {useEffect, useState} from "react";
import { getList } from "../api/admin";


function List(props){

    const [isError, setIsError] = useState(false)

   useEffect(() => {
        setIsError(false);

        getList().then((res) => {
            console.log('we got data')
        }).catch(err => {
            console.log('we have err', err)
            setIsError(true)
        });
   }, [])

    return (
        <div>
            <h2>This is the list</h2>
            {isError && <div>error while getting data</div>}
        </div>
    )
}

export default List