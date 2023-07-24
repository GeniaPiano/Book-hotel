import React from "react";
import {FeaturedH1, FeaturedH2, FeaturedImg, FeaturedItem, FeaturedTitles, FeaturedWrapper} from "./FeaturedElements";
import useFetch from "../../hooks/useFetch";
import {images} from "./imagesFeatured"

const Featured = () => {
const {data, loading, error } = useFetch('/hotels/countByCity?cities=warsaw,roma,paris')


    return (
        <FeaturedWrapper>

                <FeaturedItem>
                    <FeaturedImg src={images[0]} alt=""/>
                    <FeaturedTitles>
                        <FeaturedH1>Warsaw</FeaturedH1>
                        <FeaturedH2> {data[0]} properties </FeaturedH2>
                    </FeaturedTitles>
                </FeaturedItem>


                <FeaturedItem>
                    <FeaturedImg src={images[1]} alt=""/>
                    <FeaturedTitles>
                        <FeaturedH1>Roma</FeaturedH1>
                        <FeaturedH2> {data[1]} properties </FeaturedH2>
                    </FeaturedTitles>
                </FeaturedItem>
                <FeaturedItem>
                    <FeaturedImg src={images[2]} alt=""/>
                    <FeaturedTitles>
                        <FeaturedH1>Paris</FeaturedH1>
                        <FeaturedH2> {data[2]} properties </FeaturedH2>
                    </FeaturedTitles>
                </FeaturedItem>

        </FeaturedWrapper>
    )
}


export default Featured;