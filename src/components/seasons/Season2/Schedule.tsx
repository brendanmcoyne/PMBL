import { Link } from "react-router-dom";
import { useState, useLayoutEffect } from "react";
import { GamesSeason2 } from "../../../data/GamesSeason2";
import type { GameStats } from "../../../data/GamesSeason2";
import { ToggleButton, StyledHeader } from "../../CommonStyles.ts";
import { styled, keyframes, css } from "styled-components";

const fadeInUp = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    font-size: calc(0.5rem + 1vw);
    padding-top: 2rem;
    position: relative;
`;

const StyledMiniHeader = styled.h3`
    text-align: center;
    grid-column: span 2;
    font-size: 2rem;
    color: white;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
`;

const CenteredMatchupWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 500px;
    @media screen and (max-width: 1000px) {
        width: 85%;
    }
`;

const MatchupLabel = styled.p`
    color: white;
    font-weight: bold;
    font-size: 30px;
    margin: 0;
    text-align: center;
`;

const Week = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem 3rem;
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    @media screen and (max-width: 1000px) {
        grid-template-columns: repeat(1, 1fr);
        width: 85%;
    }
`;

const Matchup = styled.div`
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-template-rows: auto auto auto auto;
    gap: 0.25rem 2rem;
    padding: 1rem;
    background-color: #12121c;
    border-radius: 10px;
    width: 100%;
    color: white;
    text-align: center;
    box-sizing: border-box;
    border-bottom: 1px solid white;
`;

const TeamName = styled.p`
    font-weight: bold;
    margin: 0;
    font-size: 1.2rem;
`;

const TeamRecord = styled.p`
    font-size: 0.9rem;
    font-weight: bold;
    color: gray;
    margin: 0;
`;

const Stadium = styled.div`
    grid-column: span 3;
    font-size: 0.85rem;
    color: #aaa;
    text-align: center;
`;

const VsText = styled.div`
    font-weight: bold;
    font-size: 1.1rem;
    margin: 0;
`;

const ScoreLine = styled.div`
    grid-column: 2;
    font-weight: bold;
    font-size: 1.3rem;
    text-align: center;
    margin-top: -1.5rem; 
`;

const ModalContent = styled.div<{ $navOffset: number; $animate?: boolean }>`
    border-radius: 12px;
    position: relative;
    display: flex;
    flex-direction: column;
    background: #333333;
    color: white;
    width: min(900px, 94vw);
    padding-bottom: 10px;

    margin-top: ${({ $navOffset }) => `calc(${$navOffset}px)`};
    height: ${({ $navOffset }) => `calc(100vh - ${$navOffset}px - 24px)`};

    ${({ $animate }) =>
            $animate &&
            css`
            animation: ${fadeInUp} 0.6s ease forwards;
        `}
`;


const ModalScrollWrapper = styled.div`
    flex: 1;
    overflow-y: auto;
    padding: 0 0.5rem;
    scrollbar-width: none;
    -ms-overflow-style: none;
    

    &::-webkit-scrollbar {
        width: 0;
        height: 0;
    }
`;

const ModalBackground = styled.div`
    position: fixed;
    inset: 0;
    z-index: 99999;

    background: rgba(0, 0, 0, 0.55);
    backdrop-filter: blur(6px);

    display: flex;
    justify-content: center;
    align-items: flex-start;
`;

const CloseButton = styled.button`
    position: absolute;
    right: 10px;
    background: none;
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
`;

const StatsTable = styled.table`
    border-collapse: collapse;
    margin: 2rem auto;
    width: 90%;
    max-width: 800px;
    color: white;
    text-align: center;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid #444;
    border-radius: 10px;
    overflow: hidden;
    
`;

const StatsTh = styled.th`
    border: 1px solid #666;
    padding: 0.5rem;
    background: rgba(255, 255, 255, 0.1);
    font-weight: bold;
`;

const StatsTd = styled.td`
    border: 1px solid #555;
    padding: 0.5rem;
    font-size: 1rem;
`;

const TwoColumnGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    align-items: start;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`;

const TeamColumn = styled.div`
    border-radius: 12px;
    background: rgba(255, 255, 255, .05);
`;

export default function Schedule2() {
    const [selectedGame, setSelectedGame] = useState<GameStats | null>(null);
    const [navHeight, setNavHeight] = useState(0);

    useLayoutEffect(() => {
        const measure = () => {
            const nav = document.querySelector("nav");
            const h = nav ? Math.ceil(nav.getBoundingClientRect().height) : 0;
            setNavHeight(h);
        };

        measure();
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, []);

    return (
        <ContentDiv>
            <ToggleButton>
                <Link style={{color: "white"}} to="/archives/seasons/Season2">← Back</Link>
            </ToggleButton>
            <StyledHeader>Season 2 Regular Season</StyledHeader>
            <StyledMiniHeader style={{fontFamily: "'Oswald', sans-serif", fontSize: "3rem", margin: "30px"}}>Week 1</StyledMiniHeader>

            <Week>
                <Matchup onClick={() => setSelectedGame(GamesSeason2["Game1"])} style={{ cursor: "pointer" }}>
                    <TeamName style={{color: "#FF00FF"}}>Morgan</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#F1C232"}}>James</TeamName>
                    <TeamRecord>(0-1)</TeamRecord>
                    <div />
                    <TeamRecord>(1-0)</TeamRecord>
                    <ScoreLine>3 - 9</ScoreLine>
                    <Stadium>Daisy Cruiser</Stadium>
                </Matchup>
                <Matchup onClick={() => setSelectedGame(GamesSeason2["Game2"])} style={{ cursor: "pointer" }}>
                    <TeamName style={{color: "#6AA84F"}}>Marge</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#9900FF"}}>Trocean</TeamName>
                    <TeamRecord>(1-0)</TeamRecord>
                    <div />
                    <TeamRecord>(0-1)</TeamRecord>
                    <ScoreLine>6 - 5</ScoreLine>
                    <Stadium>Mario Stadium</Stadium>
                </Matchup>
                <Matchup onClick={() => setSelectedGame(GamesSeason2["Game3"])} style={{ cursor: "pointer" }}>
                    <TeamName style={{color: "#FF9900"}}>Justave</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#CC0000"}}>Brendan</TeamName>
                    <TeamRecord>(1-0)</TeamRecord>
                    <div />
                    <TeamRecord>(0-1)</TeamRecord>
                    <ScoreLine>3 - 2</ScoreLine>
                    <Stadium>Mario Stadium</Stadium>
                </Matchup>
                <Matchup onClick={() => setSelectedGame(GamesSeason2["Game4"])} style={{ cursor: "pointer" }}>
                    <TeamName style={{color: "#999999"}}>THANdrew</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#3586E8"}}>Isaac</TeamName>
                    <TeamRecord>(1-0)</TeamRecord>
                    <div />
                    <TeamRecord>(0-1)</TeamRecord>
                    <ScoreLine>6 - 5</ScoreLine>
                    <Stadium>Bowsers Castle</Stadium>
                </Matchup>
            </Week>

            <StyledMiniHeader style={{fontFamily: "'Oswald', sans-serif", fontSize: "3rem", margin: "30px"}}>Week 2</StyledMiniHeader>

            <Week>
                <Matchup onClick={() => setSelectedGame(GamesSeason2["Game5"])} style={{ cursor: "pointer" }}>
                    <TeamName style={{color: "#FF00FF"}}>Morgan</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#FF9900"}}>Justave</TeamName>
                    <TeamRecord>(1-1)</TeamRecord>
                    <div/>
                    <TeamRecord>(1-1)</TeamRecord>
                    <ScoreLine>12 - 5</ScoreLine>
                    <Stadium>Mario Stadium</Stadium>
                </Matchup>
                <Matchup onClick={() => setSelectedGame(GamesSeason2["Game6"])} style={{ cursor: "pointer" }}>
                    <TeamName style={{color: "#CC0000"}}>Brendan</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#F1C232"}}>James</TeamName>
                    <TeamRecord>(0-2)</TeamRecord>
                    <div />
                    <TeamRecord>(2-0)</TeamRecord>
                    <ScoreLine>9 - 14</ScoreLine>
                    <Stadium>Daisy Cruiser</Stadium>
                </Matchup>
                <Matchup onClick={() => setSelectedGame(GamesSeason2["Game7"])} style={{ cursor: "pointer" }}>
                    <TeamName style={{color: "#3586E8"}}>Isaac</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#6AA84F"}}>Marge</TeamName>
                    <TeamRecord>(1-1)</TeamRecord>
                    <div/>
                    <TeamRecord>(1-1)</TeamRecord>
                    <ScoreLine>4 - 1</ScoreLine>
                    <Stadium>Bowsers Castle</Stadium>
                </Matchup>
                <Matchup onClick={() => setSelectedGame(GamesSeason2["Game8"])} style={{ cursor: "pointer" }}>
                    <TeamName style={{color: "#9900FF"}}>Trocean</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#999999"}}>THANdrew</TeamName>
                    <TeamRecord>(0-2)</TeamRecord>
                    <div/>
                    <TeamRecord>(2-0)</TeamRecord>
                    <ScoreLine>6 - 8</ScoreLine>
                    <Stadium>Daisy Cruiser</Stadium>
                </Matchup>

            </Week>

            <StyledMiniHeader style={{fontFamily: "'Oswald', sans-serif", fontSize: "3rem", margin: "30px"}}>Week 3</StyledMiniHeader>

            <Week>
                <Matchup onClick={() => setSelectedGame(GamesSeason2["Game9"])} style={{ cursor: "pointer" }}>
                    <TeamName style={{color: "#9900FF"}}>Trocean</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#FF00FF"}}>Morgan</TeamName>
                    <TeamRecord>(1-2)</TeamRecord>
                    <div />
                    <TeamRecord>(1-2)</TeamRecord>
                    <ScoreLine>12 - 4</ScoreLine>
                    <Stadium>Mario Stadium</Stadium>
                </Matchup>

                <Matchup onClick={() => setSelectedGame(GamesSeason2["Game10"])} style={{ cursor: "pointer" }}>
                    <TeamName style={{color: "#FF9900"}}>Justave</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#999999"}}>THANdrew</TeamName>
                    <TeamRecord>(1-2)</TeamRecord>
                    <div />
                    <TeamRecord>(3-0)</TeamRecord>
                    <ScoreLine>1 - 3</ScoreLine>
                    <Stadium>DK Jungle</Stadium>
                </Matchup>
                <Matchup onClick={() => setSelectedGame(GamesSeason2["Game11"])} style={{ cursor: "pointer" }}>
                    <TeamName style={{color: "#F1C232"}}>James</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#6AA84F"}}>Marge</TeamName>
                    <TeamRecord>(3-0)</TeamRecord>
                    <div />
                    <TeamRecord>(1-2)</TeamRecord>
                    <ScoreLine>21 - 4</ScoreLine>
                    <Stadium>Yoshi Park</Stadium>
                </Matchup>
                <Matchup onClick={() => setSelectedGame(GamesSeason2["Game12"])} style={{ cursor: "pointer" }}>
                    <TeamName style={{color: "#3586E8"}}>Isaac</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#CC0000"}}>Brendan</TeamName>
                    <TeamRecord>(2-1)</TeamRecord>
                    <div />
                    <TeamRecord>(0-3)</TeamRecord>
                    <ScoreLine>7 - 3</ScoreLine>
                    <Stadium>Yoshi Park</Stadium>
                </Matchup>
            </Week>


            <StyledMiniHeader style={{fontFamily: "'Oswald', sans-serif", fontSize: "3rem", margin: "30px"}}>Week 4</StyledMiniHeader>

            <Week>
                <Matchup onClick={() => setSelectedGame(GamesSeason2["Game13"])} style={{ cursor: "pointer" }}>
                    <TeamName style={{color: "#6AA84F"}}>Marge</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#FF9900"}}>Justave</TeamName>
                    <TeamRecord>(1-3)</TeamRecord>
                    <div />
                    <TeamRecord>(2-2)</TeamRecord>
                    <ScoreLine>0 - 16</ScoreLine>
                    <Stadium>Daisy Cruiser</Stadium>
                </Matchup>
                <Matchup onClick={() => setSelectedGame(GamesSeason2["Game14"])} style={{ cursor: "pointer" }}>
                    <TeamName style={{color: "#F1C232"}}>James</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#9900FF"}}>Trocean</TeamName>
                    <TeamRecord>(4-0)</TeamRecord>
                    <div />
                    <TeamRecord>(1-3)</TeamRecord>
                    <ScoreLine>21 - 6</ScoreLine>
                    <Stadium>Bowsers Castle</Stadium>
                </Matchup>
                <Matchup onClick={() => setSelectedGame(GamesSeason2["Game15"])} style={{ cursor: "pointer" }}>
                    <TeamName style={{color: "#CC0000"}}>Brendan</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#999999"}}>THANdrew</TeamName>
                    <TeamRecord>(1-3)</TeamRecord>
                    <div />
                    <TeamRecord>(3-1)</TeamRecord>
                    <ScoreLine>8 - 6</ScoreLine>
                    <Stadium>Mario Stadium</Stadium>
                </Matchup>
                <Matchup onClick={() => setSelectedGame(GamesSeason2["Game16"])} style={{ cursor: "pointer" }}>
                    <TeamName style={{color: "#FF00FF"}}>Morgan</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#3586E8"}}>Isaac</TeamName>
                    <TeamRecord>(1-3)</TeamRecord>
                    <div />
                    <TeamRecord>(3-1)</TeamRecord>
                    <ScoreLine>4 - 6</ScoreLine>
                    <Stadium>DK Jungle</Stadium>
                </Matchup>
            </Week>

            <StyledMiniHeader style={{fontFamily: "'Oswald', sans-serif", fontSize: "3rem", margin: "30px"}}>Week 5</StyledMiniHeader>

            <Week>
                <Matchup onClick={() => setSelectedGame(GamesSeason2["Game17"])} style={{ cursor: "pointer" }}>
                    <TeamName style={{color: "#9900FF"}}>Trocean</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#3586E8"}}>Isaac</TeamName>
                    <TeamRecord>(1-4)</TeamRecord>
                    <div />
                    <TeamRecord>(4-1)</TeamRecord>
                    <ScoreLine>3 - 10</ScoreLine>
                    <Stadium>Yoshi Park</Stadium>
                </Matchup>
                <Matchup onClick={() => setSelectedGame(GamesSeason2["Game18"])} style={{ cursor: "pointer" }}>
                    <TeamName style={{color: "#CC0000"}}>Brendan</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#FF9900"}}>Justave</TeamName>
                    <TeamRecord>(1-4)</TeamRecord>
                    <div />
                    <TeamRecord>(3-2)</TeamRecord>
                    <ScoreLine>5 - 15</ScoreLine>
                    <Stadium>Daisy Cruiser</Stadium>
                </Matchup>
                <Matchup onClick={() => setSelectedGame(GamesSeason2["Game19"])} style={{ cursor: "pointer" }}>
                    <TeamName style={{color: "#999999"}}>THANdrew</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#F1C232"}}>James</TeamName>
                    <TeamRecord>(4-1)</TeamRecord>
                    <div />
                    <TeamRecord>(4-1)</TeamRecord>
                    <ScoreLine>6 - 5</ScoreLine>
                    <Stadium>Daisy Cruiser</Stadium>
                </Matchup>
                <Matchup onClick={() => setSelectedGame(GamesSeason2["Game20"])} style={{ cursor: "pointer" }}>
                    <TeamName style={{color: "#6AA84F"}}>Marge</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#FF00FF"}}>Morgan</TeamName>
                    <TeamRecord>(2-3)</TeamRecord>
                    <div />
                    <TeamRecord>(1-4)</TeamRecord>
                    <ScoreLine>12 - 9</ScoreLine>
                    <Stadium>Mario Stadium</Stadium>
                </Matchup>
            </Week>

            <StyledMiniHeader style={{fontFamily: "'Oswald', sans-serif", fontSize: "3rem", margin: "30px"}}>Week 6</StyledMiniHeader>

            <Week>
                <Matchup onClick={() => setSelectedGame(GamesSeason2["Game21"])} style={{ cursor: "pointer" }}>
                    <TeamName style={{color: "#3586E8"}}>Isaac</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#999999"}}>THANdrew</TeamName>
                    <TeamRecord>(5-1)</TeamRecord>
                    <div />
                    <TeamRecord>(4-2)</TeamRecord>
                    <ScoreLine>5 - 1</ScoreLine>
                    <Stadium>Bowser Jrs Playroom</Stadium>
                </Matchup>
                <Matchup onClick={() => setSelectedGame(GamesSeason2["Game22"])} style={{ cursor: "pointer" }}>
                    <TeamName style={{color: "#FF00FF"}}>Morgan</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#9900FF"}}>Trocean</TeamName>
                    <TeamRecord>(2-4)</TeamRecord>
                    <div />
                    <TeamRecord>(1-5)</TeamRecord>
                    <ScoreLine>11 - 4</ScoreLine>
                    <Stadium>Wario City</Stadium>
                </Matchup>
                <Matchup onClick={() => setSelectedGame(GamesSeason2["Game23"])} style={{ cursor: "pointer" }}>
                    <TeamName style={{color: "#FF9900"}}>Justave</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#F1C232"}}>James</TeamName>
                    <TeamRecord>(4-2)</TeamRecord>
                    <div />
                    <TeamRecord>(4-2)</TeamRecord>
                    <ScoreLine>6 - 2</ScoreLine>
                    <Stadium>Daisy Cruiser</Stadium>
                </Matchup>
                <Matchup onClick={() => setSelectedGame(GamesSeason2["Game24"])} style={{ cursor: "pointer" }}>
                    <TeamName style={{color: "#CC0000"}}>Brendan</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#6AA84F"}}>Marge</TeamName>
                    <TeamRecord>(2-4)</TeamRecord>
                    <div />
                    <TeamRecord>(2-4)</TeamRecord>
                    <ScoreLine>7 - 6</ScoreLine>
                    <Stadium>Yoshi Park</Stadium>
                </Matchup>
            </Week>

            <StyledMiniHeader style={{fontFamily: "'Oswald', sans-serif", fontSize: "3rem", margin: "30px"}}>Week 7</StyledMiniHeader>

            <Week>
                <Matchup onClick={() => setSelectedGame(GamesSeason2["Game25"])} style={{ cursor: "pointer" }}>
                    <TeamName style={{color: "#FF9900"}}>Justave</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#3586E8"}}>Isaac</TeamName>
                    <TeamRecord>(5-2)</TeamRecord>
                    <div />
                    <TeamRecord>(5-2)</TeamRecord>
                    <ScoreLine>5 - 3</ScoreLine>
                    <Stadium>Bowser Jrs Playroom</Stadium>
                </Matchup>
                <Matchup onClick={() => setSelectedGame(GamesSeason2["Game26"])} style={{ cursor: "pointer" }}>
                    <TeamName style={{color: "#6AA84F"}}>Marge</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#F1C232"}}>James</TeamName>
                    <TeamRecord>(2-5)</TeamRecord>
                    <div />
                    <TeamRecord>(5-2)</TeamRecord>
                    <ScoreLine>1 - 13</ScoreLine>
                    <Stadium>Yoshi Park</Stadium>
                </Matchup>
                <Matchup onClick={() => setSelectedGame(GamesSeason2["Game27"])} style={{ cursor: "pointer" }}>
                    <TeamName style={{color: "#9900FF"}}>Trocean</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#CC0000"}}>Brendan</TeamName>
                    <TeamRecord>(1-6)</TeamRecord>
                    <div />
                    <TeamRecord>(3-4)</TeamRecord>
                    <ScoreLine>5 - 14</ScoreLine>
                    <Stadium>Yoshi Park</Stadium>
                </Matchup>
                <Matchup onClick={() => setSelectedGame(GamesSeason2["Game28"])} style={{ cursor: "pointer" }}>
                    <TeamName style={{color: "#FF00FF"}}>Morgan</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#999999"}}>THANdrew</TeamName>
                    <TeamRecord>(3-4)</TeamRecord>
                    <div />
                    <TeamRecord>(4-3)</TeamRecord>
                    <ScoreLine>9 - 8</ScoreLine>
                    <Stadium>Daisy Cruiser</Stadium>
                </Matchup>
            </Week>

            <StyledMiniHeader style={{fontFamily: "'Oswald', sans-serif", fontSize: "3rem", margin: "30px"}}>Week 8</StyledMiniHeader>

            <Week>
                <Matchup onClick={() => setSelectedGame(GamesSeason2["Game29"])} style={{ cursor: "pointer" }}>
                    <TeamName style={{color: "#F1C232"}}>James</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#3586E8"}}>Isaac</TeamName>
                    <TeamRecord>(5-3)</TeamRecord>
                    <div />
                    <TeamRecord>(6-2)</TeamRecord>
                    <ScoreLine>9 - 11</ScoreLine>
                    <Stadium>DK Jungle</Stadium>
                </Matchup>
                <Matchup onClick={() => setSelectedGame(GamesSeason2["Game30"])} style={{ cursor: "pointer" }}>
                    <TeamName style={{color: "#FF9900"}}>Justave</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#6AA84F"}}>Marge</TeamName>
                    <TeamRecord>(5-3)</TeamRecord>
                    <div />
                    <TeamRecord>(3-5)</TeamRecord>
                    <ScoreLine>4 - 10</ScoreLine>
                    <Stadium>Bowsers Castle</Stadium>
                </Matchup>
                <Matchup onClick={() => setSelectedGame(GamesSeason2["Game31"])} style={{ cursor: "pointer" }}>
                    <TeamName style={{color: "#CC0000"}}>Brendan</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#FF00FF"}}>Morgan</TeamName>
                    <TeamRecord>(3-5)</TeamRecord>
                    <div />
                    <TeamRecord>(4-4)</TeamRecord>
                    <ScoreLine>8 - 10</ScoreLine>
                    <Stadium>Mario Stadium</Stadium>
                </Matchup>
                <Matchup onClick={() => setSelectedGame(GamesSeason2["Game32"])} style={{ cursor: "pointer" }}>
                    <TeamName style={{color: "#999999"}}>THANdrew</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#9900FF"}}>Trocean</TeamName>
                    <TeamRecord>(4-4)</TeamRecord>
                    <div />
                    <TeamRecord>(2-6)</TeamRecord>
                    <ScoreLine>4 - 5</ScoreLine>
                    <Stadium>Bowsers Castle</Stadium>
                </Matchup>
            </Week>

            <StyledMiniHeader style={{fontFamily: "'Oswald', sans-serif", fontSize: "3rem", margin: "30px"}}>Week 9</StyledMiniHeader>

            <Week>
                <Matchup onClick={() => setSelectedGame(GamesSeason2["Game33"])} style={{ cursor: "pointer" }}>
                    <TeamName style={{color: "#9900FF"}}>Trocean</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#FF9900"}}>Justave</TeamName>
                    <TeamRecord>(2-7)</TeamRecord>
                    <div />
                    <TeamRecord>(6-3)</TeamRecord>
                    <ScoreLine>4 - 16</ScoreLine>
                    <Stadium>Daisy Cruiser</Stadium>
                </Matchup>
                <Matchup onClick={() => setSelectedGame(GamesSeason2["Game34"])} style={{ cursor: "pointer" }}>
                    <TeamName style={{color: "#3586E8"}}>Isaac</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#FF00FF"}}>Morgan</TeamName>
                    <TeamRecord>(7-2)</TeamRecord>
                    <div />
                    <TeamRecord>(4-5)</TeamRecord>
                    <ScoreLine>8 - 5</ScoreLine>
                    <Stadium>Mario Stadium</Stadium>
                </Matchup>
                <Matchup onClick={() => setSelectedGame(GamesSeason2["Game35"])} style={{ cursor: "pointer" }}>
                    <TeamName style={{color: "#F1C232"}}>James</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#CC0000"}}>Brendan</TeamName>
                    <TeamRecord>(6-3)</TeamRecord>
                    <div />
                    <TeamRecord>(3-6)</TeamRecord>
                    <ScoreLine>8 - 4</ScoreLine>
                    <Stadium>Bowsers Castle</Stadium>
                </Matchup>
                <Matchup onClick={() => setSelectedGame(GamesSeason2["Game36"])} style={{ cursor: "pointer" }}>
                    <TeamName style={{color: "#999999"}}>THANdrew</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#6AA84F"}}>Marge</TeamName>
                    <TeamRecord>(5-4)</TeamRecord>
                    <div />
                    <TeamRecord>(3-6)</TeamRecord>
                    <ScoreLine>6 - 1</ScoreLine>
                    <Stadium>Bowsers Castle</Stadium>
                </Matchup>
            </Week>

            <StyledMiniHeader style={{fontFamily: "'Oswald', sans-serif", fontSize: "3rem", margin: "30px"}}>Week 10</StyledMiniHeader>

            <Week>
                <Matchup onClick={() => setSelectedGame(GamesSeason2["Game37"])} style={{ cursor: "pointer" }}>
                    <TeamName style={{color: "#6AA84F"}}>Marge</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#CC0000"}}>Brendan</TeamName>
                    <TeamRecord>(3-7)</TeamRecord>
                    <div />
                    <TeamRecord>(4-6)</TeamRecord>
                    <ScoreLine>3 - 12</ScoreLine>
                    <Stadium>Daisy Cruiser</Stadium>
                </Matchup>

                <Matchup onClick={() => setSelectedGame(GamesSeason2["Game38"])} style={{ cursor: "pointer" }}>
                    <TeamName style={{color: "#3586E8"}}>Isaac</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#9900FF"}}>Trocean</TeamName>
                    <TeamRecord>(7-3)</TeamRecord>
                    <div />
                    <TeamRecord>(3-7)</TeamRecord>
                    <ScoreLine>3 - 7</ScoreLine>
                    <Stadium>Bowser Jrs Playroom</Stadium>
                </Matchup>

                <Matchup onClick={() => setSelectedGame(GamesSeason2["Game39"])} style={{ cursor: "pointer" }}>
                    <TeamName style={{color: "#F1C232"}}>James</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#FF9900"}}>Justave</TeamName>
                    <TeamRecord>(6-4)</TeamRecord>
                    <div />
                    <TeamRecord>(7-3)</TeamRecord>
                    <ScoreLine>1 - 17</ScoreLine>
                    <Stadium>Daisy Cruiser</Stadium>
                </Matchup>

                <Matchup onClick={() => setSelectedGame(GamesSeason2["Game40"])} style={{ cursor: "pointer" }}>
                    <TeamName style={{color: "#999999"}}>THANdrew</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#FF00FF"}}>Morgan</TeamName>
                    <TeamRecord>(5-5)</TeamRecord>
                    <div />
                    <TeamRecord>(5-5)</TeamRecord>
                    <ScoreLine>8 - 9</ScoreLine>
                    <Stadium>Mario Stadium</Stadium>
                </Matchup>
            </Week>

            <StyledMiniHeader style={{fontFamily: "'Oswald', sans-serif", fontSize: "3rem", margin: "30px"}}>** All Star Game **</StyledMiniHeader>

            <CenteredMatchupWrapper>
                <Matchup onClick={() => setSelectedGame(GamesSeason2["AllStarGame"])} style={{ cursor: "pointer" }}>
                    <TeamName style={{color: "#FF0000"}}>All-Star West</TeamName>
                    <VsText>vs</VsText>
                    <TeamName style={{color: "#4A86E8"}}>All-Star East</TeamName>
                    <TeamRecord>(0-2)</TeamRecord>
                    <div />
                    <TeamRecord>(2-0)</TeamRecord>
                    <ScoreLine>11 - 12</ScoreLine>
                    <Stadium>Yoshi Park</Stadium>
                </Matchup>
            </CenteredMatchupWrapper>

            <StyledMiniHeader style={{fontFamily: "'Oswald', sans-serif", fontSize: "3rem", margin: "30px"}}>Special Games</StyledMiniHeader>

            <Week style={{display: "flex", flexDirection: "column", maxWidth: "600px"}}>
                <Matchup style={{display: "flex", flexDirection: "column"}}>
                    <MatchupLabel>The 11 Inning Slug Fest</MatchupLabel>
                    <h5 style={{margin: "0"}}>Week 1</h5>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "center", marginBottom: "20px"}}>
                        <div style={{ display: "flex", justifyContent: "flex-end", flex: 1 }}>
                            <TeamName style={{color: "#6AA84F", marginRight: "10px"}}>Marge</TeamName>
                        </div>
                        <VsText>vs</VsText>
                        <div style={{ display: "flex", justifyContent: "flex-start", flex: 1 }}>
                            <TeamName style={{color: "#9900FF", marginLeft: "10px"}}>Trocean</TeamName>
                        </div>
                    </div>
                    <ScoreLine>6 - 5</ScoreLine>
                    <Stadium>Mario Stadium</Stadium>
                    <p style={{color: "lightgray"}}>With 3 of the 4 managers in this game coaching for the very first time,
                    this game would go into the 11th inning, before Peach would hit a walkoff single to give Marge the victory.
                    This game would set the record for longest PMBL game.</p>
                </Matchup>
                <Matchup style={{display: "flex", flexDirection: "column"}}>
                    <MatchupLabel>The Noki Game</MatchupLabel>
                    <h5 style={{margin: "0"}}>Week 1</h5>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "center", marginBottom: "20px"}}>
                        <div style={{ display: "flex", justifyContent: "flex-end", flex: 1 }}>
                            <TeamName style={{color: "#999999", marginRight: "10px"}}>THANdrew</TeamName>
                        </div>
                        <VsText>vs</VsText>
                        <div style={{ display: "flex", justifyContent: "flex-start", flex: 1 }}>
                            <TeamName style={{color: "#3586E8", marginLeft: "10px"}}>Isaac</TeamName>
                        </div>
                    </div>
                    <ScoreLine>6 - 5</ScoreLine>
                    <Stadium>Bowsers Castle</Stadium>
                    <p style={{color: "lightgray"}}>In a controversial move to give one of the Nokis its first ever playing time,
                    neither team expected Green Noki to be the hero of the game for THANdrew, hitting the go ahead RBI in the 9th
                    and recording the save on the mound securing the final 2 outs.</p>
                </Matchup>
                <Matchup style={{display: "flex", flexDirection: "column"}}>
                    <MatchupLabel>The Crime Time Game</MatchupLabel>
                    <h5 style={{margin: "0"}}>Week 4</h5>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "center", marginBottom: "20px"}}>
                        <div style={{ display: "flex", justifyContent: "flex-end", flex: 1 }}>
                            <TeamName style={{color: "#CC0000", marginRight: "10px"}}>Brendan</TeamName>
                        </div>
                        <VsText>vs</VsText>
                        <div style={{ display: "flex", justifyContent: "flex-start", flex: 1 }}>
                            <TeamName style={{color: "#999999", marginLeft: "10px"}}>THANdrew</TeamName>
                        </div>
                    </div>
                    <ScoreLine>8 - 6</ScoreLine>
                    <Stadium>Mario Stadium</Stadium>
                    <p style={{color: "lightgray"}}>Boomerang Bro would be the first player to ever be hit by a pitch
                    in this game, which sparked tons of item usage, including the game tying 2 run RBI by Diddler thanks
                    to a boo. The Larry Cuc impersonator was also caught during this game, who looked a lot more
                    like Geek Squad.</p>
                </Matchup>
                <Matchup style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                    <MatchupLabel>Bloopers Debut</MatchupLabel>
                    <h5 style={{margin: "0"}}>Week 6</h5>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "center", marginBottom: "20px"}}>
                        <div style={{ display: "flex", justifyContent: "flex-end", flex: 1 }}>
                            <TeamName style={{color: "#CC0000", marginRight: "10px"}}>Brendan</TeamName>
                        </div>
                        <VsText>vs</VsText>
                        <div style={{ display: "flex", justifyContent: "flex-start", flex: 1 }}>
                            <TeamName style={{color: "#6AA84F", marginLeft: "10px"}}>Marge</TeamName>
                        </div>
                    </div>
                    <ScoreLine>7 - 6</ScoreLine>
                    <Stadium>Yoshi Park</Stadium>
                    <p style={{color: "lightgray"}}>Bloopers first ever PMBL game became a close one between two bottom
                    feeders with Brendan blowing a 4-0 lead, and then almost giving up a 7-4 lead in the bottom of the
                    7th. Marge would load the bases with their best batter up down 1 for Boomerang Bro to make an
                    All-Star caliber play at short to seal the 7-6 victory.</p>
                </Matchup>
                <Matchup style={{display: "flex", flexDirection: "column"}}>
                    <MatchupLabel>The Error Game</MatchupLabel>
                    <h5 style={{margin: "0"}}>Week 8</h5>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "center", marginBottom: "20px"}}>
                        <div style={{ display: "flex", justifyContent: "flex-end", flex: 1 }}>
                            <TeamName style={{color: "#F1C232", marginRight: "10px"}}>James</TeamName>
                        </div>
                        <VsText>vs</VsText>
                        <div style={{ display: "flex", justifyContent: "flex-start", flex: 1 }}>
                            <TeamName style={{color: "#3586E8", marginLeft: "10px"}}>Isaac</TeamName>
                        </div>
                    </div>
                    <ScoreLine>9 - 11</ScoreLine>
                    <Stadium>DK Jungle</Stadium>
                    <p style={{color: "lightgray"}}>In one of the most bizarre games in PMBL history, Isaac failed to setup
                    his outfield correctly and James blew a 7-0 lead and a 9-6 lead with one out remaining in the 7th.
                    Blue Toad and Yellow Pianta, who have both never pitched before, would give up 9 of Isaacs 11 scored runs
                    while only pitching .1 innings. </p>
                </Matchup>
                <Matchup style={{display: "flex", flexDirection: "column"}}>
                    <MatchupLabel>The Playoff Clinching Shootout</MatchupLabel>
                    <h5 style={{margin: "0"}}>Week 10</h5>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "center", marginBottom: "20px"}}>
                        <div style={{ display: "flex", justifyContent: "flex-end", flex: 1 }}>
                            <TeamName style={{color: "#999999", marginRight: "10px"}}>THANdrew</TeamName>
                        </div>
                        <VsText>vs</VsText>
                        <div style={{ display: "flex", justifyContent: "flex-start", flex: 1 }}>
                            <TeamName style={{color: "#FF00FF", marginLeft: "10px"}}>Morgan</TeamName>
                        </div>
                    </div>
                    <ScoreLine>8 - 9</ScoreLine>
                    <Stadium>Mario Stadium</Stadium>
                    <p style={{color: "lightgray"}}>Win and in, lose and out. An incredible back and forth game to
                    end the regular season, resulting in multiple lead changes and questionable fielding substitutions.
                    King K's 5 RBI day would propel Morgan to the playoffs for the 2nd season in a row.</p>
                </Matchup>
            </Week>

            {selectedGame && (
                <ModalBackground onClick={() => setSelectedGame(null)}>
                    <ModalContent
                        $navOffset={navHeight}
                        $animate={!!selectedGame}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <CloseButton onClick={() => setSelectedGame(null)}>✕</CloseButton>

                        <ModalScrollWrapper>
                            <h2 style={{ textAlign: "center", marginTop: "1.5rem" }}>{selectedGame.awayManager} vs {selectedGame.homeManager}</h2>

                            <StatsTable>
                                <thead>
                                <tr>
                                    <StatsTh>Team</StatsTh>
                                    {selectedGame.game.away.scores.map((_, i) => (
                                        <StatsTh key={i}>{i + 1}</StatsTh>
                                    ))}
                                    <StatsTh>R</StatsTh>
                                    <StatsTh>H</StatsTh>
                                    <StatsTh>E</StatsTh>
                                    <StatsTh>LOB</StatsTh>
                                </tr>
                                </thead>
                                <tbody>
                                {[selectedGame.game.away, selectedGame.game.home].map(team => (
                                    <tr key={team.name}>
                                        <StatsTd style={{ color: team.color }}>{team.name}</StatsTd>
                                        {team.scores.map((s, i) => (
                                            <StatsTd key={i}>{s}</StatsTd>
                                        ))}
                                        <StatsTd>{team.R}</StatsTd>
                                        <StatsTd>{team.H}</StatsTd>
                                        <StatsTd>{team.E}</StatsTd>
                                        <StatsTd>{team.LOB}</StatsTd>
                                    </tr>
                                ))}
                                </tbody>
                            </StatsTable>

                            <TwoColumnGrid>
                                <TeamColumn>
                                    <h3 style={{ color: selectedGame.game.away.color, textAlign: "center" }}>
                                        {selectedGame.game.away.name}
                                    </h3>

                                    <h4 style={{textAlign: "center", margin: "0px"}}>Batting</h4>
                                    <StatsTable>
                                        <tr>
                                        <StatsTh>Player</StatsTh>
                                        <StatsTh>AB</StatsTh>
                                        <StatsTh>H</StatsTh>
                                        <StatsTh>R</StatsTh>
                                        <StatsTh>RBI</StatsTh>
                                        <StatsTh>HR</StatsTh>
                                        </tr>
                                        <tbody>
                                        {selectedGame.battingStats
                                            .filter(p => p.team === selectedGame.game.away.name)
                                            .map(p => (
                                                <tr key={p.player}>
                                                    <StatsTd>{p.player}</StatsTd>
                                                    <StatsTd>{p.AB}</StatsTd>
                                                    <StatsTd>{p.H}</StatsTd>
                                                    <StatsTd>{p.R}</StatsTd>
                                                    <StatsTd>{p.RBI}</StatsTd>
                                                    <StatsTd>{p.HR}</StatsTd>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </StatsTable>

                                    <h4 style={{textAlign: "center", margin: "0px"}}>Pitching</h4>
                                    <StatsTable>
                                        <thead>
                                        <tr>
                                            <StatsTh>Player</StatsTh>
                                            <StatsTh>IP</StatsTh>
                                            <StatsTh>H</StatsTh>
                                            <StatsTh>ER</StatsTh>
                                            <StatsTh>SO</StatsTh>
                                            <StatsTh>ERA</StatsTh>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {selectedGame.pitchingStats
                                            .filter((p) => p.team === selectedGame.game.away.name)
                                            .map((p) => (
                                                <tr key={p.player}>
                                                    <StatsTd>{p.player}</StatsTd>
                                                    <StatsTd>{p.IP}</StatsTd>
                                                    <StatsTd>{p.H}</StatsTd>
                                                    <StatsTd>{p.ER}</StatsTd>
                                                    <StatsTd>{p.SO}</StatsTd>
                                                    <StatsTd>{p.ERA}</StatsTd>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </StatsTable>
                                </TeamColumn>

                                <TeamColumn>
                                    <h3 style={{ color: selectedGame.game.home.color, textAlign: "center" }}>
                                        {selectedGame.game.home.name}
                                    </h3>

                                    <h4 style={{textAlign: "center", margin: "0px"}}>Batting</h4>
                                    <StatsTable>
                                        <tr>
                                            <StatsTh>Player</StatsTh>
                                            <StatsTh>AB</StatsTh>
                                            <StatsTh>H</StatsTh>
                                            <StatsTh>R</StatsTh>
                                            <StatsTh>RBI</StatsTh>
                                            <StatsTh>HR</StatsTh>
                                        </tr>
                                        <tbody>
                                        {selectedGame.battingStats
                                            .filter(p => p.team === selectedGame.game.home.name)
                                            .map(p => (
                                                <tr key={p.player}>
                                                    <StatsTd>{p.player}</StatsTd>
                                                    <StatsTd>{p.AB}</StatsTd>
                                                    <StatsTd>{p.H}</StatsTd>
                                                    <StatsTd>{p.R}</StatsTd>
                                                    <StatsTd>{p.RBI}</StatsTd>
                                                    <StatsTd>{p.HR}</StatsTd>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </StatsTable>

                                    <h4 style={{textAlign: "center", margin: "0px"}}>Pitching</h4>
                                    <StatsTable>
                                        <tr>
                                            <StatsTh>Player</StatsTh>
                                            <StatsTh>IP</StatsTh>
                                            <StatsTh>H</StatsTh>
                                            <StatsTh>ER</StatsTh>
                                            <StatsTh>SO</StatsTh>
                                            <StatsTh>ERA</StatsTh>
                                        </tr>
                                        <tbody>
                                        {selectedGame.pitchingStats
                                            .filter((p) => p.team === selectedGame.game.home.name)
                                            .map((p) => (
                                                <tr key={p.player}>
                                                    <StatsTd>{p.player}</StatsTd>
                                                    <StatsTd>{p.IP}</StatsTd>
                                                    <StatsTd>{p.H}</StatsTd>
                                                    <StatsTd>{p.ER}</StatsTd>
                                                    <StatsTd>{p.SO}</StatsTd>
                                                    <StatsTd>{p.ERA}</StatsTd>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </StatsTable>
                                </TeamColumn>
                            </TwoColumnGrid>
                        </ModalScrollWrapper>
                    </ModalContent>
                </ModalBackground>
            )}

        </ContentDiv>


    );
}
