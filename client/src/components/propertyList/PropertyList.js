import React from 'react';
import {
    PropertyImg,
    PropertyListH1, PropertyListH2,
    PropertyListItem,
    PropertyListTitles,
    PropertyListWrapper
} from "./PropertyListElements";
import useFetch from "../../hooks/useFetch";
import {images} from "./images";

const PropertyList = () => {
    const {data, loading, error } = useFetch('/hotels/countByType')


    return (
        <PropertyListWrapper>

            { loading ? (
                "loading"
                ) : (
                    <>
                        {data && images.map((img, i) => (
                            <PropertyListItem key={i}>
                                <PropertyImg src={img} alt=""/>
                                <PropertyListTitles>
                                    <PropertyListH1> {data[i]?.type}  </PropertyListH1>
                                    <PropertyListH2>{data[i]?.count} {data[i]?.type} </PropertyListH2>
                                </PropertyListTitles>
                            </PropertyListItem>
                         ))
                        }
            </> ) }

        </PropertyListWrapper>

    )

}

export default PropertyList;