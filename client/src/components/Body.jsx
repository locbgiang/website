import styled from 'styled-components';
import sendeth from '../../images/sendeth.png';

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
    margin-bottom: 10px;
`;

const ProjectImage = styled.img`
    width: 75%;
    border: 2px solid black;
`;

const ProjectDescription = styled.div`
    width: 90%;
    height: 30%;
    padding-top: 10px;

    font-size: 20px;
    color:white;
`;

const ProjectTechBox = styled.div`
    height: 24%;
    width: 90%;
    
    display:flex;
    align-content: flex-start;
    flex-wrap: wrap;
`;

const ProjectTech = styled.div`
    width: fit-content;
    height: fit-content;
    padding: 0 13px 0;
    margin: 5px 5px;

    border-radius: 15px;
    border: 1px solid black;

    font-size: 20px;
    color: black;
    font-weight: 900;

    background-color: #B3B3B3;
    
`;

const Projects = () =>{
    return (
        <ProjectBox>
            <ProjectName>
                project 1
            </ProjectName>
            <ProjectImage src={sendeth} />
            <ProjectDescription>
                Some description of the project here.
            </ProjectDescription>
            <ProjectTechBox>
                <ProjectTech>
                    React
                </ProjectTech>
                <ProjectTech>
                    Javascript
                </ProjectTech>
                <ProjectTech>
                    Tailwind
                </ProjectTech>
                <ProjectTech>
                    Solidity
                </ProjectTech>
            </ProjectTechBox>
        </ProjectBox>
    )
}

const Body = () => {
    return (
        <BodySpace>
            <Projects></Projects>
        </BodySpace>
    )
}

export default Body;