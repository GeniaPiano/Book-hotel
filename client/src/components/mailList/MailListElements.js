import styled from 'styled-components';

export const MailListWrapper = styled.div`
  width: 100%;
  margin-top: 50px;
  background-color: #003580;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
`;

export const MailListTitle = styled.h1``;

export const MailListPara = styled.div``;

export const MailListDiv = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const MailListInput = styled.input`
  width: 300px;
  height: 30px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  
  @media screen and (max-width: 948px) {
    width:200px;
  }
  
`;

export const MailListBtn = styled.button`
  height: 30px;
  border: none;
  color: #fff;
  font-weight: 500;
  background-color: #0071c2;
  cursor: pointer;
  border-radius: 5px;
`;
