import styled from 'styled-components';
import sendeth from '../../images/sendeth.png';
import cryptosite from '../../images/cryptosite.png';
import defistakeapp from '../../images/defistakeapp.png';
import defilend from '../../images/defilend.png';

import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

/* ─── Shared ─────────────────────────────────────────────── */

const SectionTitle = styled.h2`
    font-size: 42px;
    color: white;
    text-align: center;
    margin: 0 0 40px 0;
    font-weight: 700;
    span {
        color: #6c8ebf;
    }
`;

const Divider = styled.div`
    width: 60px;
    height: 3px;
    background: #6c8ebf;
    border-radius: 2px;
    margin: 0 auto 50px auto;
`;

/* ─── About ──────────────────────────────────────────────── */

const AboutSection = styled.section`
    width: 100%;
    max-width: 860px;
    margin: 0 auto;
    padding: 80px 24px 60px;
    box-sizing: border-box;
`;

const AboutText = styled.p`
    color: #c0c0c0;
    font-size: 17px;
    line-height: 1.9;
    text-align: center;
    margin: 0;
`;

/* ─── Skills ─────────────────────────────────────────────── */

const SkillsSection = styled.section`
    width: 100%;
    max-width: 860px;
    margin: 0 auto;
    padding: 20px 24px 80px;
    box-sizing: border-box;
`;

const SkillsGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 14px;
`;

const SkillBadge = styled(motion.div)`
    background-color: #1e1e1e;
    border: 1px solid #333;
    color: #d0d0d0;
    font-size: 14px;
    font-weight: 600;
    padding: 10px 22px;
    border-radius: 30px;
    transition: border-color 0.25s ease, color 0.25s ease;
    &:hover {
        border-color: #6c8ebf;
        color: #fff;
    }
`;

/* ─── Projects ───────────────────────────────────────────── */

const BodySpace = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ProjectSectionWrapper = styled.section`
    width: 100%;
`;

const ProjectSpace = styled.div`
    height: auto;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: stretch;
    flex-wrap: wrap;

    @media only screen and (max-width: 900px) {
        flex-direction: column;
        align-items: center;
    }
`;

const ProjectBox = styled(motion.div)`
    min-height: 600px;
    width: 300px;
    margin: 30px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.5);
    background-color: #181818;
    border: 1px solid #2a2a2a;
    cursor: pointer;
    transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease, border-color 0.3s ease;
    &:hover {
        background-color: #212121;
        box-shadow: 0 8px 32px rgba(0,0,0,0.7);
        transform: translateY(-4px);
        border-color: #444;
    }

    @media only screen and (max-width: 900px) {
        flex-direction: row;
        height: auto;
        width: 90%;
        margin: 16px 0;
    }
`;

const ProjectHeader = styled.div`
    height: 45%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (max-width: 900px) {
        width: 30%;
        height: 95%;
    }
`;

const ProjectName = styled.div`
    width: 100%;
    font-size: 28px;
    font-weight: 700;
    color: white;
    display: flex;
    justify-content: center;
    padding: 14px 0 8px;

    @media only screen and (max-width: 900px) {
        font-size: 20px;
    }
`;

const ProjectImage = styled.img`
    width: 80%;
    border-radius: 8px;
    border: 1px solid #333;

    @media only screen and (max-width: 900px) {
        width: 90%;
    }
`;

const ProjectSrcBox = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-top: 10px;

    @media only screen and (max-width: 900px) {
        width: 100%;
    }
`;

const ProjectSrc = styled.a`
    display: flex;
    align-items: center;
    gap: 6px;
    color: #b3b3b3;
    font-size: 13px;
    text-decoration: none;
    padding: 5px 12px;
    border-radius: 20px;
    border: 1px solid #444;
    transition: color 0.2s ease, border-color 0.2s ease;
    &:hover {
        color: white;
        border-color: #888;
    }
`;

const ProjectBody = styled.div`
    height: 55%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    @media only screen and (max-width: 900px) {
        width: 70%;
        height: 90%;
    }
`;

const ProjectDescription = styled.div`
    width: 88%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    font-size: 14px;
    color: #b3b3b3;
    line-height: 1.6;
    padding-top: 10px;

    @media only screen and (max-width: 900px) {
        width: 90%;
        height: 50%;
        justify-content: flex-start;
    }
`;

const ProjectTechBox = styled.div`
    height: 20%;
    width: 90%;
    display: flex;
    align-content: flex-start;
    flex-wrap: wrap;
    gap: 6px;

    @media only screen and (max-width: 900px) {
        width: 100%;
        justify-content: center;
    }
`;

const ProjectTechStack = styled.div`
    color: #888;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    width: 90%;
    margin-top: 8px;

    @media only screen and (max-width: 900px) {
        display: flex;
        justify-content: center;
    }
`;

const ProjectTech = styled.div`
    width: fit-content;
    height: fit-content;
    padding: 3px 12px;
    border-radius: 12px;
    border: 1px solid #444;
    font-size: 12px;
    color: #d0d0d0;
    font-weight: 600;
    background-color: #252525;
`;

/* ─── Card Component ─────────────────────────────────────── */

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Projects = ({ projectSite, projectName, projectImage, projectSrc, projectDesc, projectTechFrontEnd, projectTechBackEnd }) => {
    const handleCardClick = () => {
        window.open(projectSite, '_blank');
    };

    const hasBackEnd = projectTechBackEnd && projectTechBackEnd.length > 0 && projectTechBackEnd[0] !== 'N/A';

    return (
        <ProjectBox
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            onClick={handleCardClick}
        >
            <ProjectHeader>
                <ProjectName>{projectName}</ProjectName>
                <ProjectImage src={projectImage} alt={`Screenshot of ${projectName}`} />
                <ProjectSrcBox>
                    <ProjectSrc
                        href={projectSrc}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`${projectName} source code on GitHub`}
                    >
                        <FaGithub size={14} /> Source
                    </ProjectSrc>
                    <ProjectSrc
                        href={projectSite}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`${projectName} live demo`}
                    >
                        <FaExternalLinkAlt size={12} /> Live
                    </ProjectSrc>
                </ProjectSrcBox>
            </ProjectHeader>
            <ProjectBody>
                <ProjectDescription>{projectDesc}</ProjectDescription>
                <ProjectTechStack>Front-End</ProjectTechStack>
                <ProjectTechBox>
                    {projectTechFrontEnd.map((item) => (
                        <ProjectTech key={item}>{item}</ProjectTech>
                    ))}
                </ProjectTechBox>
                {hasBackEnd && (
                    <>
                        <ProjectTechStack>Back-End</ProjectTechStack>
                        <ProjectTechBox>
                            {projectTechBackEnd.map((item) => (
                                <ProjectTech key={item}>{item}</ProjectTech>
                            ))}
                        </ProjectTechBox>
                    </>
                )}
            </ProjectBody>
        </ProjectBox>
    );
};

/* ─── Skills data ────────────────────────────────────────── */

const skills = [
    'React', 'JavaScript', 'TypeScript', 'Node.js',
    'Redux', 'Tailwind CSS', 'Styled-Components', 'HTML/CSS',
    'Solidity', 'Hardhat', 'Ethers.js', 'Git',
];

/* ─── Body ───────────────────────────────────────────────── */

const Body = () => {
    return (
        <BodySpace>

            {/* About */}
            <AboutSection id="about">
                <SectionTitle>About <span>Me</span></SectionTitle>
                <Divider />
                <AboutText>
                    Hi! I'm Loc — a full-stack web developer based in the US with a passion for building
                    clean, performant web applications. I work across the stack using React and Node.js,
                    and I have hands-on experience with Web3 technologies including Solidity and Hardhat.
                    I love turning complex ideas into polished products and am always looking for new
                    challenges to grow my craft.
                </AboutText>
            </AboutSection>

            {/* Skills */}
            <SkillsSection id="skills">
                <SectionTitle>Tech <span>Stack</span></SectionTitle>
                <Divider />
                <SkillsGrid>
                    {skills.map((skill, i) => (
                        <SkillBadge
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: i * 0.05 }}
                        >
                            {skill}
                        </SkillBadge>
                    ))}
                </SkillsGrid>
            </SkillsSection>

            {/* Projects */}
            <ProjectSectionWrapper id="projects">
                <SectionTitle>My <span>Projects</span></SectionTitle>
                <Divider />
                <ProjectSpace>
                    <Projects
                        projectSite="https://defi-lend-ruby.vercel.app/"
                        projectName="Defi-Lend"
                        projectImage={defilend}
                        projectSrc="https://github.com/locbgiang/Defi-Lend"
                        projectDesc="A decentralized lending protocol where users can deposit collateral and borrow tokens against it using Solidity smart contracts."
                        projectTechFrontEnd={["React", "JavaScript", "Ethers.js"]}
                        projectTechBackEnd={["JavaScript", "Hardhat", "Solidity"]}
                    />
                    <Projects
                        projectSite="https://cryptosite.vercel.app/"
                        projectName="CryptoSite"
                        projectImage={cryptosite}
                        projectSrc="https://github.com/locbgiang/cryptosite"
                        projectDesc="Tracks cryptocurrency prices and crypto-related news. Uses multiple API sources and manages data with Redux."
                        projectTechFrontEnd={["React", "Redux", "Ant-Design", "JavaScript"]}
                        projectTechBackEnd={["N/A"]}
                    />
                    <Projects
                        projectSite="https://send-eth-website.vercel.app/"
                        projectName="Send-Eth"
                        projectImage={sendeth}
                        projectSrc="https://github.com/locbgiang/sendEth"
                        projectDesc="Connects to MetaMask to transfer ETH through the Ethereum network. Users can view past transactions dynamically."
                        projectTechFrontEnd={["React", "Tailwind", "JavaScript"]}
                        projectTechBackEnd={["JavaScript", "Hardhat", "Solidity"]}
                    />
                    <Projects
                        projectSite="https://defi-stake-app.vercel.app"
                        projectName="Defi-Stake"
                        projectImage={defistakeapp}
                        projectSrc="https://github.com/locbgiang/Defi-Staking-App"
                        projectDesc="Uses the standard Solidity staking contract to distribute reward tokens to stakers."
                        projectTechFrontEnd={["React", "Styled-Components", "JavaScript", "Context"]}
                        projectTechBackEnd={["JavaScript", "Hardhat", "Solidity"]}
                    />
                </ProjectSpace>
            </ProjectSectionWrapper>

        </BodySpace>
    );
};

export default Body;