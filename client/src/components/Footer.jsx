import styled from 'styled-components';
import React from 'react';
import { FiMail } from 'react-icons/fi';
const FooterSpace = styled.div`
    width: full;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 4px;
`;

const ContactSpace = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 1rem;
`;

const ContactText = styled.div`
    color: white;
    text-size: small;
    text-align: center;
`;

const Line = styled.div`
    width: 90%;
    height: 0.25px;
    background-color: gray;
    margin-top: 0.75rem;
`;

const End = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin-top: 0.75rem;
`;

const EndText = styled.div`
    color: white;
`;

const Footer = () => {
    return (
        <FooterSpace>
            <ContactSpace>
                <ContactText>EMAIL:</ContactText>
                <ContactText>Locbgiang@gmail.com</ContactText>
            </ContactSpace>
            <Line />
            <End>
                <EndText>
                    Loc Giang
                </EndText>
            </End>

        </FooterSpace>
    )
}

export default Footer