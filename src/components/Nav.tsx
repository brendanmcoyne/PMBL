import { Link } from "react-router-dom";
import { styled } from "styled-components";
import GoogleLogin from "./GoogleLogin";
const StyledNavContainer = styled.div`
  width: 100%;
`;

const StyledNav = styled.nav`
    background-color: darkblue;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    box-sizing: border-box;
    flex-wrap: wrap;
`;

const LeftSection = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
`;

const StyledList = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: row;
    gap: 15px;
    padding: 0;
    margin: 0;
    flex-wrap: wrap;
`;

const StyledLink = styled.li`
    background-color: lightgray;
    font-size: 1.1rem;
    padding: 10px 0; 
    width: 120px;    
    text-align: center;
    border-radius: 6px;
    transition: background-color 0.2s ease-in-out;
    flex-shrink: 0;

    a {
        color: darkblue;
        text-decoration: none;
        font-weight: 500;
        display: block;
        width: 100%;
        height: 100%;
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

const Logo = styled.img`
  height: 80px;  // increased from 60px
  width: auto;
`;

export default function Nav() {
    return (
        <StyledNavContainer>
            <StyledNav>
                <LeftSection>
                    <Logo src="LeagueLogo_noWords.png" alt="League Logo" />
                    <StyledList>
                        <StyledLink><Link to="/">Home</Link></StyledLink>
                        <StyledLink><Link to="/players">Players</Link></StyledLink>
                        <StyledLink><Link to="/managers">Managers</Link></StyledLink>
                        <StyledLink><Link to="/archives">Archives</Link></StyledLink>
                        <StyledLink><Link to="/season">Season</Link></StyledLink>
                        <StyledLink><Link to="/headlines">Headlines</Link></StyledLink>
                    </StyledList>
                </LeftSection>
                <GoogleLogin />
            </StyledNav>
            <Divider />
        </StyledNavContainer>
    );
}
