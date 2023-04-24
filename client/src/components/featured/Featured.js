import React from "react";
import {FeaturedH1, FeaturedH2, FeaturedImg, FeaturedItem, FeaturedTitles, FeaturedWrapper} from "./FeaturedElements";

const Featured = () => {
    return (
        <FeaturedWrapper>
            <FeaturedItem>
                <FeaturedImg src="https://cf.bstatic.com/xdata/images/city/600x600/653082.jpg?k=c161c185c16c0402f72a69272e3757ffa3b45f5a28accb4c07a2c989625132cf&o=" alt=""/>
                <FeaturedTitles>
                  <FeaturedH1>Warsaw</FeaturedH1>
                    <FeaturedH2>Properties 123</FeaturedH2>
                </FeaturedTitles>
            </FeaturedItem>
            <FeaturedItem>
                <FeaturedImg src="https://cf.bstatic.com/xdata/images/city/600x600/613105.jpg?k=1e85cf4dec7b0d5a6327be91c38cf9c1711f9da1a31c4cba736f9cb751443ff1&o=" alt=""/>
                <FeaturedTitles>
                    <FeaturedH1>Roma</FeaturedH1>
                    <FeaturedH2>Properties 123</FeaturedH2>
                </FeaturedTitles>
            </FeaturedItem>
            <FeaturedItem>
                <FeaturedImg src="https://cf.bstatic.com/xdata/images/city/600x600/613088.jpg?k=a370ac3fb385fb211b35a79a42b0e968ddb458be37108af476c558bf4cedc1f3&o=" alt=""/>
                <FeaturedTitles>
                    <FeaturedH1>Paris</FeaturedH1>
                    <FeaturedH2>Properties 123</FeaturedH2>
                </FeaturedTitles>
            </FeaturedItem>
        </FeaturedWrapper>
    )
}


export default Featured;