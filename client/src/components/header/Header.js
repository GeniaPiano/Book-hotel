import React from 'react';
import {HeaderList, HeaderContainer, HeaderListTitle, HeaderWrapper, HeaderListItem} from "./HeaderElements";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import{faBed, faPlane, faCar, faTaxi, faLandmark} from "@fortawesome/free-solid-svg-icons";


const Header = () => {
    return (
        <HeaderWrapper>
           <HeaderContainer>
               <HeaderList>
                   <HeaderListItem active={true}>
                       <FontAwesomeIcon icon={faBed}  />
                       <HeaderListTitle>Stays</HeaderListTitle>
                   </HeaderListItem>
                   <HeaderListItem>
                       <FontAwesomeIcon icon={faPlane} />
                       <HeaderListTitle>Flights</HeaderListTitle>
                   </HeaderListItem>
                   <HeaderListItem>
                       <FontAwesomeIcon icon={faCar} />
                       <HeaderListTitle>Rent a car</HeaderListTitle>
                   </HeaderListItem>
                   <HeaderListItem>
                       <FontAwesomeIcon icon={faLandmark} />
                       <HeaderListTitle>Attractions</HeaderListTitle>
                   </HeaderListItem>
                   <HeaderListItem>
                       <FontAwesomeIcon icon={faTaxi} />
                       <HeaderListTitle>Taxi</HeaderListTitle>
                   </HeaderListItem>
               </HeaderList>
           </HeaderContainer>
        </HeaderWrapper>

    )
}


export default Header