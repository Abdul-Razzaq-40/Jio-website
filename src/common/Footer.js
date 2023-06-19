import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/Logo.png';
import FacebookIcon from '../assets/facebook-icon.png';
import TwitterIcon from '../assets/twitter-icon.png';
import InstagramIcon from '../assets/instagram-icon.png';
import YoutubeIcon from '../assets/youtube-icon.png';
import LinkedinIcon from '../assets/linkedin-icon.png';
import AppStoreIcon from "../assets/AppStore.png";
import PlayStoreIcon from "../assets/AppStore.png";
import DoctorImage from "../assets/DoctorImage.png";

const FooterContainer = styled.footer`
    height: fit;
    background: #001252;
    padding: 1.875em 6.125em 0.5em 6.125em;
    display: flex;
`;

const FooterSection = styled.div`
  display: flex;
  width: 15vw;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 6.25em 4.25em 1em 4.25em;
`;

const HealthLogo = styled.img`
  margin-top: 2em;
  height: 3.75em;
  width: 20vw;
`;

const SocialMediaIcons = styled.div`
  display: flex;
  align-items: center;
`;

const SocialMediaIcon = styled.img`
  width: 1.5vw;
  margin-right: 0.625em;
  border-radius: 3.125em;
`;

const DownloadContainer = styled.div`
    display: flex;
    gap: 0.625em;
`;

const CommonHeading = styled.h3`
    margin: 2em 0;
    color: #FFFFFF;
    font: 600 normal 1.25rem 'Open Sans';
`;

const StyledLink = styled.a`
  margin-left: -1.25em;
  line-height: 1.875em;
  color: #E0E0E0;
  font-family: 'Open Sans';
  text-decoration: none;
`;

const OverLay = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 2.5em 8.5em;
    border-radius: 20px;
    background-color: #26A19D;
    width: 80vw;
    color: #26A19D;
    height: 40vh;
    position: absolute;
    top: -180px;
    left: 0;
    z-index: 1;
`;

const ContentSection = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledText = styled.h3`
  margin-top: 5px;
  color: white;
  font: 700 normal 30px 'Open Sans';
`;

const StyleButtons = styled.button`
    font: 700 normal 0.7rem 'Open Sans';
    color: #4A4A4A;
    background: #FFFFFF;
    border-radius: 5px;
    padding: 0.3125em 3.125em;
    margin-top: 0.625em;
    border-color: transparent;
`;

const DetailsButton = styled.button`
    font: normal 700 0.7rem 'Open Sans';
    color: #FFFFFF;
    background: #26A19D;
    border: 2px solid #FFFFFF;
    border-radius: 5px;
    padding: 0.3125em 3.125em;
    margin-top: 0.625em;
`;

const MainContainer = styled.section`
    position: relative;
`;

const Footer = () => {
  return (
    <MainContainer>
      <OverLay>
        <img src={DoctorImage} style={{ marginLeft: '5em', marginTop: '-4em' }} width="15%" alt="logo" />
        <ContentSection>
          <p style={{ backgroundColor: 'white' }}>EXCEPTIONAL VALUE AT AFFORDABLE PRICES</p>
          <StyledText>
            Plans starting at &#x20B9;<strike>19,316</strike> &#x20B9;<br />16,419/year*
          </StyledText>
          <DownloadContainer>
            <StyleButtons>Start 15-day free trial</StyleButtons>
            <DetailsButton>Contact us</DetailsButton>
          </DownloadContainer>
          <h6 style={{ color: '#FFFFFF' }}>Healthgro Practice comes with highly competitive pricing plans. Need help? <strong>Talk to an expert!</strong></h6>
        </ContentSection>
      </OverLay>
      <FooterContainer>
        <FooterSection>
          <div>
            <HealthLogo src={Logo} alt="Logo" />
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', margin: '4em 0', fontSize: '0.75rem' }}>Use Heathgro Practice to create your own website, take online appointments, collect payments, and promote your medical practice using the latest digital tools and features</p>
            <DownloadContainer>
              <img src={PlayStoreIcon} height={30} alt="logo" />
              <img src={AppStoreIcon} height={30} alt="logo" />
            </DownloadContainer>
          </div>
        </FooterSection>
        <FooterSection>
          <CommonHeading>Quick links</CommonHeading>
          <ul>
            <StyledLink href="#">Academy</StyledLink><br />
            <StyledLink href="#">Blogs</StyledLink><br />
            <StyledLink href="#">Privacy Policy</StyledLink><br />
            <StyledLink href="#">Terms of Use</StyledLink><br />
            <StyledLink href="#">Pricing</StyledLink><br />
            <StyledLink href="#">FAQS</StyledLink><br />
            <StyledLink href="#">Caution Notice</StyledLink><br />
          </ul>
        </FooterSection>

        <FooterSection>
          <div>
            <CommonHeading>Contact us</CommonHeading>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Support & Info<br />1860-123-1233 - ria@healthgro.io</p><br />
            <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Careers<br />work@nowfloats.com</p><br />
            <SocialMediaIcons>
              <SocialMediaIcon src={FacebookIcon} alt="Facebook" />
              <SocialMediaIcon src={TwitterIcon} alt="Twitter" />
              <SocialMediaIcon src={InstagramIcon} alt="Instagram" />
              <SocialMediaIcon src={YoutubeIcon} alt="Youtube" />
              <SocialMediaIcon src={LinkedinIcon} alt="LinkedIn" />
            </SocialMediaIcons>
          </div>
        </FooterSection>
        <FooterSection>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginTop: '4.25em' }}>Address<br /> NowFloats Technologies Ltd, Jubilee Casa, 1246, Level 1, Road No 62, Jubilee Hills, Hyderabad 500033, Telangana</p>
        </FooterSection>
      </FooterContainer>
    </MainContainer>
  );
};

export default Footer;
