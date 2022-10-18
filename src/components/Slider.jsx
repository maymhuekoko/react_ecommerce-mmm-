import React from 'react'
import styled from 'styled-components'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { useState } from 'react';
import {sliderItems} from "../data"; 
import {mobile} from "../responsive";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display:flex;
    position: relative;
    overflow: hidden;
    background-attachment:fixed ;
    background-position: 0px 80px;
    background-size:100% 130%;
   
    ${mobile({display: "none"})}
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props=> props.slideIndex * -100}vw);
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props=>props.bgc};
`;

const ImgContainer = styled.div`
    height: 100%;
    width: 100vw;
    flex: 1;
    position: absolute;
`;

const InfoContainer = styled.div`
    left:50%;
    top: 30%;
    transform: translate(-50%, -50%);
    position: relative;
    text-align: center;
    text-shadow: 0px 0px 2px rgba(2,127,157,1);
`;

const Title = styled.h1`
    font-size: 50px;

`;

const Description = styled.p`
    margin: 30px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;

const Button = styled.button`
    padding: 7px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
    border-radius: 10%;
`;

const Image = styled.img`
width: 100vw;
object-fit: cover;

`;

const Slider = () => {
    const [slideIndex,setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1: 2)
        }else{
            setSlideIndex(slideIndex < 2 ? slideIndex+1: 0)
        }
    }

  return (
    <Container>
        <Arrow direction="left" onClick={()=> handleClick("left")}>
            <ArrowLeftOutlinedIcon/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item)=>(
                <Slide bgc={item.bg} key={item.id}>
                <ImgContainer>
                    <Image src={item.img}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Description>{item.desc}</Description>
                    <Button>Shop Now</Button>
                </InfoContainer>
                </Slide>    
            ))}
            
            {/* <Slide bgc="fcf1ed"> */}
            {/* <InfoContainer>
                <Title>Doctor Coats</Title>
                <Description>New Arrival Design</Description>
                <Button>Shop Now</Button>
            </InfoContainer>
            <ImgContainer>
                <Image src="http://familyuniform.medicalworld.com.mm/files/attachments/slider_photo2.jpg"/>
            </ImgContainer>
            
            </Slide>

            <Slide bgc="fbf0f4">
            <ImgContainer>
                <Image src="http://familyuniform.medicalworld.com.mm/files/attachments/slider_photo3.jpg"/>
            </ImgContainer>
            <InfoContainer>
                <Title>Surgeon Gowns</Title>
                <Description>New Arrival Design</Description>
                <Button>Shop Now</Button>
            </InfoContainer>
            </Slide> */}

        </Wrapper>
        <Arrow direction="right" onClick={()=> handleClick("right")}>
            <ArrowRightOutlinedIcon/>
        </Arrow>
    </Container>
  )
}

export default Slider