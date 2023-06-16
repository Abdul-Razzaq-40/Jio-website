import React, { useState, useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  text-align: center;
  overflow: hidden;
  display: flex;
  position: relative;
`;

const CarouselImage = styled.img`
  flex: 0 0 10%;
  display: inline-block;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const CarouselDots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const CarouselDot = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  margin: 0 5px;
  background-color: ${({ active }) => (active ? '#000' : '#ccc')};
`;

const CarouselImageContainer = styled.div`
  display: flex;
`;

const StyledButton = styled.button`
  height: 15px;
`;

const CarouselComponent = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const carouselRef = useRef(null);
  const { emblaRef, containerRef, prev, next, selectedIndex, slides } = useEmblaCarousel();

  useEffect(() => {
    if (emblaRef) {
      emblaRef.current.on('select', () => {
        const index = emblaRef.current.selectedScrollSnap();
        setSelectedImageIndex(index);
      });
    }
  }, [emblaRef]);

  return (
    <CarouselContainer ref={carouselRef}>
      <CarouselImageContainer ref={containerRef}>
        {images?.map((image, index) => (
          <CarouselImage key={index} src={image} alt={`Image ${index}`} />
        ))}
      </CarouselImageContainer>
      <StyledButton onClick={prev}>Previous</StyledButton>
      <StyledButton onClick={next}>Next</StyledButton>
      <CarouselDots>
        {slides?.map((_, index) => (
          <CarouselDot key={index} active={index === selectedIndex} />
        ))}
      </CarouselDots>
    </CarouselContainer>
  );
};

export default CarouselComponent;
