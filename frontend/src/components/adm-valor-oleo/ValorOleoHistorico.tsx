import * as React from 'react';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useMediaQuery } from '@mui/material';


interface HistoricoData {
  data: string;
  tipo: number;
  quantidade: string;
  $: string;
}



const theme = createTheme({
  palette: {
    primary: {
      main: '#136935',
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
});

  export default function ValorOleoHistorico() {
  return (

    <ThemeProvider theme={theme}>
      <div style={{
        position: 'fixed',
        top: '44%',
        border: '1px solid #000',
        borderColor: 'grey',
        borderRadius: '10px',
        width: '65%',
        height: '46%',
        zIndex: 0,
        marginLeft: '0%'

      }}
      ></div>
      <div
        style={{
          position: 'fixed',
          top: '45%',
          marginLeft: '1%',
          width: '63%',
          height: '50%'
        }}
      >
       
     <TableContainer sx={{height:'87%'}}>
          <Table sx={{ minWidth: 650, height:'100px' }} size="small" aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Data</TableCell>
                <TableCell align="center">Tipo</TableCell>
                <TableCell align="center">Quantidade</TableCell>
                <TableCell align="center">$</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                  <TableCell align="center">
                  </TableCell>
                  <TableCell align="center">
                  </TableCell>
                  <TableCell align="center">
                  </TableCell>
                  <TableCell align="center">
                  </TableCell>
                </TableRow>
            </TableBody>
          </Table>
          </TableContainer>
          
      </div>
    </ThemeProvider>
  );
}



