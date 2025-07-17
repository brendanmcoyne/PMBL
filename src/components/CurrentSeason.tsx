import { styled } from "styled-components";
import { StyledHeader } from "../components/CommonStyles.ts";
import UpdatedStandings from "./UpdatedStandings.tsx";

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
`;

const TwoSection = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px;
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

export default function CurrentSeason() {
    return(
        <ContentDiv>
            <StyledHeader>Current Season</StyledHeader>

            <UpcomingGame>
                <StyledMiniHeader>Upcoming Game</StyledMiniHeader>
            </UpcomingGame>
            <TwoSection>
                <Standings>
                    <StyledMiniHeader style={{marginBottom: "0"}}>Current Standings</StyledMiniHeader>
                    <StyledMiniHeader style={{color: "#FF0000", fontSize: "2rem", marginTop: "0"}}>West Division</StyledMiniHeader>
                </Standings>

                <Schedule>
                    <StyledMiniHeader>Week Schedule</StyledMiniHeader>
                </Schedule>
            </TwoSection>
            <TwoSection>
                <StatLeaders>
                    <StyledMiniHeader>Stat Leaders</StyledMiniHeader>
                </StatLeaders>
                <PlayoffProjection>
                    <StyledMiniHeader>Current Playoffs</StyledMiniHeader>
                </PlayoffProjection>
            </TwoSection>
            <UpdatedStandings />
        </ContentDiv>
    );
}