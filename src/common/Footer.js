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
    padding: 20px;
    display: flex;
    


`;

const FooterSection = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 150px 20px 0 20px;
`;

const HealthLogo = styled.img`
  margin-top: 30px;
  height: 60px;
  width: "20%";
`;

const SocialMediaIcons = styled.div`
  display: flex;
  align-items: center;
`;

const SocialMediaIcon = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50px;
`;

const DownloadContainer = styled.div`
    display: flex;
    margin-right: 10px;
    gap: 10px;
`;

const CommonHeading = styled.h3`
    color: #FFFFFF;
    font: 600 normal 28px 'Open Sans';
`;

const QuickLinksHeading = styled.h3`
  color: #FFFFFF;
  font-weight: 600;
  font-size: 16px;
  font-family: 'Open Sans';
`;

const StyledLink = styled.a`
  color: #E0E0E0;
  font-family: 'Open Sans';
  text-decoration: none;
`;

const OverLay = styled.div`
    display: flex;
    justify-content: space-between;
    // margin-top: 40px;
    margin: 40px 150px;
    border-radius: 20px;
    background-color: #26A19D;
    width: 80%;
    color: #26A19D;
    height: 34vh;
    position: absolute;
    top: -180px;
    left: 0;
    z-index: 1;
`;

const ContentSection = styled.div`
    display: flex;
    flex-direction: column;
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`;

const StyledText = styled.h3`

`;

const StyleButtons = styled.button`
    font: 700 normal 14px/1.5 'Open Sans';
    color: #4A4A4A;
    background: #FFFFFF;
    border-radius: 10px;
    padding: 0 50px;
`;

const DetailsButton = styled.button`
    font: normal 700 16px 'Open Sans';
    color: #001D85;
    background: #26A19D;
    border: 2px solid #FFFFFF;
    border-radius: 10px;
    padding: 5px 50px;
    margin-top: 20px;
`;

const MainContainer = styled.section`
    position: relative;
`;

const Footer = () => {
  return (
    <MainContainer>
      <OverLay>
        <img src={DoctorImage} style={{ marginLeft: '120px' }} height={250} marginLeft={20} width="15%" alt="logo" />
        <ContentSection>
          <p>EXCEPTIONAL VALUE AT AFFORDABLE PRICES</p>
          <StyledText>
            Plans starting at &#x20B9;<strike>19,316</strike> &#x20B9;16,419/year*
          </StyledText>
          <DownloadContainer>
            <StyleButtons>Start 15-day free trial</StyleButtons>
            <DetailsButton>Contact us</DetailsButton>
          </DownloadContainer>
          <h6>Healthgro Practice comes with highly competitive pricing plans. Need help? <strong>Talk to an expert!</strong></h6>
        </ContentSection>
      </OverLay>
      <FooterContainer>
        <FooterSection>
          <div>
            <HealthLogo src={Logo} alt="Logo" />
          </div>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginLeft: '70px' }}>Use Heathgro Practice to create your own website, take online appointments, collect payments, and promote your medical practice using the latest digital tools and features</p>
          <DownloadContainer>
            <img src={PlayStoreIcon} height={30} alt="logo" />
            <img src={AppStoreIcon} height={30} alt="logo" />
          </DownloadContainer>
        </FooterSection>
        <FooterSection>
          <ul>
            <QuickLinksHeading>Quick links</QuickLinksHeading>
            <StyledLink href="#">Academy</StyledLink><br /><br />
            <StyledLink href="#">Blogs</StyledLink><br /><br />
            <StyledLink href="#">Privacy Policy</StyledLink><br /><br />
            <StyledLink href="#">Terms of Use</StyledLink><br /><br />
            <StyledLink href="#">Pricing</StyledLink><br /><br />
            <StyledLink href="#">FAQS</StyledLink><br /><br />
            <StyledLink href="#">Caution Notice</StyledLink><br /><br />
          </ul>
        </FooterSection>

        <FooterSection>
          <div>
            <CommonHeading>Contact us</CommonHeading>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginTop: '10px' }}>Support & Info<br />1860-123-1233 - ria@healthgro.io</p><br />
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginTop: '10px' }}>Careers<br />work@nowfloats.com</p><br />
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
          <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginLeft: '70px', marginTop: '70px' }}>Address<br /> NowFloats Technologies Ltd, Jubilee Casa, 1246, Level 1, Road No 62, Jubilee Hills, Hyderabad 500033, Telangana</p>
        </FooterSection>
      </FooterContainer>
    </MainContainer>
  );
};

export default Footer;
