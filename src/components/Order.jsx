import React from 'react'
import ColorNav from './ColorNav';
import Footer from './Footer';
import styled from 'styled-components';
import {mobile} from "../responsive";
import { Add} from '@mui/icons-material'

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
color: white; 
`
const Select = styled.select`
padding: 4px;
width: 200px;
`
const Option = styled.option`

`

const Order = () => {
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
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='text-center'>
                        <td>Vneck </td>
                        <td>
                        <Select>
                            <Option>Specs</Option>
                            <Option>Fabric</Option>
                            <Option>Color</Option>
                            <Option>Size</Option>
                            <Option>Gender</Option>
                        </Select>&nbsp;&nbsp;&nbsp;
                        <Select>
                            
                        </Select>&nbsp;&nbsp;&nbsp;
                        <Btn><Add/></Btn>
                        </td>
                        <td>@mdo</td>
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