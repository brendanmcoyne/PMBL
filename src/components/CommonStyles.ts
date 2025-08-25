import { styled, keyframes, css } from 'styled-components';

export const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

interface StyledLinkProps {
    bg?: string;
    animate?: boolean;
}

export const SeparatorLine = styled.hr<{ animate?: boolean }>`
    border: none;
    border-top: 1px solid #ccc;
    width: 80%;
    margin: 0 0 30px 0;
    max-width: 600px;
    ${({ animate }) =>
            animate &&
            css`
      animation: ${fadeInUp} 1s ease forwards;
      animation-delay: 0.3s;
    `}
`;

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

export const StyledHeader = styled.h1<{ animate?: boolean }>`
    font-size: 80px;
    color: white;
    font-family: 'Anton', cursive;
    letter-spacing: 2px;
    text-align: center;
    text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0 0 12px #ff0;
    opacity: 0;
    transform: translateY(30px);

    @media screen and (max-width: 1000px) {
        font-size: 50px;
        letter-spacing: 1px;
    }
    
    ${({ animate }) => 
            animate ? css`
                opacity: 0;
                transform: translateY(30px);
                animation: ${fadeInUp} 1s ease forwards;
                animation-delay: 0.3s;
              ` : css`
                opacity: 1;
                transform: none;
              `
    }
`;

export const StyledMiniHeader = styled.h3<{animate?: boolean}>`
    text-align: center;
    font-size: 1.7rem;
    color: white;
    margin-top: 0;
    margin-bottom: 30px;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
    ${({ animate }) =>
            animate &&
            css`
      animation: ${fadeInUp} 1s ease forwards;
      animation-delay: 0.3s;
    `}
`;

export const StyledLink = styled.p<StyledLinkProps>`
    margin: 20px 60px;
    font-family: 'Luckiest Guy', cursive;
    border: 3px solid black;
    font-size: 1.6rem;
    text-align: center;
    padding: 40px 80px;
    border-radius: 8px;
    display: flex;
    width: 220px;
    height: 110px;
    flex-direction: column;
    justify-content: center;
    background-image: ${({ bg }) => `url(${bg})`};
    background-size: cover;
    background-position: center;
    position: relative;
    transition: transform 0.2s;
    &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.5); 
        z-index: 1;
    }
    &:hover {
        transform: scale(1.07);
        @media screen and (max-width: 1000px) {
            transform: none;
        }
    }
    a {
        color: white;
        font-weight: bold;
        z-index: 2;
        text-shadow: 1px 1px 4px black;
    }
    @media (max-width: 1000px) {
        width: 220px;
        height: 100px;
    }
    ${({ animate }) =>
            animate &&
            css`
      animation: ${fadeInUp} 1s ease forwards;
      animation-delay: 0.5s;
    `}
`;