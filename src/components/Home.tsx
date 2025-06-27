import { styled } from 'styled-components';
import { useState, useEffect } from 'react';

interface CaptainProps {
    selected: boolean;
}

const Page = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #1e1e1e;
`;

const Main = styled.main`
    position: relative;
    width: 100vw;
    min-height: 100vh;
    overflow: hidden; 
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const BackgroundWrapper = styled.div`
    position: absolute;
    width: 90%;
    height: 100vh;
`;

const BackgroundImage = styled.img`
    height: calc(100% + 40px);
    width: 115%;
    opacity: 0.4;
`;

const Wrapper = styled.div`
    text-align: center;
    flex-direction: column;
    width: 100%;
    z-index: 2;
`;

const StyledHeader = styled.h1`
    font-size: 55px;
    color: white;
    font-family: 'Luckiest Guy', cursive;
    text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px  2px 0 #000, 2px  2px 0 #000, 0px  0px 12px #ff0;
`;

const GrandHeader = styled.h1`
    font-size: 90px;
    color: white;
    font-family: 'Luckiest Guy', cursive;
    text-align: center;
    text-shadow: -2px -2px 0 #000, 2px -2px 0 #000,
    -2px 2px 0 #000, 2px 2px 0 #000,
    0px 0px 12px #ff0;
    word-wrap: break-word;
    overflow-wrap: break-word;
    margin: 0 auto;
    padding: 0 10px;
`;

const ContentSection = styled.section`
  background-color: #1e1e1e;
  color: white;
  text-align: center;
`;

const GenGif = styled.img`
    width: 50%;
    height: auto;
    border-radius: 10%;
`;

const TextSection = styled.section`
    max-width: 600px;
    margin: 40px auto;
    text-align: center;
    font-size: 20px;
    line-height: 1.6;
    padding: 0 20px;
    color: white;
`;

const CaptainGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 20px;
    justify-items: center;
    padding: 20px;
`;

const CaptainCard = styled.div`
    text-align: center;
    color: white;
`;

const Captain = styled.img<CaptainProps>`
    border-radius: 50%;
    border: 2px solid black;
    width: 100px;
    height: 100px;
    cursor: pointer;
    transition: transform 0.2s;
    background-color: white;

    &:hover {
        transform: scale(1.05);
        background-color: #ddd;
    }

    ${({ selected }) =>
    selected &&
    `
        border: 4px solid white;
    `}
`;

const ImageWrapper = styled.div`
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px auto;
`;

const GenImage = styled.img`
    width: 500px;
    height: auto;
    transition: transform 0.3s ease;
    &:hover {
        transform: scale(1.05);
    }
`;

const CaptainSection = styled.section`
    margin-top: 10px;
    background-color: darkblue;
    text-align: center;
    padding-bottom: 20px;
`;

export default function Home() {
    const [selectedCaptain, setSelectedCaptain] = useState<string | null>(null);
    const [ready, setReady] = useState(false);

    const handleCaptainSelect = (captainName: string) => {
        setSelectedCaptain(captainName);
        localStorage.setItem("selectedCaptain", captainName);
        window.dispatchEvent(new Event("captainChanged"));
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setReady(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    if (!ready) return null;

    return (
        <Page>
            <Main>
                <BackgroundWrapper>
                    <BackgroundImage src="/4.jpg" alt="Decorative Background" />
                </BackgroundWrapper>
                <Wrapper>
                    <GrandHeader>Welcome to the Professional Mario Baseball League</GrandHeader>
                    <ImageWrapper>
                        <GenImage src="/LeagueLogo_fix.png" alt="Professional Mario Baseball League Logo" />
                    </ImageWrapper>
                </Wrapper>
            </Main>

            <ContentSection>
                <StyledHeader>About the League</StyledHeader>
                <TextSection>
                    Founded in the Winter of 2025, the Professional Mario Baseball League came to life. The league started out with 10 managers across 8 teams, and the first ever draft and game was held on February 21st, 2025.<br /><br />
                    The league has blossomed into a fan-favorite activity among friends and rivals. Each week brings exciting matchups, thrilling debates, and memorable moments from everyone's favorite Mushroom Kingdom characters.<br /><br />
                    Whether you're a long-time fan or new to the league, there's something here for everyone. Let the games begin!
                </TextSection>
                <GenGif src="/mario-superstar-baseball-mario.gif" alt="Professional Mario Baseball League Logo" />
            </ContentSection>

            <CaptainSection>
                <StyledHeader>Choose Your Favorite Captain!</StyledHeader>
                <TextSection>
                    Click to select your favorite team captain for your profile photo!
                </TextSection>
            <CaptainGrid>
                <CaptainCard onClick={() => handleCaptainSelect("Birdo")}>
                    <Captain src="/emblems/MSS-Emblem-BirdoBows.webp" alt="Birdo" selected={selectedCaptain === "Birdo"}/>
                    <p>Birdo</p>
                </CaptainCard>
                <CaptainCard onClick={() => handleCaptainSelect("Bowser Jr")}>
                    <Captain src="/emblems/MSS-Emblem-BowserJr.webp" alt="Bowser Jr" selected={selectedCaptain === "Bowser Jr"} />
                    <p>Bowser Jr</p>
                </CaptainCard>
                <CaptainCard onClick={() => handleCaptainSelect("Bowser")}>
                    <Captain src="/emblems/MSS-Emblem-BowserMonsters.webp" alt="Bowser" selected={selectedCaptain === "Bowser"} />
                    <p>Bowser</p>
                </CaptainCard>
                <CaptainCard onClick={() => handleCaptainSelect("Daisy")}>
                    <Captain src="/emblems/MSS-Emblem-DaisyFlowers.webp" alt="Daisy" selected={selectedCaptain === "Daisy"} />
                    <p>Daisy</p>
                </CaptainCard>
                <CaptainCard onClick={() => handleCaptainSelect("Diddy Kong")}>
                    <Captain src="/emblems/MSS-Emblem-DiddyMonkeys.webp" alt="Diddy Kong" selected={selectedCaptain === "Diddy Kong"} />
                    <p>Diddy Kong</p>
                </CaptainCard>
                <CaptainCard onClick={() => handleCaptainSelect("Donkey Kong")}>
                    <Captain src="/emblems/MSS-Emblem-DKWilds.webp" alt="Donkey Kong" selected={selectedCaptain === "Donkey Kong"}/>
                    <p>Donkey Kong</p>
                </CaptainCard>
                <CaptainCard onClick={() => handleCaptainSelect("Luigi")}>
                    <Captain src="/emblems/MSS-Emblem-LuigiKnights.webp" alt="Luigi" selected={selectedCaptain === "Luigi"}/>
                    <p>Luigi</p>
                </CaptainCard>
                <CaptainCard onClick={() => handleCaptainSelect("Mario")}>
                    <Captain src="/emblems/MSS-Emblem-MarioFireballs.png" alt="Mario" selected={selectedCaptain === "Mario"}/>
                    <p>Mario</p>
                </CaptainCard>
                <CaptainCard onClick={() => handleCaptainSelect("Peach")}>
                    <Captain src="/emblems/MSS-Emblem-PeachMonarchs.png" alt="Peach" selected={selectedCaptain === "Peach"}/>
                    <p>Peach</p>
                </CaptainCard>
                <CaptainCard onClick={() => handleCaptainSelect("Waluigi")}>
                    <Captain src="/emblems/MSS-Emblem-WaluigiSpitballs.webp" alt="Waluigi" selected={selectedCaptain === "Waluigi"}/>
                    <p>Waluigi</p>
                </CaptainCard>
                <CaptainCard onClick={() => handleCaptainSelect("Wario")}>
                    <Captain src="/emblems/MSS-Emblem-WarioMuscles.webp" alt="Wario" selected={selectedCaptain === "Wario"}/>
                    <p>Wario</p>
                </CaptainCard>
                <CaptainCard onClick={() => handleCaptainSelect("Yoshi")}>
                    <Captain src="/emblems/MSS-Emblem-YoshiEggs.webp" alt="Yoshi" selected={selectedCaptain === "Yoshi"}/>
                    <p>Yoshi</p>
                </CaptainCard>
            </CaptainGrid>
            </CaptainSection>

            <ContentSection>
                <StyledHeader>Constant Updates!</StyledHeader>
                <TextSection>
                    This website will continued to be updated throughout the offseason, regular season, and post season! Make sure to let us know if anything else should be added!
                </TextSection>
                <GenGif src="/Wii_Remote.webp" alt="Professional Mario Baseball League Logo" />
            </ContentSection>
        </Page>
    );
}
