import styled from 'styled-components';
import React from 'react';
import { FiMail } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const HeaderSpaceFull = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

const NavBar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 54px;
    padding: 0 24px;
    box-sizing: border-box;
    background-color: rgba(13, 13, 13, 0.9);
    backdrop-filter: blur(8px);
    position: sticky;
    top: 0;
    z-index: 100;
    border-bottom: 1px solid #2a2a2a;
`;

const NavName = styled.div`
    color: white;
    font-size: 17px;
    font-weight: 700;
    letter-spacing: 1px;
`;

const NavLinks = styled.div`
    display: flex;
    gap: 28px;
    align-items: center;
    @media only screen and (max-width: 600px) {
        gap: 14px;
    }
`;

const NavLink = styled.a`
    color: #b3b3b3;
    font-size: 14px;
    text-decoration: none;
    transition: color 0.2s ease;
    cursor: pointer;
    &:hover {
        color: white;
    }
`;

const NavContact = styled.div`
    display: flex;
    align-items: center;
    gap: 7px;
    color: #888;
    font-size: 13px;
    @media only screen and (max-width: 700px) {
        display: none;
    }
`;

const HeaderSpace = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 60px 20px;
`;

const HeaderBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 60%;
    @media only screen and (max-width: 900px) {
        width: 90%;
    }
`;

const Greeting = styled(motion.div)`
    font-size: 14px;
    color: #888;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin-bottom: 14px;
`;

const HeaderName = styled(motion.h1)`
    font-size: 72px;
    color: #ffffff;
    margin: 0 0 16px 0;
    text-align: center;
    font-weight: 800;
    @media only screen and (max-width: 900px) {
        font-size: 44px;
    }
`;

const HeaderDesc = styled(motion.div)`
    display: flex;
    justify-content: center;
    text-align: center;
    width: 65%;
    font-size: 20px;
    color: #aaaaaa;
    line-height: 1.7;
    @media only screen and (max-width: 900px) {
        width: 95%;
        font-size: 16px;
    }
`;

const HeaderInfoBox = styled(motion.div)`
    display: flex;
    justify-content: center;
    margin-top: 40px;
    gap: 20px;
`;

const HeaderInfo = styled.button`
    height: 48px;
    width: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #1e1e1e;
    border: 1px solid #333;
    cursor: pointer;
    border-radius: 50%;
    transition: transform 0.3s ease, background-color 0.3s ease;
    &:hover {
        transform: rotate(270deg);
        background-color: #2e2e2e;
        border-color: #555;
    }
`;

const ScrollHint = styled(motion.div)`
    margin-top: 70px;
    color: #555;
    font-size: 12px;
    letter-spacing: 2px;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
`;

const Arrow = styled(motion.div)`
    font-size: 18px;
    color: #555;
`;

const Header = () => {
    return (
        <HeaderSpaceFull>
            <NavBar>
                <NavName>Loc Giang</NavName>
                <NavLinks>
                    <NavLink href="#about">About</NavLink>
                    <NavLink href="#skills">Skills</NavLink>
                    <NavLink href="#projects">Projects</NavLink>
                    <NavLink href="#contact">Contact</NavLink>
                </NavLinks>
                <NavContact>
                    <FiMail size={'14px'} color='#888'/>
                    <span>Locbgiang@gmail.com</span>
                </NavContact>
            </NavBar>

            <HeaderSpace>
                <HeaderBox>
                    <Greeting
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Welcome to my portfolio
                    </Greeting>
                    <HeaderName
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Loc Giang
                    </HeaderName>
                    <HeaderDesc
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Full-Stack Web Developer building Web2 &amp; Web3 experiences.
                        Check out my projects below.
                    </HeaderDesc>
                    <HeaderInfoBox
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <HeaderInfo
                            onClick={() => window.open('https://www.linkedin.com/in/locgiang/', '_blank')}
                            aria-label="LinkedIn profile"
                        >
                            <FaLinkedin size={'26px'} color='white'/>
                        </HeaderInfo>
                        <HeaderInfo
                            onClick={() => window.open('https://github.com/locbgiang', '_blank')}
                            aria-label="GitHub profile"
                        >
                            <FaGithub size={'26px'} color='white'/>
                        </HeaderInfo>
                        <HeaderInfo
                            onClick={() => window.location.href = 'mailto:Locbgiang@gmail.com'}
                            aria-label="Send email"
                        >
                            <FiMail size={'26px'} color='white'/>
                        </HeaderInfo>
                    </HeaderInfoBox>
                </HeaderBox>
                <ScrollHint
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <span>scroll down</span>
                    <Arrow
                        animate={{ y: [0, 6, 0] }}
                        transition={{ duration: 1.4, repeat: Infinity }}
                    >
                        ↓
                    </Arrow>
                </ScrollHint>
            </HeaderSpace>
        </HeaderSpaceFull>
    );
};

export default Header;