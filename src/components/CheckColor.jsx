import React,{useEffect,useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogTitle from '@mui/material/DialogTitle';
import styled from 'styled-components';
import { useSelector} from 'react-redux'

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    color: #555555;
`
const DialogTitle = styled.div`
    padding: 8px 0px;
`
const Img = styled.img`
    width: 500px;
    max-width: 400px;
    height: auto;
`
const Div = styled.div`
     width: 150px;
     height: 150px;
`

const CheckColor = (props) => {
  const design = useSelector(state=>state.design);
  const color = props.name;
  // console.log(color);
    console.log(design.colors[color]);
  const checkColor = design.colors[color];
    
  return (
    <div>
        <Dialog open={props.open} onClose={props.close}>
        <DialogTitle  className='text-center'><Title>Check Color</Title></DialogTitle>

        {/* <DialogContent>
          <Img src={`http://familyuniformapp.medicalworld.com.mm/ecommerce/items/cute1.png`} /> 
        */}

        <DialogContent >
          {/* <Img src={`http://medicalworldinvpos.kwintechnologykw09.com/ecommerce/items/cute1.png`} /> */}
          <Div style={{backgroundColor:checkColor}}>

          </Div>

        </DialogContent>
        <DialogActions>
          <Button onClick={props.close} style={{backgroundColor: '#79a6fa', color: 'white'}}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default CheckColor;