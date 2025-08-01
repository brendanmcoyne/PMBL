import {styled} from "styled-components";

export const ToggleButton = styled.button`
    background-color: black;
    color: white;
    font-size: 1.5rem;
    border: 2px solid white;
    padding: 3px 10px;
    cursor: pointer;
    align-self: flex-start;  
    margin-left: 2rem;
`;

export const StyledHeader = styled.h1`
    font-size: 80px;
    color: white;
    font-family: 'Anton', cursive;
    letter-spacing: 2px;
    text-align: center;
    text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0 0 12px #ff0;
    @media screen and (max-width: 1000px) {
        font-size: 50px;
        letter-spacing: 1px;
    }
`;