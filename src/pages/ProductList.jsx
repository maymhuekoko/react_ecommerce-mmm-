import React, { useState } from 'react'
import { useLocation,Link } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../components/Footer'
import ColorNav from '../components/ColorNav'
import Slider from '../components/Slider'
import Products from '../components/Products'
import SearchIcon from '@mui/icons-material/Search';
import {mobile} from "../responsive"

const Container = styled.div`
margin: 20px;
`
const Title = styled.h2`
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

const FilterTextOne = styled.h4`
  margin-left: 70px;
  padding-top: 20px;
  ${mobile({marginRight:"0px"})}
`


const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({margin:"10px 0px"})}
`
const Input = styled.input`
  font-size: 18px;
  padding: 9px;
  margin-left: 45px;
  width: 300px;
  background: #add8e6;
  border: none;
  border-radius: 30px;
  opacity: 1;
  float: right;
  transition: all .75s ease-in;
  cursor: pointer;
  ::placeholder {
    color: #FFFFFF;
  }
  ${mobile({margin:"10px 0px"})}
`

const Div = styled.div`
    margin-top: 26px;
    margin-left: 20px;
    width: 220px;
    height: 350px;
    background-color: #eef3fd;
    position: fixed;
`
const DivOne = styled.div`
    margin: 10px;
    width: 150px;
    height: 20px;
    margin-left: 50px;
`
const Btn = styled.button`
border-radius: 50%;
margin-left: 7px;
float: right;
background: #add8e6;
border: none;
`
const A = styled.a`
color: white;
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
    <div>
    <Container>

      <ColorNav/>
      {/* <Slider/> */}

      <Title>Product Line 
      <Btn><A><SearchIcon/></A></Btn>
        <Input placeholder='Search Items.........'></Input>  
      </Title>
      
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
              <Option disabled>Gender</Option>
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
    </Container>
    <Container>
      <div className='row'>
          <div className='col-md-2'>
             <Div>
             <FilterTextOne>Brands</FilterTextOne>
             <DivOne>
             <Link className='link-primary' to='/products/1/family%20hospital'>Family Hospital</Link><br></br>
             </DivOne>
             <DivOne>
             <Link className='link-primary' to='/products/2/branded'>Branded</Link><br></br>
             </DivOne>
             <DivOne>
             <Link className='link-primary' to='/products/3/ecofamily'>Eco Family</Link><br></br>
             </DivOne>
             <DivOne>
             <Link className='link-primary' to='/'>Oxypas</Link><br></br>
             </DivOne>
             <DivOne>
             <Link className='link-primary' to='/'>Unionmicroclean</Link><br></br>
             </DivOne>
             <DivOne>
             <Link className='link-primary' to='/'>Littman</Link><br></br>
             </DivOne>
             <DivOne>
             <Link className='link-primary' to='/'>Protech Masks</Link><br></br>
             </DivOne>
             <DivOne>
             <Link className='link-primary' to='/'>Polo Club</Link><br></br>
             </DivOne>
             <DivOne>
             <Link className='link-primary' to='/'>Factory Textile</Link><br></br>
             </DivOne>
             <DivOne>
             <Link className='link-primary' to='/'>Factory Material</Link><br></br>
             </DivOne>
            
             </Div>
          </div>
          <div className='col-md-10'>
          <Products cat={cat} filters={filters} sort={sort}/>
          </div>
      </div>
    </Container>
    <Footer/>
    </div>
  )
}

export default ProductList