import {styled} from "styled-components";
import {Link} from "react-router-dom";

export const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    font-size: calc(0.5rem + 1vw);
    padding-top: 2rem; /* Add some top padding */
`;

const StyledHeader = styled.h1`
    text-align: center;
    margin-bottom: 1rem;
    color: white;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
`;

const StyledMiniHeader = styled.h3`
    text-align: center;
    grid-column: span 4;
    font-size: 2rem;
    color: white;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
`;

const TeamDetails = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    color: white;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
`;

const DivisionDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const DetailContainer = styled.div`
    width: 80px;
    text-align: center;
`;

const ToggleButton = styled.button`
    background-color: lightgray;
    color: darkblue;
    font-size: 1.5rem;
    border: none;
    padding: 7px 15px;
    cursor: pointer;
    align-self: flex-start;  
    margin-left: 2rem;
`;

export default function Standings1() {
    return (
        <ContentDiv>
            <ToggleButton>
                <Link style={{color: "darkblue"}} to="/archives/seasons/Season1">Back</Link>
            </ToggleButton>
            <StyledHeader>Season 1 PMBL Standings</StyledHeader>
            <DivisionDiv>
            <StyledMiniHeader>East Division</StyledMiniHeader>
                <TeamDetails>
                    <DetailContainer>Team</DetailContainer>
                    <DetailContainer>Record</DetailContainer>
                    <DetailContainer>Div</DetailContainer>
                    <DetailContainer>Streak</DetailContainer>
                    <DetailContainer>PF</DetailContainer>
                    <DetailContainer>PA</DetailContainer>
                    <DetailContainer>PD</DetailContainer>
                </TeamDetails>
            <TeamDetails>
                <DetailContainer style={{ fontWeight: "bold", width: "100px" }}>Brendan</DetailContainer>
                <DetailContainer>7 - 3</DetailContainer>
                <DetailContainer>5 - 1</DetailContainer>
                <DetailContainer>W3</DetailContainer>
                <DetailContainer>71</DetailContainer>
                <DetailContainer>53</DetailContainer>
                <DetailContainer>18</DetailContainer>
            </TeamDetails>
            <TeamDetails>
                <DetailContainer style={{ fontWeight: "bold", width: "100px" }}>James</DetailContainer>
                <DetailContainer>6 - 4</DetailContainer>
                <DetailContainer>3 - 3</DetailContainer>
                <DetailContainer>L1</DetailContainer>
                <DetailContainer>85</DetailContainer>
                <DetailContainer>72</DetailContainer>
                <DetailContainer>13</DetailContainer>
            </TeamDetails>
            <TeamDetails>
                <DetailContainer style={{ fontWeight: "bold", width: "100px" }}>Justin</DetailContainer>
                <DetailContainer>6 - 4</DetailContainer>
                <DetailContainer>2 - 4</DetailContainer>
                <DetailContainer>L1</DetailContainer>
                <DetailContainer>74</DetailContainer>
                <DetailContainer>62</DetailContainer>
                <DetailContainer>12</DetailContainer>
            </TeamDetails>
            <TeamDetails>
                <DetailContainer style={{ fontWeight: "bold", width: "100px" }}>Matt</DetailContainer>
                <DetailContainer>4 - 6</DetailContainer>
                <DetailContainer>2 - 4</DetailContainer>
                <DetailContainer>W1</DetailContainer>
                <DetailContainer>72</DetailContainer>
                <DetailContainer>90</DetailContainer>
                <DetailContainer>-18</DetailContainer>
            </TeamDetails>
            </DivisionDiv>

            <DivisionDiv>
            <StyledMiniHeader>West Division</StyledMiniHeader>
                <TeamDetails>
                    <DetailContainer>Team</DetailContainer>
                    <DetailContainer>Record</DetailContainer>
                    <DetailContainer>Div</DetailContainer>
                    <DetailContainer>Streak</DetailContainer>
                    <DetailContainer>PF</DetailContainer>
                    <DetailContainer>PA</DetailContainer>
                    <DetailContainer>PD</DetailContainer>
                </TeamDetails>
            <TeamDetails>
                <DetailContainer style={{ fontWeight: "bold", width: "100px" }}>Morgan</DetailContainer>
                <DetailContainer>5 - 5</DetailContainer>
                <DetailContainer>5 - 1</DetailContainer>
                <DetailContainer>W1</DetailContainer>
                <DetailContainer>55</DetailContainer>
                <DetailContainer>57</DetailContainer>
                <DetailContainer>-2</DetailContainer>
            </TeamDetails>
            <TeamDetails>
                <DetailContainer style={{ fontWeight: "bold", width: "100px" }}>DANdrew</DetailContainer>
                <DetailContainer>5 - 5</DetailContainer>
                <DetailContainer>3 - 3</DetailContainer>
                <DetailContainer>W3</DetailContainer>
                <DetailContainer>69</DetailContainer>
                <DetailContainer>77</DetailContainer>
                <DetailContainer>-8</DetailContainer>
            </TeamDetails>
            <TeamDetails>
                <DetailContainer style={{ fontWeight: "bold", width: "100px" }}>Isaac</DetailContainer>
                <DetailContainer>4 - 6</DetailContainer>
                <DetailContainer>3 - 3</DetailContainer>
                <DetailContainer>L2</DetailContainer>
                <DetailContainer>91</DetailContainer>
                <DetailContainer>61</DetailContainer>
                <DetailContainer>30</DetailContainer>
            </TeamDetails>
            <TeamDetails>
                <DetailContainer style={{ fontWeight: "bold", width: "100px" }}>Christach</DetailContainer>
                <DetailContainer>3 - 7</DetailContainer>
                <DetailContainer>1 - 5</DetailContainer>
                <DetailContainer>L3</DetailContainer>
                <DetailContainer>53</DetailContainer>
                <DetailContainer>99</DetailContainer>
                <DetailContainer>-46</DetailContainer>
            </TeamDetails>
            </DivisionDiv>
        </ContentDiv>
    )
}