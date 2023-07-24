import React, {useState} from 'react';
import {
    HotelAddress,
    HotelAddressDiv,
    HotelBookBtn,
    HotelContainer,
    HotelDetails,
    HotelDetailsPrice,
    HotelDetailsTexts,
    HotelDetailsTitle,
    HotelDistance,
    HotelImages,
    HotelImg,
    HotelImgWrapper,
    HotelPara,
    HotelPriceHighLight, HotelSlider,
    HotelTitle,
    HotelWrapper, IconArrowWrapper, IconWrapper, SliderImg, SliderWrapper,
} from './HotelElements'
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleLeft, faCircleRight, faCircleXmark, faLocation} from "@fortawesome/free-solid-svg-icons";
// import {photos} from "./photos"
import MailList from "../../components/mailList/MailList";
import useFetch from "../../hooks/useFetch";
import {useLocation} from "react-router-dom";

const Hotel = () => {

    const location = useLocation();
    const id = location.pathname.split('/')[2]
    console.log(id)


    const [sliderNumber, setSliderNumber] = useState(0);
    const [open, setOpen] = useState(false);

    const {data, error, loading} = useFetch(`/hotels/find/${id}`)
    console.log(data)

    const handleOpen = (i) => {
        setSliderNumber(i);
        setOpen(true)
    }
    const handleChangeImg = (direction) => {

        let newSliderNum;
        if (direction === 'left') {
            newSliderNum = sliderNumber === 0 ? data.photos.length - 1 : sliderNumber - 1
        } else {
            newSliderNum = sliderNumber === data.photos.length - 5 ? 0 : sliderNumber + 1
        }

        setSliderNumber(newSliderNum);

        // if (direction === 'right') {
        //     if (sliderNumber === photos.length - 1) {
        //         setSliderNumber(0)
        //     }
        //     else {
        //         setSliderNumber(sliderNumber + 1)
        //     }
        // } else  {
        //     if (sliderNumber === 0) {
        //         setSliderNumber(photos.length - 1)
        //     }
        //     else {
        //         setSliderNumber(sliderNumber - 1)
        //     }}

    }

    return (
        <div>
           <Navbar/>
           <Header type="list"/>
            {loading ? (
                "loading, please wait..."
            ) :  (<HotelContainer>
               {open &&  (<HotelSlider>
                               <IconWrapper>
                                   <FontAwesomeIcon
                                       onClick={() => setOpen(false)}
                                       icon={faCircleXmark} />
                               </IconWrapper>
                               <IconArrowWrapper>
                                   <FontAwesomeIcon
                                       onClick={() => handleChangeImg("left")}
                                       icon={faCircleLeft} />
                               </IconArrowWrapper>
                               <SliderWrapper>
                                   <SliderImg src={data.photos[sliderNumber]}/>
                               </SliderWrapper>
                               <IconArrowWrapper>
                                   <FontAwesomeIcon
                                       onClick={() => handleChangeImg("right")}
                                       icon={faCircleRight} />
                               </IconArrowWrapper>
               </HotelSlider>) }
               <HotelWrapper>
                   <HotelBookBtn>Reserve or Book now</HotelBookBtn>
                   <HotelTitle>{data.name}</HotelTitle>
                   <HotelAddressDiv>
                       <FontAwesomeIcon icon={faLocation}/>
                       <HotelAddress> {data.address} </HotelAddress>
                   </HotelAddressDiv>
                   <HotelDistance>
                       Excellent location {data.distance} from center
                   </HotelDistance>
                   <HotelPriceHighLight>
                       Book a stay over 115$ at this property and get a free airport taxi
                   </HotelPriceHighLight>
                   <HotelImages>
                       { data.photos?.map((photo, i) => (
                           <HotelImgWrapper>
                               <HotelImg onClick={()=> handleOpen(i)} src={photo} alt="photo from booking.com"/>
                           </HotelImgWrapper>
                       ))}
                   </HotelImages>

                   {/*  DETAILS PRICE  */}
                   <HotelDetails>
                       <HotelDetailsTexts>
                           <HotelDetailsTitle> {data.title} </HotelDetailsTitle>
                           <HotelPara> {data.desc} </HotelPara>
                       </HotelDetailsTexts>
                       <HotelDetailsPrice>
                           <h1>Perfect for 9-night stay!</h1>
                           <span>Located in the real heart of Krakow, this property has an excellent location score of 9.8</span>
                           <h3>
                               <b>$780</b> (9 nights)
                           </h3>
                           <button>Book now!</button>
                       </HotelDetailsPrice>
                   </HotelDetails>
               </HotelWrapper>
           </HotelContainer>
            )}

            <MailList/>
            <Footer/>
        </div>
    )
}

export default Hotel;