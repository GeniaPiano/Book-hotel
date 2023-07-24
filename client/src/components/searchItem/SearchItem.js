import React from 'react';
import {
    PriceSpan, PricesSpanTaxOption,
    RatingBtn,
    RatingSpan,
    SearchItemDetails,
    SearchItemImg,
    SearchItemInfo,
    SearchItemWrapper, SiCancelOption, SiCancelOptionSubtitle, SiDetailsBtn, SiDetailTexts,
    SiDistance, SiFeatures, SiRatingDiv,
    SiSubtitle,
    SiTaxiOption,
    SiTitle
} from "./SearchItemElements";

const SearchItem = ({hotel}) => {
    return (
        <SearchItemWrapper>
            <SearchItemImg src={hotel.photos[0]}/>
            <SearchItemInfo>
                <SiTitle>{hotel.name}</SiTitle>
                <SiDistance>{hotel.distance}</SiDistance>
                <SiTaxiOption>{hotel.title} </SiTaxiOption>
                <SiSubtitle>Studio Apartment with Iar Conditioning</SiSubtitle>
                <SiFeatures>
                    {hotel.desc}
                </SiFeatures>
                <SiCancelOption> Free cancellation</SiCancelOption>
                <SiCancelOptionSubtitle> You can cancel later so lock in great price today</SiCancelOptionSubtitle>
            </SearchItemInfo>
            <SearchItemDetails>
                {hotel.rating && <SiRatingDiv>
                    <RatingSpan>Excellent</RatingSpan>
                    <RatingBtn>{hotel.rating}</RatingBtn>
                </SiRatingDiv> }
                <SiDetailTexts>
                    <PriceSpan> {hotel.cheapestPrice} $</PriceSpan>
                    <PricesSpanTaxOption> Includes taxes and fees </PricesSpanTaxOption>
                    <SiDetailsBtn to={`/hotels/${hotel._id}`}> See Availability </SiDetailsBtn>
                </SiDetailTexts>
            </SearchItemDetails>
        </SearchItemWrapper>
    )
}

export default SearchItem;