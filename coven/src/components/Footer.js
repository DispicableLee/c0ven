import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mui/material';
import { fontSize, maxHeight } from '@mui/system';



export default function Footer() {
  return (
      <AppBar 
        position="fixed" 
        color="primary" 
        sx={{ 
        top: 'auto',
        bottom: 0,
        backgroundColor: 'black'
        }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} />
          <button 
            
            style={{
              backgroundColor: '#D30C7B',
              height: '150px',
              width: '15%',
              fontSize: '40px'
            }}>
            Sign In
            </button>
        </Toolbar>
      </AppBar>
  );
}