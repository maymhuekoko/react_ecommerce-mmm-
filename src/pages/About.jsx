// import { Button } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { mobile } from "../responsive";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import ColorNav from '../components/ColorNav';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import AboutImgTest from '../slider-images/slider1.jpg'

const Div = styled.div`
    margin-top: 30px;

`
const Wrapper = styled.div`
    widtr: 100vw;
    height: auto;
    min-height: 100vh;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    ${mobile({ padding: '50' })}
`
const Title = styled.h1`
    font-size: 30
    font-weight: bold;
    margin-bottom: 10px;
    text-align: center;
    padding-top: 10px;
    color: white;
    text-shadow: 2px 1px 2px rgba(0,0,0,0.3);
`
const Description = styled.div`
    font-size: 18px;
    font-weight: 300;
    margin-bottom: 20px;
    text-align: center;
    color: white;
    letter-spacing: 1px;
    padding: 20px;
    ${mobile({ textAlign: "center" })}
`
const FirstDiv = styled.div`
    width: 85%;
    border-radius: 20px;
    overflow: hidden;
    background-image: ;
`
const SecondDiv = styled.div`
    width: 50%;
    position: absolute;
    border-radius: 18px;
    background-color: rgba(50, 84, 155, 0.8);
    opacity: 0.8;
    bottom: 50px;
`
const Box = styled.div`
    display: flex;
    align-item: center;
    justify-content: center;
    flex-direction: row;
    width: 80%;
    flex-wrap: wrap;
`
const SmallBox = styled.div`
    width: 45%;
    background-color: rgba(50, 84, 155, 0.7);
    padding: 20px;
    color: white;
    text-align: center;
    margin: 10px;
    border-radius: 10px;
`
const Contain = styled.div`
    position: absolute;
    bottom: 50px;
    left: 200px;
`

const About = () => {

    return (

        <div>
            <div>
                <ColorNav />
            </div>
            {/* <Div>
                <Wrapper>
                    <Title>About Us</Title>
                    <Description>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae autem, ducimus labore quos earum totam! Excepturi sed recusandae a! Sunt culpa ullam architecto. Autem eveniet praesentium beatae hic, optio suscipit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quas error inventore reiciendis perspiciatis facere impedit, veniam, placeat eaque ad sit dolorem aspernatur molestias est odio. Qui perferendis repellendus ipsum!
                    </Description>
                </Wrapper>
            </Div> */}
            <Div>
                <Wrapper>
                    <FirstDiv>
                        <img src={AboutImgTest} style={{ minWidth: '100%' }} />
                    </FirstDiv>
                    <SecondDiv>
                        <Title>About Us</Title>
                        <Description>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae autem, ducimus labore quos earum totam! Excepturi sed recusandae a! Sunt culpa ullam architecto. Autem eveniet praesentium beatae hic, optio suscipit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quas error inventore reiciendis perspiciatis facere impedit, veniam, placeat eaque ad sit dolorem aspernatur molestias est odio. Qui perferendis repellendus ipsum!
                        </Description>
                    </SecondDiv>
                </Wrapper>
                <Wrapper>
                    <FirstDiv>
                        <img src={AboutImgTest} style={{ minWidth: '100%' }} />
                    </FirstDiv>
                    <Contain>
                    <Title style={{marginRight: '200px'}}>Our Mission and Goals</Title>
                    <Box>
                        <SmallBox>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.? Lorem ipsum dolor sit amet consectetur, adipisicing elit.?
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.? Lorem ipsum dolor sit amet consectetur, adipisicing elit.?
                        </SmallBox>
                        <SmallBox>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.? Lorem ipsum dolor sit amet consectetur, adipisicing elit.?
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.? Lorem ipsum dolor sit amet consectetur, adipisicing elit.?
                        </SmallBox>
                        <SmallBox>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.? Lorem ipsum dolor sit amet consectetur, adipisicing elit.?
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.? Lorem ipsum dolor sit amet consectetur, adipisicing elit.?
                        </SmallBox>
                        <SmallBox>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.? Lorem ipsum dolor sit amet consectetur, adipisicing elit.?
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.? Lorem ipsum dolor sit amet consectetur, adipisicing elit.?
                        </SmallBox>
                    </Box>
                    </Contain>
                </Wrapper>
            </Div>
            <div>
                <Footer />
            </div>
        </div>

    );

}

export default About;