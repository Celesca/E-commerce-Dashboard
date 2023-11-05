import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(id , product, category, quantity, total) {
  return { id, product, category, quantity, total };
}

const rows = [
  createData(1, 'กระเป๋าถือ/สะพายเฉียง Guy Laroche สีชมพู' , 'กระเป๋าหิ้ว' , 23 , 35000),
  createData(2, 'กระเป๋าสตางค์ผู้ชาย Guy Laroche สีกรมท่า' , 'กระเป๋าสตางค์' , 19 , 21300),
  createData(3, 'กระเป๋าสตางค์ใบยาวซิปรอบ ELLE สีแดง หนังเงา' , 'กระเป๋าสตางค์' , 12 , 17000 ),
  createData(4, 'เสื้อเชิ้ตแขนยาว era-won สีกรม', 'เสื้อ' , 15, 5700 ),
  createData(5, 'เสื้อเชิ้ตแขนยาว LACOSTE สีขาว' , "เสื้อ" , 12 , 4500),
];

export default function TopFive() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Rank</TableCell>
            <TableCell align="center">Product Name</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Total Sales&nbsp;(฿)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0} }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.product}</TableCell>
              <TableCell align="right">{row.category}</TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right">{row.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}