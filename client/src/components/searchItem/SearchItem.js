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

const SearchItem = () => {
    return (
        <SearchItemWrapper>
            <SearchItemImg src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/336582651.jpg?k=0fdfe51cc39d5b60ae98bb3b35fa23e029b21cbfa9d38a1de163d7915a0bda0f&o=&hp=1"/>
            <SearchItemInfo>
                <SiTitle>Tower Street Apartment</SiTitle>
                <SiDistance>500m from center</SiDistance>
                <SiTaxiOption> Free airport taxi </SiTaxiOption>
                <SiSubtitle>Studio Apartment with Iar Conditioning</SiSubtitle>
                <SiFeatures>
                    Entire studio • 1 bathroom • 21m2 1 full bed
                </SiFeatures>
                <SiCancelOption> Free cancellation</SiCancelOption>
                <SiCancelOptionSubtitle> You can cancel later so lock in great price today</SiCancelOptionSubtitle>
            </SearchItemInfo>
            <SearchItemDetails>
                <SiRatingDiv>
                    <RatingSpan>Excellent</RatingSpan>
                    <RatingBtn>8.9</RatingBtn>
                </SiRatingDiv>
                <SiDetailTexts>
                    <PriceSpan>155 $</PriceSpan>
                    <PricesSpanTaxOption> Includes taxes and fees </PricesSpanTaxOption>
                    <SiDetailsBtn> See Availability </SiDetailsBtn>
                </SiDetailTexts>
            </SearchItemDetails>
        </SearchItemWrapper>
    )
}

export default SearchItem;