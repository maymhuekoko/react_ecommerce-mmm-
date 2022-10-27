import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { resetProduct } from "../redux/cartRedux"
import { blue } from '@mui/material/colors';
import QRCode from "qrcode.react";



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
    min-width: 500px;
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
// hello world

const FilterSelect = styled.select`
    
    padding: 5px;
`

const FilterOption = styled.option``

const QRBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
`


export default function BankInfoDialog(props) {

  return (
    <div>

      <Dialog open={props.open} onClose={props.close} id="">
        <DialogTitle><b>User Bank Information</b></DialogTitle>
        <DialogContent>
          <DialogContentText>
            Bank Info
          </DialogContentText>
            <DialogTitle>Bank Account Number - 28394829</DialogTitle>
            <DialogTitle>Bank Account Name - K Win</DialogTitle>
            <DialogTitle>Owner - John Doe</DialogTitle>
            <QRBox>
              <p>This QR Code is Dynamic </p>
              <QRCode value="https://www.google.com/" style={{width: '250px', height: '250px'}} />
            </QRBox>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.close}>OK</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
// phyo
//maymyat