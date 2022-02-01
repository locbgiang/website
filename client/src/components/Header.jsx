import styled from 'styled-components';

const HeaderSpace = styled.div`
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const HeaderBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color:#181818;
    height: 85%;
    width: 95%;
`;

const HeaderName = styled.div`
    display: flex;
    justify-content: center;

    width:50%;
    font-size: 120px;

    color: #FFFFFF;
`;

const HeaderInfoBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    height: 100%;
    width: 50%;
`;

const HeaderInfo = styled.p`
    display: flex;
    justify-content: flex-start;

    width: 80%;
    font-size: 20px;
    color: #B3B3B3;
`;

const Header = () => {
    
    return (
        <HeaderSpace>
            <HeaderBox>
                <HeaderName>
                    Loc Giang
                </HeaderName>
                <HeaderInfoBox>
                    <HeaderInfo>
                        Email
                    </HeaderInfo>
                    <HeaderInfo>
                        Resume
                    </HeaderInfo>
                </HeaderInfoBox>
            </HeaderBox>
        </HeaderSpace>
        
    )
}

export default Header;