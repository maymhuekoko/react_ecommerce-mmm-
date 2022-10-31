import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import EmailIcon from '@mui/icons-material/Email';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { mobile } from "../responsive"

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1``;

const Description = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.bgc};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
`
const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    font-size: 15px;
`

const Payment = styled.img`
    width: 50%;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Medical World</Logo>
                <Description>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit placeat, earum consequatur, molestias cupiditate laboriosam nisi eligendi voluptatum quod totam soluta dolor obcaecati officia sunt repudiandae eaque odio magni architecto.
                </Description>
                <SocialContainer>
                    <SocialIcon bgc="3B5999">
                        <a href='#' style={{ color: 'white' }}><FacebookIcon /></a>
                    </SocialIcon>
                    <SocialIcon bgc="E4405F">
                        <a href='#' style={{ color: 'white' }}><InstagramIcon /></a>
                    </SocialIcon >
                    <SocialIcon bgc="E60023">
                        <a href='#' style={{ color: 'white' }}><YouTubeIcon /></a>
                    </SocialIcon>
                    <SocialIcon bgc="55ACEE">
                        <a href='#' style={{ color: 'white' }}><TwitterIcon /></a>
                    </SocialIcon>
                    <SocialIcon bgc="E60023">
                        <a href='#' style={{ color: 'white' }}><PinterestIcon /></a>
                    </SocialIcon>
                </SocialContainer>
            </Left>

            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>WishList</ListItem>
                    <ListItem>Terms</ListItem>
                    <ListItem>Conditions</ListItem>
                </List>
            </Center>

            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <RoomIcon style={{ marginRight: "10px" }} />
                    No.28, Hlaing Yadanar Mon 3rd Street, Hlaing Yadanar Mon Avenue, Hlaing Township, Yangon
                </ContactItem>

                <ContactItem>
                    <PhoneIcon style={{ marginRight: "10px" }} />
                    09777005861,09777005862
                </ContactItem>

                <ContactItem>
                    <EmailIcon style={{ marginRight: "10px" }} />
                    info@medicalworld.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    )
}

export default Footer