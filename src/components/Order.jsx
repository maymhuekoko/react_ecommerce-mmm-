import React, { useState } from 'react'
import ColorNav from './ColorNav';
import Footer from './Footer';
import styled from 'styled-components';
import {mobile} from "../responsive";
import { Add,Remove, SettingsEthernet } from '@mui/icons-material'
import axios from 'axios'
import { useLocation ,useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addOrder,removeOrder,resetOrder } from "../redux/designRedux"

const Div = styled.div`
margin-top: 30px;
 width : 80%;
 height : auto;
`
const Title = styled.h4`
margin-top: 20px;
text-align : center;
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
    font-size : 18px;
`
const Text = styled.span`
    font-size : 18px;
    text-align : center;
    margin-top: 20px;
  
    
`
const Input = styled.input`
`
const A = styled.a`
`

const Button = styled.button`
    padding:8px;
    background-color: teal;
    border : none;
    border-radius : 15px;
    cursor: pointer;
    float: right;
    color: white;   
`
const Btn = styled.button`
padding:4px;
background-color: #32549b;
border : none;
border-radius: 20px;
color: white; 
`
const Delete = styled.button`
background-color: #32549b;
border : none;
border-radius: 20px;
width: 70px;
height: 30px;
margin-top: 3px;
color: white; 
`
const Cancel = styled.button`
background-color: red;
border : none;
border-radius: 20px;
width: 70px;
height: 30px;
margin-top: 3px;
color: white; 
`
const Save = styled.button`
background-color: #32549b;
border : none;
border-radius: 10px;
width: 110px;
height: 35px;
margin-top: 3px;
color: white; 
margin-left : 450px;
margin-bottom: 50px;
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
    let [count,setCount] = useState(1);
    const dispatch = useDispatch();
    const pre = useSelector(state=>state.design.orders);
    const username = useSelector(state => state.user);
    const navigate = useNavigate();
    const current = new Date();
    const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;
    
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

    const additem = () =>{
        const spec = document.getElementById('types').value;
        document.getElementById('item_name').append(' '+spec);
    }


    const qtychange = () =>{
       let testname = document.getElementById('item_name').innerHTML;
        let testqty = document.getElementById('qty').value;
        setCount(++count);
        let orderid  = count;
        // alert(testname,testqty);
        dispatch(addOrder({orderid,testname,testqty}));
        document.getElementById('item_name').innerHTML = design_name;
        document.getElementById('qty').value = '';
        document.getElementById('types').innerHTML = '';
        document.getElementById("specs").selectedIndex = "0";
    }
    const remove = (id) => {
    dispatch(removeOrder({id}));
   
}

const savepreorder = () =>{
    const res = axios.post('http://medicalworldinvpos.kwintechnologykw09.com/api/ecommerce_preorder_store', {
        id: username.id,
        name: username.name,
        phone: username.phone,
        address: username.address,
        orders: pre,
      }).then(function (response) {
        alert('success store');
        dispatch(resetOrder());
        navigate('/order_list');
      }).catch(function (error) {
        alert('fail store');
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
                       <Lable>Name</Lable>
                       <Input className='form-control' value={username.name}></Input>
                       </div>
                       <div className='col-md-6'>
                       <Lable>Phone</Lable>
                       <Input className='form-control' value={username.phone}></Input>
                       </div>
                    </div>
                    <div className='row m-3'>
                       <div className='col-md-6 form-group'>
                       <Lable>Address</Lable>
                       <Input className='form-control' value={username.address}></Input>
                       </div>
                       <div className='col-md-6'>
                       <Lable>Order Date</Lable>
                       <Input className='form-control' value={date}/>
                       </div>
                    </div> 
                    {/* <div className='row m-3'>
                       <div className='col-md-6'>
                        
                       </div>
                       <div className='col-md-6'>
                       <Button onClick={moreitem}><Add/>Add</Button>
                       </div>
                    </div> */}
                    {/* <Div> */}
                    <Text>Choose Items that you want!</Text>
                        
                    <table className="table mt-4">
                    <thead>
                        <tr className='text-center'>
                        <th scope="col">Item Name</th>
                        <th scope="col">Specification</th>
                        <th scope="col">Quantity</th>
                        <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody id="addrow">
     
                <tr className='text-center' id="defaultrow">
                 <td id='item_name'>{design_name}</td>
                 <td>
                 <Select onChange={specification} id={'specs'}>
                     <Option value="0" hidden>Specs</Option>
                     <Option value="1">Fabric</Option>
                     <Option value="2">Color</Option>
                     <Option value="3">Size</Option>
                     <Option value="4">Gender</Option>
                 </Select>&nbsp;&nbsp;&nbsp;
                 <Select id={'types'}>
                     
                 </Select>&nbsp;&nbsp;&nbsp;
                 <Btn onClick={additem}><Add/></Btn>
                 </td>
                 <td><Qty  id={"qty"} placeholder="0"/></td>
                 <td><Delete onClick={qtychange}>Add</Delete></td>
                 <td></td>
                 </tr>
                     
                                 
                    </tbody>
                    </table>
                  
               
                    <Text>Your Preorder Items</Text>
                <div className='mt-4 mb-5' id="preorders">
                    <div className='row mt-2 text-center'>
                        <div className='offset-md-2 col-md-3'>
                            <span>Item Name</span>
                        </div>
                        <div className='col-md-2'>
                            <span>Quantity</span>
                        </div>
                        <div className='col-md-3'>
                            <span>Action</span>
                        </div>
                    </div>
                    {pre.map((p)=>(
                        <div className='row mt-2 text-center'>
                        <div className='offset-md-2 col-md-3'>
                            <span>{p.testname}</span>
                        </div>
                        <div className='col-md-2'>
                            <span>{p.testqty}</span>
                        </div>
                        <div className='col-md-3'>
                            <span><Cancel onClick={() => remove(p.orderid)}>Cancel</Cancel></span>
                        </div>
                    </div>
                    ))}
                </div>

                <Save onClick={savepreorder}>Make Order</Save>
            
                    
                   

                </Div>
            </Wrapper>
        <Footer/>
    </div>
    
  )
}

export default Order

