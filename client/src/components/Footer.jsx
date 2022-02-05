import styled from 'styled-components';
import React from 'react';
import { FiMail } from 'react-icons/fi';
const InfoBar = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
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

const Footer = () => {
    return (
        <InfoBar>
        </InfoBar>
    )
}

export default Footer