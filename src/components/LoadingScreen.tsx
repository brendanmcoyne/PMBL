import styled, { keyframes } from "styled-components";

const grow = keyframes`
    from {
        transform: scale(1);
    }
    to {
        transform: scale(1.4);
    }
`;

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(720deg);
    }
`;

const Overlay = styled.div`
    position: fixed;
    inset: 0;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: darkblue;
    flex-direction: column;
    overflow: hidden;
`;

const SpinningBackground = styled.img`
    position: absolute;
    top: 10%;
    width: 25rem;
    height: 25rem;
    margin-bottom: 20px;
    opacity: .8;
    animation: ${spin} 5s linear infinite;
    object-fit: contain;
    z-index: 0;
    @media screen and (max-width: 1000px) {
        margin-top: 6.5rem;
        width: 15rem;
        height: 15rem;
    }
`;

const Image = styled.img`
    width: 20rem;
    height: 20rem;
    margin-top: 250px;
    object-fit: contain;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
    animation: ${grow} 1s ease-out forwards;
    z-index: 1;

    @media screen and (max-width: 1000px) {
        width: 12rem;
        height: 12rem;
        margin-top: 180px;
    }
    @media screen and (max-width: 400px) {
        width: 0;
        height: 0;
    }
`;

const Header = styled.h2`
    font-size: 150px;
    color: white;
    z-index: 2;
    margin-bottom: 100px;
    font-family: 'Luckiest Guy', cursive;
    text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 0px 0px 12px #ff0;
    @media screen and (max-width: 1000px) {
        font-size: 75px;
        margin-bottom: 120px;
    }
`;

export default function LoadingScreen({ message = "Loading" }) {
    return (
        <Overlay>
            <SpinningBackground src="/baseball.webp" alt="Background" />
            <Image src="/LeagueLogo_fix.png" alt="Loading..." />
            <Header>{message}</Header>
        </Overlay>
    );
}
