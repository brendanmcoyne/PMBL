import { styled } from "styled-components";
import { StyledHeader } from "../components/CommonStyles.ts";
import { useState } from "react";
import StatLeadersMini from "./StatLeaders";
import { Link } from "react-router-dom";

const LinkButton = styled(Link)`
  display: inline-block;
  margin-top: 2rem;
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  background-color: #4285f4;
  color: white;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.5rem;
  text-align: center;
  text-decoration: none;
  transition: background 0.2s ease-in-out;

  &:hover {
    background-color: #3367d6;
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

const StyledMiniHeader = styled.h3`
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
`;

const UpcomingGame = styled.div`
    background-color: #2e2e2e;
    border-radius: 12px;
    height: 200px;
    width: 1000px;
    padding: 1rem;
    text-align: center;
`;

const TwoSection = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px;
    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
`;

const Standings = styled.div`
    background-color: #2e2e2e;
    border-radius: 12px;
    width: 500px;
    margin: 1rem;
`;

const Schedule = styled.div`
    background-color: #2e2e2e;
    border-radius: 12px;
    width: 500px;
    margin: 1rem;
`;

const StatLeaders = styled.div`
    background-color: #2e2e2e;
    border-radius: 12px;
    width: 500px;
    margin: 0 1rem;
`;

const PlayoffProjection = styled.div`
    background-color: #2e2e2e;
    border-radius: 12px;
    width: 500px;
    margin: 0 1rem;
`;

const TinyText = styled.span`
    color: lightgray;
    margin-top: 0;
    font-style: italic;
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
    const [division, setDivision] = useState<'West' | 'East'>('West');
    const [week, setWeek] = useState(0);
    const [round, setRound] = useState<'Conference Series' | 'World Series'>('Conference Series');

    const eastTeams = [
        { name: 'Brendan', color: "#CC0000", record: '0-0', divRecord: '0-0' },
        { name: 'James', color: "#F1C232", record: '0-0', divRecord: '0-0' },
        { name: 'Justin', color: "#FF9900", record: '0-0', divRecord: '0-0' },
        { name: 'Matt', color: "#6AA84F", record: '0-0', divRecord: '0-0' },
    ];

    const westTeams = [
        { name: 'Morgan', color: "#FF00FF", record: '0-0', divRecord: '0-0' },
        { name: 'DANdrew', color: "#999999", record: '0-0', divRecord: '0-0' },
        { name: 'Isaac', color: "#3586E8", record: '0-0', divRecord: '0-0' },
        { name: 'Christach', color: "#9900FF", record: '0-0', divRecord: '0-0' },
    ];

    const Week1 = [
        { matchup: 1, away: "", awaycolor: "", home: "", homecolor: "", score: ""},
        { matchup: 2, away: "", awaycolor: "", home: "", homecolor: "", score: ""},
        { matchup: 3, away: "", awaycolor: "", home: "", homecolor: "", score: ""},
        { matchup: 4, away: "", awaycolor: "", home: "", homecolor: "", score: ""},
    ];

    const Week2 = [
        { matchup: 1, away: "", awaycolor: "", home: "", homecolor: "", score: ""},
        { matchup: 2, away: "", awaycolor: "", home: "", homecolor: "", score: ""},
        { matchup: 3, away: "", awaycolor: "", home: "", homecolor: "", score: ""},
        { matchup: 4, away: "", awaycolor: "", home: "", homecolor: "", score: ""},
    ];

    const Week3 = [
        { matchup: 1, away: "", awaycolor: "", home: "", homecolor: "", score: ""},
        { matchup: 2, away: "", awaycolor: "", home: "", homecolor: "", score: ""},
        { matchup: 3, away: "", awaycolor: "", home: "", homecolor: "", score: ""},
        { matchup: 4, away: "", awaycolor: "", home: "", homecolor: "", score: ""},
    ];

    const Week4 = [
        { matchup: 1, away: "", awaycolor: "", home: "", homecolor: "", score: ""},
        { matchup: 2, away: "", awaycolor: "", home: "", homecolor: "", score: ""},
        { matchup: 3, away: "", awaycolor: "", home: "", homecolor: "", score: ""},
        { matchup: 4, away: "", awaycolor: "", home: "", homecolor: "", score: ""},
    ];

    const Week5 = [
        { matchup: 1, away: "", awaycolor: "", home: "", homecolor: "", score: ""},
        { matchup: 2, away: "", awaycolor: "", home: "", homecolor: "", score: ""},
        { matchup: 3, away: "", awaycolor: "", home: "", homecolor: "", score: ""},
        { matchup: 4, away: "", awaycolor: "", home: "", homecolor: "", score: ""},
    ];

    const Week6 = [
        { matchup: 1, away: "", awaycolor: "", home: "", homecolor: "", score: ""},
        { matchup: 2, away: "", awaycolor: "", home: "", homecolor: "", score: ""},
        { matchup: 3, away: "", awaycolor: "", home: "", homecolor: "", score: ""},
        { matchup: 4, away: "", awaycolor: "", home: "", homecolor: "", score: ""},
    ];
    const Week7 = [
        { matchup: 1, away: "", awaycolor: "", home: "", homecolor: "", score: ""},
        { matchup: 2, away: "", awaycolor: "", home: "", homecolor: "", score: ""},
        { matchup: 3, away: "", awaycolor: "", home: "", homecolor: "", score: ""},
        { matchup: 4, away: "", awaycolor: "", home: "", homecolor: "", score: ""},
    ];
    const Week8 = [
        { matchup: 1, away: "", awaycolor: "", home: "", homecolor: "", score: ""},
        { matchup: 2, away: "", awaycolor: "", home: "", homecolor: "", score: ""},
        { matchup: 3, away: "", awaycolor: "", home: "", homecolor: "", score: ""},
        { matchup: 4, away: "", awaycolor: "", home: "", homecolor: "", score: ""},
    ];
    const Week9 = [
        { matchup: 1, away: "", awaycolor: "", home: "", homecolor: "", score: ""},
        { matchup: 2, away: "", awaycolor: "", home: "", homecolor: "", score: ""},
        { matchup: 3, away: "", awaycolor: "", home: "", homecolor: "", score: ""},
        { matchup: 4, away: "", awaycolor: "", home: "", homecolor: "", score: ""},
    ];
    const Week10 = [
        { matchup: 1, away: "", awaycolor: "", home: "", homecolor: "", score: ""},
        { matchup: 2, away: "", awaycolor: "", home: "", homecolor: "", score: ""},
        { matchup: 3, away: "", awaycolor: "", home: "", homecolor: "", score: ""},
        { matchup: 4, away: "", awaycolor: "", home: "", homecolor: "", score: ""},
    ];

    const ConfSeries = [
        { matchup: 1, away: "", awaycolor: "", home: "", homecolor: "", record: ""},
        { matchup: 2, away: "", awaycolor: "", home: "", homecolor: "", record: ""},
    ]

    const WorldSeries = [
        { matchup: 1, away: "", awaycolor: "", home: "", homecolor: "", record: ""},
    ]

    const currentTeams = division === 'West' ? westTeams : eastTeams;
    const allWeeks = [Week1, Week2, Week3, Week4, Week5, Week6, Week7, Week8, Week9, Week10];
    const currentWeek = allWeeks[week];
    const weekLabel = `Week ${week + 1}`;
    const playoffRound = round === 'World Series' ? WorldSeries : ConfSeries;

    return(
        <ContentDiv>
            <StyledHeader>Current Season</StyledHeader>

            <UpcomingGame>
                <StyledMiniHeader>Upcoming Game</StyledMiniHeader>
                <TinyText>No games yet.</TinyText>
            </UpcomingGame>
            <TwoSection>
                <Standings>
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

                <Schedule>
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
                                margin: "0.5rem 0",
                                borderBottom: "1px solid #444",
                                paddingBottom: "0.5rem"
                            }}>
                            <span style={{ flex: 1, color: game.awaycolor, fontWeight: "bold", textAlign: "left" }}>
                                {game.away || "TBD"}
                            </span>
                                <div style={{flex: 1, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", fontSize: "1.2rem"}}>
                                    <span>vs</span>
                                    <span style={{fontSize: "0.8rem", color: "#aaa", marginTop: "2px"}}>
                                        {game.score || "0-0"}
                                    </span>
                                </div>
                            <span style={{ flex: 1, color: game.homecolor, fontWeight: "bold", textAlign: "right" }}>
                                {game.home || "TBD"}
                            </span>
                            </div>

                        ))}
                    </div>
                </Schedule>
            </TwoSection>
            <TwoSection>
                <StatLeaders>
                    <StyledMiniHeader>Stat Leaders</StyledMiniHeader>
                    <StatLeadersMini />
                </StatLeaders>
                <PlayoffProjection>
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
                                margin: "0.5rem 0",
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
                </PlayoffProjection>
            </TwoSection>
            <LinkButton to="/season/stats">
                View Full Season Stats
            </LinkButton>
        </ContentDiv>
    );
}