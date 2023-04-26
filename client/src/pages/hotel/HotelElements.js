import styled from 'styled-components';
import React from "react";

export const HotelContainer= styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 30px;
 
`;


export const HotelWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
`;

export const HotelBookBtn = styled.button`
  position: absolute;
  top:10px;
  right: 0;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  padding: 10px 20px;
  background-color: #0071c2;
  color: #fff;
  font-weight: bold;
`;

export const HotelTitle = styled.h1`
  font-size: 25px;
  `;

export const HotelAddressDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const HotelAddress = styled.span``;

export const HotelDistance = styled.span`
  color: #0071c2;
  font-weight: 500;
`;

export const HotelPriceHighLight = styled.span`
  color: #008009;
  font-weight: 500;
`;

export const HotelImages  = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const HotelImgWrapper = styled.div`
  width: 33%;
  cursor: pointer;
`;

export const HotelImg = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const HotelDetails = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
  `;

export const HotelDetailsTexts = styled.div`
flex: 3;
`;

export const HotelDetailsTitle = styled.h1``;

export const HotelPara =styled.p`
font-size: 14px;

`;

export const HotelDetailsPrice = styled.div`
  flex: 1;
  background-color: #d0d7e1;
  padding: 10px 10px 20px 10px;
  display: flex;
  flex-direction: column; 
  gap: 20px;
  
  button {
    border: none;
    border-radius: 3px;
    cursor: pointer;
    padding: 10px 20px;
    background-color: #0071c2;
    color: #fff;
    font-weight: bold;
  }
  
  h1 {
    font-size: 15px;
  }
  span {
    font-size: 14px;
  }
  
  h3 {
    font-size: 13px;
  }
  
`;


export const HotelSlider = styled.div`
  position: sticky;
  top: 0;
  width: 100vh;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 3;
  display: flex;
  align-items: center;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 30px;
  cursor: pointer;
  color: lightgray;
`;
export const IconArrowWrapper = styled.div`
  font-size: 30px;
  padding: 5px;
  cursor: pointer;
  color: lightgray;
`;

export const SliderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SliderImg = styled.img`
  width: 80%;
  height: 80vh;    
  
`;