import styled from 'styled-components';
import React from 'react';
import { FiMail } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const HeaderSpaceFull = styled.div`
    height: 1000px;
`;

const InfoBar = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 30px;
`;

const InfoName = styled.div`
    color: white;
    font-size: 20px;
    padding-left: 20px;
    padding-right: 20px;
`;

const InfoEmail = styled.div`
    color: white;
    font-size: 20px;
    width: 20%;
    padding-left: 5px;
`;

const HeaderSpace = styled.div`
    height: 95%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const HeaderBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    height: 85%;
    width: 60%;
    @media only screen and (max-width: 900px) {
        width: 100%;
    }
`;

const HeaderDesc = styled.div`
    display: flex;
    justify-content: center;

    width: 60%;
    font-size: 60px;

    color: #FFFFFF;
    @media only screen and (max-width: 900px) {
        width: 90%;
    }
`;

const HeaderInfoBox = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 50px;
    width: 50%;
`;

const HeaderInfo = styled.div`
    height: 40px;
    width: 40px;
    :hover {
        transform: rotate(270deg);
    }
`;

const Header = () => {
    
    return (
        <HeaderSpaceFull>
            <InfoBar>
                <InfoName>
                    Loc Giang
                </InfoName>
                <FiMail size={'18px'} color='white'/>
                <InfoEmail>
                    Locbgiang@gmail.com
                </InfoEmail>
            </InfoBar>
            <HeaderSpace>
                <HeaderBox>
                    <HeaderDesc>
                        Hi there, I'm a full-stack web developer. Check out my projects bellow.
                    </HeaderDesc>
                    <HeaderInfoBox>
                        <HeaderInfo onClick={()=>{window.location.href='https://www.linkedin.com/in/locgiang/'}}>
                            <FaLinkedin size={'40px'} color='white'/>
                        </HeaderInfo>
                        <HeaderInfo onClick={()=>{window.location.href='https://github.com/locbgiang'}}>
                            <FaGithub size={'40px'} color='white'/>
                        </HeaderInfo>
                    </HeaderInfoBox>
                </HeaderBox>
            </HeaderSpace>
        </HeaderSpaceFull>
    )
}

export default Header;