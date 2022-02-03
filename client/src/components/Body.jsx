import styled from 'styled-components';
import sendeth from '../../images/sendeth.png';
import React from 'react';

const BodySpace = styled.div`
    height: 600px;

    display: flex;
    justify-content: space-around;
`;

const ProjectBox = styled.div`=
    height: 500px;
    width: 20%;

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
`;

const ProjectName = styled.div`
    width: 100%;
    font-size: 40px;
    color: white;

    display:flex;
    justify-content: center;
`;

const ProjectImage = styled.img`
    width: 75%;
    border: 2px solid black;
`;

const ProjectSrc = styled.a`
    color:white;
`

const ProjectDescription = styled.div`
    width: 90%;
    height: 35%;
    padding-top: 10px;
    padding-left: 25px;

    font-size: 15px;
    color:white;
`;

const ProjectTechBox = styled.div`
    height: 10%;
    width: 90%;
    
    display:flex;
    align-content: flex-start;
    flex-wrap: wrap;
`;

const ProjectTechStack = styled.div`
    color:white;
    width: 90%;
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
`;

const Projects = ({projectName, projectImage, projectSrc, projectDesc, projectTechFrontEnd, projectTechBackEnd}) =>{

    return (
        <ProjectBox>
            <ProjectName>
                {projectName}
            </ProjectName>
            <ProjectImage src={projectImage} />
            <ProjectSrc href='https://github.com/locbgiang/sendEth'>
                {projectSrc}
            </ProjectSrc>
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
        </ProjectBox>
    )
}

const Body = () => {
    return (
        <BodySpace>
            <Projects 
                projectName="Send-Eth"
                projectImage={sendeth}
                projectSrc="https://github.com/locbgiang/sendEth"
                projectDesc="This website allows users to connect with their Metamask wallet, then transfer ETH through the Ethereum network.  
                Users then can view their past transactions dynamically on the site.
                Building this website helped me understand how blockchain techology can be implemented with a website."
                projectTechFrontEnd={["React", "Tailwind","Javascript"]}
                projectTechBackEnd={["Javascript", "Hardhat", "Solidity"]}
            />
        </BodySpace>
    )
}

export default Body;