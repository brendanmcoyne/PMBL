import { styled } from 'styled-components';

const Main = styled.main`
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const BackgroundWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 90%;
    height: 100vh; 
`;

const BackgroundImage = styled.img`
  position: relative;
  height: calc(100% + 40px); 
  width: 115%;
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* creates dark look on background photo */
    z-index: 1;
`;

const Wrapper = styled.div`
    text-align: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    z-index: 2; 
    position: relative;
`;

const StyledHeader = styled.h1`
    font-size: 60px;
    color: white;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8); /* creates shadow for the text */
`;

const ImageWrapper = styled.div`
    border-radius: 50%;
    width: 300px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    margin: 20px auto;
`;

const LogoBackground = styled.div`
    background-color: #001f3f;
    border-radius: 50%;
    padding: 20px;
    border: 4px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const GenImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 50%;
`;

const Divider = styled.div`
    width: 100%;
    height: 5px;
    background-color: black;
    z-index: 2; 
`;

export default function Home() {
    return (
        <Main>
            <BackgroundWrapper>
                <BackgroundImage src="/4.jpg" alt="Background" />
                <Divider />
            </BackgroundWrapper>
            <Overlay />
            <Wrapper>
                <StyledHeader>Welcome to the Professional Mario Baseball League</StyledHeader>
                <ImageWrapper>
                    <LogoBackground>
                        <GenImage src="/LeagueLogo_fix.png" alt="Professional Mario Baseball League Logo" />
                    </LogoBackground>
                </ImageWrapper>
            </Wrapper>
        </Main>
    );
}
