import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../components/Footer'
import ColorNav from '../components/ColorNav'
import Slider from '../components/Slider'
import Products from '../components/Products'
import {mobile} from "../responsive"

const Container = styled.div``
const Title = styled.h1`
  margin: 20px;
  margin-top: 80px;
`
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const Filter = styled.div`
  margin: 20px;
  display: flex;
  ${mobile({margin:"0px 20px", flexDirection: "column"})}
`
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({marginRight:"0px"})}
`

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({margin:"10px 0px"})}
`
const Option = styled.option``

const ProductList = () => {

  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  // const cat_name = location.pathname.split("/")[3];
  const [filters,setFilters] = useState({});
  const [sort,setSort] = useState("newest");

  const handleFilters = (e) => {
    setFilters(()=>e.target.value)
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name] : value,
    });
  };

  console.log(filters);
  console.log(sort);

  return (
    <Container>

      <ColorNav/>
      {/* <Slider/> */}

      <Title>Product Line</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products: </FilterText>

          <Select name="color" onChange={handleFilters}>
              <Option disabled>Type</Option>
              <Option>Scrubs</Option>
              <Option>Pants</Option>
              {/* <Option>Pant 2</Option> */}
          </Select>

          <Select name="part" onChange={handleFilters}>
              <Option hidden>Selete</Option>
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
              {/* <Option  value="pants">Pants</Option> */}
          </Select>

          {/* <Select name="color" onChange={handleFilters}>
              <Option disabled>Pant</Option>
              <Option>Normal</Option>
              <Option>black</Option>
              <Option>red</Option>
              <Option>blue</Option>
              <Option>yellow</Option>
              <Option>gray</Option>

          </Select>

          <Select name="size" onChange={handleFilters}>
              <Option disabled>Size</Option>
              <Option>XS</Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
          </Select> */}
        </Filter>
        
        <Filter>
          <FilterText>Sort Porducts: </FilterText>
          <Select onChange={e=>setSort(e.target.value)}>
              <Option value="newest">Newest</Option>
              <Option value="asc">Price (asc)</Option>
              <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>

      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort}/>
      <Footer/>
    </Container>
  )
}

export default ProductList