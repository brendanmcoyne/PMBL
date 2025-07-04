import {styled} from "styled-components";
import {Link} from "react-router-dom";

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

const StyledHeader = styled.h1`
    font-size: 80px;
    color: white;
    font-family: 'Luckiest Guy', cursive;
    text-align: center;
    text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0px 0px 12px #ff0;
    margin-bottom: 0;
`;

const StyledMiniHeader = styled.h3`
    text-align: center;
    grid-column: span 4;
    font-size: 2rem;
    color: white;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
`;

const DivisionDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 2rem;
    width: 90%;
    max-width: 800px;
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

const GridRow = styled.div`
    display: grid;
    grid-template-columns: 140px repeat(6, 1fr);
    gap: 10px;
    padding: 0.75rem 1rem;
    align-items: center;
    color: white;
    text-align: center;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
    border-bottom: 1px solid white;
    background-color: #12121c;
    border-radius: 10px;
`;

const HeaderRow = styled(GridRow)`
    font-weight: bold;
    background: linear-gradient(145deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0.06) 100%);
    border-bottom: 2px solid white;
`;

const RulesDiv = styled.div`
    color: lightgray;
    display: grid;
    gap: 0 80px;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
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
            <StyledMiniHeader>West Division</StyledMiniHeader>
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