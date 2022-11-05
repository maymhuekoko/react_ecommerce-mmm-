import { Add, Remove } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { useLocation,Link} from 'react-router-dom'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Newsletter from '../components/Newsletter'
import { publicRequest } from '../requestMethod'
import { mobile } from "../responsive"
import { addProduct } from "../redux/cartRedux"
import { } from "../redux/designRedux"
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { prettyDOM } from '@testing-library/react'
import CheckColor from '../components/CheckColor'
import CheckSize from '../components/CheckSize'
import CheckFabric from '../components/CheckFabric'
import sample from '../files/sample.pdf'

const Container = styled.div``
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: "10px", flexDirection: "column" })}
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
    max-width: 90vw;
    display: flex;
    overflow-y: hidden; 
    overflow-x: scroll; 
`

const MainImage = styled.img`
    width: 500px;
    height: auto;
    object-fit: contain;
    
    ${mobile({ height: "50%" })}
`
const SmallImage = styled.img`
    width: 34%;
    height: auto;
    object-fit: cover;
    ${mobile({ height: "50%" })}
`

const SmallImageOne = styled.img`
    min-width: 350px;
    height: 50vh;
    object-fit: cover;
    ${mobile({ height: "50%" })}
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({ padding: "10px" })}
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
    margin-top: 20px;
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
    ${mobile({ width: "100%" })}
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
    ${mobile({ width: "100%" })}
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
        background-color: teal;
        color: white;
    }
`
const DivF = styled.div`
    display: flex;
    flex-direction: row;
    align-item: center;
    justify-content: center;
`
const Check = styled.p`
    background-color: #027f9d;
    margin-left: 5px;
    color: #ffffff;
    border-radius: 3px;
    padding:3px;
    cursor: pointer;
`

const ProductCatelog = styled.p`
    font-size: 20px;
    color: #027f9d;
    margin-top: 30px;
    padding-left: 20px;
    border-radius: 3px;
    cursor: pointer;
`
const DownloadPdf = styled.a`
    font-size: 20px;
    color: #027f9d;
    text-decoration: none;
    margin-top: 30px;
    padding-left: 20px;
    border-radius: 3px;
    cursor: pointer;
`
const SmallImgName = styled.div`
    font-size: 20px;'
    color: #111111;
`


const Product = () => {

    const [checkColor, setCheckColor] = useState(false);
    const [checkSize, setCheckSize] = useState(false);
    const [checkFabric, setCheckFabric] = useState(false);
    const dispatch = useDispatch();

    const cheColor = () => {
        setCheckColor(true);
    }
    const cheSize = () => {
        setCheckSize(true);
        
    }
    const cheFabric = () => {
        setCheckFabric(true);
    }

    const location = useLocation();
    const id = location.pathname.split("/")[2];

    const [item, setItem] = useState([]);
    const [relateditems, setRelatedItems] = useState([]);
    const [units, setUnits] = useState([]);
    const [unitid, setUnitId] = useState(0);
    const [unitname, setUnitName] = useState('');
    const [unitcode, setUnitCode] = useState('');
    const [unitimg, setUnitImg] = useState('default.png');
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState("ar1");
    const [fabric, setFabric] = useState("");
    const [size, setSize] = useState("xxlf");
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);

    const [design, setDesign] = useState('');

    const uniqueColor = [];
    const uniqueSize = [];
    const uniqueFabric = [];

    const colorFunction = (e) => {
        setColor(e.target.value);
        setMainImg(e.target.value)
    }

    const uniqueColors = units.filter(element => {
        const isDuplicate = uniqueColor.includes(element.colour_name);
        if (!isDuplicate) {
            uniqueColor.push(element.colour_name)
            return true;
        }
        return false;
    })

    const uniqueSizes = units.filter(element => {
        const isDuplicate = uniqueSize.includes(element.size_name);
        if (!isDuplicate) {
            uniqueSize.push(element.size_name)
            return true;
        }
        return false;
    })

    const uniqueFabrics = units.filter(element => {
        const isDuplicate = uniqueFabric.includes(element.fabric_name);
        if (!isDuplicate) {
            uniqueFabric.push(element.fabric_name)
            return true;
        }
        return false;
    })
    
    useEffect(() => {
        const getProduct = () => {
            axios.get("http://familyuniformapp.medicalworld.com.mm/api/unitbyid_api/" + id)
                .then((response) => {
                    setItem(response.data.item);
                    setDesign(response.data.item.item_name);
                    setUnits(response.data.counting_units);

                    const obj = {
                        'category_id': response.data.item.category_id,
                        'subcategory_id': response.data.item.sub_category_id
                    }

                    axios.post('http://familyuniformapp.medicalworld.com.mm/api/productlineitems_api', obj)
                        .then(res => {
                            setRelatedItems(res.data);
                            console.log(res.data);
                        }).catch(err => {
                            console.log(err);
                        })

                    }).catch((error) => console.log(error));
                    

        }
        getProduct();
    }, [id]);

    useEffect(() => {
        // customer change specification
        units.map((unit) => {
            if (unit.size_name == size && unit.colour_name == color && unit.fabric_name == fabric) {
                setPrice(unit.order_price);
                setStock(unit.current_quantity);
                setUnitId(unit.id);
                setUnitName(unit.unit_name);
                setUnitCode(unit.unit_code);
                return 1;
            }
        })
    }, [color, fabric, size]);


    const handleQuantity = (type) => {
        if (type === "dec") {
            quantity > 1 && setQuantity(quantity - 1);
        } else {
            setQuantity(quantity + 1);
        }
    }

    const [butBackColor, setBututBackColor] = useState('white');
    const [butColor, setBututColor] = useState('teal');

    const [isClickCart, setisClickCart] = useState(false);

    const handleClick = () => {

        dispatch(addProduct({ unitid, unitname, unitcode, unitimg, color, size, fabric, quantity, price }));

        document.getElementById("success").innerHTML = 'Success';

        setBututBackColor('#027f9d');
        setBututColor('white');

    }

    const change_photo = () => {
        const hel = document.getElementById('hel').src;
        const main = document.getElementById('main').src;
        document.getElementById('hel').src = main;
        document.getElementById('main').src = hel;
    }

    const [mainImg, setMainImg] = useState('ar1');
    console.log(mainImg)

    return (
        <Container>
            <Navbar />
            {/* <Slider/> */}
            {/* <Announcement/> */}
            <Wrapper style={{ marginTop: '100px' }}>
                <ImgContainer>


                    <MainImage src={`http://familyuniformapp.medicalworld.com.mm/ecommerce/items/${item.photo_path}`} id='main' />

                    <SmallImgContainer>
                        <SmallImage src={`http://familyuniformapp.medicalworld.com.mm/ecommerce/items/${item.photo_path?.replace("front", "left")}`} onClick={change_photo} id='' />
                        <SmallImage src={`http://familyuniformapp.medicalworld.com.mm/ecommerce/items/${item.photo_path?.replace("front", "right")}`} onClick={change_photo} id='' />
                        <SmallImage src={`http://familyuniformapp.medicalworld.com.mm/ecommerce/items/${item.photo_path?.replace("front", "body")}`} onClick={change_photo} id='hel' />

                    </SmallImgContainer>

                </ImgContainer>
                <InfoContainer>
                    <Title id="item_name">{item.item_name}</Title>
                    <Desc>Minimum Order Quantity : </Desc>
                    <Desc>Avaiable Color : </Desc>
                    <Desc>Lead Time : </Desc>
                    <Link to={'/order/'+item.item_name}><Button>Make Order</Button></Link>
                    <RowContainer>
                        <PriceLabel>Price: </PriceLabel>
                        <Price>$ {price}</Price>
                        <StockLabel>Stock: </StockLabel>
                        <Stock>{stock} pcs</Stock>
                    </RowContainer>

                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <DivF>
                                <div>
                                    <FilterColor onChange={colorFunction}>
                                        {uniqueColors.map((unit) => (
                                            <FilterColorOption key={unit.id} value={unit.colour_name}>{unit.colour_name}</FilterColorOption>
                                        ))}
                                    </FilterColor>
                                </div>
                                <div>
                                    <Check onClick={cheColor} style={{ display: 'inline-block' }}>Check</Check>
                                </div>
                            </DivF>

                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <DivF>
                                <div>
                                    <FilterSize onChange={(e) => setSize(e.target.value)}>
                                        {uniqueSizes.map((unit) => (
                                            <FilterSizeOption key={unit.id} value={unit.size_name}>
                                                {unit.size_name.replace('xxxxx', '5x').replace('xxxx', '4x').replace('xxx', '3x').replace('xx', '2x')}
                                            </FilterSizeOption>
                                        ))}
                                    </FilterSize>
                                </div>
                                <div>
                                    <Check onClick={cheSize} style={{ display: 'inline-block' }}>Check</Check>
                                </div>
                            </DivF>
                        </Filter>
                        <Filter>
                            <FilterTitle>Fabric</FilterTitle>
                            <DivF>
                                <div>
                                    <FilterFabric onChange={(e) => setFabric(e.target.value)}>
                                        {uniqueFabrics.map((unit) => (
                                            <FilterFabricOption key={unit.id} value={unit.fabric_name}>{unit.fabric_name}</FilterFabricOption>
                                        ))}
                                    </FilterFabric>
                                </div>
                                {/* <div>
                                    <Check onClick={cheFabric} style={{ display: 'inline-block' }}>Check</Check>
                                </div> */}
                            </DivF>
                        </Filter>
                    </FilterContainer>

                    <AddContainer>
                        <AmountContainer>
                            <Remove onClick={() => handleQuantity("dec")} />
                            <Amount>{quantity}</Amount>
                            <Add onClick={() => handleQuantity("inc")} />
                        </AmountContainer>
                        <Button id='succ' onClick={handleClick} style={{ backgroundColor: butBackColor, color: butColor }}>Add to Cart</Button>
                    </AddContainer>

                    <AddContainer>
                        <DownloadPdf href={sample} download>Download Catalog</DownloadPdf>
                    </AddContainer>

                    <AddContainer>
                        <p id="success" className='mx-3'></p>
                    </AddContainer>


                </InfoContainer>
            </Wrapper>
            <Container className='text-center'>
                <Title>Related Items</Title>
            </Container>
            <Wrapper>
                <ImgContainer>
                    <SmallImgContainerOne>

                        {relateditems.map((it) => (
                            <div>
                                <div>
                                    <SmallImageOne src={`http://familyuniformapp.medicalworld.com.mm/ecommerce/items/${it.photo_path}`} key={it.id} />

                                </div>
                                <div style={{textAlign: 'center'}}>
                                    <SmallImgName>{it.item_name}</SmallImgName>
                                </div>
                            </div>
                        ))}


                    </SmallImgContainerOne>
                    

                </ImgContainer>
            </Wrapper>
            {/* <Newsletter /> */}
            <Footer />

            <CheckColor name={color} open={checkColor} close={() => setCheckColor(false)}/>
            <CheckSize gender={size} type={design} open={checkSize} close={() => setCheckSize(false)} />

            {/* <CheckFabric open={checkFabric} close={() => setCheckFabric(false)} /> */}
        </Container>
    )
}

export default Product