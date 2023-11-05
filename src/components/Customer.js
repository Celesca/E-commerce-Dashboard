import './SalesReport.css';
import * as React from 'react';
import { Container, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CustomerTable from './CustomerTable';


const Customer=()=> {

  return (
      <section className="search-container">
        <h1><span className="header">ลูกค้าทั้งหมด</span></h1>

        <Container sx={{marginLeft: {xs:0 ,lg:-3}, marginBottom: 3}}>
            <TextField
            id="search"
            type="search"
            label="Search"
            sx={{ width: 600 , padding:0 }}
            InputProps={{
            endAdornment: (
                <InputAdornment position="end">
                <SearchIcon />
                </InputAdornment>
            ),
            }}
        />

        </Container>
        <CustomerTable/>
      </section>
    )
}

export default Customer;