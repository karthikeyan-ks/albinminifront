import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('InfoTech', 'backend developer', '12-02-2023', 24, 4.0),
  createData('Apple', 'full stack developer', 9.0, 37, 4.3),
  createData('Microsoft', 'data Scientist', 16.0, 24, 6.0),
  createData('LinkedIn', 'backend developer', 3.7, 67, 4.3),
  createData('Amazon', 'fontend developer', 16.0, 49, 3.9),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="large" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: 'bold' }}>Company Name</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}  align="left">job type</TableCell>
            <TableCell style={{ fontWeight: 'bold' }} align="left">applied on</TableCell>
            <TableCell style={{ fontWeight: 'bold' }} align="left">Category&nbsp;(g)</TableCell>
            <TableCell style={{ fontWeight: 'bold' }} align="left">Salary&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 },justifyContent:"center" }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.calories}</TableCell>
              <TableCell align="left">{row.fat}</TableCell>
              <TableCell align="left">{row.carbs}</TableCell>
              <TableCell align="left">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}