import { Link } from "react-router-dom";
import { styled } from "styled-components";

const StyledNav = styled.nav`
    background-color: darkblue;
    text-align: center;
    flex-direction: row;
    width: 100%;
    display: flex;
    justify-content: center;
`;

const StyledList = styled.ul`
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style-type: none;
    
`;

const StyledLink = styled.li`
    padding: 3px;
    background-color: lightgray;
    align-items: center;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 10px;
    cursor: pointer;
    font-size: 1.2rem;
    width: 140px;
    
    
    a {
        color: red;
        width: 100%;
    }

    &:hover {
        background-color: gray;
    }
`;

export default function Nav() {
    return (
        <StyledNav>
            <StyledList>
                <StyledLink>
                    <Link to="/">Home</Link>
                </StyledLink>
                <StyledLink>
                    <Link to="/players">Players</Link>
                </StyledLink>
                <StyledLink>
                    <Link to="/managers">Managers</Link>
                </StyledLink>
                <StyledLink>
                    <Link to="/archives">Archives</Link>
                </StyledLink>
                <StyledLink>
                    <Link to="/schedule">Schedule</Link>
                </StyledLink>
                <StyledLink>
                    <Link to="/headlines">Headlines</Link>
                </StyledLink>
            </StyledList>
        </StyledNav>
    )
}