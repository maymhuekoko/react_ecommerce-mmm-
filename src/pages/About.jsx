// import { Button } from '@mui/material';
import React  from 'react';
import styled from 'styled-components';
import {mobile} from "../responsive";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import ColorNav from '../components/ColorNav';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';

const Div = styled.div`
    margin-top: 65px;
`
const Wrapper = styled.div`
    widtr: 100vw;
    height: auto;
    min-height: 100vh;
    padding: 50px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    ${mobile({padding: '50'})}
`
const Title = styled.h1`
    font-size: 50px;
    margin-bottom: 20px;
    text-align: center;
`
const Description = styled.div`
    width: 70%;
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    text-align: center;
    ${mobile({textAlign: "center"})}
`

const About = () => {

    return (
        
        <div>
            <div>
                <ColorNav/>
            </div>
            <Div>
                <Wrapper>
                    <Title>About Us</Title>
                    <Description>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae autem, ducimus labore quos earum totam! Excepturi sed recusandae a! Sunt culpa ullam architecto. Autem eveniet praesentium beatae hic, optio suscipit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quas error inventore reiciendis perspiciatis facere impedit, veniam, placeat eaque ad sit dolorem aspernatur molestias est odio. Qui perferendis repellendus ipsum!
                    </Description>
                </Wrapper>
            </Div>
            <div>
                <Newsletter/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>

    );

}

export default About;