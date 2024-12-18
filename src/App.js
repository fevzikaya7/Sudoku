import { Divider, Grid, IconButton, Paper, Stack, TextField, Typography } from '@mui/material';
import './App.css';
import React, { useEffect } from 'react';

function App() {
  const [array, setArray] = React.useState(Array.from({ length: 9 }, () => new Array(9).fill(0)))

  return (
    <Stack direction="column" color="black" alignItems="center" spacing={3}>
      <Typography sx={{fontSize: 50}}>SUDOKU</Typography>
      <Stack direction="column" spacing={0.5}>
        {
          array.map((row, rowIndex) => 
            (
              <Stack key={rowIndex} direction="row" spacing={0.5}>
                {
                  row.map((elm, columnIndex) => 
                    (
                        <Paper key={columnIndex} elevation={7} sx={{width: 40, height: 40, display: "flex", justifyContent: 'center', alignItems: 'center'}}>
                          <Typography>{array[rowIndex][columnIndex]}</Typography>
                        </Paper>
                    ))
                }
                
              </Stack>
            ))
        }
        
      </Stack>
    </Stack>
  );
}

export default App;
