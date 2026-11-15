import { styled, keyframes, css } from 'styled-components';
import { useState, useEffect } from 'react';
import { StyledHeader } from "./CommonStyles.ts";
import { Link } from "react-router-dom";

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

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
    opacity: 0.3;
    @media screen and (max-width: 1000px) {
        object-fit: cover;
    }
`;

const Wrapper = styled.div`
    text-align: center;
    flex-direction: column;
    width: 100%;
    z-index: 2;
`;

const GrandHeader = styled.h1<{ $animate?: boolean }>`
    font-size: 7rem;
    color: white;
    font-family: 'Anton', cursive;
    text-align: center;
    text-shadow: -2px -2px 0 #000, 2px -2px 0 #000,
    -2px 2px 0 #000, 2px 2px 0 #000,
    0 0 12px #ff0;
    word-wrap: break-word;
    overflow-wrap: break-word;
    margin: 0 auto;
    padding: 0 10px;
    opacity: 0;
    transform: translateY(30px);
    @media screen and (max-width: 1000px) {
        font-size: 3.5rem;
    }

    ${({ $animate }) =>
            $animate &&
            css`
                animation: ${fadeInUp} 1s ease forwards;
                animation-delay: 0.6s;
            `}
`;

const GenImage = styled.img<{ $animate?: boolean }>`
    width: 500px;
    height: auto;
    transition: transform 0.3s ease;
    opacity: 0;
    transform: translateY(30px);
    ${({ $animate }) =>
            $animate &&
            css`
      animation: ${fadeInUp} 1s ease forwards;
      animation-delay: 0.6s;
    `}

    &:hover {
        transform: scale(1.05);
    }

    @media screen and (max-width: 1000px) {
        width: 400px;
    }
`;

const TextSection = styled.section`
    max-width: 600px;
    margin: 40px auto;
    text-align: center;
    font-size: 23px;
    line-height: 1.6;
    padding: 0 20px;
    color: white;
`;

const CaptainGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    gap: 20px;
    max-width: 1300px;
    width: 90%;
    margin: 30px auto 50px;

    @media (max-width: 1100px) {
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }

    @media (max-width: 700px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 12px;
    }
`;


const CaptainCard = styled.button<{ $selected: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;

    background: ${({ $selected }) =>
            $selected
                    ? "linear-gradient(145deg, #303b85, #171e60)"
                    : "linear-gradient(145deg, #202c70, #10164b)"};

    border: 2px solid ${({ $selected }) =>
            $selected ? "#e8193f" : "#34418a"};
    
    padding: 22px 12px;
    color: white;
    font-family: inherit;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    position: relative;

    box-shadow: ${({ $selected }) =>
            $selected ? "0 0 20px rgba(232, 25, 63, 0.35)" : "0 5px 15px rgba(0, 0, 0, 0.2)"};

    transition: transform 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;

    &:hover {
        transform: translateY(-5px);
        border-color: #e8193f;
        box-shadow: 0 8px 25px rgba(232, 25, 63, 0.25);
    }

    &:focus-visible {
        outline: 3px solid white;
        outline-offset: 3px;
    }

    @media (max-width: 700px) {
        padding: 16px 8px;
        font-size: 0.9rem;
    }
`;

const Captain = styled.img`
    width: 100px;
    height: 100px;
    object-fit: contain;
    border-radius: 50%;
    background-color: white;
    padding: 2px;
    box-sizing: border-box;
    transition: transform 0.25s ease;

    @media (max-width: 700px) {
        width: 80px;
        height: 80px;
    }
`;

const ImageWrapper = styled.div`
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px auto;
`;

const CaptainSection = styled.section`
    margin-top: 10px;
    background-color: darkblue;
    text-align: center;
    padding-bottom: 20px;
`;

const AboutContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 50px;
    max-width: 1300px;
    width: 90%;
    margin: 40px auto 30px;
    padding: 40px;
    box-sizing: border-box;

    background: linear-gradient(135deg, #252535, #171720);
    border: 1px solid #383848;
    border-radius: 16px;
    box-shadow: 0 10px 35px rgba(0, 0, 0, 0.25);

    @media (max-width: 1000px) {
        grid-template-columns: 1fr;
        gap: 20px;
        padding: 25px;
    }
`;

const AboutText = styled.div`
    color: #e5e5e5;
    font-size: 1.15rem;
    line-height: 1.8;
    text-align: left;

    h2 {
        color: white;
        font-family: 'Anton', sans-serif;
        font-size: 2.5rem;
        font-weight: 400;
        margin: 0 0 20px;
        border-left: 5px solid #e8193f;
        padding-left: 15px;
    }

    p {
        margin-bottom: 18px;
    }

    @media (max-width: 1000px) {
        font-size: 1rem;

        h2 {
            font-size: 2rem;
        }
    }
`;

const AboutImage = styled.img`
    width: 100%;
    max-width: 550px;
    height: auto;
    border-radius: 12px;
    display: block;
    margin: auto;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
`;

const StatsSection = styled.section`
    width: 90%;
    max-width: 1200px;
    margin: 0 auto 50px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    @media (max-width: 700px) {
        grid-template-columns: 1fr;
        gap: 15px;
        margin: 30px auto 50px;
    }
`;

const StatCard = styled.div`
    background: linear-gradient(145deg, #29293b, #1c1c29);
    border: 1px solid #383848;
    border-top: 3px solid #e8193f;
    border-radius: 12px;
    padding: 30px 20px;
    text-align: center;
    color: white;
    transition: transform 0.25s ease, box-shadow 0.25s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.35);
    }
`;

const StatNumber = styled.div`
    font-family: 'Anton', sans-serif;
    font-size: 3rem;
    color: white;
    line-height: 1.2;
`;

const StatLabel = styled.div`
    font-size: 0.9rem;
    font-weight: 600;
    color: #b8b8c8;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-top: 10px;
`;

const SelectedIndicator = styled.span`
    position: absolute;
    top: 8px;
    right: 10px;
    background-color: #e8193f;
    color: white;
    font-size: 0.7rem;
    font-weight: bold;
    padding: 4px 8px;
    border-radius: 20px;
`;

const GifContainer = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    @media (max-width: 700px) {
        height: 250px;
    }
`;

const HeroButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin-top: 20px;
    flex-wrap: wrap;
`;


const HeroButton = styled(Link)<{ $secondary?: boolean }>`
    display: inline-block;
    padding: 14px 28px;
    background-color: ${({ $secondary }) =>
    $secondary ? "transparent" : "#e8193f"};
    color: white;
    border: 2px solid ${({ $secondary }) =>
    $secondary ? "white" : "#e8193f"};
    border-radius: 8px;
    font-size: 1.1rem;
    font-weight: 700;
    text-decoration: none;
    text-align: center;
    transition: background-color 0.2s ease, transform 0.2s ease;

    &:hover {
        background-color: ${({ $secondary }) =>
            $secondary ? "rgba(255,255,255,0.15)" : "#c8102e"};
        color: white;
    }

    @media (max-width: 1000px) {
        padding: 10px 20px;
        font-size: 0.9rem;
    }
`;

const captains = [
    { name: "Birdo", image: "/emblems/MSS-Emblem-BirdoBows.webp" },
    { name: "Bowser Jr", image: "/emblems/MSS-Emblem-BowserJr.webp" },
    { name: "Bowser", image: "/emblems/MSS-Emblem-BowserMonsters.webp" },
    { name: "Daisy", image: "/emblems/MSS-Emblem-DaisyFlowers.webp" },
    { name: "Diddy Kong", image: "/emblems/MSS-Emblem-DiddyMonkeys.webp" },
    { name: "Donkey Kong", image: "/emblems/MSS-Emblem-DKWilds.webp" },
    { name: "Luigi", image: "/emblems/MSS-Emblem-LuigiKnights.webp" },
    { name: "Mario", image: "/emblems/MSS-Emblem-MarioFireballs.png" },
    { name: "Peach", image: "/emblems/MSS-Emblem-PeachMonarchs.png" },
    { name: "Waluigi", image: "/emblems/MSS-Emblem-WaluigiSpitballs.webp" },
    { name: "Wario", image: "/emblems/MSS-Emblem-WarioMuscles.webp" },
    { name: "Yoshi", image: "/emblems/MSS-Emblem-YoshiEggs.webp" },
];

const gifs = [
    "/gif1.gif",
    "/gif2.gif",
    "/gif3.gif",
    "/gif4.gif"
];

export default function Home() {
    const [selectedCaptain, setSelectedCaptain] = useState<string | null>(
        () => localStorage.getItem("selectedCaptain")
    );
    const [ready, setReady] = useState(false);
    const [currentGif, setCurrentGif] = useState(0);

    const handleCaptainSelect = (captainName: string) => {
        setSelectedCaptain(captainName);
        localStorage.setItem("selectedCaptain", captainName);
        window.dispatchEvent(new Event("captainChanged"));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentGif((prev) => (prev + 1) % gifs.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

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
                    <GrandHeader $animate={ready}>
                        Welcome to the Professional Mario Baseball League
                    </GrandHeader>
                    <ImageWrapper>
                        <GenImage src="/LeagueLogo_fix.png" alt="Professional Mario Baseball League Logo" $animate={ready} />
                    </ImageWrapper>
                </Wrapper>
            </Main>

            <AboutContainer>
                <AboutImage
                    src="/mario-superstar-baseball-mario.gif"
                    alt="Mario Superstar Baseball"
                />

                <AboutText>
                    <h2>About the League</h2>

                    <p>
                        Founded in the winter of 2025, the Professional Mario
                        Baseball League began with 10 managers across 8 teams.
                        The first-ever draft and game took place on
                        February 21st, 2025.
                    </p>

                    <p>
                        Since then, the PMBL has grown into a favorite
                        competition among friends and rivals. Every week
                        brings exciting matchups, intense rivalries,
                        and unforgettable moments featuring the Mushroom
                        Kingdom's most iconic characters.
                    </p>

                    <p>
                        Whether you're a longtime fan or new to the league,
                        there's something here for everyone.
                        Let the games begin!
                    </p>
                </AboutText>
            </AboutContainer>

            <StatsSection>
                <StatCard>
                    <StatNumber>2025</StatNumber>
                    <StatLabel>Established</StatLabel>
                </StatCard>

                <StatCard>
                    <StatNumber>3</StatNumber>
                    <StatLabel>Seasons Played</StatLabel>
                </StatCard>

                <StatCard>
                    <StatNumber>15</StatNumber>
                    <StatLabel>Different Managers</StatLabel>
                </StatCard>
            </StatsSection>

            <CaptainSection>
                <StyledHeader>Choose Your Favorite Captain!</StyledHeader>
                <TextSection style={{backgroundColor: "darkblue", maxWidth: "1000px"}}>
                    Click to select your favorite team captain for your profile photo!
                </TextSection>

                <CaptainGrid>
                    {captains.map((captain) => (
                        <CaptainCard
                            key={captain.name} type="button"
                            $selected={selectedCaptain === captain.name}
                            aria-pressed={selectedCaptain === captain.name}
                            onClick={() => handleCaptainSelect(captain.name)}
                        >
                            {selectedCaptain === captain.name && (
                                <SelectedIndicator>Selected</SelectedIndicator>
                            )}

                            <Captain src={captain.image} alt={captain.name}/>
                            <span>{captain.name}</span>
                        </CaptainCard>
                    ))}
                </CaptainGrid>

            </CaptainSection>


            <AboutContainer>
                <AboutText>
                    <h2>Live Updates</h2>

                    <p>
                        Stay connected to the PMBL throughout the season!
                        Our live statistics system lets fans and friends
                        follow their favorite players and teams, even
                        when they're away from the action.
                    </p>

                    <p>
                        From exciting matchups to individual player performances,
                        the PMBL is committed to bringing the best Mario Baseball
                        experience to everyone.
                    </p>

                    <p>
                        Explore the latest stats, follow the competition,
                        and never miss a moment of the action!
                    </p>

                    <HeroButtons>
                        <HeroButton to="/season/stats">
                            View Player Stats
                        </HeroButton>

                        <HeroButton to="/season" $secondary>
                            Current Season
                        </HeroButton>
                    </HeroButtons>
                </AboutText>

                <GifContainer>
                    <AboutImage
                        src={gifs[currentGif]}
                        alt="Mario Baseball Highlights"
                        style={{width: "100%", height: "100%", objectFit: "contain", boxShadow: "none"}}
                    />
                </GifContainer>
            </AboutContainer>

        </Page>
    );
}
