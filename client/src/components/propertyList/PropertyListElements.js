import styled from 'styled-components';

export const PropertyListWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

export const PropertyListItem = styled.div`
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  flex: 1;
`;

export const PropertyImg = styled.img`
    width: 100%;
    height: 150px;
    object-fit: cover;
`;

export const PropertyListTitles = styled.div``;

export const PropertyListH1 = styled.h1`
  font-size: 18px;
  text-transform: capitalize;
  
`;

export const PropertyListH2 = styled.h2`
  font-size: 12px; 
  font-weight: 300;

`;

