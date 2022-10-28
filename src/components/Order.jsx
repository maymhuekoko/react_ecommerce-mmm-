import React from 'react'
import ColorNav from './ColorNav';
import Footer from './Footer';
import styled from 'styled-components';
import {mobile} from "../responsive";
import { Add,Remove } from '@mui/icons-material'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

const Div = styled.div`
margin-top: 30px;
 width : 80%;
 height : auto;
`
const Title = styled.h3`
margin-top: 20px;
 margin-left: 400px;
`
const Wrapper = styled.div`
    widtr: 100vw;
    height: auto;
    min-height: 100vh;
    padding: 50px;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    ${mobile({padding: '50'})}
`
const Lable = styled.label`
    font-size : 20px;
`
const Input = styled.input`
`
const A = styled.a`
`

const Button = styled.button`
    padding:8px;
    background-color: teal;
    border : none;
    cursor: pointer;
    float: right;
    color: white;   
`
const Btn = styled.button`
padding:4px;
background-color: teal;
border : none;
border-radius: 20px;
color: white; 
`
const Delete = styled.button`
background-color: red;
border : none;
border-radius: 4px;
width: 25px;
height: 20px;
margin-top: 6px;
color: white; 
`
const Select = styled.select`
padding: 4px;
width: 200px;
`
const Option = styled.option`

`
const Qty = styled.input`
width: 70px;
`

const Order = () => {
    const location = useLocation();
    const design_name = location.pathname.split("/")[2];
    const specification = () => {
        const val = document.getElementById('specs').value;
        let html = '';
        axios.get("http://medicalworldinvpos.kwintechnologykw09.com/api/ecommerce_order_type")
                .then((response) => {  
        if(val == 1){
            response.data.fabric.map((el)=>{
                html += `<Option>`+el.fabric_name+`</Option>`;
             })
        }
        if(val == 2){
            response.data.color.map((el)=>{
                html += `<Option>`+el.colour_name+`</Option>`;
             })
        }
        if(val == 3){
            response.data.size.map((el)=>{
                html += `<Option>`+el.size_name+`</Option>`;
             })
        }
        if(val == 4){
            response.data.gender.map((el)=>{
                html += `<Option>`+el.gender_name+`</Option>`;
             })
        }    
        document.getElementById('types').innerHTML = html;
         })
    }
  return (
    <div>
        <ColorNav/>
            <Wrapper>
                <Div className='card'>
                   <Title>Creat New Order</Title>
                    <div className='row m-3'>
                       <div className='col-md-6 form-group'>
                       <Lable>Hello</Lable>
                       <Input className='form-control'></Input>
                       </div>
                       <div className='col-md-6'>
                       <Lable>Hello</Lable>
                       <Input className='form-control'></Input>
                       </div>
                    </div>
                    <div className='row m-3'>
                       <div className='col-md-6 form-group'>
                       <Lable>Hello</Lable>
                       <Input className='form-control'></Input>
                       </div>
                       <div className='col-md-6'>
                       <Lable>Hello</Lable>
                       <Input className='form-control'></Input>
                       </div>
                    </div>
                    <div className='row m-3'>
                       <div className='col-md-6 form-group'>
                       <Lable>Hello</Lable>
                       <Input className='form-control'></Input>
                       </div>
                       <div className='col-md-6'>
                       <Lable>Hello</Lable>
                       <Input className='form-control'></Input>
                       </div>
                    </div>
                    <div className='row m-3'>
                       <div className='col-md-6 form-group'>
                       <Lable>Hello</Lable>
                       <Input className='form-control'></Input>
                       </div>
                       <div className='col-md-6'>
                       <Lable>Hello</Lable>
                       <Input className='form-control'></Input>
                       </div>
                    </div>
                    <div className='row m-3'>
                       <div className='col-md-6'>
                        
                       </div>
                       <div className='col-md-6'>
                       <Button><Add/>Add</Button>
                       </div>
                    </div>
                    {/* <Div> */}
                        
                    <table className="table">
                    <thead>
                        <tr className='text-center'>
                        <th scope="col">Item Name</th>
                        <th scope="col">Specification</th>
                        <th scope="col">Quantity</th>
                        <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='text-center'>
                        <td>{design_name}</td>
                        <td>
                        <Select onChange={specification} id="specs">
                            <Option value="0" hidden>Specs</Option>
                            <Option value="1">Fabric</Option>
                            <Option value="2">Color</Option>
                            <Option value="3">Size</Option>
                            <Option value="4">Gender</Option>
                        </Select>&nbsp;&nbsp;&nbsp;
                        <Select id="types">
                            
                        </Select>&nbsp;&nbsp;&nbsp;
                        <Btn><Add/></Btn>
                        </td>
                        <td><Qty/></td>
                        <td><Delete>X</Delete></td>
                        </tr>
                        
                    </tbody>
                    </table>
                    {/* </Div>  */}
                </Div>
            </Wrapper>
        <Footer/>
    </div>
    
  )
}

export default Order