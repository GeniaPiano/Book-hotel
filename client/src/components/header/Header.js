import React, {useState} from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {
    HeaderList,
    HeaderContainer,
    HeaderListTitle,
    HeaderWrapper,
    HeaderListItem,
    HeaderTitleDiv,
    HeaderPara,
    HeaderTitle,
    HeaderBtn,
    HeaderSearchDiv,
    HeaderSearchItem,
    HeaderInput,
    HeaderSearchText,
    HeaderSearchBtn,
    DateRangeWrapper,
    HeaderOptionsDiv,
    HeaderOptionsItem,
    OptionTextSpan,
    OptionCounterButton,
    OptionCounterNumber, CounterDiv
} from "./HeaderElements";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBed, faPlane, faCar, faTaxi, faLandmark, faCalendarDays, faPerson} from "@fortawesome/free-solid-svg-icons";
import {format} from "date-fns";
import {useNavigate} from "react-router-dom";



const Header = ({type}) => {
    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    })
    const navigate = useNavigate();

    const handleCounter = (name, operation) =>{
      setOptions((prev) => {
          return{
          ...prev,
          [name]: operation === 'plus' ? options[name]++ : options[name]--
      }})
    }


    const handleSearch = () => {
    navigate('/hotels', {state: {
        destination, date, options
        }})
    }

    return (
        <HeaderWrapper>
           <HeaderContainer  >
               <HeaderList >
                   <HeaderListItem active={true}>
                       <FontAwesomeIcon icon={faBed}  />
                       <HeaderListTitle>Hotels</HeaderListTitle>
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

               { type !== 'list' &&

                   <> <HeaderTitleDiv>
                   <HeaderTitle>
                       Your home is where you are.
                   </HeaderTitle>
                   <HeaderPara>
                       Get instant discounts. Unlock instant savings of 10% discount with free Geniabooking account.
                   </HeaderPara>
                   <HeaderBtn> Sign in/ Register </HeaderBtn>
               </HeaderTitleDiv>

               <HeaderSearchDiv>
                   <HeaderSearchItem>
                       <FontAwesomeIcon icon={faBed}  />
                       <HeaderInput
                           type="text"
                           placeholder="what is you destination?"
                           onChange={e=>setDestination(e.target.value)}     />
                   </HeaderSearchItem>
                   <HeaderSearchItem>
                       <FontAwesomeIcon icon={faCalendarDays}  />
                       <HeaderSearchText onClick={() => setOpenDate(!openDate)} >
                           {`from ${format(date[0].startDate, "dd/mm/yyyy")} to 
                            ${format(date[0].endDate, "dd/mm/yyyy")}
                           `}
                       </HeaderSearchText>
                       <DateRangeWrapper>
                           {openDate && <DateRange
                               editableDateInputs={true}
                               onChange={item => setDate([item.selection])}
                               ranges={date}
                               minDate={new Date()}
                           /> }
                       </DateRangeWrapper>
                   </HeaderSearchItem>
                   <HeaderSearchItem>
                       <FontAwesomeIcon icon={faPerson}/>
                       <HeaderSearchText onClick={()=> setOpenOptions(!openOptions)}>
                           {`${options.adult} adult • ${options.children} children • ${options.room} room`}
                       </HeaderSearchText >
                       {openOptions && <HeaderOptionsDiv>
                          <HeaderOptionsItem>
                               <OptionTextSpan> Adult </OptionTextSpan>
                                <CounterDiv>
                                    <OptionCounterButton
                                        onClick={()=>handleCounter('adult', 'plus')}>+</OptionCounterButton>
                                    <OptionCounterNumber>{options.adult}</OptionCounterNumber>
                                    <OptionCounterButton
                                        disabled={options.adult <= 1}
                                        onClick={()=>handleCounter('adult', 'minus')}>-</OptionCounterButton>
                                </CounterDiv>
                           </HeaderOptionsItem>

                           <HeaderOptionsItem>
                               <OptionTextSpan> Children </OptionTextSpan>
                               <CounterDiv>
                                   <OptionCounterButton
                                       onClick={()=>handleCounter('children', 'plus')}>+</OptionCounterButton>
                                   <OptionCounterNumber> {options.children} </OptionCounterNumber>
                                   <OptionCounterButton
                                       disabled={options.children <= 0}
                                       onClick={()=>handleCounter('children', 'minus')}>-</OptionCounterButton>
                               </CounterDiv>
                           </HeaderOptionsItem>

                           <HeaderOptionsItem>
                               <OptionTextSpan> Room </OptionTextSpan>
                               <CounterDiv>
                                   <OptionCounterButton
                                       onClick={()=>handleCounter('room', 'plus')}>+</OptionCounterButton>
                                   <OptionCounterNumber> {options.room} </OptionCounterNumber>
                                   <OptionCounterButton
                                       disabled={options.room <= 1}
                                       onClick={()=>handleCounter('room', 'minus')}>-</OptionCounterButton>
                               </CounterDiv>
                           </HeaderOptionsItem>
                       </HeaderOptionsDiv>}
                   </HeaderSearchItem>
                   <HeaderSearchItem>
                       <HeaderSearchBtn onClick={handleSearch}>Search</HeaderSearchBtn>
                   </HeaderSearchItem>

               </HeaderSearchDiv> </>}

           </HeaderContainer>
        </HeaderWrapper>

    )
}


export default Header;