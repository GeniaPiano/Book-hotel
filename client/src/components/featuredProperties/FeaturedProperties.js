import React from 'react';
import {
    FeaturedPropBtn,
    FeaturedPropCity, FeaturedPropImg, FeaturedPropItem,
    FeaturedPropName,
    FeaturedPropPrice,
    FeaturedPropRating, FeaturedPropSpan,
    FeaturedPropWrapper
} from "./FeaturedProportiesItems";
import useFetch from "../../hooks/useFetch";

const FeaturedProperties = () => {
    const { data,loading, error } = useFetch('/hotels?featured=true');


    return (
        <FeaturedPropWrapper>

            {loading? "loading" : (
                <>
                    { data && data.map(hotel => (
                        <FeaturedPropItem key={hotel._id}>
                            <FeaturedPropImg src={hotel.photos[0]}/>
                            <FeaturedPropName> {hotel.name}</FeaturedPropName>
                            <FeaturedPropCity> {hotel.city} </FeaturedPropCity>
                            <FeaturedPropPrice> Starting from {hotel.cheapestPrice}$ </FeaturedPropPrice>
                            {hotel.rating && <FeaturedPropRating>
                                <FeaturedPropBtn>  {hotel.rating}</FeaturedPropBtn>
                                <FeaturedPropSpan> Excellent </FeaturedPropSpan>
                            </FeaturedPropRating>}
                        </FeaturedPropItem>
                    ))

                    }
                </>
            )}





        </FeaturedPropWrapper>



)
}

export default FeaturedProperties;