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
import {photos} from "./photos"
import MailList from "../../components/mailList/MailList";

const Hotel = () => {

    const [sliderNumber, setSliderNumber] = useState(0);
    const [open, setOpen] = useState(false);
    const handleOpen = (i) => {
        setSliderNumber(i);
        setOpen(true)
    }
    const handleChangeImg = (direction) => {

        let newSliderNum;
        if (direction === 'left') {
            newSliderNum = sliderNumber === 0 ? photos.length - 1 : sliderNumber - 1
        } else {
            newSliderNum = sliderNumber === photos.length - 5 ? 0 : sliderNumber + 1
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
           <HotelContainer>
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
                                   <SliderImg src={photos[sliderNumber].src}/>
                               </SliderWrapper>
                               <IconArrowWrapper>
                                   <FontAwesomeIcon
                                       onClick={() => handleChangeImg("right")}
                                       icon={faCircleRight} />
                               </IconArrowWrapper>
               </HotelSlider>) }
               <HotelWrapper>
                   <HotelBookBtn>Reserve or Book now</HotelBookBtn>
                   <HotelTitle> Aparthotel Stare Miasto</HotelTitle>
                   <HotelAddressDiv>
                       <FontAwesomeIcon icon={faLocation}/>
                       <HotelAddress> Gołębia 2, Stare Miasto, 31-007 Kraków, Polska</HotelAddress>
                   </HotelAddressDiv>
                   <HotelDistance>
                       Excellent location 500m from center
                   </HotelDistance>
                   <HotelPriceHighLight>
                       Book a stay over 115$ at this property and get a free airport taxi
                   </HotelPriceHighLight>
                   <HotelImages>
                       { photos.map((photo, i) => (
                           <HotelImgWrapper>
                               <HotelImg onClick={()=> handleOpen(i)} src={photo.src} alt="photo from booking.com"/>
                           </HotelImgWrapper>
                       ))}
                   </HotelImages>
                   <HotelDetails>
                       <HotelDetailsTexts>
                           <HotelDetailsTitle> Stay in the heart of Krakow </HotelDetailsTitle>
                           <HotelPara>
                               You are entitled to a Genius discount at the Aparthotel Stare Miasto! All you have to do to save money at this property is log in.

                               Aparthotel Stare Miasto is located in the heart of Kraków's Old Town, just 120 meters from the Main Market Square. It offers spacious, modern apartments with free Wi-Fi.
                               Aparthotel Stare Miasto is housed in a historic building. It is decorated with brick walls and wooden elements.

                               All apartments at Aparthotel Stare Miasto are air conditioned and feature an LCD TV. Each has a fully equipped kitchenette with a fridge and an electric kettle. Guests can purchase tickets and obtain tourist information at the 24-hour reception.

                               Aparthotel Stare Miasto is 900 meters from the Wawel Castle. There are many restaurants and cafés in the area. Kraków Główny Railway Station and Galeria Krakowska Shopping Center are just 1.6 km away.

                               This is our guests' favorite part of Krakow, according to independent reviews.

                           </HotelPara>
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

            <MailList/>
            <Footer/>
        </div>
    )
}

export default Hotel;