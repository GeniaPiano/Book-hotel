import React from 'react';
import {
    PropertyImg,
    PropertyListH1, PropertyListH2,
    PropertyListItem,
    PropertyListTitles,
    PropertyListWrapper
} from "./PropertyListElements";

const PropertyList = () => {
    return (
        <PropertyListWrapper>
          <PropertyListItem>
              <PropertyImg src="https://q-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o="/>
              <PropertyListTitles>
                  <PropertyListH1>Hotels</PropertyListH1>
                  <PropertyListH2>123 hotels</PropertyListH2>
              </PropertyListTitles>
          </PropertyListItem>

            <PropertyListItem>
                <PropertyImg src="https://r-xx.bstatic.com/xdata/images/xphoto/263x210/119467716.jpeg?k=63b69100225782d08fbd4d0205bf949c0be894ab946a0366edb8ad48e9c0ef46&o="/>
                <PropertyListTitles>
                    <PropertyListH1>Apartaments</PropertyListH1>
                    <PropertyListH2>123 apartaments</PropertyListH2>
                </PropertyListTitles>
            </PropertyListItem>

            <PropertyListItem>
                <PropertyImg src="https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450097.jpeg?k=eac0f917a53dc395bd379fef8c191e7d5e37012b68e60232e4f6bba2a2901b7a&o="/>
                <PropertyListTitles>
                    <PropertyListH1>Glamping</PropertyListH1>
                    <PropertyListH2>123 glampings</PropertyListH2>
                </PropertyListTitles>
            </PropertyListItem>

            <PropertyListItem>
                <PropertyImg src="https://q-xx.bstatic.com/xdata/images/xphoto/263x210/100235855.jpeg?k=61ef6692e05b5971e2e8dc75687f844e6d0ad295a9a5ace17f7c713f167e61b5&o="/>
                <PropertyListTitles>
                    <PropertyListH1>Villas</PropertyListH1>
                    <PropertyListH2>123 villas</PropertyListH2>
                </PropertyListTitles>
            </PropertyListItem>

            <PropertyListItem>
                <PropertyImg src="https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450074.jpeg?k=7039b03a94f3b99262c4b3054b0edcbbb91e9dade85b6efc880d45288a06c126&o="/>
                <PropertyListTitles>
                    <PropertyListH1>Houses</PropertyListH1>
                    <PropertyListH2>123 houses</PropertyListH2>
                </PropertyListTitles>
            </PropertyListItem>

            <PropertyListItem>
                <PropertyImg src="https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o="/>
                <PropertyListTitles>
                    <PropertyListH1>Agrotouristic</PropertyListH1>
                    <PropertyListH2>123 agrotouristic</PropertyListH2>
                </PropertyListTitles>
            </PropertyListItem>


        </PropertyListWrapper>

    )

}

export default PropertyList;