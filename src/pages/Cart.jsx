import React, { useState } from 'react'
import styled from 'styled-components'
import ColorNav from '../components/ColorNav'
import Slider from '../components/Slider'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import { Add, Remove } from '@mui/icons-material'
import {mobile} from "../responsive"
import { useSelector } from 'react-redux';
import axios from 'axios'
import CheckoutDialog from '../components/CheckoutDialog'
import { Link } from 'react-router-dom'

const Container = styled.div``
const Wrapper = styled.div`
    padding: 20px;
    ${mobile({padding:"10px"})}
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=> props.type === "filled" && "none"};
    background-color: ${props=> props.type === "filled" ? "black" : "transparent"};
    color: ${props=> props.type === "filled" && "white"};
`

const TopTexts = styled.div`
${mobile({display:"none"})}
`

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection:"column"})}
`
const Info = styled.div`
    flex: 3;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection:"column"})}
`
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`
const Image = styled.img`
    width: 200px;
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName = styled.span`
font-size: 18px;
margin-bottom:5px;`
const ProductId = styled.span`
font-size: 18px;
margin-bottom:5px;`
// const ProductColor = styled.div`
//     width: 20px;
//     height: 20px;
//     border-radius: 50%;
//     background-color: ${props=> props.color};
// `
const ProductSize = styled.span`
    font-size: 18px;
    margin-bottom:5px;
`
const ProductColor = styled.span`
font-size: 18px;
margin-bottom:5px;`
const ProductFabric = styled.span`
font-size: 18px;
margin-bottom:5px;`

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductAmount = styled.div`
    font-size: 22px;
    margin: 5px;
    ${mobile({margin:"5px 15px"})}
`
const ProductPrice = styled.div`
    font-size: 22px;
    font-weight:200;
    ${mobile({marginBottom:"20px"})}
`
const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 2px;
`
const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 80vh;
`
const SummaryTitle = styled.h1`
    font-weight: 200;
`
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=> props.type === "total" && "500"};
    font-size: ${props=> props.type === "total" && "24px"};

`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const SummaryButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`



const Cart = () => {
    const cart = useSelector(state=>state.cart);
    const[deliveryfee,setDeliveryFee] = useState(0);
    const[discount,setDiscount] = useState(0);
    const [showDialog, setShowDialog] = useState(false);

    const onCheckOutClicked =() => {
        setShowDialog(true);
        // const res = axios.post('http://familyuniformapp.medicalworld.com.mm/api/ecommerce_order_store',{
        //     products: cart.products,
        //     quantity: cart.quantity,
        //     amount: cart.total,
        // }).then(function(response){
            
        // }).catch(function(error){
        //     console.log(error);
        // })
    }
  return (
    <Container>
        <ColorNav/>
        
        {/* <Announcement/> */}
        <Wrapper>
            <Title>YOUR CART</Title>
            <Top>
                <Link to='/'><TopButton>CONTINUE SHOPPING</TopButton></Link>
                <TopTexts>
                    <TopText>Shopping Cart(2)</TopText>
                    <TopText>Your Wishlist(0)</TopText>
                </TopTexts>

                {/* <TopButton type="filled">CHECKOUT NOW</TopButton> */}
            </Top>
            <Bottom>
                <Info>
                    {cart.products.map((product)=>(
                        <Product>
                        <ProductDetail>
                            <Image src={`http://familyuniformapp.medicalworld.com.mm/ecommerce/items/cute2.png`}/>
                            <Details>
                                <ProductName><b>Product: </b> {product.unitname}</ProductName>
                                <ProductId><b>ID: </b> {product.unitcode}</ProductId>
                                <ProductColor><b>Color: </b> {product.color}</ProductColor>
                                <ProductFabric><b>Fabric: </b> {product.fabric}</ProductFabric>
                                <ProductSize><b>Size: </b> {product.size}</ProductSize>
                            </Details>
                        </ProductDetail>

                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>{product.quantity}</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>{product.price*product.quantity}</ProductPrice>
                        </PriceDetail>
                    </Product>
                    ))}
                    
                    <Hr/>
                    
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>

                    <SummaryItem>
                        <SummaryItemText>Total Quantity</SummaryItemText>
                        <SummaryItemPrice>{cart.total_pcs}</SummaryItemPrice>
                    </SummaryItem>
                    
                    <SummaryItem>
                        <SummaryItemText>Sub Total</SummaryItemText>
                        <SummaryItemPrice>{cart.total}</SummaryItemPrice>
                    </SummaryItem>

                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>{deliveryfee}</SummaryItemPrice>
                    </SummaryItem>

                    <SummaryItem>
                        <SummaryItemText>Discount</SummaryItemText>
                        <SummaryItemPrice>{discount}</SummaryItemPrice>
                    </SummaryItem>

                    <SummaryItem type="total">
                        <SummaryItemText >Total</SummaryItemText>
                        <SummaryItemPrice>{cart.total}</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryButton onClick={onCheckOutClicked}>CHECKOUT</SummaryButton>
                </Summary>
            </Bottom>
        </Wrapper>
        
        <CheckoutDialog open={showDialog} close={()=>setShowDialog(false)}/>
        <Footer/>
    </Container>
  )
}

export default Cart