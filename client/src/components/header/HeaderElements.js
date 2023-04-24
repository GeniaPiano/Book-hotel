import styled, { css } from 'styled-components';

export const HeaderWrapper = styled.div`
  background: #003580;
  color: #fff;
  display: flex;
  justify-content: center;
  position: relative;
`

export const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  margin:${({list}) => (list ? '20px 0 0 0' :  '20px 0 100px 0')};
  padding: 0 20px;
    
`

export const HeaderList = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 40px;

`;

export const HeaderListItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap:10px;

 
  ${({ active }) =>
    active &&
    css`
      border: solid 1px #fff;
      border-radius: 20px;
      padding: 20px;
    ` }
  `;

export const HeaderListTitle = styled.span`
  font-size: 13px;
`;

export const HeaderTitleDiv = styled.div`
  max-width: 1024px`;

export const HeaderTitle= styled.h1``;

export const HeaderPara = styled.div`
  margin: 20px 0`;

export const HeaderBtn = styled.button`
  border: none;
  color: #fff;
  background: #0071c2;
  font-weight: 500;
  padding: 10px;
  cursor: pointer;  
`;

export const HeaderSearchDiv = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #fff;
  border: 3px solid #febb02;
  color: lightgray;
  padding: 15px 0;
  border-radius: 5px;
  position: absolute;
  bottom: -25px;
  width: 90%;
  max-width: 1024px;
  

  `;

export const HeaderSearchItem = styled.div`
display: flex;  
gap: 10px;
align-items: center;
`;

export const HeaderInput = styled.input`
  border: none;
  outline: none;
`;

export const HeaderSearchText = styled.span`
  color: lightgray;
  cursor: pointer;
`;

export const HeaderSearchBtn = styled.button`
  background: #0071c2;
  color: white;
  border: none;
  padding:5px 10px;
  cursor: pointer;
`;

export const DateRangeWrapper = styled.span`
  position:absolute;
  border-radius: 5px;
  border: solid 1px lightgray;
  top: 50px;
  z-index: 2;
  
`;

export const HeaderOptionsDiv = styled.div`
  position: absolute;
  top: 50px;
  background: #fff;
  color: gray;
  border-radius: 5px;
  border: solid 1px lightgray;
  padding:10px;
  z-index: 2;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  
`;

export const HeaderOptionsItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  align-items: center;  
  gap: 10px;
`;

export const CounterDiv = styled.div`
  display: flex;
  gap: 5px;
`;

export const OptionTextSpan = styled.span``;

export const OptionCounterButton = styled.button`
  border: none;
  color: gray;
  background: lightgray;
  cursor: pointer;
  border-radius: 3px;
  width: 20px;
  height: 20px;
  
  &:hover {
    background: darkgray;
  }
  
  &:disabled {
    cursor: not-allowed;
  }
`;

export const OptionCounterNumber = styled.span``;


  

  





