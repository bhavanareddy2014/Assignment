import React, { useEffect, useState } from "react";
import { Container, ContentContainer, Description, Dot, DotContainer, ImageContainer, NavButton ,Title} from "./Slider";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Cookies from 'universal-cookie';
import { useNavigate } from "react-router-dom";

const Slider = ({ config }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => prevIndex + 1);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => prevIndex - 1);
  };

  const cookies = new Cookies();
  const loggedIn = cookies.get('loggedIn');

  useEffect(() => {
    if(!loggedIn){
        navigate('/login');
    }
  },[cookies])

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === config.length - 1 ? 0 : prevIndex + 1
        );
      }, 500);
    }, 5000); // Change the interval (in milliseconds) as needed

    return () => clearInterval(interval);
  }, []);
  return (
    <Container>
      <ImageContainer src={config[currentImageIndex].image} />
      <ContentContainer>
      <Title> {config[currentImageIndex].title} </Title>
      <Description> {config[currentImageIndex].description}</Description>
      </ContentContainer>
      {currentImageIndex !== config.length - 1 && (
        <NavButton right>
          <MdKeyboardArrowRight onClick={nextImage} />
        </NavButton>
      )}
      {currentImageIndex !== 0 && (
        <NavButton left>
          <MdKeyboardArrowLeft onClick={prevImage} />
        </NavButton>
      )}
      <DotContainer>
        {
          config.map((dot,index) =>  <Dot key={dot.image} active={(index === currentImageIndex)} /> )
        }
      </DotContainer>
    </Container>
  );
};

export default Slider;
