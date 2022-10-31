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
import sample from '../files/sample.mp4'

const Div = styled.div`
    overflow: hidden;
`
const Wrapper = styled.div`
    width: 100vw;
    height: auto;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    margin-top: 30px;
    ${mobile({ padding: '50' })}
`
const Title = styled.h1`
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 10px;
    text-align: center;
    padding-top: 10px;
    color: white;
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
    position: absolute;
    border-radius: 18px;
    bottom: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Box = styled.div`
    height: auto;
    display: flex;
    align-item: center;
    justify-content: center;
    flex-direction: row;
    width: 100%;
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
const SmallImgBox = styled.div`
    width: 200px;
    height: auto;
    min-height: 120px;
    margin-left: 20px;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: contain;
    background-color: #fcf5f5;
    ${mobile({ height: "30vh" })}
`
const DeepBox = styled.div`

`

const About = () => {

    return (

        <div>
            <div>
                <ColorNav />
            </div>
            <Div style={{ marginTop: '50px' }}>
                <Wrapper>
                    <FirstDiv>
                        <img src={AboutImgTest} style={{ minWidth: '100%' }} />
                    </FirstDiv>
                    <SecondDiv style={{ width: '60%', backgroundColor: 'rgba(50, 84, 155, 0.8)' }}>
                        <Title>Company Profile</Title>
                        <Description>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae autem, ducimus labore quos earum totam! Excepturi sed recusandae a! Sunt culpa ullam architecto. Autem eveniet praesentium beatae hic, optio suscipit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quas error inventore reiciendis perspiciatis facere impedit, veniam, placeat eaque ad sit dolorem aspernatur molestias est odio. Qui perferendis repellendus ipsum!
                        </Description>
                    </SecondDiv>
                </Wrapper>

                <Wrapper>
                    <video src={sample} style={{ width: '60%', height: 'auto' }} controls />
                </Wrapper>

                <Wrapper>
                    <FirstDiv>
                        <img src={AboutImgTest} style={{ minWidth: '100%' }} />
                    </FirstDiv>
                    <SecondDiv style={{ width: '70%' }}>
                        <Title>Our Vision and Mission Objective</Title>
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
                        </Box>
                    </SecondDiv>
                </Wrapper>

                <Wrapper style={{padding: '30px'}}>
                    <FirstDiv>
                        {/* <img src={AboutImgTest} style={{ minWidth: '100%' }} /> */}
                        <DeepBox>
                            <Title style={{ color: '#212529' }}>Our Brands</Title>
                            <Box>
                                <SmallImgBox>
                                    <Image src={`http://medicalworldinvpos.kwintechnologykw09.com/ecommerce/brands/branded.png`} />
                                </SmallImgBox>
                                <SmallImgBox>
                                    <Image src={`http://medicalworldinvpos.kwintechnologykw09.com/ecommerce/brands/ecofamily.png`} />
                                </SmallImgBox>
                                <SmallImgBox>
                                    <Image src={`http://medicalworldinvpos.kwintechnologykw09.com/ecommerce/brands/family.png`} />
                                </SmallImgBox>
                                <SmallImgBox>
                                    <Image src={`http://medicalworldinvpos.kwintechnologykw09.com/ecommerce/brands/oxypas.png`} />
                                </SmallImgBox>
                            </Box>
                        </DeepBox>
                        <DeepBox>
                            <Title style={{ color: '#212529' }}>Our Products</Title>
                            <Box>
                                <SmallImgBox style={{ paddingBottom: '30px',}}>
                                    <Image src={`http://medicalworldinvpos.kwintechnologykw09.com/ecommerce/product_lines/medical_scrub.png`} />
                                    <span style={{ display: 'block', textAlign: 'center' }}>Default</span>
                                </SmallImgBox>
                                <SmallImgBox style={{ paddingBottom: '30px',}}>
                                    <Image src={`http://medicalworldinvpos.kwintechnologykw09.com/ecommerce/product_lines/doctor_coat.png`} />
                                    <span style={{ display: 'block', textAlign: 'center' }}>Doctor Coat</span>
                                </SmallImgBox>
                                <SmallImgBox style={{ paddingBottom: '30px',}}>
                                    <Image src={`http://medicalworldinvpos.kwintechnologykw09.com/ecommerce/product_lines/gown.png`} />
                                    <span style={{ display: 'block', textAlign: 'center' }}>Gown</span>
                                </SmallImgBox>
                                <SmallImgBox style={{ paddingLeft: '30px',}}>
                                    <Image src={`http://medicalworldinvpos.kwintechnologykw09.com/ecommerce/product_lines/pants.png`} />
                                    <span style={{ display: 'block', textAlign: 'center' }}>Pants</span>
                                </SmallImgBox>
                            </Box>
                        </DeepBox>
                    </FirstDiv>
                    {/* <SecondDiv>
                        
                    </SecondDiv> */}
                </Wrapper>

                <Wrapper style={{padding: '30px'}}>
                    <FirstDiv>
                        {/* <img src={AboutImgTest} style={{ minWidth: '100%' }} /> */}
                        <DeepBox>
                            <Title style={{ color: '#212529' }}>Our Clients</Title>
                            <Box style={{justifyContent: 'start'}}>
                                <SmallImgBox>
                                    <Image src={`http://medicalworldinvpos.kwintechnologykw09.com/ecommerce/brands/branded.png`} />
                                </SmallImgBox>
                                <SmallImgBox>
                                    <Image src={`http://medicalworldinvpos.kwintechnologykw09.com/ecommerce/brands/ecofamily.png`} />
                                </SmallImgBox>
                                <SmallImgBox>
                                    <Image src={`http://medicalworldinvpos.kwintechnologykw09.com/ecommerce/brands/family.png`} />
                                </SmallImgBox>
                                <SmallImgBox>
                                    <Image src={`http://medicalworldinvpos.kwintechnologykw09.com/ecommerce/brands/oxypas.png`} />
                                </SmallImgBox>
                                <SmallImgBox>
                                    <Image src={`http://medicalworldinvpos.kwintechnologykw09.com/ecommerce/brands/branded.png`} />
                                </SmallImgBox>
                                {/* <SmallImgBox style={{marginTop: '20px'}}>
                                    <Image src={`http://medicalworldinvpos.kwintechnologykw09.com/ecommerce/brands/branded.png`} />
                                </SmallImgBox> */}
                            </Box>
                        </DeepBox>
                    </FirstDiv>
                    {/* <SecondDiv>
                        
                    </SecondDiv> */}
                </Wrapper>

                

            </Div>
            <div>
                <Footer />
            </div>
        </div>

    );

}

export default About;