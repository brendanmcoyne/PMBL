import styled, { keyframes } from "styled-components";

const grow = keyframes`
    from {
        transform: scale(1);
    }
    to {
        transform: scale(1.2);
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
    top: 13%;
    width: 25rem;
    height: 25rem;
    margin-bottom: 20px;
    opacity: .8;
    animation: ${spin} 5s linear infinite;
    object-fit: contain;
    z-index: 0;
`;

const Image = styled.img`
  width: 20rem;
  height: 20rem;
  object-fit: contain;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
  animation: ${grow} 1s ease-out forwards;
  z-index: 1;
`;

const Header = styled.h2`
  font-size: 60px;
  color: white;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.9);
  margin-top: 0.5rem;
  margin-bottom: 0;
  z-index: 1;
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
