import { Divider, Grid, IconButton, Paper, Stack, TextField, Typography } from '@mui/material';
import './App.css';
import React, { useEffect } from 'react';

function App() {
  let board = [
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
  ]
  const [array, setArray] = React.useState(Array.from({ length: 9 }, () => new Array(9).fill(0)))
  const [index, setIndex] = React.useState(null);

  useEffect(() => {
    console.log("array: ", array);
  }, [array])

  useEffect(() => {
    console.log("index: ", index);
  }, [index])

  return (
    <Stack direction="column" color="black" alignItems="center" spacing={3}>
      <Typography sx={{fontSize: 50}}>SUDOKU</Typography>
      <Stack direction="column" spacing={0.3}>
        {
          array.map((row, rowIndex) => 
            (
              <Stack direction="column" key={rowIndex} spacing={0.5}>
                <Stack direction="row" spacing={0.3}>
                  {
                    row.map((elm, columnIndex) => 
                      (
                          <Stack direction="row" key={columnIndex} spacing={0.3}>
                            <Paper elevation={7} sx={{width: 40, height: 40, display: "flex", justifyContent: 'center', alignItems: 'center'}}>
                              <TextField 
                                autoComplete='off'
                                value={array[rowIndex][columnIndex] === 0 ? null : array[rowIndex][columnIndex]}
                                onClick={((event) => {
                                  setIndex(String(rowIndex) + String(columnIndex))
                                })}
                                onKeyDown={(event) => {
                                  let regex = /^[0-9]+$/;
                                  console.log("event.target.value.match(regex): ", event.key.match(regex));
                                  console.log("event.target.value: ", event.target.value);
                                  if(event.key.match(regex) === null) {
                                    event.preventDefault();
                                  }
                                }}
                                onChange={(event) => {
                                  if(event.target.value > 0 && event.target.value < 10) 
                                  {
                                    let tempArray = [...array];
                                    tempArray[rowIndex][columnIndex] = Number(event.target.value);
                                    setArray(tempArray)
                                  }
                                  else if(event.target.value === null || event.target.value === "")
                                  {
                                    let tempArray = [...array];
                                    tempArray[rowIndex][columnIndex] = null;
                                    setArray(tempArray)
                                  }
                                }}
                                // sx={{
                                //   '& .MuiOutlinedInput-root': {
                                //     '& fieldset': { borderColor: 'seagreen' },
                                //   }
                                // }}
                                sx={{
                                  '& input': {
                                    caretColor: 'transparent',
                                  },
                                }}
                                size='small'
                                slotProps={{ htmlInput: {maxLength: 1}}}
                              >
                              </TextField>
                            </Paper>
                            {(columnIndex === 2 || columnIndex === 5) && <Divider sx={{ borderLeftWidth: 1.5, borderColor: '#666', transform: "scaleY(130%)" }} flexItem={false} variant='middle' orientation='vertical'/>}
                          </Stack>
                      ))
                  }
                  
                </Stack>
                {/* {(rowIndex === 2 || rowIndex === 5) && <hr style={{borderWidth: 2, color: "black"}}/>} */}
                {(rowIndex === 2 || rowIndex === 5) && <Divider sx={{ borderWidth: 1, borderColor: "#666", transform: "scaleX(103%)"}} flexItem={false} variant='middle' orientation='horizontal'/>}
                
              </Stack>
            ))
        }
        
      </Stack>
      <Stack>

      </Stack>
    </Stack>
  );
}

export default App;
