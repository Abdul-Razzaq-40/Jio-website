import React from "react";
import styled from "styled-components";
import HealthGroLogo from "../assets/HealthGroLogo.png";

const StyledNavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin: 0 15%; 
    background: #FFFFFF;
    border-bottom: 1px solid #ccc;
`;

const StyledList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 22px;
`;

const StyledLink = styled.a`
    text-decoration: none;
    color: #333;
`;

const StyledButtons = styled.button`
    font: 700 normal 14px 'Open Sans';
    color: #001D85;
    border: none;
`;

const StyleButtons = styled.button`
    font: 700 normal 14px/1.5 'Open Sans';
    color: #FFFFFF;
    background: #001D85;
    border-radius: 10px;
    padding: 5px 30px;
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`;

const Navbar = () => {
    return (
        <StyledNavBar>
            <img src={HealthGroLogo} height={60} width="20%" alt="logo" />
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