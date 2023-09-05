import React, {useState, useEffect, useContext} from 'react';
import Button from 'react-bootstrap/Button';
import {AdminContext} from 'context/AdminContext';
import { CustomListOverview, AdminCustomListsWrapper } from './AdminCustomLists.styled';

function CustomListWrapper({customList}){

    const listLength = customList.items?.length;

    return (
        <CustomListOverview className="custom-list__overview">
            <div>{customList.name}</div>
            <div>{listLength}</div>
        </CustomListOverview>
    )
}


function AdminCustomLists(){

    const {customLists} = useContext(AdminContext);

    return (
        <AdminCustomListsWrapper>
            <h1>Custom lists</h1>
            <div className="custom-list__table">
                {customLists.map((customList, index) => {
                    return <CustomListWrapper key={index} customList={customList} />
                })}
            </div>
           
        </AdminCustomListsWrapper>
    )
}

export default AdminCustomLists;