import styled, { keyframes } from "styled-components";

const grow = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.2);
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
`;

const Image = styled.img`
    width: 20rem; 
    height: 20rem;
    object-fit: contain;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
    animation: ${grow} 1s ease-out forwards;
`;

const Header = styled.h2`
    font-size: 60px;
    color: white;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
    margin-top: 0.5rem;  
    margin-bottom: 0;    
`;

export default function LoadingScreen({ message = "Loading" }) {
    return (
        <Overlay>
            <Image src="/LeagueLogo_fix.png" alt="Loading..." />
            <Header>{message}</Header>
        </Overlay>
    );
}