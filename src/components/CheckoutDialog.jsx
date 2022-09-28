import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import styled from 'styled-components';
import { useSelector , useDispatch } from 'react-redux';
import {useState} from 'react'
import axios from 'axios'
import {resetProduct} from "../redux/cartRedux"



const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`
const Filter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
`

const FilterTitle = styled.span`
    font-size: 15px;
    font-weight: 200;
    margin-bottom: 3px;
`


const FilterSelect = styled.select`
    
    padding: 5px;
`

const FilterOption = styled.option``

export default function CheckoutDialog(props) {
  
  // const name = useSelector((state) => state.name);
  // const phone = useSelector((state) => state.phone);
  // const address = useSelector((state) => state.address);
  // const township = useSelector((state) => state.township);
  // const charges = useSelector((state) => state.charges);
  const [name,setName] = useState('');
  const [phone,setPhone] = useState('');
  const [address,setAddress] = useState('');
  const [township,setTownship] = useState('');
  const [charges,setCharges] = useState('');
  const [paymenttype,setPaymentType] = useState('');
  const [paymentchannel,setPaymentChannel] = useState('');
  const [remark,setRemark] = useState('');
  const cart = useSelector(state=>state.cart);
  const dispatch = useDispatch();
  console.log(cart);

  console.log(name,phone,address,township,charges);
  const onNameChanged = (e) => setName(e.target.value);
  const onAddressChanged = (e) => setAddress(e.target.value);
  const onPhoneChanged = (e) => setPhone(e.target.value);
  const onTownshipChanged = (e) => setTownship(e.target.value);
  const onChargesChanged = (e) => setCharges(e.target.value);
  const onPaymentTypeChanged = (e) => setPaymentType(e.target.value);
  const onPaymentChannelChanged = (e) => setPaymentChannel(e.target.value);
  const onRemarkChanged = (e) => setRemark(e.target.value);
  const orderSave = () =>{ 
    // alert(paymentchannel);
    const res = axios.post('http://medicalworldinvpos.kwintechnologykw09.com/api/ecommerce_order_store',{
            name: name,
            phone: phone,
            address: address,
            township: township,
            charges : charges,
            paymenttype : paymenttype,
            paymentchannel : paymentchannel,
            remark : remark,
            products: cart.products,
            quantity: cart.quantity,
            amount: cart.total,
        }).then(function(response){
            alert('success store');
        }).catch(function(error){
            alert('fail store');
        })
        dispatch(resetProduct());
  }

  return (
    <div>
      
      <Dialog open={props.open} onClose={props.close}>
        <DialogTitle><b>Delivery and Payment Information</b></DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter information to check out!
          </DialogContentText>
          <Form>
            <Input type="text" id="name" name="name" placeholder="name" value={name} onChange={onNameChanged}/>
            <Input type="text" id="phone" name="phone" placeholder="phone" value={phone} onChange={onPhoneChanged}/>
            <Input type="text" id="address" name="address" placeholder="address" value={address} onChange={onAddressChanged}/> 
            <Input type="text" id="township" name="township" placeholder="township" value={township} onChange={onTownshipChanged}/>   
            <Input type="text" id="charges" name="charges" placeholder="charges" value={charges} onChange={onChargesChanged}/>     
            <Filter>
                <FilterTitle>Payment Type</FilterTitle>
                <FilterSelect onChange={onPaymentTypeChanged}>
                    <FilterOption>Select Payment Type</FilterOption>
                    <FilterOption value={1}>COD</FilterOption>
                    <FilterOption value={2}>Prepaid Partial</FilterOption>
                    <FilterOption value={3}>Prepaid Full</FilterOption>
                </FilterSelect>
            </Filter>
            <Filter>
                <FilterTitle>Payment Channel</FilterTitle>
                <FilterSelect onChange={onPaymentChannelChanged}>
                    <FilterOption>Select Payment Channel</FilterOption>
                    <FilterOption value={1}>Cash</FilterOption>
                    <FilterOption value={2}>Mobile Banking</FilterOption>
                    <FilterOption value={3}>Internet Banking</FilterOption>
                </FilterSelect>
            </Filter>
            <Input type="text" id="remark" name="remark" placeholder="remark" onChange={onRemarkChanged}/> 
        </Form>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.close}>Cancel</Button>
          <Button onClick={orderSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
