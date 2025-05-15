import { styled } from "styled-components";

const Main = styled.main`
    position: relative;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    background-image: url('/4.jpg');
    background-size: contain; /* Changed from cover to contain */
    background-repeat: no-repeat;
    background-position: center;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 0;
    }

    > * {
        position: relative;
        z-index: 1;
    }
`;


const Wrapper = styled.div`
    text-align: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
`;

const StyledHeader = styled.h1`
    font-size: 60px;
    color: white;
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


export default function Home() {
    return (
        <Main>
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

