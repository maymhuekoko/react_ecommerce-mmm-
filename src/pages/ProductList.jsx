import React, { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../components/Footer'
import ColorNav from '../components/ColorNav'
import Slider from '../components/Slider'
import Products from '../components/Products'
import ItemOne from '../components/ItemOne'
import SearchIcon from '@mui/icons-material/Search';
import { mobile } from "../responsive"
import axios from 'axios'
import { useSelector } from 'react-redux'

const Container = styled.div`
margin: 20px;
`
const ContainerOne = styled.div`
flex:1;
flex-direction:row;
padding:20px;
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
  ${mobile({ margin: "0px 20px", flexDirection: "column" })}
`
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`

const FilterTextOne = styled.h4`
  margin-left: 70px;
  padding-top: 20px;
  ${mobile({ marginRight: "0px" })}
`


const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`
const Input = styled.input`
  font-size: 18px;
  padding: 9px;
  margin-left: 45px;
  width: 300px;
  background: #add8e6;
  border: 1px solid #add8e6;
  outline: none;
  border-radius: 5px;
  opacity: 1;
  float: right;
  transition: all .75s ease-in;
  ::placeholder {
    color: #FFFFFF;
  }
  ${mobile({ margin: "10px 0px" })}
`

const Div = styled.div`
    margin-top: 26px;
    margin-left: 10px;
    width: 220px;
    height: 500px;
    background-color: transparent;
    position: sticky;
    top: 100px;
`
const DivOne = styled.div`
    width: 170px;
    margin-left: 50px;
    margin-top: 7px;
    background-color: #32549b;
    padding: 7px 5px 7px 8px;
    color: white;
    border-radius: 5px;
    &:hover {
        background-color: #2258ce;
    }
`
const Btn = styled.button`
    border-radius: 5px;
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
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const [search,setSearch] = useState('');
  const [click,setClick] = useState(false);
  const [items, setItems] = useState([]);
  const url= useSelector(state => state.user.url);

  const family = () => {
    setClick(false);
  }
  
  const SearchItems = () => {
    setClick(true);
    axios.post(url+'/api/searchitem',{
      item: search      
    }).then(res=>
    {
    alert('success');
    setItems(res.data);
   }
).catch(err =>{
   console.log('error');
});
  }

  const handleFilters = (e) => {
    setFilters(() => e.target.value)
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  console.log(filters);
  console.log(sort);

  return (
    <div>
      <Container>

        <ColorNav />
        {/* <Slider/> */}

        <Title>Product Line
          <Btn onClick={SearchItems}><A><SearchIcon /></A></Btn>
          <Input placeholder='Search Items.........' onChange={(e)=>setSearch(e.target.value)}></Input>
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
            </Select>

          </Filter>


          <Filter>
            <FilterText>Sort Porducts: </FilterText>
            <Select onChange={e => setSort(e.target.value)}>
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
                <Link className='text-decoration-none text-white' to='/products/1/family%20hospital' onClick={family}>Family Hospital</Link><br></br>
              </DivOne>
              <DivOne>
                <Link className='text-decoration-none text-white' to='/products/2/branded' onClick={family}>Branded</Link><br></br>
              </DivOne>
              <DivOne>
                <Link className='text-decoration-none text-white' to='/products/3/ecofamily' onClick={family}>Eco Family</Link><br></br>
              </DivOne>
              <DivOne>
                <Link className='text-decoration-none text-white' to='/' onClick={family}>Oxypas</Link><br></br>
              </DivOne>
              <DivOne>
                <Link className='text-decoration-none text-white' to='/' onClick={family}>Unionmicroclean</Link><br></br>
              </DivOne>
              <DivOne>
                <Link className='text-decoration-none text-white' to='/' onClick={family}>Littman</Link><br></br>
              </DivOne>
              <DivOne>
                <Link className='text-decoration-none text-white' to='/' onClick={family}>Protech Masks</Link><br></br>
              </DivOne>
              <DivOne>
                <Link className='text-decoration-none text-white' to='/' onClick={family}>Polo Club</Link><br></br>
              </DivOne>
              <DivOne>
                <Link className='text-decoration-none text-white' to='/' onClick={family}>Factory Textile</Link><br></br>
              </DivOne>
              <DivOne>
                <Link className='text-decoration-none text-white' to='/' onClick={family}>Factory Material</Link><br></br>
              </DivOne>

            </Div>
          </div>
          <div className='col-md-10'>
            {
              click == true ? <ContainerOne>
              {items.map(item => (
                <ItemOne item={item} key={item.id} />
              ))}
            </ContainerOne> :
              <Products cat={cat} filters={filters} sort={sort} />
            }
            
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  )
}

export default ProductList