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
    background-color: rgba(255, 255, 255, 0.15);
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
                    <div style={{ fontWeight: "bold" }}>Brendan<sup>z</sup></div>
                    <div>7 - 3</div>
                    <div>5 - 1</div>
                    <div>W3</div>
                    <div>71</div>
                    <div>53</div>
                    <div>18</div>
                </GridRow>
                <GridRow>
                    <div style={{ fontWeight: "bold" }}>James<sup>x</sup></div>
                    <div>6 - 4</div>
                    <div>3 - 3</div>
                    <div>L1</div>
                    <div>85</div>
                    <div>72</div>
                    <div>13</div>
                </GridRow>
                <GridRow>
                    <div style={{ fontWeight: "bold" }}>Justin<sup>x</sup></div>
                    <div>6 - 4</div>
                    <div>2 - 4</div>
                    <div>L1</div>
                    <div>74</div>
                    <div>62</div>
                    <div>12</div>
                </GridRow>
                <GridRow>
                    <div style={{ fontWeight: "bold" }}>Matt<sup>e</sup></div>
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
                    <div style={{ fontWeight: "bold" }}>Morgan<sup>y</sup></div>
                    <div>5 - 5</div>
                    <div>5 - 1</div>
                    <div>W1</div>
                    <div>55</div>
                    <div>57</div>
                    <div>-2</div>
                </GridRow>
                <GridRow>
                    <div style={{ fontWeight: "bold" }}>DANdrew<sup>e</sup></div>
                    <div>5 - 5</div>
                    <div>3 - 3</div>
                    <div>W3</div>
                    <div>69</div>
                    <div>77</div>
                    <div>-8</div>
                </GridRow>
                <GridRow>
                    <div style={{ fontWeight: "bold" }}>Isaac<sup>e</sup></div>
                    <div>4 - 6</div>
                    <div>3 - 3</div>
                    <div>L2</div>
                    <div>91</div>
                    <div>61</div>
                    <div>30</div>
                </GridRow>
                <GridRow>
                    <div style={{ fontWeight: "bold" }}>Christach<sup>e</sup></div>
                    <div>3 - 7</div>
                    <div>1 - 5</div>
                    <div>L3</div>
                    <div>53</div>
                    <div>99</div>
                    <div>-46</div>
                </GridRow>
            </DivisionDiv>

            <RulesDiv>
                <p style={{margin: "10px"}}><sup>z</sup> - Clinched Conference</p>
                <p style={{margin: "10px"}}><sup>y</sup> - Clinched Division</p>
                <p style={{margin: "10px"}}><sup>x</sup> - Clinched Playoff Berth</p>
                <p style={{margin: "10px"}}><sup>e</sup> - Eliminated</p>
            </RulesDiv>
        </ContentDiv>
    )
}