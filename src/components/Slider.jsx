import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";

import '../index.css';

const Container = styled.div`

  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
 
  @media only screen and (max-width: 380px) {
    width: 100%;
    height: 50vh;
       }
 
`;

const Arrow = styled.div`
  width: 30px;
  height: 35px;
  background-color: var(--sl);
  border-radius: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;

  @media only screen and (max-width: 380px) {

    margin-top:220px;
       }
`;

const Wrapper = styled.div`
  height: 97%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);

  @media only screen and (max-width: 380px) {
    height: 100%;
       }
`;

const Slide = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  align-items: center;

  background-color:var(--BaIn);
  background-size: 20%;
  @media only screen and (max-width: 380px) {
    width: 100vw;
    height: 70vh;
    display: flex;
    align-items: center;
    background-color: #${(props) => props.bg};
       }
  
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  @media only screen and (max-width: 380px) {
  
  height:75%;
  }
`;

const Image = styled.img`
  margin-top:10px;
  margin-left:120px;
  height: 94%;
  width: 100%;

  @media only screen and (max-width: 380px) {
    margin-top:-30px;
    margin-left:45px;
    height: 60%;
    width:100%;
  
  }
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 10px;
  margin-left:140px;
  
  
  @media only screen and (max-width: 380px) {

    padding: 40px;
    margin-top:-150px;
    margin-left:30px;
  
  }
`;

const Title = styled.h1`
  font-size: 45px;

  color: var(--tit);
  @media only screen and (max-width: 380px) {

    font-size:20px;
  
  }
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  
  letter-spacing: 3px;

  @media only screen and (max-width: 380px) {

    margin: 20px 0px;
  font-size: 10px;
  font-weight: 100;
  letter-spacing: 3px;
  
  }

`;

const Button = styled.button`
  padding: 10px;
  margin-top:-20px;
  font-size: 20px;
  color:var(--ti);
  background-color: var(--fobt);
  cursor: pointer;

  @media only screen and (max-width: 380px) {
    
    padding: 5px;
    font-size: 8px;
    color:white;
    background-color: var(--orange);
    cursor: pointer;
  
  }
  
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>Explore Products</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
