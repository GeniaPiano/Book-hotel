import React, {useState} from 'react';
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import {
    ListContainer,
    ListResult,
    ListSearch,
    ListSearchH1, ListSearchInput,
    ListSearchItemDiv,
    ListSearchLabel, ListSpan,
    ListWrapper
} from "./ListElements";
import {useLocation} from "react-router-dom";

import {format} from "date-fns";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css';






const List = () => {
    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination);
    const [date, setDate] = useState(location.state.destination);
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
                            <ListSearchInput type="text" />
                        </ListSearchItemDiv>
                        <ListSearchItemDiv>
                            <ListSearchLabel>Check-in Date</ListSearchLabel>
                            {/*<ListSpan>*/}
                            {/*    {`${format(*/}
                            {/*        date[0].startDate,*/}
                            {/*        "MM/dd/yyyy"*/}
                            {/*    )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}                            */}
                            {/*</ListSpan>*/}
                        </ListSearchItemDiv>
                    </ListSearch>
                    <ListResult/>
                </ListWrapper>
            </ListContainer>
        </div>
    )
}

export default List;