import styled from 'styled-components';

export const NavbarWrapper = styled.div`
  height: 50px;
  background: #003580;
  display: flex;
  justify-content: center;
`;

export const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  color: #ffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

export const NavbarLogo = styled.span`
    font-weight: 500;
`;

export const NavbarBtnWrapper = styled.div``;

export const NavbarButton = styled.button`
  margin-left: 20px;
  border: none;
  padding: 5px 20px;
  color: #235fb2;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
`;
