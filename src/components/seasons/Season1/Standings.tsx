import {styled} from "styled-components";

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
`;

const StyledMiniHeader = styled.h3`
    text-align: center;
    grid-column: span 2;
    font-size: 2rem;
`;

const TeamDetails = styled.p`
    text-align: center;
    flex-direction: row;
`;

export default function Standings1() {
    return (
        <ContentDiv>
        <StyledHeader>Season 1 PMBL Standings</StyledHeader>
            <StyledMiniHeader>East Division</StyledMiniHeader>
            <TeamDetails>
                <h2>Brendan</h2>
                <p>7 - 3</p>
                <p>5 - 1</p>
                <p>W3</p>
                <p>PF: 71</p>
                <p>PA: 53</p>
                <p>PD: 18</p>
            </TeamDetails>
            <TeamDetails>
                <h2>James</h2>
                <p>6 - 4</p>
                <p>3 - 3</p>
                <p>L1</p>
                <p>PF: 85</p>
                <p>PA: 72</p>
                <p>PD: 13</p>
            </TeamDetails>
            <TeamDetails>
                <h2>Justin</h2>
                <p>6 - 4</p>
                <p>2 - 4</p>
                <p>L1</p>
                <p>PF: 74</p>
                <p>PA: 62</p>
                <p>PD: 12</p>
            </TeamDetails>
            <TeamDetails>
                <h2>Matt</h2>
                <p>4 - 6</p>
                <p>2 - 4</p>
                <p>W1</p>
                <p>PF: 72</p>
                <p>PA: 90</p>
                <p>PD: -18</p>
            </TeamDetails>

            <StyledMiniHeader>West Division</StyledMiniHeader>

            <TeamDetails>
                <h2>Morgan</h2>
                <p>5 - 5</p>
                <p>5 - 1</p>
                <p>W1</p>
                <p>PF: 55</p>
                <p>PA: 57</p>
                <p>PD: -2</p>
            </TeamDetails>
            <TeamDetails>
                <h2>DANdrew</h2>
                <p>5 - 5</p>
                <p>3 - 3</p>
                <p>W3</p>
                <p>PF: 69</p>
                <p>PA: 77</p>
                <p>PD: -8</p>
            </TeamDetails>
            <TeamDetails>
                <h2>Isaac</h2>
                <p>4 - 6</p>
                <p>3 - 3</p>
                <p>L2</p>
                <p>PF: 91</p>
                <p>PA: 61</p>
                <p>PD: 30</p>
            </TeamDetails>
            <TeamDetails>
                <h2>Christach</h2>
                <p>3 - 7</p>
                <p>1 - 5</p>
                <p>L3</p>
                <p>PF: 53</p>
                <p>PA: 99</p>
                <p>PD: -46</p>
            </TeamDetails>
        </ContentDiv>
    )
}