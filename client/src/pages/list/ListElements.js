import styled from 'styled-components';

export const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const ListWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  gap: 20px;  
`;

export const ListSearch = styled.div`
  flex: 1;
  background-color: #febb02;
  padding: 10px;
  border-radius: 10px;
  position:sticky;
  top: 10px;
  
`;

export const ListSearchH1 = styled.h1`
  font-size: 20px;
  color: grey;
  margin-bottom: 20px;  
`;

export const ListSearchItemDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 10px;
  
`;

export const LsOptionList = styled.div`
  padding: 10px;
`

export const ListSearchLabel = styled.label`
  font-size: 12px;
`;

export const ListSearchInput = styled.input`
  border: none;
  padding: 4px;
  height: 30px;
`;

export const ListSpan = styled.span`
  border: none;
  font-size: 12px ;
  color: grey;
  padding: 4px;
  height: 30px;
  background: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
  `;


export const ListDateRangeWrapper = styled.span`
  position:absolute;
  border-radius: 5px;
  border: solid 1px lightgray;
  top: 50px;
  z-index: 2;
`
export const LsItem =  styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  color:#555;
  
`;

export const LsOptionText = styled.span``;

export const LsOptionInput = styled.input`
  border: none;
  width: 50px
`;

export const ListSearchButton = styled.button`
  border: none;
  background-color: #0071c2;
  color: #fff;
  padding: 10px;  
  font-weight: 500;
  cursor: pointer;
  width: 100%;
`;

export const ListResult = styled.div`
  flex: 3;
  display: flex;  
  flex-direction: column;
  gap: 20px;
`;










