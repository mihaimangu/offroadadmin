import React, {useState, useEffect, useContext} from 'react';
import Button from 'react-bootstrap/Button';
import {AdminContext} from 'context/AdminContext';
import { CustomListOverview, AdminCustomListsWrapper } from './AdminCustomLists.styled';
import AddNewCustomListModal from 'components/Organisms/AddNewListModal/AddNewCustomListModal.jsx'
import { addNewCustomList } from 'api/general';

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
    const [showModal, setShowModal] = useState(false);

    const submitNewList = (value) => {
        console.log('submitting new list', value);
        addNewCustomList(value).then(() =>{
            console.log('list added');
        }).catch(err => {
            console.log('error adding list');
        });
    }   

    return (
        <AdminCustomListsWrapper>
            <h1>Custom lists</h1>
            <div className="custom-list__table">
                {customLists.map((customList, index) => {
                    return <CustomListWrapper key={index} customList={customList} />
                })}
            </div>
            <Button className="custom-list__new-btn" onClick={() => setShowModal(true)}>
                Add new custom list
            </Button>
            <AddNewCustomListModal show={showModal} onClose={() => {setShowModal(false)}} onSubmit={submitNewList} />
           
        </AdminCustomListsWrapper>
    )
}

export default AdminCustomLists;