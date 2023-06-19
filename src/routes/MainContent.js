import React from 'react';
import CarouselComponent from './CarouselComponent ';
import styled from "styled-components";
import MainImage from "../assets/MainImage.png";
import AppStoreIcon from "../assets/AppStore.png";
import PlayStoreIcon from "../assets/AppStore.png";
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
import DentalClinic from "../assets/DentalClinic.png";

const StyledText = styled.h1`
    font: normal 600 3.25rem 'Plus Jakarta Sans';
    color: #4A4A4A;
    margin-right: 20%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

const MainContainer = styled.div`
    color: #F8F8F8;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1em;
    margin-left: 1.875em;
    gap: 3.875em;
`;

const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`;

const Text = styled.h2`
    font: 600 2rem 'Plus Jakarta Sans';
    color: #4A4A4A;
    text-align: center;
    margin-top: 3.75em;
    margin-bottom: 1.5625em;
`;

const FeatureHeading = styled.h1`
    font: 600 2rem 'Plus Jakarta Sans';
    color: #4A4A4A;
    text-align: center;
    width: 70%;
`;

const DownloadContainer = styled.div`
    display: flex;
    margin-right: 0.625em;
    gap: 0.625em;
`;

const CaoursalContainer = styled.div`
    color: #F5F5F5;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SubContainer = styled.div`
    flex: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;


const IconSection = styled.div`
  text-align: center;
`;

const Icon = styled.div`
  display: inline-block;
  margin-bottom: 1.25em;
`;

const IconImage = styled.img`
  width: 6.25rem;
  height: 6.25rem;
`;

const IconText = styled.div`
    width: 12em;
    font: 600 1rem 'Open Sans';
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    color: #4A4A4A;
    margin-top: 0.15em;
    margin-right: 0.625em;
`;

const FeaturesContainer = styled.div`
    color: #F8F8F8;
    display: flex;
`;

const Cart = styled.div`
    box-shadow: 0px 0.44rem 2.22rem rgba(0, 0, 0, 0.1);
    margin-left: 8em;
    flex: 30%;
    height: 80vh;
    text-align: left;
`;

const DetailsButton = styled.button`
    font: normal 700 1rem 'Open Sans';
    color: #001D85;
    background: #FFFFFF;
    border: 1px solid #001D85;
    border-radius: 10px;
    padding: 0.15em 0.625em;
    margin-top: 0.625em;
`;

const StyleButtons = styled.button`
    font: 700 normal 1rem 'Open Sans';
    color: #FFFFFF;
    background: #001D85;
    border: 0;
    border-radius: 10px;
    padding: 0.15em 0.625em;
    margin-top: 0.625em;
`;

const SubContainerBrochure = styled.div`
    flex: 2;
    margin-left: 15%;
`;

const SubSubContainerBrochure = styled.div`
    flex: 4;
    margin-left: 10%;
`;

const MainContentContainer = styled.div`
    margin: 0 6.5em;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Container = styled.div`
    height: 20vh;
    text-align: left;
`;

const DownloadSubContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: left;
`;

const DownloadSubbContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const LaptopImg = styled.img`
    display: block;
    width: 100%;
    height: auto;
`;

const BusinessImg = styled.img`
    display: block;
    width: 100%;
    height: auto;
    margin-left: 1.25em;
    position: absolute;
    top: 5%;
    left: 5%;
    right: 15%;
    width: 78%;
    height: 78%;
`;

const LaptopContainer = styled.div`
    position: relative;
    display: inline-block;
`;

const PhoneContainer = styled.div`
    margin: 0 2em;
`;

const MobilePhoneContainer = styled.div`
    color: #F5F5F5;
    margin-top: 7.5em;
    display: flex;
    gap: 9.375em;
`;

const BrochureContainer = styled.div`
    color: #F8F8F8;
    margin: 6.25em 3.75em 3.125em 3.75em;
    display: flex;
`;

const BorchureButton = styled.button`
    font: normal 700 1.5rem 'Open Sans';
    color: #001D85;
    background: #FFFFFF;
    border: 1px solid #001D85;
    border-radius: 10px;
    padding: 0.3125em 0.94em;
    margin-top: 0.3125em;
`;

const BrochureHeading = styled.h2`
    font: 600 2rem 'Plus Jakarta Sans';
    width: 70%;
    color: #4A4A4A;
    text-align: left;
`;

const DownloadAppContainer = styled.div`
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    margin: 3.125em 0em 15.625em 6.25em;
`;

const DownloadHeading = styled.h1`
    width: 70%;
    font: 600 2rem 'Open Sans';
    color: #4A4A4A;
    text-align: left;
`;

const NumberedParagraph = styled.p`
    color: #4A4A4A;
    counter-increment: custom-counter;
    position: relative;
    padding-left: 2.5em;
    margin: 1.875em 0;
`;

const Number = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 1.875em;
  height: 1.875em;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #32D3CE;
  border-radius: 50%;
  background-color: ${({ isFirst }) => (isFirst ? "#32D3CE" : "transparent")};
`;

const Line = styled.div`
  position: absolute;
  top: 0;
  left: 1em;
  width: 0.0625em;
  height: 70%;
  background-color: #D1D1D1;
  transform: rotate(-180deg);
  transform-origin: top left;
`;

const ActivateButton = styled.button`
    font: normal 700 1rem 'Open Sans';
    color: #FFFFFF;
    background: #001D85;
    border: 1px solid #001D85;
    border-radius: 10px;
    padding: 0.3125em 4.0625em;
    margin-top: 0.625em;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
`;

const SubHeading = styled.h3`
    color: #4A4A4A;
    font: 600 1.25rem Open Sans, sans-serif;
    textAlign: left;
    margin-left: 1.5em;
`;

const MainHeading = styled.h2`
    margin-top: 0.5em;
    margin-left: 1.25em;
    color: #32D3CE;
`;

const FormContainer = styled.div`
    margin-left: 1.875em;
`;

const Field = styled.input`
    margin: 10px 0;
    border: none;
    border-bottom: 2px solid #4F4F4F;
    outline: none;
    width: 90%;
    font: 200 1.25rem Open Sans, sans-serif;
    &::placeholder {
        color: #E0E0E0;
    }
`;

const SelectField = styled.select`
  border: none;
  border-bottom: 2px solid #4F4F4F;
  outline: none;
  font: 200 1.25rem Open Sans, sans-serif;
  width: 90%;
  color: #E0E0E0;
`;

const StyledOption = styled.option`
  font-family: 'Open Sans', sans-serif;
  color: #E0E0E0;
  background-color: #FFFFFF;
`;

const MainContent = () => {
    const images = [DentalClinic, PhoneImage, DentalClinic, PhoneImage]
    return (
        <MainContentContainer>
            <MainContainer>
                <img src={MainImage} height={'37%'} width={'37%'} flex-shrink={0} margin-right={50} alt="Hospital Image" />
                <StyledDiv>
                    <StyledText>Grow your healthcare practice using the latest digital tools</StyledText>
                    <p style={{color: '#4A4A4A'}}>Start your <strong>15-days FREE trial</strong> of our premium plan. Download our app now.</p>
                    <DownloadContainer>
                        <img src={PlayStoreIcon} height={30} alt="logo" />
                        <img src={AppStoreIcon} height={30} alt="logo" />
                    </DownloadContainer>
                </StyledDiv>
            </MainContainer>
            <CaoursalContainer>
                <Text>Trusted by healthcare providers across India</Text>
                <CarouselComponent images={images}/>
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
                    <MainHeading>Make a website now!</MainHeading>
                    <SubHeading>Activate 15-day FREE trial</SubHeading>
                    <FormContainer>
                        <label for="mobile-number" style={{color: '#747474'}}>Mobile Number</label><br/>
                        <Field type="tel" id="mobile-number" class="input-field" placeholder="Enter your mobile number" />
                    </FormContainer>
                    <FormContainer>
                        <label for="business-location" style={{color: '#747474'}}>Business Location</label><br/>
                        <SelectField id="business-location" class="input-field">
                            <StyledOption value="location1">Location 1</StyledOption>
                            <StyledOption value="location2">Location 2</StyledOption>
                            <StyledOption value="location3">Location 3</StyledOption>
                        </SelectField>
                    </FormContainer>
                    <FormContainer>
                        <label for="business-name" style={{color: '#747474'}}>Name of your Business</label><br/>
                        <Field type="text" id="business-name" class="input-field" placeholder="Enter the name of your business" />
                    </FormContainer>
                    <FormContainer>
                        <label for="email-address" style={{color: '#747474'}}>Email Address</label><br/>
                        <Field type="email" id="email-address" class="input-field" placeholder="Enter your email address" />
                    </FormContainer>
                    <p style={{color: '#9A9A9A', margin: '0.5em 1.5em', textAlign: 'center', fontSize: '0.8rem'}}>By activating Free Trial, you agree to our Terms & Privacy Policy, You also allow us to reach out to you through Watsapp, email and other channels for marketing purposes.</p>
                    <ActivateButton>Activate now</ActivateButton>
                    <a style={{ color: '#747474', textDecoration: 'underline', marginLeft: '8em'}}>See free trial features</a>
                </Cart>
            </FeaturesContainer>
            <MobilePhoneContainer>
                <PhoneContainer>
                    <img src={PhoneImage} height={'90%'} width="85%" alt="Phone Picture" />
                </PhoneContainer>
                <Container>
                    <FeatureHeading>How does Healthgro Practice work?</FeatureHeading>
                    <NumberedParagraph>
                        <Number isFirst>1</Number>
                        <strong>Use our easy setup to create your own website. Now.</strong>
                    </NumberedParagraph>
                    <NumberedParagraph>
                        <Number>2</Number>
                        <Line />
                        List your services to allow to book online appointments.
                    </NumberedParagraph>
                    <NumberedParagraph>
                        <Number>3</Number>
                        <Line />
                        Connect with social media channels to promote your practice.
                    </NumberedParagraph>
                    <NumberedParagraph>
                        <Number>4</Number>
                        <Line />
                        Monitor your website activity in real-time from the dashboard.
                    </NumberedParagraph>
                    <DownloadContainer>
                        <StyleButtons>Get started</StyleButtons>
                        <DetailsButton>View features</DetailsButton>
                    </DownloadContainer>
                </Container>
            </MobilePhoneContainer>
            <BrochureContainer>
                <SubContainerBrochure>
                    <img src={BorchureImage} width="100%" alt="Dental Clinic" />
                </SubContainerBrochure>
                <SubSubContainerBrochure>
                    <BrochureHeading>Download our borchure for more details</BrochureHeading>
                    <BorchureButton><span>&#9660;</span>Download now</BorchureButton>
                </SubSubContainerBrochure>
            </BrochureContainer>
            <DownloadAppContainer>
                <DownloadSubContainer>
                    <DownloadHeading>Manage your website from anywhere and at any time</DownloadHeading>
                    <p style={{color: '#4A4A4A'}}>Download now</p>
                    <img src={DownloadImage} width="70%" alt="Laptop" />
                </DownloadSubContainer>
                <DownloadSubbContainer>
                    <LaptopContainer>
                        <LaptopImg src={LaptopImage} width="100%" alt="Laptop" />
                        <BusinessImg src={BusinessImage} width="100%" alt="Business card" />
                    </LaptopContainer>
                    <img src={phnImage} height={'90%'} width="18%" alt="Mobile" />
                </DownloadSubbContainer>
            </DownloadAppContainer>
        </MainContentContainer>
    );
}

export default MainContent;