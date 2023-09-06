import styled from 'styled-components';

export const CustomListOverview = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const CustomListName = styled.div`
  font-weight: bold;
`;

export const CustomListLength = styled.div`
  color: #666;
`;

export const AdminCustomListsWrapper = styled.div`
    /* display: flex; */
    .custom-list__table{
        display: flex;
        flex-direction: column;
    }
    .custom-list__new-btn{
        width: 100%;
    }
`;