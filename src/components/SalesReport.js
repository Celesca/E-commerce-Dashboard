import { useState , useEffect } from "react";
import './SalesReport.css';
import Transaction from "./Transaction";
import * as React from 'react';
import { Container, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { SalesData } from "../data/SalesData";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


const SalesReports=()=> {
  // State เอาไว้เก็บ List ของประเทศต่างๆ
  const [allItem , setAllItem] = useState(SalesData.slice())
  const [selecter,setSelecter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [dateSelect, setDateSelect] = useState(null);

  // State เอาไว้เคลียร์ค่า Date
  const [cleared, setCleared] = useState(false);

  useEffect(() => {
    if (cleared) {
      const timeout = setTimeout(() => {
        setCleared(false);
      }, 1500);

      return () => clearTimeout(timeout);
    }
    return () => {};
  }, [cleared]);


  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // เป็นตัวแทน กำหนดในการค้นหาอีกทีนึง (กรองข้อมูล state Country)
//   const [dataFilter] = useState(["name","capital"])

  const handleSelecter = (event) => {
    setSelecter(event.target.value);
  }

  // เริ่มมาให้แสดงผลตามนี้ก่อน
useEffect(() => {
    let filteredData = SalesData.slice(); // Create a copy to avoid mutating original data
  
    if (selecter) {
      filteredData = filteredData.filter((data) => data.type === selecter);
    }
  
    if (searchTerm) {
      filteredData = filteredData.filter((data) => data.product.includes(searchTerm));
    }
    if (dateSelect) {
      // let showDay = `${dateSelect.$D}/${dateSelect.$M}/${dateSelect.$y + 543}`
      const showDay = dateSelect.format('DD/MM/YYYY');
      console.log(showDay)
      filteredData = filteredData.filter((data) => data.date === showDay);
    }

    setAllItem(filteredData);

  }, [searchTerm, selecter, dateSelect]);

const formatNumber=(num)=> {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

    function createData(id, product, type, date, quantity, price) {
        return {
        id,
        product,
        type,
        date,
        quantity,
        price
        };
    }

    const rows = allItem.map((data,index) => {
      return ( createData(index, data.product, 
        data.type , 
        data.date, 
        data.quantity, 
        formatNumber(data.price)))
    })

  return (
      <section className="search-container">
        <h1><span className="header">รายการขายทั้งหมด</span></h1>

<Container sx={{marginLeft: {xs:0 ,lg:-3}, marginBottom: 3}}>
      <TextField
        id="search"
        type="search"
        label="Search"
        value={searchTerm}
        onChange={handleChange}
        sx={{ width: 600 , padding:0 }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />

<FormControl sx={{ m: 1, minWidth: 200 , marginTop: {xs: 3,md:0 } , marginLeft: {xs:0 , md:3}}}>
        <InputLabel id="demo-simple-select-helper-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={selecter}
          label="Age"
          onChange={handleSelecter}
        >
          <MenuItem value="">
            <em>ไม่เลือกหมวดหมู่</em>
          </MenuItem>
          <MenuItem value={"กระเป๋าสตางค์"}>กระเป๋าสตางค์</MenuItem>
          <MenuItem value={"กระเป๋าหิ้ว"}>กระเป๋าหิ้ว</MenuItem>
          <MenuItem value={"เสื้อ"}>เสื้อ</MenuItem>
        </Select>
      </FormControl>

      <LocalizationProvider dateAdapter={AdapterDayjs}         
      sx={{
           maxWidth: 200,
        }}>
          <DatePicker
            label="Date"
            value={dateSelect}
            onChange={(newValue) => setDateSelect(newValue)}
            sx={{ width: 260 , marginTop: {xs:3 , md:0 , lg:0 } , marginLeft: {xs:0 , md:0 , lg:2}}}
            slotProps={{
              field: { clearable: true, onClear: () => setCleared(true) },
            }}/>
    </LocalizationProvider>


    </Container>
        <Transaction rowsData={rows}/>
      </section>
    )
}

export default SalesReports;