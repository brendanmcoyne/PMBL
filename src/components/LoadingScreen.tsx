import styled, { keyframes } from "styled-components";

const grow = keyframes`
    from { transform: scale(1); }
    to { transform: scale(1.4); }
`;

const spin = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(720deg); }
`;

const Overlay = styled.div`
    position: fixed;
    inset: 0;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start; 
    padding-top: 10rem; 
    background-color: darkblue;
    overflow: hidden;

    @media screen and (max-width: 1000px) {
        padding-top: 5rem;
    }
`;

const LogoWrapper = styled.div`
    position: relative;
    width: 25rem;
    height: 25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;

    @media screen and (max-width: 1000px) {
        width: 17rem;
        height: 17rem;
    }
`;

const SpinningBackground = styled.img`
    position: absolute;
    width: 25rem;
    height: 25rem;
    opacity: 0.8;
    animation: ${spin} 5s linear infinite;
    object-fit: contain;
    z-index: 0;

    @media screen and (max-width: 1000px) {
        width: 17rem;
        height: 17rem;
    }
`;

const Image = styled.img`
    width: 80%;
    height: 80%;
    object-fit: contain;
    animation: ${grow} 1s ease-out forwards;
    z-index: 1;
`;

const Header = styled.h2`
    font-size: 150px;
    color: white;
    z-index: 2;
    margin-top: 80px;
    font-family: 'Luckiest Guy', cursive;
    text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0px 0px 12px #ff0;

    @media screen and (max-width: 1000px) {
        font-size: 75px;
        margin-top: 80px;
    }
`;

export default function LoadingScreen({ message = "Loading" }) {
    return (
        <Overlay>
            <LogoWrapper>
                <SpinningBackground src="/baseball.webp" alt="Background" />
                <Image src="/LeagueLogo_fix.png" alt="Loading..." />
            </LogoWrapper>
            <Header>{message}</Header>
        </Overlay>
    );
}
