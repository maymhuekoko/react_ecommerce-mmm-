import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'
import axios from 'axios'
import { DataObjectTwoTone } from '@mui/icons-material'

const Container = styled.div`
display: flex;
    padding:20px;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products = ({cat,filters,sort}) => {
  console.log(cat,filters,sort);

  const [products,setProducts] =  useState([]);
  const [filteredProducts,setFilteredProducts] = useState([]);

  useEffect(()=>{
    const getProducts = async () =>{
      try{
        const res = await axios.get(cat ? `http://familyuniformapp.medicalworld.com.mm/api/subcategory_api/${cat}` : "http://localhost:5000/api/subcategory_api");
        // console.log(res.data);
        setProducts(res.data);
        
      }catch(err){}
    };
    getProducts();
  },[cat]);

  // useEffect(()=>{
  //   cat && setFilteredProducts(
  //     products.filter((item)=> Object.entries(filters).every(([key,value])=>
  //     item[key].includes(value)))
  //   )
  // },[products,cat,filters]);

  //useEffect(()=>{
  //   if(sort === "newest"){
  //     setFilteredProducts((prev) => 
  //       [...prev].sort((a,b) => a.createdAt - b.createdAt)
  //     );
  //   }else if(sort === "asc"){
  //     setFilteredProducts((prev)=>
  //       [...prev].sort((a,b) => a.price - b.price)
  //     );
  //   }else{
  //     setFilteredProducts((prev)=>
  //       [...prev].sort((a,b) => b.price - a.price)
  //     );
  //   }
  // },[sort])

  return (
    <Container>
        {/* {cat ? filteredProducts.map((item)=>(
            <Product item={item} key={item.id}/>
        )) : products.slice(0,4).map((item)=>(
          <Product item={item} key={item.id}/>
      ))} */}
      {
      products.slice(0,6).map((item)=> (
        <Product filter={filters.part} item={item} key={item.id}/>
      ))
      }
    </Container>
  )
}

export default Products