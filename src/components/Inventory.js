import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import InventoryTable from './InventoryTable';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import './Inventory.css'
import { InputLabel } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const Inventory=()=> {

    const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

 
  return (
      <section className="inventory-container">
        <div className="header-container">
            <h1><span className="header">คลังสินค้า</span></h1>
            <Button onClick={handleOpen} sx={{marginLeft: 4, 
              backgroundColor: "rgb(144, 229, 16)", 
              color:"black", 
              fontSize:16, }}
              variant="contained" 
              color="success"><span className="plus-merchandise">+ เพิ่มสินค้า</span></Button>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                    <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                    display: "flex",
                    flexDirection: "column",
                    
                }}
                noValidate
                autoComplete="off"
                >
                    <InputLabel sx={{textAlign: "start"}}>ชื่อสินค้า</InputLabel>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                    <InputLabel>จำนวนสินค้า</InputLabel>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                    <Button onClick={handleClose} sx={{alignSelf:"center", marginTop: 3,  backgroundColor: "rgb(144, 229, 16)"}} variant="contained" color="success">ยืนยัน</Button>
            </Box>
            </Box>
        </Modal>
        </div>

        <InventoryTable />
      </section>
    )
}

export default Inventory;