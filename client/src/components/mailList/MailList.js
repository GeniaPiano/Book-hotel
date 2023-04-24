import React from 'react';
import {
    MailListBtn,
    MailListDiv,
    MailListInput,
    MailListPara,
    MailListTitle,
    MailListWrapper
} from "./MailListElements";



const MailList =()=> {
    return (
        <MailListWrapper>
            <MailListTitle> Save time, save money? </MailListTitle>
            <MailListPara> Sign Up and we'll send you the best details for you </MailListPara>
            <MailListDiv>
                <MailListInput placeholder="your e-mail..."/>
                <MailListBtn> Subscribe </MailListBtn>
            </MailListDiv>
        </MailListWrapper>

    )
}

export default MailList;