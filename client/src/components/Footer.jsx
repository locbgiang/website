import styled from 'styled-components';
import React from 'react';
import { FiMail } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const FooterSpace = styled.footer`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 40px 20px 24px;
    box-sizing: border-box;
`;

const ContactSpace = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 1.5rem;
    gap: 6px;
`;

const ContactLabel = styled.div`
    color: #888;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
`;

const ContactText = styled.a`
    color: #d0d0d0;
    font-size: 16px;
    text-align: center;
    text-decoration: none;
    transition: color 0.2s ease;
    &:hover {
        color: white;
    }
`;

const SocialRow = styled.div`
    display: flex;
    gap: 18px;
    margin-bottom: 1.5rem;
`;

const SocialIcon = styled.a`
    color: #888;
    transition: color 0.2s ease;
    &:hover {
        color: white;
    }
`;

const Line = styled.div`
    width: 90%;
    height: 1px;
    background-color: #2a2a2a;
    margin-bottom: 1rem;
`;

const End = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const EndText = styled.div`
    color: #555;
    font-size: 13px;
`;

const Footer = () => {
    return (
        <FooterSpace id="contact">
            <ContactSpace>
                <ContactLabel>Get in touch</ContactLabel>
                <ContactText href="mailto:Locbgiang@gmail.com">
                    Locbgiang@gmail.com
                </ContactText>
            </ContactSpace>
            <SocialRow>
                <SocialIcon href="https://www.linkedin.com/in/locgiang/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FaLinkedin size={22} />
                </SocialIcon>
                <SocialIcon href="https://github.com/locbgiang" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FaGithub size={22} />
                </SocialIcon>
                <SocialIcon href="mailto:Locbgiang@gmail.com" aria-label="Email">
                    <FiMail size={22} />
                </SocialIcon>
            </SocialRow>
            <Line />
            <End>
                <EndText>© 2026 Loc Giang. All rights reserved.</EndText>
            </End>
        </FooterSpace>
    );
};

export default Footer;