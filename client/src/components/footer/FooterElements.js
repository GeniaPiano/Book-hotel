import styled from 'styled-components';

export const FooterWrapper = styled.div`
 
  width: 100%;  
`;


export const FooterLists = styled.div`   
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px ;
    color: #003580;
  
  @media screen and (max-width: 748px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }   
`;

export const FooterList = styled.ul` 
    list-style: none;
    padding: 0;
`;

export const FooterLi = styled.li`
    cursor: pointer;
  
`;

export const FooterCopyrights  = styled.p`
  text-align: center;
  color: #003580;
`;
