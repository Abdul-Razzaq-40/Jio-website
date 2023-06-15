import React from 'react';
import styled from "styled-components";
import MainImage from "../assets/MainImage.png";
import AppStoreIcon from "../assets/AppStore.png";
import PlayStoreIcon from "../assets/AppStore.png";
import DentalClinicImage from "../assets/DentalClinic.png";
import CreateWebsite from "../assets/CreateWebsite.png";
import EnableAppointments from "../assets/EnableAppointments.png";
import ServiceCatalogue from "../assets/CreateCatalogue.png";
import PromotoClinic from "../assets/PromotoClinic.png";
import CollectOnline from "../assets/CollectOnline.png";
import TrackWebsite from "../assets/TrackWebsite.png";
import PhoneImage from "../assets/PhoneImage.png";
import BorchureImage from "../assets/BrochureImage.png";
import DownloadImage from "../assets/Download.png";
import LaptopImage from "../assets/MacbookPro.png";
import BusinessImage from "../assets/ShareBusinessCard.png";
import phnImage from "../assets/PhoneImg.png";

const StyledText = styled.h1`
    font: normal 600 60px 'Plus Jakarta Sans';
    color: #4A4A4A;
    margin-right: 20%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

const MainContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;
    margin-left: 30px;
    gap: 60px;
`;

const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`;

const Text = styled.h2`
    font: 600 32px 'Plus Jakarta Sans';
    color: #4A4A4A;
    text-align: center;
    margin-top: 120px;
    margin-bottom: 50px;
`;

const FeatureHeading = styled.h1`
    font: 600 32px 'Open Sans';
    color: #4A4A4A;
    text-align: center;
    margin-top: 120px;
    margin-left: 150px;
    margin-right: 150px;
`;

const DownloadContainer = styled.div`
    display: flex;
    margin-right: 10px;
    gap: 10px;
`;

const CaoursalContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SubContainer = styled.div`
    flex:60%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;


const IconSection = styled.div`
  text-align: center;
`;

const Icon = styled.div`
  display: inline-block;
  margin-bottom: 20px;
`;

const IconImage = styled.img`
  width: 100px;
  height: 100px;
`;

const IconText = styled.div`
    width: 180px;
    font: 600 16px 'Open Sans';
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    color: #4A4A4A;
    margin-top: 5px;
    margin-right: 20px;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
`;

const FeaturesContainer = styled.div`
    margin-top: 120px;
    display: flex;
`;

const Cart = styled.div`
    flex: 40%;
    text-align: center;
`;

const DetailsButton = styled.button`
    font: normal 700 16px 'Open Sans';
    color: #001D85;
    background: #FFFFFF;
    border: 1px solid #001D85;
    border-radius: 10px;
    padding: 5px 20px;
    margin-top: 20px;
`;

const StyleButtons = styled.button`
    font: 700 normal 14px/1.5 'Open Sans';
    color: #FFFFFF;
    background: #001D85;
    border-radius: 10px;
    padding: 5px 30px;
`;

const SubContainerBrochure = styled.div`
    margin-left: 25%;
`;

const SubContainerBrochureSecond = styled.div`
    height: 
`;

const MainContentContainer = styled.div`
    margin: 0 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Container = styled.div`
    margin-top: 0px;
`;

const DownloadSubContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const DownloadSubbContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const MainContent = () => {
    return (
        <MainContentContainer>
            <MainContainer>
                <img src={MainImage} height={450} width={450} flex-shrink={0} margin-right={50} alt="Hospital Image" />
                <StyledDiv>
                    <StyledText>Grow your healthcare practice using the latest digital tools</StyledText>
                    <p>Start your <strong>15-days FREE trial</strong> of our premium plan. Download our app now.</p>
                    <DownloadContainer>
                        <img src={PlayStoreIcon} height={30} alt="logo" />
                        <img src={AppStoreIcon} height={30} alt="logo" />
                    </DownloadContainer>
                </StyledDiv>
            </MainContainer>
            <CaoursalContainer>
                <Text>Trusted by healthcare providers across India</Text>
                <img src={DentalClinicImage} height={350} width="100%" alt="Dental Clinic" />
            </CaoursalContainer>
            <FeaturesContainer>
                <SubContainer>
                    <FeatureHeading>Reasons why you'll love Healthgro Practice</FeatureHeading>
                    <IconSection>
                        <Icon>
                            <IconImage src={CreateWebsite} alt="Create website icon" />
                            <IconText>Create your website in minutes</IconText>
                        </Icon>
                        <Icon>
                            <IconImage src={EnableAppointments} alt="Enable online payments icon" />
                            <IconText>Enable online appointments</IconText>
                        </Icon>
                        <Icon>
                            <IconImage src={ServiceCatalogue} alt="Service catalogue icon" />
                            <IconText>Create a service catalogue</IconText>
                        </Icon>
                        <Icon>
                            <IconImage src={PromotoClinic} alt="Promote clinic icon" />
                            <IconText>Promote your clinic/hospital online</IconText>
                        </Icon>
                        <Icon>
                            <IconImage src={CollectOnline} alt="Collect payment icon" />
                            <IconText>Collect online payments securely</IconText>
                        </Icon>
                        <Icon>
                            <IconImage src={TrackWebsite} alt="Track website icon" />
                            <IconText>Track your website performance</IconText>
                        </Icon>
                    </IconSection>
                    <DetailsButton>view detailed features</DetailsButton>
                </SubContainer>
                <Cart>
                    <Image src={MainImage} alt="Right Image" />
                </Cart>
            </FeaturesContainer>
            <FeaturesContainer>
                <SubContainer>
                    <img src={PhoneImage} height={350} width="40%" alt="Dental Clinic" />
                </SubContainer>
                <Container>
                    <FeatureHeading>How does Healthgro Practice work?</FeatureHeading>
                    <p><strong>Use our easy setup to create your own website. Now. </strong></p>
                    <p>List your services to allow to book online appointments.</p>
                    <p>Connect with social media channels to promote your practice.</p>
                    <p>Monitor your website activity in real-time from the dashboard.</p>
                    <DownloadContainer>
                        <StyleButtons>Get started</StyleButtons>
                        <DetailsButton>view features</DetailsButton>
                    </DownloadContainer>
                </Container>
            </FeaturesContainer>
            <FeaturesContainer>
                <SubContainerBrochure>
                    <img src={BorchureImage} height={200} width="100%" alt="Dental Clinic" />
                </SubContainerBrochure>
                <SubContainerBrochureSecond>
                    <FeatureHeading>Download our borchure for more details</FeatureHeading>
                    <DetailsButton><span>&#9660;</span>Download now</DetailsButton>
                </SubContainerBrochureSecond>
            </FeaturesContainer>
            <FeaturesContainer>
                <DownloadSubContainer>
                    <FeatureHeading>Manage your website from anywhere and at any time</FeatureHeading>
                    <p>Download now</p>
                    <img src={DownloadImage} height={20} width="60%" alt="Laptop" />                    
                </DownloadSubContainer>
                <DownloadSubbContainer>
                    <img src={LaptopImage} height={200} width="100%" alt="Laptop" />
                    <img src={BusinessImage} height={200} width="100%" alt="Business card" />
                    <img src={phnImage} height={200} width="100%" alt="Mobile" />
                </DownloadSubbContainer>
            </FeaturesContainer>
        </MainContentContainer>
    );
}

export default MainContent;