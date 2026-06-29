import { styled, keyframes, css } from "styled-components";
import { Link } from "react-router-dom";
import { Overlay } from "../components/headlines/HeadlineStyles";
import { StyledHeader, SeparatorLine, StyledMiniHeader } from "../components/CommonStyles.ts";
import {useEffect, useState} from "react";

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

const fadeOutDown = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(30px);
  }
`;

export const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 2rem 1rem;
    font-size: calc(0.5rem + 1vw);
    @media screen and (max-width: 800px) {
        max-width: 100%;
        margin: 0 auto;
        box-sizing: border-box; 
    }
`;

export const Story = styled.div<{ $animationState?: "enter" | "exit" }>`
    position: relative;
    align-items: center;
    width: 100%;
    height: 400px;
    border-radius: 15px;
    overflow: hidden;
    margin: 1rem auto;
    transition: 0.5s;

    &:hover {
        transform: scale(1.05);
        @media screen and (max-width: 750px) {
            transform: none;
        }
    }

    @media screen and (max-width: 900px) {
        height: 200px;
        width: 100%;
        border-radius: 5px;
    }

    ${({ $animationState }) =>
            $animationState === "enter" &&
            css`
                animation: ${fadeInUp} 1s ease 0.2s both;
            `}

    ${({ $animationState }) =>
            $animationState === "exit" &&
            css`
            animation: ${fadeOutDown} 0.35s ease both;
        `}
`;

export const GenImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(65%);
    @media screen and (max-width: 750px) {
        width: 350px;
        display: inline-block;
    }
`;

export const Headline = styled.h2`
    color: white;
    font-size: 2.2rem;
    font-weight: bold;
    text-align: center;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
    padding: 0.75rem 1.25rem;
    max-width: 100%;
    margin: 0 auto;
    @media screen and (max-width: 750px) {
        font-size: 1.2rem;  
        line-height: 1.3;
    }
`;

export const StyledLink = styled(Link)`
    font-size: 1.1rem;
    text-decoration: none;
    color: white;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 10px 20px;
    border-radius: 8px;
    text-align: center;
    pointer-events: auto;

    &:hover {
        background-color: rgba(0, 0, 0, 0.8);
    }
`;

const SeasonSelect = styled.select`
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-weight: 600;
    border: none;
    border-radius: 10px;
    background: #2b2b2b;
    color: white;
    cursor: pointer;
    margin-bottom: 2rem;
    box-shadow: 0 4px 12px rgba(0,0,0,0.25);
    transition: all 0.2s ease;
    
    &:hover {
        background: #4b4b4b;
    }

    &:focus {
        outline: none;
        border-color: #555;
        box-shadow: 0 0 10px rgba(0,0,0,.4);
    }

    option {
        background-color: #1e1e1e;
        border-radius: 3px;
    }

    @media screen and (max-width: 750px) {
        width: 100%;
        max-width: 300px;
    }
`;

export default function Players() {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setReady(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    const [selectedSeason, setSelectedSeason] = useState("season4");
    const [displayedSeason, setDisplayedSeason] = useState("season4");
    const [animationState, setAnimationState] = useState<"enter" | "exit">("enter");

    const handleSeasonChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newSeason = e.target.value;

        if (newSeason === displayedSeason) return;

        setSelectedSeason(newSeason);
        setAnimationState("exit");

        setTimeout(() => {
            setDisplayedSeason(newSeason);
            setAnimationState("enter");
        }, 350);
    };

    const season4Stories = (
        <>
            <Story $animationState={animationState}>
                <GenImage src="/headlines/4week2.jpeg" alt="4Week1" />
                <Overlay>
                    <Headline>Season 4 Week 2 Recap</Headline>
                    <StyledLink to="/headlines/season4/Week2Recap">
                        Click to read more!
                    </StyledLink>
                </Overlay>
            </Story>

            <Story $animationState={animationState}>
                <GenImage src="/headlines/4week1.jpeg" alt="4Week1" />
                <Overlay>
                    <Headline>Season 4 Week 1 Recap</Headline>
                    <StyledLink to="/headlines/season4/Week1Recap">
                        Click to read more!
                    </StyledLink>
                </Overlay>
            </Story>

            <Story $animationState={animationState}>
                <GenImage src="/headlines/Justin.jpg" alt="Justin" />
                <Overlay>
                    <Headline>J-Nasty: From Underdog Coach to Injury-Riddled Player</Headline>
                    <StyledLink to="/headlines/season4/Justin">
                        Click to read more!
                    </StyledLink>
                </Overlay>
            </Story>

            <Story $animationState={animationState}>
                <GenImage src="/headlines/players.jpg" alt="Players" />
                <Overlay>
                    <Headline>10 Players that look to bounce back</Headline>
                    <StyledLink to="/headlines/season4/KeyPlayers">
                        Click to read more!
                    </StyledLink>
                </Overlay>
            </Story>

            <Story $animationState={animationState}>
                <GenImage src="/headlines/draft3.jpg" alt="Draft" />
                <Overlay>
                    <Headline>Season 4 Draft Recap</Headline>
                    <StyledLink to="/headlines/season4/DraftRecap">
                        Click to read more!
                    </StyledLink>
                </Overlay>
            </Story>
        </>
    );

    const season3Stories = (
        <>
            <Story $animationState={animationState}>
                <GenImage src="/archives/s3.jpg" alt="S3" />
                <Overlay>
                    <Headline>Complete Season 3 Recap</Headline>
                    <StyledLink to="/headlines/season3/Season3Recap">Click to read more!</StyledLink>
                </Overlay>
            </Story>
            <Story $animationState={animationState}>
                <GenImage src="/headlines/playoffs3.jpg" alt="Preview" />
                <Overlay>
                    <Headline>Season 3 Playoff Preview</Headline>
                    <StyledLink to="/headlines/season3/Preview">Click to read more!</StyledLink>
                </Overlay>
            </Story>
            <Story $animationState={animationState}>
                <GenImage src="/headlines/3week8.jpg" alt="Week8" />
                <Overlay>
                    <Headline>Season 3 Week 8 Recap</Headline>
                    <StyledLink to="/headlines/season3/Week8Recap">Click to read more!</StyledLink>
                </Overlay>
            </Story>
            <Story $animationState={animationState}>
                <GenImage src="/headlines/3week7.jpg" alt="Week7" />
                <Overlay>
                    <Headline>Season 3 Week 7 Recap</Headline>
                    <StyledLink to="/headlines/season3/Week7Recap">Click to read more!</StyledLink>
                </Overlay>
            </Story>
            <Story $animationState={animationState}>
                <GenImage src="/headlines/3week6.jpg" alt="Week6" />
                <Overlay>
                    <Headline>Season 3 Week 6 Recap</Headline>
                    <StyledLink to="/headlines/season3/Week6Recap">Click to read more!</StyledLink>
                </Overlay>
            </Story>
            <Story $animationState={animationState}>
                <GenImage src="/headlines/3week5.jpeg" alt="Week5" />
                <Overlay>
                    <Headline>Season 3 Week 5 Recap</Headline>
                    <StyledLink to="/headlines/season3/Week5Recap">Click to read more!</StyledLink>
                </Overlay>
            </Story>
            <Story $animationState={animationState}>
                <GenImage src="/headlines/3week4.jpeg" alt="Week4" />
                <Overlay>
                    <Headline>Season 3 Week 4 Recap</Headline>
                    <StyledLink to="/headlines/season3/Week4Recap">Click to read more!</StyledLink>
                </Overlay>
            </Story>
            <Story $animationState={animationState}>
                <GenImage src="/headlines/3week3.jpg" alt="Week3" />
                <Overlay>
                    <Headline>Season 3 Week 3 Recap</Headline>
                    <StyledLink to="/headlines/season3/Week3Recap">Click to read more!</StyledLink>
                </Overlay>
            </Story>
            <Story $animationState={animationState}>
                <GenImage src="/headlines/Cascade.jpg" alt="Isaac" />
                <Overlay>
                    <Headline>Cascade CAPTURED by alleged girlfriend, OUT Week 4</Headline>
                    <StyledLink to="/headlines/season3/Cascade">Click to read more!</StyledLink>
                </Overlay>
            </Story>
            <Story $animationState={animationState}>
                <GenImage src="/headlines/3week2.jpg" alt="Week2" />
                <Overlay>
                    <Headline>Season 3 Week 2 Recap</Headline>
                    <StyledLink to="/headlines/season3/Week2Recap">Click to read more!</StyledLink>
                </Overlay>
            </Story>
            <Story $animationState={animationState}>
                <GenImage src="/headlines/3week1.jpg" alt="Week1" />
                <Overlay>
                    <Headline>Season 3 Week 1 Recap</Headline>
                    <StyledLink to="/headlines/season3/Week1Recap">Click to read more!</StyledLink>
                </Overlay>
            </Story>
            <Story $animationState={animationState}>
                <GenImage src="/headlines/draft3.jpg" alt="Draft" />
                <Overlay>
                    <Headline>Season 3 Draft Recap</Headline>
                    <StyledLink to="/headlines/season3/DraftRecap">Click to read more!</StyledLink>
                </Overlay>
            </Story>
        </>
    );

    const season2Stories = (
        <>
            <Story $animationState={animationState}>
                <GenImage src="/headlines/draft.jpg" alt="Week10" />
                <Overlay>
                    <Headline>Complete Season 2 Recap</Headline>
                    <StyledLink to="/headlines/season2/Season2Recap">Click to read more!</StyledLink>
                </Overlay>
            </Story>
            <Story $animationState={animationState}>
                <GenImage src="/headlines/playoffs.jpg" alt="Week10" />
                <Overlay>
                    <Headline>Season 2 Playoff Recap</Headline>
                    <StyledLink to="/headlines/season2/PlayoffRecap">Click to read more!</StyledLink>
                </Overlay>
            </Story>
            <Story $animationState={animationState}>
                <GenImage src="/headlines/week10.jpg" alt="Week10" />
                <Overlay>
                    <Headline>Season 2 Week 10 Recap</Headline>
                    <StyledLink to="/headlines/season2/Week10Recap">Click to read more!</StyledLink>
                </Overlay>
            </Story>
            <Story $animationState={animationState}>
                <GenImage src="/headlines/week9.jpg" alt="Week9" />
                <Overlay>
                    <Headline>Season 2 Week 9 Recap</Headline>
                    <StyledLink to="/headlines/season2/Week9Recap">Click to read more!</StyledLink>
                </Overlay>
            </Story>
            <Story $animationState={animationState}>
                <GenImage src="/headlines/week8.jpg" alt="Week8" />
                <Overlay>
                    <Headline>Season 2 Week 8 Recap</Headline>
                    <StyledLink to="/headlines/season2/Week8Recap">Click to read more!</StyledLink>
                </Overlay>
            </Story>
            <Story $animationState={animationState}>
                <GenImage src="/headlines/week7.jpg" alt="Week7" />
                <Overlay>
                    <Headline>Season 2 Week 7 Recap</Headline>
                    <StyledLink to="/headlines/season2/Week7Recap">Click to read more!</StyledLink>
                </Overlay>
            </Story>
            <Story $animationState={animationState}>
                <GenImage src="/headlines/blooper.jpeg" alt="Blooper" />
                <Overlay>
                    <Headline>Blooper Asks Crush Out, Got Something Better Instead</Headline>
                    <StyledLink to="/headlines/season2/Blooper">Click to read more!</StyledLink>
                </Overlay>
            </Story>
            <Story $animationState={animationState}>
                <GenImage src="/headlines/AllStar.jpg" alt="AllStar" />
                <Overlay>
                    <Headline>Season 2 All Star Game Recap</Headline>
                    <StyledLink to="/headlines/season2/AllStarGame">Click to read more!</StyledLink>
                </Overlay>
            </Story>
            <Story $animationState={animationState}>
                <GenImage src="/headlines/week6.jpg" alt="Week6" />
                <Overlay>
                    <Headline>Season 2 Week 6 Recap</Headline>
                    <StyledLink to="/headlines/season2/Week6Recap">Click to read more!</StyledLink>
                </Overlay>
            </Story>
            <Story $animationState={animationState}>
                <GenImage src="/headlines/week5.webp" alt="Week5" />
                <Overlay>
                    <Headline>Season 2 Week 5 Recap</Headline>
                    <StyledLink to="/headlines/season2/Week5Recap">Click to read more!</StyledLink>
                </Overlay>
            </Story>
            <Story $animationState={animationState}>
                <GenImage src="/headlines/week4.jpg" alt="Week4" />
                <Overlay>
                    <Headline>Season 2 Week 4 Recap</Headline>
                    <StyledLink to="/headlines/season2/Week4Recap">Click to read more!</StyledLink>
                </Overlay>
            </Story>
            <Story $animationState={animationState}>
                <GenImage src="/headlines/week3.webp" alt="Week3" />
                <Overlay>
                    <Headline>Season 2 Week 3 Recap</Headline>
                    <StyledLink to="/headlines/season2/Week3Recap">Click to read more!</StyledLink>
                </Overlay>
            </Story>
            <Story $animationState={animationState}>
                <GenImage src="/headlines/training.jpg" alt="Training" />
                <Overlay>
                    <Headline>Deep Dive into the Justave Process</Headline>
                    <StyledLink to="/headlines/season2/Training">Click to read more!</StyledLink>
                </Overlay>
            </Story>
            <Story $animationState={animationState}>
                <GenImage src="/headlines/week2.jpg" alt="Week2" />
                <Overlay>
                    <Headline>Season 2 Week 2 Recap</Headline>
                    <StyledLink to="/headlines/season2/Week2Recap">Click to read more!</StyledLink>
                </Overlay>
            </Story>
            <Story $animationState={animationState}>
                <GenImage src="/headlines/week1.jpg" alt="Week1" />
                <Overlay>
                    <Headline>Season 2 Week 1 Recap</Headline>
                    <StyledLink to="/headlines/season2/Week1Recap">Click to read more!</StyledLink>
                </Overlay>
            </Story>
            <Story $animationState={animationState}>
                <GenImage src="/headlines/corkedbat.jpg" alt="Corked" />
                <Overlay>
                    <Headline>Corked Bat Allegations Have Caused Outrage</Headline>
                    <StyledLink to="/headlines/season2/CorkedBat">Click to read more!</StyledLink>
                </Overlay>
            </Story>
            <Story $animationState={animationState}>
                <GenImage src="/headlines/draft.jpg" alt="Draft" />
                <Overlay>
                    <Headline>Season 2 Draft Recap</Headline>
                    <StyledLink to="/headlines/season2/DraftRecap">Click to read more!</StyledLink>
                </Overlay>
            </Story>
            <Story $animationState={animationState}>
                <GenImage src="/headlines/miibaseball.jpg" alt="Miis" />
                <Overlay>
                    <Headline>Head Analyst Predicts Mii Breakout Season</Headline>
                    <StyledLink to="/headlines/MiiBreakout">Click to read more!</StyledLink>
                </Overlay>
            </Story>
            <Story $animationState={animationState}>
                <GenImage src="/headlines/koopa_behind_the_bars.jpg" alt="Koopa" />
                <Overlay>
                    <Headline>Koopa Found Guilty of Assault</Headline>
                    <StyledLink to="/headlines/Koopa">Click to read more!</StyledLink>
                </Overlay>
            </Story>
            <Story $animationState={animationState}>
                <GenImage src="/headlines/Caucasian_bones_playground.png" alt="Dry Bones" />
                <Overlay>
                    <Headline>Dry Bones Gets a Slap on the Wrist</Headline>
                    <StyledLink to="/headlines/DryBones">Click to read more!</StyledLink>
                </Overlay>
            </Story>
        </>
    );

    if (!ready) return null;

    return (
        <ContentDiv>
            <StyledHeader $animate={ready}>PMBL Headlines</StyledHeader>
            <StyledMiniHeader $animate={ready}>Featuring all the top baseball stories!</StyledMiniHeader>
            <SeparatorLine $animate={ready}/>
            <SeasonSelect
                value={selectedSeason}
                onChange={handleSeasonChange}
            >
                <option value="season4">Season 4</option>
                <option value="season3">Season 3</option>
                <option value="season2">Season 2</option>
            </SeasonSelect>

            {displayedSeason === "season4" && season4Stories}
            {displayedSeason === "season3" && season3Stories}
            {displayedSeason === "season2" && season2Stories}

        </ContentDiv>
    );

}
