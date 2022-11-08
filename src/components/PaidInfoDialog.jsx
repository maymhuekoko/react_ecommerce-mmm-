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
import { addPhoto } from "../redux/designRedux"




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
  const dispatch = useDispatch(); 
  const [file, setFile] = useState()



   const savefilename = () =>{
    let file = document.getElementById('myFile').files[0];

    // MK

    const reader = new FileReader();
        reader.onload = function () {
          file = reader.result;
        }
        console.log(file);
        reader.readAsDataURL(file);
        console.log(file);
    // ====
    dispatch(addPhoto(file));
    document.getElementById('hidedialog').style.visibility = "hidden";
   }
  return (
    <div>

      <Dialog open={props.open} onClose={props.close} id="hidedialog">
        <DialogTitle><b>User Paid Information</b></DialogTitle>
        <DialogContent>
          <DialogContentText>
            Paid Info
          </DialogContentText>
            <Form>
              <Input type="file" id='myFile' />
              <Input type="text" id="phone" name="" placeholder="Remark" />
            </Form>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.close}>Cancle</Button>
          <Button onClick={savefilename}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
// phyo
//maymyat