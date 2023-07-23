import React, {useEffect, useState} from 'react';
import Pagination from 'react-bootstrap/Pagination';

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

    const getPaginationItems = (currentPage, totalPages) => {
        // This function takes the currentPage and the totalNumber of pages and returns the pagination items
        // if there are at least 3 pages, it should return the first, the last and the current page       
        
        // if there are less than 3 pages, it should return all the pages
        // return all these items as an array of objects

        const lastPageNumber = totalPages;

        let paginationItems = [];
        if(totalPages < 3){
            for(let i = 1; i <= totalPages; i++){
                paginationItems.push({number: i, active: i === currentPage})
            }
        } else if (totalPages >= 3){
            paginationItems.push({number: 1, active: currentPage === 1});
            paginationItems.push({number: 2, active: currentPage === 2});

            // if there is a difference of more than 2 items between the first item and the current item, we need to add the ... item
            if(currentPage - 2 > 1){
                paginationItems.push({number: '...', active: false});
            }

            // push the current item
            paginationItems.push({number: currentPage, active: true});

            // if the next item is not the last item, add it
            if(currentPage + 1 < lastPageNumber){
                paginationItems.push({number: currentPage + 1, active: false});
            }
            
            // if there is a difference of more than 2 items between the current item and the last item, we need to add the ... item
            if(currentPage + 2 < lastPageNumber){
                paginationItems.push({number: '...', active: false});
            }

          
    
            paginationItems.push({number: lastPageNumber, active: currentPage === lastPageNumber});
        }


        return paginationItems;
    
    }

    useEffect(() => {
        const smartPagination = getSmartPagination({current: currentPage, max: totalPages});
        console.log('smart pagination', smartPagination)
        setPaginationItems(smartPagination.items);
    }, [currentPage, totalPages])


    return (
        <div>
           <Pagination>
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