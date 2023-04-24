import React from 'react';
import {NavbarContainer, NavbarLogo, NavbarWrapper, NavbarBtnWrapper, NavbarButton} from "./NavbarElements";

const Navbar = () => {
    return (
        <NavbarWrapper>
           <NavbarContainer>
               <NavbarLogo>
                   Geniabooking
               </NavbarLogo>
               <NavbarBtnWrapper>
                   <NavbarButton> Register </NavbarButton>
                   <NavbarButton> Login </NavbarButton>
               </NavbarBtnWrapper>
           </NavbarContainer>
       </NavbarWrapper>
    )
}

export default Navbar;