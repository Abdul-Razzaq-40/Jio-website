import React from "react";
import styled from "styled-components";
import HealthGroLogo from "../assets/HealthGroLogo.png";

const StyledNavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.625rem 10.5rem;
    background: #FFF;
    border-bottom: 1px solid #ccc;
`;

const StyledList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 1.25rem;
`;

const StyledLink = styled.a`
    text-decoration: none;
    color: #333;
`;

const StyledButtons = styled.button`
    font: 700 normal 0.875rem 'Open Sans';
    color: #001D85;
    border: none;
    background-color: transparent;
`;

const StyleButtons = styled.button`
    font: 700 normal 0.875rem/1.5 'Open Sans';
    color: #FFFFFF;
    background: #001D85;
    border-radius: 10px;
    padding: 0.3125px 1.875px;
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 0.625px;
    align-items: center;
`;

const Navbar = () => {
    return (
        <StyledNavBar>
            <img src={HealthGroLogo} width="20%" alt="logo" />
            <div>
                <StyledList>
                    <li>
                        <StyledLink href="#">Features</StyledLink>
                    </li>
                    <li>
                        <StyledLink href="#">Academy</StyledLink>
                    </li>
                    <li>
                        <StyledLink href="#">FAQS</StyledLink>
                    </li>
                    <li>
                        <StyledLink href="#">Pricing</StyledLink>
                    </li>
                </StyledList>
            </div>
            <ButtonContainer className="buttons">
                <StyledButtons>Login</StyledButtons>
                <StyleButtons>Get Started</StyleButtons>
            </ButtonContainer>
        </StyledNavBar>
    )
}

export default Navbar;