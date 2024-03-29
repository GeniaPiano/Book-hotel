import styled from 'styled-components';
import { Link } from 'react-router-dom';


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
  display: flex;
  flex-direction: column;
  justify-content: space-between ;
`;

export const SiRatingDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  
`;

export const RatingSpan = styled.span`
  font-weight: 500;
  padding-top: 18px;
`;

export const RatingBtn = styled.button`
  background-color: #003580;
  color: #fff;
  padding: 5px;
  font-weight: bold;
  border: none;  
  `;

export const SiDetailTexts = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 5px; 
`;

export const PriceSpan = styled.span`
  font-size: 24px;
  color: gray;
`;

export const PricesSpanTaxOption = styled.span``;

export const SiDetailsBtn = styled(Link)`
  background-color: #0071c2;
  color: #fff;
  border: none;
  padding: 10px 5px;
  cursor: pointer;
  border-radius: 5px;
`;

