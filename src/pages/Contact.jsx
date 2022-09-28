
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
const Form = styled.form`
    width: 400px;
    display: flex;
    align-item: center;
    justify-content: center;
    flex-direction: column;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`
const Message = styled.textarea`
    flex: 1;
    min-width: 40%;
    min-height: 150px;
    margin: 10px 0px;
    padding: 10px;
`
const Button = styled.button`
    width: 100%;
    height: 70px;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-top: 20px;
    &:disabled{
        color: green;
        cursor: not-allowed;
    }
`

const Contact = () => {

    return (
        
        <div>
            <div>
                <ColorNav/>
            </div>
            <Div>
                <Wrapper>
                    <Title>Contact Us</Title>
                    <Description>You are free to ask anything</Description>
                    <Form>
                        <Input type="text"  placeholder="User Name"/>
                        <Input type="text" placeholder="Email"/>
                        <Message placeholder='Write Your Message'/>
                        <Button>Send Message</Button>
                    </Form>
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

export default Contact;