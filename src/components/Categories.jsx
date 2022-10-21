import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CategoryItem from './CategoryItem';
import {mobile} from "../responsive";
import axios from 'axios';

const MainContainer = styled.div`
display: flex;
flex-direction: column;
`

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${mobile({padding: "0px",flexDirection: "column"})}
`

const SectionTitle = styled.h2`
    font-weight: bold;
    font-size:30px;
    margin-left: 20px;
    ${mobile({fontSize: "14px"})}
`

const Categories = () => {

  const [categories,setCategories] = useState([]);

  useEffect(()=>{
    const getCategories = async () =>{
      try{
        const res = await axios.get("http://medicalworldinvpos.kwintechnologykw09.com/api/category_api");
        console.log(res.data);
        setCategories(res.data);
        
      }catch(err){}
    };
    getCategories();
  });

  return (
    <MainContainer>
      <SectionTitle>Our Brands</SectionTitle>
<Container>
    
        {categories.map(item=>(
            <CategoryItem item={item} key={item.id}/>
        ))}
    </Container>
    </MainContainer>
    
  )
}

export default Categories