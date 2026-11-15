import styled from "styled-components";

const FooterContainer = styled.footer`
    background: linear-gradient(180deg, #080878, #05054a);
    color: white;
    padding: 20px 20px;
    margin-top: 2rem;
`;

const FooterContent = styled.div`
    max-width: 1300px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    @media (max-width: 700px) {
        flex-direction: column;
        text-align: center;
        gap: 15px;
    }
`;

const FooterBrand = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

const FooterLogo = styled.img`
    width: 45px;
    height: 45px;
    object-fit: contain;
`;

const FooterTitle = styled.span`
    font-family: 'Anton', sans-serif;
    font-size: 1.4rem;
    letter-spacing: 1px;
`;

const FooterRight = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    color: #bfc5e8;
    font-size: 0.85rem;

    a {
        color: #bfc5e8;
        text-decoration: none;
        font-weight: 600;
    }

    @media (max-width: 700px) {
        flex-direction: column;
        gap: 8px;
    }
`;

export default function Footer() {
    return (
        <FooterContainer>
            <FooterContent>
                <FooterBrand>
                    <FooterLogo src="/LeagueLogo_noWords.png" alt="PMBL Logo"/>
                    <FooterTitle>PMBL</FooterTitle>
                </FooterBrand>

                <FooterRight>
                    <span>© {new Date().getFullYear()} Brendan Coyne. All rights reserved.</span>
                </FooterRight>
            </FooterContent>
        </FooterContainer>
    );
}
