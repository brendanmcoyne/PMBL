import {keyframes, css, styled} from "styled-components";
import { StyledHeader } from "../components/CommonStyles.ts";
import {useEffect, useState} from "react";
import StatLeadersMini from "./StatLeaders";
import Game from "./UpcomingGame";

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

export const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    font-size: calc(0.5rem + 1vw);
    padding-top: 2rem;
`;

const StyledMiniHeader = styled.h3<{ $animate?: boolean }>`
    text-align: center;
    font-weight: bold;
    color: white;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 3.5rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;

    @media screen and (max-width: 600px) {
        font-size: 2.5rem;
    }
    ${({ $animate }) =>
            $animate &&
            css`
      animation: ${fadeInUp} 1s ease forwards;
      animation-delay: 0.5s;
    `}
`;

const UpcomingGame = styled.div<{ $animate?: boolean }>`
    background-color: #2e2e2e;
    border-radius: 12px;
    min-height: 400px;
    width: 1000px;
    padding: 1rem;
    margin: 0 1rem 1rem 1rem;
    text-align: center;

    @media screen and (max-width: 1000px) {
        min-height: auto; 
        width: 350px;
    }

    ${({ $animate }) => 
            $animate && css`
        animation: ${fadeInUp} 1s ease forwards;
        animation-delay: 0.5s;
    `}
`;

const TwoSection = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px;
    @media screen and (max-width: 1000px) {
        flex-direction: column;
        margin: 0;
    }
`;

const Standings = styled.div<{ $animate?: boolean }>`
    background-color: #2e2e2e;
    border-radius: 12px;
    width: 500px;
    margin: 1rem;
    @media screen and (max-width: 1000px) {
        width: 350px;
    }
    ${({ $animate }) =>
            $animate &&
            css`
      animation: ${fadeInUp} 1s ease forwards;
      animation-delay: 0.5s;
    `}
`;

const Schedule = styled.div<{ $animate?: boolean }>`
    background-color: #2e2e2e;
    border-radius: 12px;
    width: 500px;
    margin: 1rem;
    @media screen and (max-width: 1000px) {
        width: 350px;
    }
    ${({ $animate }) =>
            $animate &&
            css`
      animation: ${fadeInUp} 1s ease forwards;
      animation-delay: 0.5s;
    `}
`;

const StatLeaders = styled.div<{ $animate?: boolean }>`
    background-color: #2e2e2e;
    border-radius: 12px;
    width: 500px;
    margin: 0 1rem;
    @media screen and (max-width: 1000px) {
        width: 350px;
        margin: 1rem;
    }
    ${({ $animate }) =>
            $animate &&
            css`
      animation: ${fadeInUp} 1s ease forwards;
      animation-delay: 0.5s;
    `}
`;

const PlayoffProjection = styled.div<{ $animate?: boolean }>`
    background-color: #2e2e2e;
    border-radius: 12px;
    width: 500px;
    margin: 0 1rem;
    @media screen and (max-width: 1000px) {
        width: 350px;
        margin: 1rem;
    }
    ${({ $animate }) =>
            $animate &&
            css`
      animation: ${fadeInUp} 1s ease forwards;
      animation-delay: 0.5s;
    `}
`;

const ArrowButton = styled.button`
    width: 40px;
    height: 40px;
    padding: 0;
    font-size: 20px;
    background-color: #555;
    border-radius: 50%; 
    display: flex;
    align-items: center;
    justify-content: center; 
    margin-left: 10px;
`;

export default function CurrentSeason() {
    const [ready, setReady] = useState(false);
    const [division, setDivision] = useState<'West' | 'East'>('West');
    const [week, setWeek] = useState(0);
    const [round, setRound] = useState<'Conference Series' | 'World Series'>('Conference Series');

    const eastTeams = [
        { name: 'James', color: "#F1C232", record: '4-0', divRecord: '2-0' },
        { name: 'Brendan', color: "#CC0000", record: '3-1', divRecord: '1-1' },
        { name: 'Justave', color: "#FF9900", record: '2-2', divRecord: '1-1' },
        { name: 'Marge', color: "#6AA84F", record: '0-4', divRecord: '0-2' },
    ];

    const westTeams = [
        { name: 'Morgan', color: "#FF00FF", record: '2-2', divRecord: '2-0' },
        { name: 'THANdrew', color: "#999999", record: '2-2', divRecord: '1-1' },
        { name: 'Isaac', color: "#3586E8", record: '2-2', divRecord: '1-1' },
        { name: 'Trocean', color: "#9900FF", record: '1-3', divRecord: '0-2' },
    ];

    const Week1 = [
        { matchup: 1, away: "Isaac", awaycolor: "#3586E8", home: "Justave", homecolor: "#FF9900", score: "17-1" },
        { matchup: 2, away: "Morgan", awaycolor: "#FF00FF", home: "James", homecolor: "#F1C232", score: "1-6" },
        { matchup: 3, away: "Marge", awaycolor: "#6AA84F", home: "Trocean", homecolor: "#9900FF", score: "7-9" },
        { matchup: 4, away: "THANdrew", awaycolor: "#999999", home: "Brendan", homecolor: "#CC0000", score: "3-4" },
    ];

    const Week2 = [
        { matchup: 1, away: "Brendan", awaycolor: "#CC0000", home: "Morgan", homecolor: "#FF00FF", score: "21-11" },
        { matchup: 2, away: "Justave", awaycolor: "#FF9900", home: "Trocean", homecolor: "#9900FF", score: "11-9" },
        { matchup: 3, away: "THANdrew", awaycolor: "#999999", home: "Isaac", homecolor: "#3586E8", score: "12-11" },
        { matchup: 4, away: "Marge", awaycolor: "#6AA84F", home: "James", homecolor: "#F1C232", score: "6-8" },
    ];

    const Week3 = [
        { matchup: 1, away: "James", awaycolor: "#F1C232", home: "Justave", homecolor: "#FF9900", score: "11-7" },
        { matchup: 2, away: "Morgan", awaycolor: "#FF00FF", home: "THANdrew", homecolor: "#999999", score: "8-7" },
        { matchup: 3, away: "Trocean", awaycolor: "#9900FF", home: "Isaac", homecolor: "#3586E8", score: "12-23" },
        { matchup: 4, away: "Brendan", awaycolor: "#CC0000", home: "Marge", homecolor: "#6AA84F", score: "18-10" },
    ];

    const Week4 = [
        { matchup: 1, away: "Brendan", awaycolor: "#CC0000", home: "Justave", homecolor: "#FF9900", score: "10-11" },
        { matchup: 2, away: "James", awaycolor: "#F1C232", home: "Isaac", homecolor: "#3586E8", score: "10-6" },
        { matchup: 3, away: "Trocean", awaycolor: "#9900FF", home: "Morgan", homecolor: "#FF00FF", score: "13-15" },
        { matchup: 4, away: "THANdrew", awaycolor: "#999999", home: "Marge", homecolor: "#6AA84F", score: "6-4" },
    ];

    const Week5 = [
        { matchup: 1, away: "Justave", awaycolor: "#FF9900", home: "Marge", homecolor: "#6AA84F", score: "" },
        { matchup: 2, away: "James", awaycolor: "#F1C232", home: "THANdrew", homecolor: "#999999", score: "" },
        { matchup: 3, away: "Trocean", awaycolor: "#9900FF", home: "Brendan", homecolor: "#CC0000", score: "" },
        { matchup: 4, away: "Isaac", awaycolor: "#3586E8", home: "Morgan", homecolor: "#FF00FF", score: "" },
    ];

    const Week6 = [
        { matchup: 1, away: "Morgan", awaycolor: "#FF00FF", home: "Justave", homecolor: "#FF9900", score: "" },
        { matchup: 2, away: "Brendan", awaycolor: "#CC0000", home: "James", homecolor: "#F1C232", score: "" },
        { matchup: 3, away: "Isaac", awaycolor: "#3586E8", home: "Marge", homecolor: "#6AA84F", score: "" },
        { matchup: 4, away: "THANdrew", awaycolor: "#999999", home: "Trocean", homecolor: "#9900FF", score: "" },
    ];

    const Week7 = [
        { matchup: 1, away: "Justave", awaycolor: "#FF9900", home: "THANdrew", homecolor: "#999999", score: "" },
        { matchup: 2, away: "James", awaycolor: "#F1C232", home: "Marge", homecolor: "#6AA84F", score: "" },
        { matchup: 3, away: "Brendan", awaycolor: "#CC0000", home: "Isaac", homecolor: "#3586E8", score: "" },
        { matchup: 4, away: "Morgan", awaycolor: "#FF00FF", home: "Trocean", homecolor: "#9900FF", score: "" },
    ];

    const Week8 = [
        { matchup: 1, away: "THANdrew", awaycolor: "#999999", home: "Morgan", homecolor: "#FF00FF", score: "" },
        { matchup: 2, away: "Justave", awaycolor: "#FF9900", home: "James", homecolor: "#F1C232", score: "" },
        { matchup: 3, away: "Marge", awaycolor: "#6AA84F", home: "Brendan", homecolor: "#CC0000", score: "" },
        { matchup: 4, away: "Isaac", awaycolor: "#3586E8", home: "Trocean", homecolor: "#9900FF", score: "" },
    ];

    const Week9 = [
        { matchup: 1, away: "Marge", awaycolor: "#6AA84F", home: "Morgan", homecolor: "#FF00FF", score: "" },
        { matchup: 2, away: "Trocean", awaycolor: "#9900FF", home: "James", homecolor: "#F1C232", score: "" },
        { matchup: 3, away: "Justave", awaycolor: "#FF9900", home: "Brendan", homecolor: "#CC0000", score: "" },
        { matchup: 4, away: "Isaac", awaycolor: "#3586E8", home: "THANdrew", homecolor: "#999999", score: "" },
    ];

    const Week10 = [
        { matchup: 1, away: "Marge", awaycolor: "#6AA84F", home: "Justave", homecolor: "#FF9900", score: "" },
        { matchup: 2, away: "James", awaycolor: "#F1C232", home: "Brendan", homecolor: "#CC0000", score: "" },
        { matchup: 3, away: "Trocean", awaycolor: "#9900FF", home: "THANdrew", homecolor: "#999999", score: "" },
        { matchup: 4, away: "Morgan", awaycolor: "#FF00FF", home: "Isaac", homecolor: "#3586E8", score: "" },
    ];

    const ConfSeries = [
        { matchup: 1, away: "THANdrew", awaycolor: "#99999", home: "James", homecolor: "#F1C232", record: "0-0"},
        { matchup: 2, away: "Brendan", awaycolor: "#CC0000", home: "Morgan", homecolor: "#FF00FF", record: "0-0"},
    ]

    const WorldSeries = [
        { matchup: 1, away: "TBD", awaycolor: "#FFFFFF", home: "TBD", homecolor: "#FFFFFF", record: "0-0"},
    ]

    const currentTeams = division === 'West' ? westTeams : eastTeams;
    const allWeeks = [Week1, Week2, Week3, Week4, Week5, Week6, Week7, Week8, Week9, Week10];
    const currentWeek = allWeeks[week];
    const weekLabel = `Week ${week + 1}`;
    const playoffRound = round === 'World Series' ? WorldSeries : ConfSeries;

    useEffect(() => {
        const timer = setTimeout(() => {
            setReady(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    if (!ready) return null;

    return(
        <ContentDiv>
            <StyledHeader $animate={ready}>Current Season</StyledHeader>

            <UpcomingGame $animate={ready}>
                <StyledMiniHeader style={{marginBottom: "0"}}>Upcoming Game</StyledMiniHeader>
                <Game />
            </UpcomingGame>
            <TwoSection>
                <Standings $animate={ready}>
                    <StyledMiniHeader style={{marginBottom: "0"}}>Current Standings</StyledMiniHeader>

                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row", textAlign: "center" }}>
                        <ArrowButton onClick={() => setDivision('East')} disabled={division === 'East'}
                                style={{color: division === 'West' ? "white" : "darkgray",}}>◀
                        </ArrowButton>
                        <StyledMiniHeader style={{ color: division === 'West' ? "#FF0000" : "#4285F4", fontSize: "2rem", margin: "0 1rem" }}>
                            {division} Division
                        </StyledMiniHeader>
                        <ArrowButton onClick={() => setDivision('West')} disabled={division === 'West'}
                                style={{color: division === 'East' ? "white" : "darkgray"}}>▶
                        </ArrowButton>
                    </div>

                    <div style={{
                        display: "flex", justifyContent: "space-between", padding: "0.5rem 1rem",
                        borderBottom: "1px solid gray", color: "lightgray", fontWeight: "bold", fontSize: "1.1rem"
                    }}>
                        <span style={{ flex: 1 }}>Team</span>
                        <span style={{ flex: 1, textAlign: "center" }}>Record</span>
                        <span style={{ flex: 1, textAlign: "center" }}>Div Record</span>
                    </div>

                    <div style={{ padding: "0 1rem 1rem 1rem"}}>
                        {currentTeams.map((team, index) => (
                            <div key={index} style={{ display: "flex", justifyContent: "space-between", color: "white", margin: "1rem 0" }}>
                                <span style={{ flex: 1, color: team.color, fontWeight: "bold"}}>{team.name}</span>
                                <span style={{ flex: 1, textAlign: "center" }}>{team.record}</span>
                                <span style={{ flex: 1, textAlign: "center" }}>{team.divRecord}</span>
                            </div>
                        ))}
                    </div>
                </ Standings>

                <Schedule $animate={ready}>
                    <StyledMiniHeader style={{marginBottom: "0"}}>Week Schedule</StyledMiniHeader>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row", textAlign: "center" }}>
                        <ArrowButton onClick={() => setWeek(prev => Math.max(prev - 1, 0))} disabled={week === 0}
                                style={{color: week === 0 ? "darkgray" : "white"}}>◀
                        </ArrowButton>
                        <StyledMiniHeader style={{ color: "white", fontSize: "2rem", margin: "0 1rem" }}>
                            {weekLabel}
                        </StyledMiniHeader>
                        <ArrowButton onClick={() => setWeek(prev => Math.min(prev + 1, allWeeks.length - 1))} disabled={week === allWeeks.length - 1}
                                     style={{color: week === 9 ? "darkgray" : "white"}}>▶
                        </ArrowButton>
                    </div>

                    <div style={{ padding: "0 1rem 1rem 1rem" }}>
                        {currentWeek.map((game, index) => (
                            <div key={index} style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                color: "white",
                                margin: "0.5rem",
                                borderBottom: "1px solid #444",
                                paddingBottom: "0.5rem"
                            }}>
                            <span style={{ flex: 1, color: game.awaycolor, fontWeight: "bold", textAlign: "left"}}>
                                {game.away || "TBD"}
                            </span>
                                <div style={{flex: 1, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", fontSize: "1.2rem"}}>
                                    <span>vs</span>
                                    <span style={{fontSize: "0.8rem", color: "#aaa", marginTop: "2px"}}>
                                        {game.score || "0-0"}
                                    </span>
                                </div>
                            <span style={{ flex: 1, color: game.homecolor, fontWeight: "bold", textAlign: "right"}}>
                                {game.home || "TBD"}
                            </span>
                            </div>

                        ))}
                    </div>
                </Schedule>
            </TwoSection>

            <TwoSection>
                <StatLeaders $animate={ready}>
                    <StyledMiniHeader>Stat Leaders</StyledMiniHeader>
                    <StatLeadersMini />
                </StatLeaders>
                <PlayoffProjection $animate={ready}>
                    <StyledMiniHeader>Current Playoffs</StyledMiniHeader>

                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row", textAlign: "center" }}>
                        <ArrowButton onClick={() => setRound('Conference Series')} disabled={round === 'Conference Series'}
                                     style={{color: round === 'World Series' ? "white" : "darkgray",}}>◀
                        </ArrowButton>
                        <StyledMiniHeader style={{ color: round === 'Conference Series' ? "#888888" : "#FFD700", fontSize: "2rem", margin: "0 1rem" }}>
                            {round}
                        </StyledMiniHeader>
                        <ArrowButton onClick={() => setRound('World Series')} disabled={round === 'World Series'}
                                     style={{color: round === 'Conference Series' ? "white" : "darkgray"}}>▶
                        </ArrowButton>
                    </div>

                    <div style={{ padding: "0 1rem 1rem 1rem" }}>
                        {playoffRound.map((matchup, index) => (
                            <div key={index} style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                color: "white",
                                margin: "0.5rem",
                                borderBottom: "1px solid #444",
                                paddingBottom: "0.5rem"
                            }}>
                            <span style={{ flex: 1, color: matchup.awaycolor, fontWeight: "bold", textAlign: "left" }}>
                                {matchup.away || "TBD"}
                            </span>
                                <div style={{flex: 1, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", fontSize: "1.2rem"}}>
                                    <span>vs</span>
                                    <span style={{fontSize: "0.8rem", color: "#aaa", marginTop: "2px"}}>
                                        {matchup.record || "0-0"}
                                    </span>
                                </div>
                                <span style={{ flex: 1, color: matchup.homecolor, fontWeight: "bold", textAlign: "right" }}>
                                    {matchup.home || "TBD"}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div style={{ textAlign: "center", marginTop: "1rem" }}>
                        {round === "Conference Series" && <img src="/alcs.png" alt="ALCS" style={{ maxWidth: "54%" }} />}
                        {round === "World Series" && <img src="/worldseries.png" alt="World Series" style={{ width: "265px", padding: "15px", backgroundColor: "#041E42" }} />}
                    </div>
                </PlayoffProjection>
            </TwoSection>
        </ContentDiv>
    );
}