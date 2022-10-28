import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import React, { useState,useEffect }  from 'react'
import styled from 'styled-components'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {mobile} from "../responsive"
import {LogoutProcess} from "../redux/userRedux"
import {  useDispatch,useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

const Container = styled.div`
    height: ;
    transition: 1s ease;
    background: #fff;
    text-shadow: -1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5);
    background-color: transparent;
    ${mobile({height: "50px"})}
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 0.7s ease;
    background: rgb(255,255,255);
    background: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.18953518907563027) 100%);

    ${mobile({padding: "10px 0px"})}
`
const WrapperOne = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #32549b;
    ${mobile({padding: "10px 0px"})}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    margin-bottom: 40px;
`
const LeftOne = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    margin-left :30px;
    ${mobile({display: "none"})}
`

const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const Input = styled.input`
    border: none;
    ${mobile({width: "50px"})}
`

const Center = styled.div`
    flex: 1;
    display: inline;
    text-align: center;
`

const Logo = styled.h1`
    font-weight: bold;
    font-size:30px;
    color : white;
    display: block;
    text-shadow: -1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5), 2px 2px 2px rgba(206,89,55,0);
    ${mobile({fontSize: "24px"})}
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 40px;
    margin-left : 20px;
    ${mobile({flex:2,justifyContent: "center"})}
`
const RightOne = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 20px;
    ${mobile({flex:2,justifyContent: "center"})}
`

const MenuItem = styled.div`
    font-size: 16px;
    cursor: pointer;
    display: inline;
    margin-left : 20px;
    ${mobile({fontSize: "12px"})}
`

const NavbarDropdown = styled.div`
    position: relative;
    display: inline-block;

    &:hover {
      display: block;
      >div {
          display: block;
      }
    }
  `;

const NavbarDropdownContent = styled.div`
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0, 2);
    padding: 12px 16px;
    z-index: 1;
`;


const ColorNav = () => {

    const username = useSelector(state=>state.user.name);
    const [isUser, setIsUser] = useState(false);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(username != ''){
           setIsUser(true);
        }
    },[])
    
    const logout = () =>{
        dispatch(LogoutProcess());
        setIsUser(false);
    }

    const link = {
       textDecoration: 'none',
       color : 'rgba(2,127,157,1)',
    }
    const link1 = {
        textDecoration: 'none',
        color : 'white',
    }
     

  return (
    <Container className="fixed-top">
            <WrapperOne>
            <LeftOne>
                <Language style={link1}><LocationOnIcon/>Yangon</Language>
                
                <Language style={link1}><PhoneInTalkIcon/>+959778654565</Language>

                <NavbarDropdown>
                <Language style={link1}>English</Language>
                <NavbarDropdownContent>
                <Link to="/" style={link1}>Myanmar</Link>
                </NavbarDropdownContent>
                </NavbarDropdown>
                {/* <SearchContainer>
                    <Input placeholder="search"/>
                    <SearchIcon style={{color:"gray",fonSize: 10}}/>
                </SearchContainer> */}
            </LeftOne>
            <Center>
                <Link to="/" style={link1}>
                <MenuItem>Home</MenuItem>
                </Link>
                <Link to="/about-us" style={link1}>
                <MenuItem>AboutUs</MenuItem>
                </Link>
                {isUser ? (
                <Link to="/order_list" style={link}>
                <MenuItem style={{color: '#ffffff'}}>Order List</MenuItem>
                </Link>
                ):('')}
                {isUser ? (' '):(
                <Link to="/register" style={link1}>
                <MenuItem>Register</MenuItem>
                </Link>)}
                {isUser ? (' '):(
                <Link to="/login" style={link1}>
                <MenuItem>SignIn</MenuItem>
                </Link> )}
                <Link to="/contact-us" style={link1}>
                <MenuItem>ContactUs</MenuItem>
                </Link>
                
            </Center>

            <RightOne>
            {isUser ? (<Link to="/" style={link1} onClick={logout}>
                <MenuItem>LogOut</MenuItem>
                </Link>):(
                <Link to="/login" style={link1}>
                <MenuItem>SignIn</MenuItem>
                </Link> )}
                <Link to="/cart" style={link1}>
                <MenuItem> 
                <div className="bg-dark badge badge-pill badge-red">1</div>  
                <ShoppingCartIcon/>Cart
                </MenuItem>
                </Link>
                <Link to="/serach">
                <MenuItem>   
               <SearchIcon style={link1}/>
                </MenuItem>
                </Link>
            </RightOne>
        </WrapperOne>
    </Container>
  )
}

export default ColorNav;