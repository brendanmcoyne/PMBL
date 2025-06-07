import { styled } from "styled-components";


export const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    font-size: calc(0.5rem + 1vw);
    padding-top: 2rem; 
`;

const StyledHeader = styled.h1`
    text-align: center; 
    margin-bottom: 1rem; 
`;

const DivisionDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
`;

const DivisionHeader = styled.h3`
    text-align: center;
    grid-column: span 2;
    font-size: 2rem;
`;

const ManagerP = styled.p`
    margin-left: 60px;
    margin-right: 60px;
    margin-top: 20px;
    border: 2px solid black;
    border-radius: 2%;
    font-size: 1.6rem;
    text-align: center;
    padding: 40px 80px;
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.07);
    }
`;

export default function Managers() {
    return(
        <ContentDiv>
            <StyledHeader>Managers List</StyledHeader>
            <DivisionDiv>
                <DivisionHeader>East Division</DivisionHeader>
                <ManagerP style={{backgroundColor: '#CC0000'}}>Brendan</ManagerP>
                <ManagerP style={{backgroundColor: '#FF9900'}}>Justin</ManagerP>
                <ManagerP style={{backgroundColor: '#F1C232'}}>James</ManagerP>
                <ManagerP style={{backgroundColor: '#6AA84F'}}>Matt</ManagerP>
            </DivisionDiv>

            <DivisionDiv>
                <DivisionHeader>West Division</DivisionHeader>
                <ManagerP style={{backgroundColor: '#3586E8'}}>Isaac</ManagerP>
                <ManagerP style={{backgroundColor: '#9900FF'}}>Christach</ManagerP>
                <ManagerP style={{backgroundColor: '#FF00FF'}}>Morgan</ManagerP>
                <ManagerP style={{backgroundColor: '#999999'}}>DANdrew</ManagerP>
            </DivisionDiv>
        </ContentDiv>
    );
}
