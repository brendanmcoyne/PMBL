import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { useState } from "react";

const StyledNavContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const StyledNav = styled.nav`
    background-color: darkblue;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
`;

const ToggleButton = styled.button`
    background-color: lightgray;
    color: darkblue;
    font-size: 1.5rem;
    border: none;
    padding: 7px 15px;
    cursor: pointer;
`;

const StyledList = styled.ul<{ visible: boolean }>`
    list-style-type: none;
    padding: 0;
    margin: 0;
    width: 100%;
    display: ${({ visible }) => (visible ? "flex" : "none")};
    flex-direction: row;
    justify-content: center;
    background-color: darkblue;
    flex-wrap: wrap;
`;

const StyledLink = styled.li`
    padding: 10px;
    margin: 5px;
    background-color: lightgray;
    font-size: 1.2rem;
    width: 140px;
    text-align: center;
    cursor: pointer;

    a {
        color: red;
        text-decoration: none;
        display: block;
    }

    &:hover {
        background-color: gray;
    }
`;

const Divider = styled.div`
  height: 5px;
  background-color: black;
  width: 100%;
`;

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <StyledNavContainer>
            <StyledNav>
                <ToggleButton onClick={() => setMenuOpen(prev => !prev)}>
                    {menuOpen ? "✖ Close" : "☰ Menu"}
                </ToggleButton>
            </StyledNav>

            <StyledList visible={menuOpen}>
                <StyledLink><Link to="/">Home</Link></StyledLink>
                <StyledLink><Link to="/players">Players</Link></StyledLink>
                <StyledLink><Link to="/managers">Managers</Link></StyledLink>
                <StyledLink><Link to="/archives">Archives</Link></StyledLink>
                <StyledLink><Link to="/season">Season</Link></StyledLink>
                <StyledLink><Link to="/headlines">Headlines</Link></StyledLink>
            </StyledList>

            <Divider />
        </StyledNavContainer>
    );
}
