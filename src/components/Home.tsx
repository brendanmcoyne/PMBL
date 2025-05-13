import { styled } from "styled-components";

const Wrapper = styled.div`
    text-align: center;
    align-items: center;
    flex-direction: column;
`;
const StyledHeader = styled.h1`
    position: absolute;
    align-items: center;
    font-size: 30px;
`;

const GenImage = styled.img`
    flex: 1;
    align-self: center;
    
`;
export default function Home() {
    return(
        <Wrapper>
            <StyledHeader>Welcome to the Professional Mario Baseball League</StyledHeader>
            <GenImage src="/PHOTO-2025-02-26-22-04-43.jpg" alt="League Logo" width="400px" height="300px"/>
        </Wrapper>

    );
}
