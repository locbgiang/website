import styled from 'styled-components';
import sendeth from '../../images/sendeth.png';
import React from 'react';
import { FaGithub } from 'react-icons/fa';


const BodySpace = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ProjectSpaceName = styled.div`
    height: 80px;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 50px;
    color: white;
`;

const ProjectSpace = styled.div`
    height: auto;
    width: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;

    @media only screen and (max-width: 900px) {
        flex-direction: column;
        align-items: center;
    }
`;

const ProjectBox = styled.div`
    height: 600px;
    width: 300px;
    margin: 30px 50px;

    display:flex;
    flex-direction: column;
    align-items: center;

    border-radius: 25px;
    box-shadow: 4px 2px 2px black;
    background-color:#181818;
    :hover {
        background-color: #404040;
        box-shadow: 10px 5px 5px black;
    }

    @media only screen and (max-width: 900px) {
        flex-direction: row;
        height: 20%;
        width: 90%;
        margin: 20px 0;
    }
`;

const ProjectHeader = styled.div`
    height: 45%;
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (max-width: 900px) {
        width: 30%;
        height: 95%;
    }
`

const ProjectName = styled.div`
    width: 100%;
    font-size: 40px;
    color: white;

    display:flex;
    justify-content: center;
    @media only screen and (max-width: 900px) {
        font-size: 35px;
    }
`;

const ProjectImage = styled.img`
    width: 75%;
    border: 2px solid black;

    @media only screen and (max-width: 900px) {
        width: 90%;
    }
`;

const ProjectSrcBox = styled.div`
    width: 50%;

    display:flex;
    justify-content:space-evenly;
    margin-top: 10px;
    @media only screen and (max-width: 900px) {
        width: 100%;
    }
`;

const ProjectSrc = styled.a`
    color:white;
    @media only screen and (max-width: 900px) {
        
    }
`

const ProjectBody = styled.div`
    height: 65%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media only screen and (max-width: 900px) {
        width: 70%;
        height: 90%;
    }
`

const ProjectDescription = styled.div`
    width: 90%;
    height: 50%;

    display: flex;
    justify-content: center;
    align-items: flex-start;

    font-size: 15px;
    color:white;
    @media only screen and (max-width: 900px) {
        padding:left: 0px;
        width: 90%;
        height: 50%;
        justify-content: flex-start;
    }
`;

const ProjectTechBox = styled.div`
    height: 15%;
    width: 100%;

    display:flex;
    align-content: flex-start;
    flex-wrap: wrap;
    @media only screen and (max-width: 900px) {
        width: 100%;
        height: 20%;
        display:flex;
        justify-content: center;
    }
`;

const ProjectTechStack = styled.div`
    color:white;
    width: 95%;
    @media only screen and (max-width: 900px) {
        display:flex;
        justify-content: center;
    }
`;

const ProjectTech = styled.div`
    width: fit-content;
    height: fit-content;
    padding: 0 13px 0;
    margin: 5px 5px;

    border-radius: 15px;
    border: 1px solid black;

    font-size: 15px;
    color: black;
    font-weight: 900;

    background-color: #B3B3B3;
    @media only screen and (max-width: 900px) {
        
    }
`;

const Projects = ({projectSite, projectName, projectImage, projectSrc, projectDesc, projectTechFrontEnd, projectTechBackEnd}) =>{
    const handleClick = (myLink) => () => {
        window.location.href=myLink;
    }
    return (
        <ProjectBox onClick={handleClick(projectSite)}>
            <ProjectHeader>
                <ProjectName>
                    {projectName}
                </ProjectName>
                <ProjectImage src={projectImage} />
                <ProjectSrcBox>
                    <FaGithub fontSize={25} color="#fff"/>
                    <ProjectSrc href={projectSrc}>
                        Source Code
                    </ProjectSrc>
                </ProjectSrcBox>
            </ProjectHeader>
            <ProjectBody>
                <ProjectDescription>
                    {projectDesc}
                </ProjectDescription>
                <ProjectTechStack>
                    Front-End:
                </ProjectTechStack>
                <ProjectTechBox>
                    {projectTechFrontEnd.map((item)=>(
                        <ProjectTech>
                            {item}
                        </ProjectTech>
                    ))}
                </ProjectTechBox>
                <ProjectTechStack>
                    Back-End:
                </ProjectTechStack>
                <ProjectTechBox>
                    {projectTechBackEnd.map((item)=>(
                        <ProjectTech>
                            {item}
                        </ProjectTech>
                    ))}
                </ProjectTechBox>
            </ProjectBody>
        </ProjectBox>
    )
}

const Body = () => {
    return (
        <BodySpace>
            <ProjectSpaceName>
                Web3 Projects
            </ProjectSpaceName>
            <ProjectSpace>
                <Projects 
                    projectSite="https://send-eth-website.vercel.app/"
                    projectName="Send-Eth"
                    projectImage={sendeth}
                    projectSrc="https://github.com/locbgiang/sendEth"
                    projectDesc="This app allows users to connect with their Metamask wallet, then transfer ETH through the Ethereum network.  
                    Users then can view their past transactions dynamically on the site.
                    Building this website helped me understand how blockchain techology can be implemented with a react application."
                    projectTechFrontEnd={["React", "Tailwind","Javascript"]}
                    projectTechBackEnd={["Javascript", "Hardhat", "Solidity"]}
                />
            </ProjectSpace>
            <ProjectSpaceName>
                Web2 Projects
            </ProjectSpaceName>
            <ProjectSpace>
                
            </ProjectSpace>
        </BodySpace>
    )
}

export default Body;