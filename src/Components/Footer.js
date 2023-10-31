import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';



export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
       <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Coding problem-www.geektrust.in/finding-falcon
          </Typography>
      </AppBar>
    </Box>
  );
}
