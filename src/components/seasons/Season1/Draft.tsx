import {styled} from "styled-components";
import {Link} from "react-router-dom";

export const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    font-size: calc(0.5rem + 1vw);
    padding-top: 2rem;
`;

const StyledHeader = styled.h1`
    text-align: center;
    margin-bottom: 1rem;
`;

const StyledMiniHeader = styled.h3`
    text-align: center;
    font-size: 2rem;
`;

const StyledPick = styled.h4`
    text-align: center;
    margin: 0;
    font-weight: bold;
`;

const StyledManager = styled.p`
    text-align: center;
    font-size: 0.8rem;
    margin: 0;
`;

const StyledPlayer = styled.h5`
    text-align: center;
    margin: 0;
    font-weight: bold;
`;

const StyledRound = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr); 
    gap: 30px;
    width: 60%; 
`;
const Pick = styled.span`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #f9f9f9;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 1rem;
    box-sizing: border-box;
`;

const Trade = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #f9f9f9;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 1rem;
    box-sizing: border-box;
`;

const StyledTrade = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    gap: 30px;
    width: 60%;   
    margin-bottom: 1.5rem; 
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

export default function Draft1 () {
    return (
        <ContentDiv>
            <ToggleButton>
                <Link to="/archives/seasons/Season1">Back</Link>
            </ToggleButton>
            <StyledHeader>Season 1 PMBL Draft</StyledHeader>
            <StyledMiniHeader>Round 1</StyledMiniHeader>

            <StyledRound>
                <Pick>
                    <StyledPick>1st Overall:</StyledPick>
                    <StyledPlayer>Donkey Kong (C)</StyledPlayer>
                    <StyledManager>Brendan</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>2nd Overall:</StyledPick>
                    <StyledPlayer>Bowser (C)</StyledPlayer>
                    <StyledManager>James</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>3rd Overall:</StyledPick>
                    <StyledPlayer>Peach (C)</StyledPlayer>
                    <StyledManager>Christach</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>4th Overall:</StyledPick>
                    <StyledPlayer>Petey Piranha</StyledPlayer>
                    <StyledManager>Morgan</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>5th Overall:</StyledPick>
                    <StyledPlayer>Yoshi (C)</StyledPlayer>
                    <StyledManager>Matt</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>6th Overall:</StyledPick>
                    <StyledPlayer>Birdo</StyledPlayer>
                    <StyledManager>Isaac</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>7th Overall:</StyledPick>
                    <StyledPlayer>Luigi (C)</StyledPlayer>
                    <StyledManager>Justin</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>8th Overall:</StyledPick>
                    <StyledPlayer>Waluigi (C)</StyledPlayer>
                    <StyledManager>DANdrew</StyledManager>
                </Pick>
            </StyledRound>

            <StyledMiniHeader>Round 2</StyledMiniHeader>

            <StyledRound>
                <Pick>
                    <StyledPick>9th Overall:</StyledPick>
                    <StyledPlayer>Funky Kong</StyledPlayer>
                    <StyledManager>DANdrew</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>10th Overall:</StyledPick>
                    <StyledPlayer>Daisy</StyledPlayer>
                    <StyledManager>Justin</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>11th Overall:</StyledPick>
                    <StyledPlayer>Mario (C)</StyledPlayer>
                    <StyledManager>Isaac</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>12th Overall:</StyledPick>
                    <StyledPlayer>King Boo</StyledPlayer>
                    <StyledManager>Matt</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>13th Overall:</StyledPick>
                    <StyledPlayer>Diddy Kong (C)</StyledPlayer>
                    <StyledManager>Morgan</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>14th Overall:</StyledPick>
                    <StyledPlayer>Wiggler</StyledPlayer>
                    <StyledManager>Christach</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>15th Overall:</StyledPick>
                    <StyledPlayer>Bowser Jr.</StyledPlayer>
                    <StyledManager>James</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>16th Overall:</StyledPick>
                    <StyledPlayer>Red Kritter</StyledPlayer>
                    <StyledManager>Brendan</StyledManager>
                </Pick>
            </StyledRound>

            <StyledMiniHeader>Round 3</StyledMiniHeader>

            <StyledRound>
                <Pick>
                    <StyledPick>17th Overall:</StyledPick>
                    <StyledPlayer>Dixie Kong</StyledPlayer>
                    <StyledManager>Brendan</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>18th Overall:</StyledPick>
                    <StyledPlayer>King K Rool.</StyledPlayer>
                    <StyledManager>James</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>19th Overall:</StyledPick>
                    <StyledPlayer>Blue Toad</StyledPlayer>
                    <StyledManager>Christach</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>20th Overall:</StyledPick>
                    <StyledPlayer>Boo</StyledPlayer>
                    <StyledManager>Morgan</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>21st Overall:</StyledPick>
                    <StyledPlayer>Wario</StyledPlayer>
                    <StyledManager>Matt</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>22nd Overall:</StyledPick>
                    <StyledPlayer>Fire Bro</StyledPlayer>
                    <StyledManager>Isaac</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>23rd Overall:</StyledPick>
                    <StyledPlayer>Green Kritter</StyledPlayer>
                    <StyledManager>Justin</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>24th Overall:</StyledPick>
                    <StyledPlayer>Red Yoshi</StyledPlayer>
                    <StyledManager>DANdrew</StyledManager>
                </Pick>
            </StyledRound>

            <StyledMiniHeader>Round 4</StyledMiniHeader>

            <StyledRound>
                <Pick>
                    <StyledPick>25th Overall:</StyledPick>
                    <StyledPlayer>Blue Magikoopa</StyledPlayer>
                    <StyledManager>DANdrew</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>26th Overall:</StyledPick>
                    <StyledPlayer>Blue Pianta</StyledPlayer>
                    <StyledManager>Justin</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>27th Overall:</StyledPick>
                    <StyledPlayer>Toadette</StyledPlayer>
                    <StyledManager>Isaac</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>28th Overall:</StyledPick>
                    <StyledPlayer>Yellow Pianta</StyledPlayer>
                    <StyledManager>Matt</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>29th Overall:</StyledPick>
                    <StyledPlayer>Tiny Kong</StyledPlayer>
                    <StyledManager>Morgan</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>30th Overall:</StyledPick>
                    <StyledPlayer>Red Pianta</StyledPlayer>
                    <StyledManager>Christach</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>31st Overall:</StyledPick>
                    <StyledPlayer>Brown Kritter</StyledPlayer>
                    <StyledManager>James</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>32nd Overall:</StyledPick>
                    <StyledPlayer>Baby DK</StyledPlayer>
                    <StyledManager>Brendan</StyledManager>
                </Pick>
            </StyledRound>

            <StyledMiniHeader>Round 5</StyledMiniHeader>

            <StyledRound>
                <Pick>
                    <StyledPick>33rd Overall:</StyledPick>
                    <StyledPlayer>Baby Luigi</StyledPlayer>
                    <StyledManager>Brendan</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>34th Overall:</StyledPick>
                    <StyledPlayer>Yellow Magikoopa</StyledPlayer>
                    <StyledManager>James</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>35th Overall:</StyledPick>
                    <StyledPlayer>Dark Bones</StyledPlayer>
                    <StyledManager>Christach</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>36th Overall:</StyledPick>
                    <StyledPlayer>Dry Bones</StyledPlayer>
                    <StyledManager>Morgan</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>37th Overall:</StyledPick>
                    <StyledPlayer>Blooper</StyledPlayer>
                    <StyledManager>Matt</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>38th Overall:</StyledPick>
                    <StyledPlayer>Red Magikoopa</StyledPlayer>
                    <StyledManager>Isaac</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>39th Overall:</StyledPick>
                    <StyledPlayer>Monty Mole</StyledPlayer>
                    <StyledManager>Justin</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>40th Overall:</StyledPick>
                    <StyledPlayer>Boomerang Bro</StyledPlayer>
                    <StyledManager>DANdrew</StyledManager>
                </Pick>
            </StyledRound>

            <StyledMiniHeader>Round 6</StyledMiniHeader>

            <StyledRound>
                <Pick>
                    <StyledPick>41st Overall:</StyledPick>
                    <StyledPlayer>Blue Shy Guy</StyledPlayer>
                    <StyledManager>DANdrew</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>42nd Overall:</StyledPick>
                    <StyledPlayer>Paragoomba</StyledPlayer>
                    <StyledManager>Justin</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>43rd Overall:</StyledPick>
                    <StyledPlayer>Pink Yoshi</StyledPlayer>
                    <StyledManager>Isaac</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>44th Overall:</StyledPick>
                    <StyledPlayer>Red Toad</StyledPlayer>
                    <StyledManager>Matt</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>45th Overall:</StyledPick>
                    <StyledPlayer>Light Blue Yoshi</StyledPlayer>
                    <StyledManager>Morgan</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>46th Overall:</StyledPick>
                    <StyledPlayer>Toadsworth</StyledPlayer>
                    <StyledManager>Christach</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>47th Overall:</StyledPick>
                    <StyledPlayer>Hammer Bro</StyledPlayer>
                    <StyledManager>James</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>48th Overall:</StyledPick>
                    <StyledPlayer>Green Dry Bones</StyledPlayer>
                    <StyledManager>Brendan</StyledManager>
                </Pick>
            </StyledRound>

            <StyledMiniHeader>Round 7</StyledMiniHeader>

            <StyledRound>
                <Pick>
                    <StyledPick>49th Overall:</StyledPick>
                    <StyledPlayer>Blue Kritter</StyledPlayer>
                    <StyledManager>Brendan</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>50th Overall:</StyledPick>
                    <StyledPlayer>Blue Dry Bones</StyledPlayer>
                    <StyledManager>James</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>51st Overall:</StyledPick>
                    <StyledPlayer>Baby Peach</StyledPlayer>
                    <StyledManager>Christach</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>52nd Overall:</StyledPick>
                    <StyledPlayer>Yellow Yoshi</StyledPlayer>
                    <StyledManager>Morgan</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>53rd Overall:</StyledPick>
                    <StyledPlayer>Baby Mario</StyledPlayer>
                    <StyledManager>Matt</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>54th Overall:</StyledPick>
                    <StyledPlayer>Baby Daisy</StyledPlayer>
                    <StyledManager>Isaac</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>55th Overall:</StyledPick>
                    <StyledPlayer>Green Shy Guy</StyledPlayer>
                    <StyledManager>Justin</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>56th Overall:</StyledPick>
                    <StyledPlayer>Green Paratroopa</StyledPlayer>
                    <StyledManager>DANdrew</StyledManager>
                </Pick>
            </StyledRound>

            <StyledMiniHeader>Round 8</StyledMiniHeader>

            <StyledRound>
                <Pick>
                    <StyledPick>57th Overall:</StyledPick>
                    <StyledPlayer>Alfonzo</StyledPlayer>
                    <StyledManager>DANdrew</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>58th Overall:</StyledPick>
                    <StyledPlayer>Geek Squad</StyledPlayer>
                    <StyledManager>Justin</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>59th Overall:</StyledPick>
                    <StyledPlayer>Jack White</StyledPlayer>
                    <StyledManager>Isaac</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>60th Overall:</StyledPick>
                    <StyledPlayer>Red Koopa</StyledPlayer>
                    <StyledManager>Matt</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>61st Overall:</StyledPick>
                    <StyledPlayer>Triangle</StyledPlayer>
                    <StyledManager>Morgan</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>62nd Overall:</StyledPick>
                    <StyledPlayer>MLK</StyledPlayer>
                    <StyledManager>Christach</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>63rd Overall:</StyledPick>
                    <StyledPlayer>Green Magikoopa</StyledPlayer>
                    <StyledManager>James</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>64th Overall:</StyledPick>
                    <StyledPlayer>Purple Toad</StyledPlayer>
                    <StyledManager>Brendan</StyledManager>
                </Pick>
            </StyledRound>

            <StyledMiniHeader>Round 9</StyledMiniHeader>

            <StyledRound>
                <Pick>
                    <StyledPick>65th Overall:</StyledPick>
                    <StyledPlayer>Bob Marley</StyledPlayer>
                    <StyledManager>Brendan</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>66th Overall:</StyledPick>
                    <StyledPlayer>Koopa</StyledPlayer>
                    <StyledManager>James</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>67th Overall:</StyledPick>
                    <StyledPlayer>Shaq</StyledPlayer>
                    <StyledManager>Christach</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>68th Overall:</StyledPick>
                    <StyledPlayer>Blue Yoshi</StyledPlayer>
                    <StyledManager>Morgan</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>69th Overall:</StyledPick>
                    <StyledPlayer>Sebesta</StyledPlayer>
                    <StyledManager>Matt</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>70th Overall:</StyledPick>
                    <StyledPlayer>Grayson McKean</StyledPlayer>
                    <StyledManager>Isaac</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>71st Overall:</StyledPick>
                    <StyledPlayer>Antenna</StyledPlayer>
                    <StyledManager>Justin</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>72nd Overall:</StyledPick>
                    <StyledPlayer>Abu Patel</StyledPlayer>
                    <StyledManager>DANdrew</StyledManager>
                </Pick>
            </StyledRound>

            <StyledMiniHeader>Round 10</StyledMiniHeader>

            <StyledRound>
                <Pick>
                    <StyledPick>73rd Overall:</StyledPick>
                    <StyledPlayer>Diddler</StyledPlayer>
                    <StyledManager>DANdrew</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>74th Overall:</StyledPick>
                    <StyledPlayer>Shy Guy</StyledPlayer>
                    <StyledManager>Justin</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>75th Overall:</StyledPick>
                    <StyledPlayer>Yellow Toad</StyledPlayer>
                    <StyledManager>Isaac</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>76th Overall:</StyledPick>
                    <StyledPlayer>Hamburger</StyledPlayer>
                    <StyledManager>Matt</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>77th Overall:</StyledPick>
                    <StyledPlayer>Gramps</StyledPlayer>
                    <StyledManager>Morgan</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>78th Overall:</StyledPick>
                    <StyledPlayer>Sabrina</StyledPlayer>
                    <StyledManager>Christach</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>79th Overall:</StyledPick>
                    <StyledPlayer>Partroopa</StyledPlayer>
                    <StyledManager>James</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>80th Overall:</StyledPick>
                    <StyledPlayer>Gramms</StyledPlayer>
                    <StyledManager>Brendan</StyledManager>
                </Pick>
            </StyledRound>

            <StyledMiniHeader>Round 11</StyledMiniHeader>

            <StyledRound>
                <Pick>
                    <StyledPick>81st Overall:</StyledPick>
                    <StyledPlayer>Green Toad</StyledPlayer>
                    <StyledManager>Brendan</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>82nd Overall:</StyledPick>
                    <StyledPlayer>Entity 404</StyledPlayer>
                    <StyledManager>James</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>83rd Overall:</StyledPick>
                    <StyledPlayer>Chungy</StyledPlayer>
                    <StyledManager>Christach</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>84th Overall:</StyledPick>
                    <StyledPlayer>Yellow Shy Guy</StyledPlayer>
                    <StyledManager>Morgan</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>85th Overall:</StyledPick>
                    <StyledPlayer>Broseph</StyledPlayer>
                    <StyledManager>Matt</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>86th Overall:</StyledPick>
                    <StyledPlayer>Red Noki</StyledPlayer>
                    <StyledManager>Isaac</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>87th Overall:</StyledPick>
                    <StyledPlayer>Goomba</StyledPlayer>
                    <StyledManager>Justin</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>88th Overall:</StyledPick>
                    <StyledPlayer>Michelle Obama</StyledPlayer>
                    <StyledManager>DANdrew</StyledManager>
                </Pick>
            </StyledRound>

            <StyledMiniHeader>Round 12</StyledMiniHeader>

            <StyledRound>
                <Pick>
                    <StyledPick>89th Overall:</StyledPick>
                    <StyledPlayer>Gray Shy Guy</StyledPlayer>
                    <StyledManager>DANdrew</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>90th Overall:</StyledPick>
                    <StyledPlayer>Green Noki</StyledPlayer>
                    <StyledManager>Justin</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>91st Overall:</StyledPick>
                    <StyledPlayer>Jesstithyn</StyledPlayer>
                    <StyledManager>Isaac</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>92nd Overall:</StyledPick>
                    <StyledPlayer>Bertha</StyledPlayer>
                    <StyledManager>Matt</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>93rd Overall:</StyledPick>
                    <StyledPlayer>Danny B</StyledPlayer>
                    <StyledManager>Morgan</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>94th Overall:</StyledPick>
                    <StyledPlayer>Blue Noki</StyledPlayer>
                    <StyledManager>Christach</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>95th Overall:</StyledPick>
                    <StyledPlayer>Tate McRae</StyledPlayer>
                    <StyledManager>James</StyledManager>
                </Pick>

                <Pick>
                    <StyledPick>96th Overall:</StyledPick>
                    <StyledPlayer>Nose</StyledPlayer>
                    <StyledManager>Brendan</StyledManager>
                </Pick>
            </StyledRound>

            <StyledHeader>Season 1 Trades</StyledHeader>
            <StyledMiniHeader>Post Draft</StyledMiniHeader>

            <StyledTrade>
                <Trade>
                    <StyledManager>Isaac Receives:</StyledManager>
                    <StyledPlayer>Blue Yoshi</StyledPlayer>
                </Trade>

                <Trade>
                    <StyledManager>Morgan Receives:</StyledManager>
                    <StyledPlayer>Yellow Toad</StyledPlayer>
                </Trade>
            </StyledTrade>

            <StyledTrade>
                <Trade>
                    <StyledManager>Christach Receives:</StyledManager>
                    <StyledPlayer>Wario</StyledPlayer>
                </Trade>

                <Trade>
                    <StyledManager>Matt Receives:</StyledManager>
                    <StyledPlayer>Wiggler, Chungy</StyledPlayer>
                </Trade>
            </StyledTrade>

            <StyledTrade>
                <Trade>
                    <StyledManager>Isaac Receives:</StyledManager>
                    <StyledPlayer>Red Yoshi</StyledPlayer>
                </Trade>

                <Trade>
                    <StyledManager>DANdrew Receives:</StyledManager>
                    <StyledPlayer>Blue Yoshi</StyledPlayer>
                </Trade>
            </StyledTrade>

            <StyledMiniHeader>Week 5</StyledMiniHeader>

            <StyledTrade>
                <Trade>
                    <StyledManager>Brendan Receives:</StyledManager>
                    <StyledPlayer>Michelle Obama</StyledPlayer>
                </Trade>

                <Trade>
                    <StyledManager>DANdrew Receives:</StyledManager>
                    <StyledPlayer>Nose</StyledPlayer>
                </Trade>
            </StyledTrade>
        </ContentDiv>

    );
}