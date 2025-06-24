import { styled } from "styled-components";
import { Link } from "react-router-dom";

const FooterContainer = styled.footer`
  text-align: center;
  margin-top: 2rem;
  padding-bottom: .5rem;
  border-top: 1px solid #ccc;
  font-size: 0.9rem;
  background-color: darkblue;
  color: white;
`;

const FooterText = styled.p`
    text-align: center;
    padding-top: 10px;
`;

export default function Footer() {
    return (
        <FooterContainer>
            <FooterText>All rights reserved by Brendan Coyne <Link to="">Credits</Link> ©</FooterText>
        </FooterContainer>
    );
}
