import { styled } from "styled-components";
import { Link } from "react-router-dom";

const FooterContainer = styled.footer`
  text-align: center;
  margin-top: 2rem;
  padding: 1rem 0;
  border-top: 1px solid #ccc;
  font-size: 0.9rem;
`;

export default function Footer() {
    return (
        <FooterContainer>
            <p>All rights reserved by Brendan Coyne <Link to="/credits">Credits</Link> ©</p>
        </FooterContainer>
    );
}
