
import { styled } from "styled-components";
import GoogleLogin from "./GoogleLogin";
import { NavLink } from "react-router-dom";

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
    background: linear-gradient(180deg, #080878, #05054a);
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
    margin: 0;
    flex-wrap: nowrap;
    overflow-x: auto;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }

    @media (max-width: 1000px) {
        justify-content: center;
        width: 100%;
    }
`;


const StyledLink = styled.li`
    font-size: 1.1rem;
    padding: 6px 14px;
    text-align: center;

    a {
        position: relative;
        display: inline-block;
        color: white;
        text-decoration: none;
        font-weight: bold;
        padding: 8px 0;
        transition: color 0.2s ease;

        &::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 50%;
            width: 0;
            height: 3px;
            background-color: #ff2448;
            border-radius: 3px;
            transform: translateX(-50%);
            transition: width 0.25s ease;
        }

        &:hover {
            color: #f0f0f0;
        }

        &:hover::after,
        &.active::after {
            width: 100%;
        }
    }

    @media (max-width: 1000px) {
        font-size: 0.7rem;
        padding: 4px 8px;
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
                        <StyledLink><NavLink to="/" end>Home</NavLink></StyledLink>
                        <StyledLink><NavLink to="/players">Players</NavLink></StyledLink>
                        <StyledLink><NavLink to="/managers">Managers</NavLink></StyledLink>
                        <StyledLink><NavLink to="/archives">Archives</NavLink></StyledLink>
                        <StyledLink><NavLink to="/season">Season</NavLink></StyledLink>
                        <StyledLink><NavLink to="/headlines">Headlines</NavLink></StyledLink>
                    </StyledList>
                </LeftSection>
                <GoogleDesktop>
                    <GoogleLogin />
                </GoogleDesktop>
            </StyledNav>
        </StyledNavContainer>
    );
}

