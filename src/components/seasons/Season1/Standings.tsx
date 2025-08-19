import {styled} from "styled-components";
import {Link} from "react-router-dom";
import { ToggleButton, StyledHeader } from "../../CommonStyles.ts";

export const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    font-size: calc(0.5rem + 1vw);
    padding-top: 2rem;
    min-height: 100vh;
`;

const StyledMiniHeader = styled.h3`
    text-align: center;
    grid-column: span 4;
    color: white;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
    letter-spacing: 2px;
    font-size: 3rem;
    font-family: 'Bebas Neue', sans-serif;
    @media screen and (max-width: 1000px) {
        margin-top: 5px;
        margin-bottom: 0;
    }
`;

const DivisionDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 45%;
    min-width: 320px;
    max-width: 600px;

    @media screen and (max-width: 900px) {
        width: 90%;
    }
`;

const GridRow = styled.div`
    display: grid;
    grid-template-columns: minmax(100px, 1.5fr) repeat(6, 1fr);
    gap: 10px;
    padding: 0.75rem 1rem;
    align-items: center;
    color: white;
    text-align: center;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
    border-bottom: 1px solid white;
    background-color: #12121c;
    border-radius: 10px;
    @media screen and (max-width: 600px) {
        grid-template-columns: minmax(80px, 2fr) repeat(6, 1fr);
        font-size: 0.8rem;
        padding: 0.4rem;
    }
`;

const HeaderRow = styled(GridRow)`
    font-weight: bold;
    background: linear-gradient(145deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0.06) 100%);
    border-bottom: 2px solid white;
`;

const RulesDiv = styled.div`
    color: lightgray;
    display: grid;
    margin-top: 10px;
    gap: 0 80px;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
`;

const StandingsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 3rem;
    flex-wrap: wrap;
    width: 100%;
    margin-bottom: 2rem;

    @media screen and (max-width: 900px) {
        flex-direction: column;
        align-items: center;
    }
`;

export default function Standings1() {
    return (
        <ContentDiv>
            <ToggleButton>
                <Link style={{color: "white"}} to="/archives/seasons/Season1">← Back</Link>
            </ToggleButton>
            <StyledHeader>Season 1 PMBL Standings</StyledHeader>
            <StandingsContainer>
                <DivisionDiv>
                    <StyledMiniHeader style={{marginTop: "0", color: "#4285F4"}}>East Division</StyledMiniHeader>
                    <HeaderRow>
                        <div>Team</div>
                        <div>Record</div>
                        <div>Div</div>
                        <div>Streak</div>
                        <div>PF</div>
                        <div>PA</div>
                        <div>PD</div>
                    </HeaderRow>
                    <GridRow>
                        <div style={{ fontWeight: "bold", color: "#CC0000" }}>Brendan<sup style={{color: "#3C78D8"}}>z</sup></div>
                        <div>7 - 3</div>
                        <div>5 - 1</div>
                        <div>W3</div>
                        <div>71</div>
                        <div>53</div>
                        <div>18</div>
                    </GridRow>
                    <GridRow>
                        <div style={{ fontWeight: "bold", color: "#F1C232" }}>James<sup style={{color: "#38761D"}}>x</sup></div>
                        <div>6 - 4</div>
                        <div>3 - 3</div>
                        <div>L1</div>
                        <div>85</div>
                        <div>72</div>
                        <div>13</div>
                    </GridRow>
                    <GridRow>
                        <div style={{ fontWeight: "bold", color: "#FF9900" }}>Justin<sup style={{color: "#38761D"}}>x</sup></div>
                        <div>6 - 4</div>
                        <div>2 - 4</div>
                        <div>L1</div>
                        <div>74</div>
                        <div>62</div>
                        <div>12</div>
                    </GridRow>
                    <GridRow>
                        <div style={{ fontWeight: "bold", color: "#6AA84F" }}>Matt<sup style={{color: "#A0A0A0"}}>e</sup></div>
                        <div>4 - 6</div>
                        <div>2 - 4</div>
                        <div>W1</div>
                        <div>72</div>
                        <div>90</div>
                        <div>-18</div>
                    </GridRow>
                </DivisionDiv>

                <DivisionDiv>
                    <StyledMiniHeader style={{marginTop: "0", color: "#FF0000"}}>West Division</StyledMiniHeader>
                    <HeaderRow>
                        <div>Team</div>
                        <div>Record</div>
                        <div>Div</div>
                        <div>Streak</div>
                        <div>PF</div>
                        <div>PA</div>
                        <div>PD</div>
                    </HeaderRow>
                    <GridRow>
                        <div style={{ fontWeight: "bold", color: "#FF00FF" }}>Morgan<sup style={{color: "#FF9900"}}>y</sup></div>
                        <div>5 - 5</div>
                        <div>5 - 1</div>
                        <div>W1</div>
                        <div>55</div>
                        <div>57</div>
                        <div>-2</div>
                    </GridRow>
                    <GridRow>
                        <div style={{ fontWeight: "bold", color: "#999999" }}>DANdrew<sup style={{color: "#A0A0A0"}}>e</sup></div>
                        <div>5 - 5</div>
                        <div>3 - 3</div>
                        <div>W3</div>
                        <div>69</div>
                        <div>77</div>
                        <div>-8</div>
                    </GridRow>
                    <GridRow>
                        <div style={{ fontWeight: "bold", color: "#3586E8" }}>Isaac<sup style={{color: "#A0A0A0"}}>e</sup></div>
                        <div>4 - 6</div>
                        <div>3 - 3</div>
                        <div>L2</div>
                        <div>91</div>
                        <div>61</div>
                        <div>30</div>
                    </GridRow>
                    <GridRow>
                        <div style={{ fontWeight: "bold", color: "#9900FF" }}>Christach<sup style={{color: "#A0A0A0"}}>e</sup></div>
                        <div>3 - 7</div>
                        <div>1 - 5</div>
                        <div>L3</div>
                        <div>53</div>
                        <div>99</div>
                        <div>-46</div>
                    </GridRow>
                </DivisionDiv>
            </StandingsContainer>

            <RulesDiv>
                <p style={{margin: "10px"}}><sup style={{color: "#3C78D8"}}>z</sup> - Clinched Conference</p>
                <p style={{margin: "10px"}}><sup style={{color: "#FF9900"}}>y</sup> - Clinched Division</p>
                <p style={{margin: "10px"}}><sup style={{color: "#38761D"}}>x</sup> - Clinched Playoff Berth</p>
                <p style={{margin: "10px"}}><sup style={{color: "#A0A0A0"}}>e</sup> - Eliminated</p>
                <p style={{margin: "10px"}}>Div - Division Record</p>
                <p style={{margin: "10px"}}>PF - Points For</p>
                <p style={{margin: "10px"}}>PF - Points Against</p>
                <p style={{margin: "10px"}}>PD - Points Differential</p>
            </RulesDiv>
        </ContentDiv>
    )
}