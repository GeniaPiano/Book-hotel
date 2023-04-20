import styled, { css } from 'styled-components';

export const HeaderWrapper = styled.div`
  background: #003580;
  color: #fff;
  display: flex;
  justify-content: center;
`

export const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  margin:20px 0 100px 0;
    
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

  

  





