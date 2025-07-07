import { Link } from "react-router-dom";
import { styled } from "styled-components";
import GoogleLogin from "./GoogleLogin";

const StyledNavContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: 1000;
    
    @media (max-width: 1000px) {
        position: static;
    }
`;

const StyledNav = styled.nav`
    background-color: darkblue;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6px 15px;
    box-sizing: border-box;
    flex-wrap: nowrap;

    @media (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
        padding: 6px 10px;
        gap: 0; 
    }
`;

const LeftSection = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;

    @media (max-width: 1000px) {
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
        gap: 4px;
    }
`;

const StyledList = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: row;
    gap: 3px;
    padding: 0;
    flex-wrap: wrap;

    @media (max-width: 1000px) {
        flex-direction: column;
        align-items: stretch;
        width: 100%;
        gap: 4px;
    }
`;

const StyledLink = styled.li`
    font-size: 1.1rem;
    padding: 6px 14px;
    text-align: center;
    border-radius: 6px;
    transition: background-color 0.2s ease-in-out;

    a {
        color: white;
        text-decoration: none;
        font-weight: bold;
        height: 100%;
        &:hover {
            text-decoration: underline;
        }
    }
    
    @media (max-width: 1000px) {
        font-size: 1rem;
        width: 100%;
        padding: 10px 0;
        background-color: rgba(255, 255, 255, 0.1);
    }
`;

const LogoDesktop = styled.img`
    height: 70px;
    width: auto;
    transition: transform 0.2s;
    &:hover {
        transform: scale(1.05);
    }

    @media (max-width: 1000px) {
        display: none;
    }
`;

const LogoMobile = styled.img`
    display: none;

    @media (max-width: 1000px) {
        display: block;
        height: 50px;
        width: auto;
        margin: 0;
        padding: 0;
    }
`;

const GoogleDesktop = styled.div`
    display: flex;

    @media (max-width: 1000px) {
        display: none;
    }
`;

const MobileTopRow = styled.div`
    display: none;

    @media (max-width: 1000px) {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        box-sizing: border-box;
    }
`;

export default function Nav() {
    return (
        <StyledNavContainer>
            <StyledNav>
                <MobileTopRow>
                    <LogoMobile src="LeagueLogo_noWords.png" alt="League Logo" />
                    <GoogleLogin/>
                </MobileTopRow>

                <LeftSection>
                    <LogoDesktop src="LeagueLogo_noWords.png" alt="League Logo" />
                    <StyledList>
                        <StyledLink><Link to="/">Home</Link></StyledLink>
                        <StyledLink><Link to="/players">Players</Link></StyledLink>
                        <StyledLink><Link to="/managers">Managers</Link></StyledLink>
                        <StyledLink><Link to="/archives">Archives</Link></StyledLink>
                        <StyledLink><Link to="/season">Season</Link></StyledLink>
                        <StyledLink><Link to="/headlines">Headlines</Link></StyledLink>
                    </StyledList>
                </LeftSection>

                <GoogleDesktop>
                    <GoogleLogin />
                </GoogleDesktop>
            </StyledNav>
        </StyledNavContainer>
    );
}

