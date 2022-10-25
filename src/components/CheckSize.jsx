import React,{useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogTitle from '@mui/material/DialogTitle';
import styled from 'styled-components';

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

const CheckSize = (props) => {

  return (
    <div>
        <Dialog open={props.open} onClose={props.close}>
        <DialogTitle  className='text-center'><Title>Check Size</Title></DialogTitle>
        <DialogContent>
          <Img src={`http://medicalworldinvpos.kwintechnologykw09.com/ecommerce/sizechart/dress1_sizechart.jpg`} />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.close} style={{backgroundColor: '#79a6fa', color: 'white'}}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default CheckSize;