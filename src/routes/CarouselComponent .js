import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from 'styled-components';

const StyledLegend = styled.p`
  color: white;
  font-size: 16px;
  text-align: center;
  background-color: rgba(255, 0, 0, 0.5);
  padding: 10px;
`;

const CarouselComponent = () => {
  const images = [
    { id: 1, src: require('../assets/image1.jpg').default, alt: 'Image 1' },
    { id: 2, src: require('../assets/image2.jpg').default, alt: 'Image 2' },
    { id: 3, src: require('../assets/image3.jpg').default, alt: 'Image 3' },
    // Add more image objects as needed
  ];
  return (
    <Carousel>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image.src} alt={image.alt} />
          <StyledLegend>{image.caption}</StyledLegend>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
