import React, {useEffect, useState} from 'react';
import Pagination from 'react-bootstrap/Pagination';
import './Pagination.scss';

function PaginationWrapper({currentPage, totalPages, onSetPage}){

    const [paginationItems, setPaginationItems] = useState([]);

    function getSmartPagination({current, max}) {
        if (!current || !max) return null
    
        let prev = current === 1 ? null : current - 1,
                next = current === max ? null : current + 1,
                items = [1]
    
        if (current === 1 && max === 1) return {current, prev, next, items}
        if (current > 4) items.push("...")
    
        let r = 2, r1 = current - r, r2 = current + r
    
        for (let i = r1 > 2 ? r1 : 2; i <= Math.min(max, r2); i++) items.push(i)
    
        if (r2 + 1 < max) items.push("...")
        if (r2 < max) items.push(max)
    
        return {current, prev, next, items}
    }


    useEffect(() => {
        const smartPagination = getSmartPagination({current: currentPage, max: totalPages});
        console.log('smart pagination', smartPagination)
        setPaginationItems(smartPagination.items);
    }, [currentPage, totalPages])


    return (
        <div>
           <Pagination className="pagination__wrapper">
                {paginationItems.map((item) => {
                    
                    // if the item is "..." set disabled to true
                    const isDisabled = item === "...";
                    const currentItem = item === currentPage;

                    return <Pagination.Item 
                        disabled={isDisabled} 
                        key={item} 
                        onClick={() => onSetPage(item)}
                        active={currentItem}>
                            {item}
                        
                        </Pagination.Item>
                })}
           </Pagination>
        </div>
    )
}

export default PaginationWrapper;