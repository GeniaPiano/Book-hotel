import React, {useState} from 'react';
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import {
    ListContainer, ListDateRangeWrapper,
    ListResult,
    ListSearch, ListSearchButton,
    ListSearchH1, ListSearchInput,
    ListSearchItemDiv,
    ListSearchLabel, ListSpan,
    ListWrapper, LsItem, LsOptionInput, LsOptionList, LsOptionText
} from "./ListElements";
import {useLocation} from "react-router-dom";

import {format} from "date-fns";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css';
import SearchItem from "../../components/searchItem/SearchItem";






const List = () => {
    const location = useLocation();
    const [openDate, setOpenDate] = useState(false);
    const [destination, setDestination] = useState(location.state.destination);
    const [date, setDate] = useState(location.state.date);
    const [options, setOptions] = useState(location.state.options);

    return (
        <div>
            <Navbar/>
            <Header type='list' list={true}/>
            <ListContainer>
                <ListWrapper>
                    <ListSearch>
                        <ListSearchH1>Search</ListSearchH1>
                        <ListSearchItemDiv>
                            <ListSearchLabel>Destination</ListSearchLabel>
                            <ListSearchInput
                                type="text"
                                placeholder={destination}
                                onChange={(e) => setDestination(e.target.value)}/>
                        </ListSearchItemDiv>
                        <ListSearchItemDiv>
                            <ListSearchLabel>Check-in Date</ListSearchLabel>
                            <ListSpan onClick={(e)=>{setOpenDate(!openDate)}}>
                                {`${format(
                                    date[0].startDate,
                                    "dd/MM/yyyy"
                                )} to ${format(date[0].endDate, "dd/MM/yyyy")}`}
                                <ListDateRangeWrapper>
                                    {openDate && <DateRange
                                        editableDateInputs={true}
                                        onChange={item => setDate([item.selection])}
                                        moveRangeOnFirstSelection={false}
                                        ranges={date}
                                    /> }
                                </ListDateRangeWrapper>
                            </ListSpan>
                        </ListSearchItemDiv>
                        <ListSearchItemDiv>
                            <ListSearchLabel> Options </ListSearchLabel>
                            <LsOptionList>
                                <LsItem>
                                    <LsOptionText>Min price <small>per night</small></LsOptionText>
                                    <LsOptionInput type="number" />
                                </LsItem>
                                <LsItem>
                                    <LsOptionText>Max price <small>per night</small></LsOptionText>
                                    <LsOptionInput type="number"/>
                                </LsItem>
                                <LsItem>
                                    <LsOptionText>Adult</LsOptionText>
                                    <LsOptionInput type="number" min={1} placeholder={options.adult}/>
                                </LsItem>
                                <LsItem>
                                    <LsOptionText>Children</LsOptionText>
                                    <LsOptionInput type="number" min={0} placeholder={options.children}/>
                                </LsItem>
                                <LsItem>
                                    <LsOptionText>Rooms</LsOptionText>
                                    <LsOptionInput type="number" min={1} placeholder={options.room}/>
                                </LsItem>
                            </LsOptionList>
                        </ListSearchItemDiv>
                        <ListSearchButton>Search</ListSearchButton>
                    </ListSearch>
                    <ListResult>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                    </ListResult>


                </ListWrapper>
            </ListContainer>
        </div>
    )
}

export default List;