import styled from 'styled-components';

export const  SearchItemWrapper = styled.div`
  border: solid 1px gray;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const SearchItemImg = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover; 
`;

export const SearchItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 2;
`;

export const SiTitle = styled.h1`
  font-size: 20px;
  color: #0071c2;
`;

export const SiDistance = styled.span`
 font-size: 12px;
`;

export const SiTaxiOption = styled.span`
  font-size: 12px;
  background-color: #008009;
  color: #fff;
  width: max-content;
  padding: 3px;
  border-radius: 3px;
  
`;

export const SiSubtitle = styled.span`
font-weight: bold;
`;

export const SiFeatures = styled.span`
 font-size: 12px;
   
`;

export const SiCancelOption = styled.span`
  font-size: 12px;
  color: #008009;
  font-weight: bold;
`;

export const SiCancelOptionSubtitle = styled.span`
  font-size: 12px;
  color: #008009;

`;

export const SearchItemDetails = styled.div`
  flex: 1;
`;