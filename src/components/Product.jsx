import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import React, { useEffect, useState } from 'react'
import useCollapse from 'react-collapsed';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height:100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`
const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const Container = styled.div`
    flex: 1;
    margin: 5px;
    width: 1300px;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;

    &:hover ${Info}{
        opacity: 1;
    }
`

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`
const Image = styled.img`
    height: 75%;
    z-index:2;
    margin-bottom: 50px;
`

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;

    &:hover{
       background-color: #e9f5f5;
    transform: scale(1.1);
    }
`


const ProductLineTitle = styled.h2`
    font-weight: bold;
    font-size:30px;
    margin-left:50px;
    position: absolute;
    bottom: 10%;
    
`

const Button = styled.button`
margin-left:50px;
position: absolute;
bottom: 3%; 
`

const ImgContainer = styled.div`
    flex: 1;

`
const SmallImgContainer = styled.div`
   flex: 1;
   
`
const SmallImage = styled.img`
    width: 430px;
    height: 45vh;
    margin-top: 25px;
    object-fit: contain;

`

const Product = ({ item }, props) => {

    const { getCollapseProps, getToggleProps } = useCollapse();
    const [items, setItems] = useState([{}]);

    const collapse = () => {
        const obj = { 'category_id': item.category_id, 'subcategory_id': item.id }
        axios.post('http://familyuniformapp.medicalworld.com.mm/api/productlineitems_api', obj)
            .then(res => {

                setItems(res.data);
                console.log(res.data[0]);
            }).catch(err => {
                console.log(err);
            })
    };

    return (

        <div className="collapsible" onClick={collapse}>

            <Container className="header" {...getToggleProps()}>
                <Circle />
                <Image src={`http://familyuniformapp.medicalworld.com.mm/ecommerce/product_lines/${item.photo_path}`} />
                <Info>
                    <Icon><ShoppingCartOutlined /></Icon>
                    <Icon><Link to={`/product/${item.id}`}><SearchOutlined /></Link></Icon>
                    <Icon><FavoriteBorderOutlined /></Icon>
                </Info>
                <ProductLineTitle >{item.name}</ProductLineTitle>
                <Button>SHOP NOW</Button>
            </Container>

            <ImgContainer {...getCollapseProps()}>
                <SmallImgContainer className="content">

                    {items.slice(0, 6).map((it) => (
                        <SmallImage src={`http://familyuniformapp.medicalworld.com.mm/ecommerce/items/${it.photo_path}`} key={it.id} />
                    ))}

                    {/* <SmallImage src={`http://familyuniformapp.medicalworld.com.mm/ecommerce/product_lines/gown.png`} />
                    <SmallImage src={`http://familyuniformapp.medicalworld.com.mm/ecommerce/product_lines/doctor_coat.png`} />
                    <SmallImage src={`http://familyuniformapp.medicalworld.com.mm/ecommerce/product_lines/gown.png`} />
                    <SmallImage src={`http://familyuniformapp.medicalworld.com.mm/ecommerce/product_lines/medical_scrub.png`} />
                    <SmallImage src={`http://familyuniformapp.medicalworld.com.mm/ecommerce/product_lines/nurse_uniform.png`} />
                    <SmallImage src={`http://familyuniformapp.medicalworld.com.mm/ecommerce/product_lines/pants.png`} /> */}


                </SmallImgContainer>

                {/* <h1>{items}</h1> */}
            </ImgContainer>
        </div>

    )
}

export default Product