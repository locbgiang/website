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
    flex-direction: column;

    height: 85%;
    width: 95%;
`;

const HeaderName = styled.div`
    display: flex;
    justify-content: center;

    width:50%;
    font-size: 80px;

    color: #FFFFFF;
`;

const HeaderInfoBox = styled.div`
    display: flex;
    align-items: flex-end;

    height: 100%;
    width: 50%;
`;

const HeaderInfo = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 85%;
    height: 100%;
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
                    <HeaderInfo>
                        LinkedIn
                    </HeaderInfo>
                    <HeaderInfo>
                        Github
                    </HeaderInfo>
                </HeaderInfoBox>
            </HeaderBox>
        </HeaderSpace>
    )
}

export default Header;