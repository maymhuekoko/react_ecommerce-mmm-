
import React  from 'react';
import styled from 'styled-components';
import {mobile} from "../responsive";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import ColorNav from './ColorNav';
import Footer from './Footer';

const Div = styled.div`
margin-top:70px;
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
const Title = styled.h1`
    font-size: 35px;
    margin-bottom: 30px;
    text-align: center;
`
const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    text-align: center;
    ${mobile({textAlign: "center"})}
`
const Table = styled.table`
    width: 100%;
    height: auto;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 20px;
    border: 1px solid rgba(2,127,157,1);
    ${mobile({width: "90%"})}
`
const Tr = styled.tr`
    width: 100%;
    height: 80px;
    margin-top: 10px;
    margin-bottom: 10px;
    ${mobile({width: "90%"})}
`
const Th = styled.th`
    background-color: rgba(2,127,157,1);
    border: 1px solid rgba(2,127,157,1);
    color: #ffffff;
    padding: 20px;
    ${mobile({width: "90%"})}
`
const Td = styled.td`
    text-align: center;
    ${mobile({width: "90%"})}
`
const TableButton = styled.button`
    padding: 3px;
    background-color: black;
    color: white;
    font-size: 17px;
    font-weight: 600;
    border-radius: 3px;
    text-align: center;
`
const Span = styled.span`
    background-color: rgba(2,127,157,1);
    color: white;
    font-size: 15px;
    font-weight: 600;
    padding: 4px;
    border-radius: 10px;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.3);
`

const OrderList = () => {

    const [orders, setOrders] = useState([]);

    const username = useSelector(state=>state.user);

    useEffect(() =>{
        fetchOrderList();
    },[]);

    const fetchOrderList = () => {
        axios.get('https://familyuniformapp.medicalworld.com.mm/api/ecommerce_order_index')
        .then(res=>{
            console.log(res.data);

            const filteredData = res.data.filter((data) => {
                return data.customer_id == username.id
            })
            setOrders(filteredData);
        })
    }

    return (
        
        <div>
            <div>
                <ColorNav/>
            </div>
        <Div>
            <Wrapper>
            <Title>Your Order List</Title>
            <Table>
                <Tr>
                    <Th>No</Th>
                    <Th>Order No</Th>
                    <Th>Customer Name</Th>
                    <Th>Order Address</Th>
                    <Th>Order Date</Th>
                    <Th>Order Status</Th>
                    <Th>Total Quantity</Th>
                    <Th>Total Amount</Th>
                    <Th>Detail</Th>
                </Tr>
                {
                    orders.map((order, index) => (
                        <Tr key={order.id}>
                            <Td>{order.id}</Td>
                            <Td>{order.order_code}</Td>
                            <Td>{order.customer_name}</Td>
                            <Td>{order.deliver_address}</Td>
                            <Td>{order.order_date}</Td>
                            <Td><Span>{order.order_status}</Span></Td>
                            <Td>{order.total_quantity}</Td>
                            <Td>{order.total_amount}</Td>
                            <Td>
                            <Link to={{ pathname:'/order_detail/'+order.id }}>
                                <TableButton>Order Detail</TableButton>
                            </Link>    
                            </Td>
                        </Tr>
                    ))
                }
            </Table> 
        </Wrapper>
        </Div>
        <div>
            <Footer/>
        </div>
        </div>

    );

}

export default OrderList;