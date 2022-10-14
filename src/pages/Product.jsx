import { Add,Remove } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Newsletter from '../components/Newsletter'
import { publicRequest } from '../requestMethod'
import {mobile} from "../responsive"
import {addProduct} from "../redux/cartRedux"
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { prettyDOM } from '@testing-library/react'

const Container = styled.div``
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({padding:"10px",flexDirection:"column"})}
`
const ImgContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`
const SmallImgContainer = styled.div`
    display: flex;
    margin-top: 20px;
`

const SmallImgContainerOne = styled.div`
    display: flex;
    overflow-y: hidden; 
    overflow-x: scroll; 
`

const MainImage = styled.img`
    width: 100%;
    height: 60vh;
    object-fit: cover;
    
    ${mobile({height:"50%"})}
`
const SmallImage = styled.img`
    width: 34%;
    height: 25vh;
    object-fit: cover;
    ${mobile({height:"50%"})}
`

const SmallImageOne = styled.img`
    width: 60%;
    height: 50vh;
    object-fit: cover;
    ${mobile({height:"50%"})}
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({padding:"10px"})}
`
const Title = styled.h1`
    font-weight: 200;
`
const Desc = styled.p`
    margin: 20px 0px;
`

const RowContainer = styled.div`
    display: flex;
    align-items: center;
`

const PriceLabel = styled.label`
    font-size: 25px;
    font-weight:bold;
`

const Price = styled.span`
    font-weight: 100;
    font-size: 25px;
    margin-left: 10px;
`

const StockLabel = styled.label`
    font-size: 25px;
    font-weight:bold;
    margin-left:10px;
`

const Stock = styled.span`
    font-weight: 100;
    font-size: 25px;
    margin-left:10px;
`

const ItemTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({width:"100%"})}
`

const Filter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 10px;
`


const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`


const FilterColor = styled.select`
    margin-left: 10px;
    padding: 5px;
`

const FilterColorOption = styled.option``


const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`

const FilterSizeOption = styled.option``

const FilterFabric = styled.select`
    margin-left: 10px;
    padding: 5px;
`

const FilterFabricOption = styled.option``

const AddContainer = styled.div`
width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({width:"100%"})}
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius:10px;
    border: 1px solid teal; 
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`
const Button = styled.button`
    padding:10px;
    border: 1px solid teal;
    background-color: white;
    cursor: pointer;

    &:hover{
        background-color: #f8f4f4;
    }
`

const Product = () => {

  const location = useLocation();
  const id = location.pathname.split("/")[2];
  
//   console.log(id);

  const[item,setItem] = useState({});
  const[relateditems,setRelatedItems] = useState([]);
  const[units,setUnits] = useState([]);
  const[unitid,setUnitId] = useState(0);
  const[unitname,setUnitName] = useState('');
  const[unitcode,setUnitCode] = useState('');
  const[unitimg,setUnitImg] = useState('default.png');
  const[quantity,setQuantity] = useState(1);
  const[color,setColor] = useState("");
  const[fabric,setFabric] = useState("");
  const[size,setSize] = useState("");
  const[price,setPrice] = useState(0);
  const[stock,setStock] = useState(0);
  const dispatch = useDispatch();

    const uniqueColor = [];
    const uniqueSize = [];
    const uniqueFabric = [];

    const uniqueColors = units.filter(element => {
        const isDuplicate = uniqueColor.includes(element.colour_name);
        if(!isDuplicate) {
            uniqueColor.push(element.colour_name)
            return true;
        }
        return false;   
    })

    const uniqueSizes = units.filter(element => {
        const isDuplicate = uniqueSize.includes(element.size_name);
        if(!isDuplicate) {
            uniqueSize.push(element.size_name)
            return true;
        }
        return false;
    })

    const uniqueFabrics = units.filter(element => {
        const isDuplicate = uniqueFabric.includes(element.fabric_name);
        if(!isDuplicate) {
            uniqueFabric.push(element.fabric_name)
            return true;
        }
        return false;
    })
    

  useEffect(()=>{
    const getProduct = ()=> {   
            const res = axios.get("http://medicalworldinvpos.kwintechnologykw09.com/api/unitbyid_api/" +id)
            .then((response) => {setItem(response.data.item);
                
                setUnits(response.data.counting_units);

                const obj = {'category_id':response.data.item.category_id,'subcategory_id':response.data.item.sub_category_id}
                
                axios.post('http://medicalworldinvpos.kwintechnologykw09.com/api/productlineitems_api',obj)
                .then(res=>{    
                    setRelatedItems(res.data);
                    console.log(res.data);
                }).catch(err=>{
                    console.log(err);
                })
            // console.log('hello')
        })
            .catch((error)=>console.log(error));       
    }
    getProduct();
  },[id]);

  useEffect(()=>{
    console.log("user changed specs");
    units.map((unit)=>{
        if(unit.size_name == size && unit.colour_name==color && unit.fabric_name == fabric){
            setPrice(unit.order_price);
            setStock(unit.current_quantity);
            setUnitId(unit.id);
            setUnitName(unit.unit_name);
            setUnitCode(unit.unit_code);
            return 1;
        }
        
    })
  },[color,fabric,size]);
  

  const handleQuantity = (type) => {
    if(type === "dec"){
        quantity > 1 && setQuantity(quantity -1);
    }else{
        setQuantity(quantity + 1);
    }
  }

  const [butText, setButText] = useState('Add Cart');
  const [butBackColor, setBututBackColor] = useState('white');
  const [butColor, setBututColor] = useState('teal');

    const handleClick = () => {
        dispatch(addProduct({unitid,unitname,unitcode,unitimg,color,size,fabric,quantity,price}));
        setButText('Success');
        setBututBackColor('teal');
        setBututColor('white');
    }
  

    const change_photo = () => {
    const hel = document.getElementById('hel').src;
    const main = document.getElementById('main').src;
    document.getElementById('hel').src = main;
    document.getElementById('main').src = hel;
  }

  return (
    <Container>
        <Navbar/>
        <Slider/>
        {/* <Announcement/> */}
        <Wrapper>
            <ImgContainer>
                <MainImage src={`http://medicalworldinvpos.kwintechnologykw09.com/ecommerce/items/cute1.png`} id='main'/>
                <SmallImgContainer>
                    <SmallImage src={`http://medicalworldinvpos.kwintechnologykw09.com/ecommerce/items/cute2.png`} onClick={change_photo} id='hel'/>
                    <SmallImage src={`http://medicalworldinvpos.kwintechnologykw09.com/ecommerce/items/cute3.png`} />
                    <SmallImage src={`http://medicalworldinvpos.kwintechnologykw09.com/ecommerce/items/cute1.png`} />
                </SmallImgContainer>
            </ImgContainer>
            <InfoContainer>
                <Title>{item.item_name}</Title>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quod laudantium exercitationem ea voluptas laboriosam tenetur inventore illo non, consectetur ut eveniet enim, modi nihil expedita tempora odit dignissimos quibusdam.</Desc>
                <RowContainer>
                    <PriceLabel>Price: </PriceLabel>
                <Price>$ {price}</Price>
                <StockLabel>Stock: </StockLabel>
                <Stock>{stock} pcs</Stock>
                </RowContainer>
                
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor onChange={(e)=>setColor(e.target.value)}>
                            {uniqueColors.map((unit)=> (
                               <FilterColorOption key={unit.id} value={unit.colour_name}>{unit.colour_name}</FilterColorOption>
                            ))}
                        </FilterColor>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize onChange={(e)=>setSize(e.target.value)}>
                            {uniqueSizes.map((unit)=> (
                               <FilterSizeOption key={unit.id} value={unit.size_name}>{unit.size_name}</FilterSizeOption>
                            ))}
                            
                        </FilterSize>
                    </Filter>
                    <Filter>
                        <FilterTitle>Fabric</FilterTitle>
                        <FilterFabric onChange={(e)=>setFabric(e.target.value)}>
                            {uniqueFabrics.map((unit)=> (
                               <FilterFabricOption key={unit.id} value={unit.fabric_name}>{unit.fabric_name}</FilterFabricOption>
                            ))}
                            
                        </FilterFabric>
                    </Filter>
                </FilterContainer>
                
                
                <AddContainer>
                    <AmountContainer>
                        <Remove onClick={()=>handleQuantity("dec")}/>
                        <Amount>{quantity}</Amount>
                        <Add onClick={()=>handleQuantity("inc")}/>
                    </AmountContainer>
                    <Button id='succ' onClick={handleClick} style={{backgroundColor: butBackColor, color: butColor}}>{butText}</Button>
                </AddContainer>

                
            </InfoContainer>
        </Wrapper>
        <Container className='text-center'>
        <Title>Related Items</Title>
        </Container>
        <Wrapper>
        <ImgContainer>
            <SmallImgContainerOne>

            {relateditems.map((it)=> (
            <SmallImageOne src={`http://medicalworldinvpos.kwintechnologykw09.com/ecommerce/items/${it.photo_path}`} key={it.id}/>
            ))} 
    
            </SmallImgContainerOne>
           
               {/* <h1>{items}</h1> */}
        </ImgContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product