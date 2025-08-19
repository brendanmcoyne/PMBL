import {styled} from "styled-components";
import { Link } from "react-router-dom";
import { draftRoster } from "../../../data/Season1Draft";
import { ToggleButton, StyledHeader } from "../../CommonStyles.ts";

export const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    font-size: calc(0.5rem + 1vw);
    padding-top: 2rem;
`;

const StyledMiniHeader = styled.h3`
    text-align: center;
    font-size: 2rem;
    color: white;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
`;

const StyledPick = styled.h4`
    text-align: center;
    margin: 0;
    font-weight: bold;
    color: white;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
`;

const StyledManager = styled.p`
    text-align: center;
    font-size: 0.8rem;
    margin: 0;
    color: white;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media screen and (max-width: 600px) {
        white-space: normal;
        font-size: 0.75rem;
    }
`;

const StyledPlayer = styled.h5`
    text-align: center;
    margin: 0;
    font-weight: bold;
    color: white;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
    
`;

const StyledRound = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr); 
    gap: 30px;
    width: 60%;
    @media screen and (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const Pick = styled.span`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #12121c;
    border-bottom: 1px solid white;
    border-radius: 10px;
    padding: 1rem;
    box-sizing: border-box;
    overflow: hidden;
    width: 200px; 
    height: 180px;
    @media screen and (max-width: 1000px) {
        width: 180px;
    }
`;

const PickText = styled.span`
    z-index: 1;
    transition: opacity 0.3s ease;

    ${Pick}:hover & {
        opacity: 0;
    }
`;

const HoverImage = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 2;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${Pick}:hover & {
    opacity: 1;
  }
`;

const Trade = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #12121c;
    border-radius: 10px;
    padding: 1rem;
    box-sizing: border-box;
    width: 300px;
    min-height: 140px;
    flex-shrink: 0; 
    justify-content: center;
    align-items: center;
    text-align: center;

    @media screen and (max-width: 700px) {
        width: 100%;
        max-width: 200px;
    }
`;

const StyledTrade = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    margin-bottom: 40px;
    flex-wrap: nowrap;
    width: 100%;
`;

const AllTradesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;
`;

const TradeArrow = styled.span`
    align-self: center;
    font-size: 2rem;
    margin: 0;
    color: white;
    font-weight: bold;
`;

const Draft1 = () => {
    const rounds = [];
    for (let i = 0; i < draftRoster.length; i += 8) {
        rounds.push(draftRoster.slice(i, i + 8));
    }

    return (
        <ContentDiv>
            <ToggleButton>
                <Link style={{color: "white"}} to="/archives/seasons/Season1">← Back</Link>
            </ToggleButton>
            <StyledHeader style={{marginBottom: "0"}}>Season 1 PMBL Draft</StyledHeader>
            {rounds.map((roundPicks, roundIndex) => (
                <div key={roundIndex}>
                    <StyledMiniHeader style={{fontFamily: "'Oswald', sans-serif", fontSize: "3rem"}}>Round {roundIndex + 1}</StyledMiniHeader>
                    <StyledRound>
                        {roundPicks.map((entry, i) => (
                            <Pick key={i} style={{borderBottom: `2px solid ${entry.color}`}}>
                                <PickText>
                                    <StyledPick>{entry.pick} Overall:</StyledPick>
                                    <StyledPlayer>
                                        {entry.player}
                                        {entry.captain ? " (C)" : ""}
                                    </StyledPlayer>
                                    <StyledManager style={{color: entry.color}}>{entry.manager}</StyledManager>
                                </PickText>
                                <HoverImage src={entry.photo} alt="Chracter" />
                            </Pick>
                        ))}
                    </StyledRound>
                </div>

            ))}

            <StyledHeader style={{marginBottom: "0"}}>Season 1 Trades</StyledHeader>
            <StyledMiniHeader style={{fontFamily: "'Oswald', sans-serif", fontSize: "3rem"}}>Post Draft</StyledMiniHeader>

            <AllTradesWrapper>
                <StyledTrade>
                    <Trade style={{border: "1px solid #3586E8"}}>
                        <StyledManager style={{color: "#3586E8"}}>Isaac Receives:</StyledManager>
                        <StyledPlayer>Blue Yoshi</StyledPlayer>
                    </Trade>
                    <TradeArrow>⇄</TradeArrow>
                    <Trade style={{border: "1px solid #FF00FF"}}>
                        <StyledManager style={{color: "#FF00FF"}}>Morgan Receives:</StyledManager>
                        <StyledPlayer>Yellow Toad</StyledPlayer>
                    </Trade>
                </StyledTrade>

                <StyledTrade>
                    <Trade style={{border: "1px solid #9900FF"}}>
                        <StyledManager style={{color: "#9900FF"}}>Christach Receives:</StyledManager>
                        <StyledPlayer>Wario</StyledPlayer>
                    </Trade>
                    <TradeArrow>⇄</TradeArrow>
                    <Trade style={{border: "1px solid #6AA84F"}}>
                        <StyledManager style={{color: "#6AA84F"}}>Matt Receives:</StyledManager>
                        <StyledPlayer>Wiggler, Chungy</StyledPlayer>
                    </Trade>
                </StyledTrade>

                <StyledTrade>
                    <Trade style={{border: "1px solid #3586E8"}}>
                        <StyledManager style={{color: "#3586E8"}}>Isaac Receives:</StyledManager>
                        <StyledPlayer>Red Yoshi</StyledPlayer>
                    </Trade>
                    <TradeArrow>⇄</TradeArrow>
                    <Trade style={{border: "1px solid #999999"}}>
                        <StyledManager style={{color: "#999999"}}>DANdrew Receives:</StyledManager>
                        <StyledPlayer>Blue Yoshi</StyledPlayer>
                    </Trade>
                </StyledTrade>

                <StyledMiniHeader style={{fontFamily: "'Oswald', sans-serif", fontSize: "3rem", marginTop: "0"}}>Week 5</StyledMiniHeader>

                <StyledTrade style={{marginBottom: "50px"}}>
                    <Trade style={{border: "1px solid #CC0000"}}>
                        <StyledManager style={{color: "#CC0000"}}>Brendan Receives:</StyledManager>
                        <StyledPlayer>Michelle Obama</StyledPlayer>
                    </Trade>
                    <TradeArrow>⇄</TradeArrow>
                    <Trade style={{border: "1px solid #999999"}}>
                        <StyledManager style={{color: "#999999"}}>DANdrew Receives:</StyledManager>
                        <StyledPlayer>Nose</StyledPlayer>
                    </Trade>
                </StyledTrade>
            </AllTradesWrapper>
        </ContentDiv>
    );
};

export default Draft1;