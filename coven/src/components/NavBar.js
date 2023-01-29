import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import '../styles/NavBar.css'



export default function NavBar() {
  return (
    <Box 
      className="nav-bar"
      style={{ 
        flexGrow: 1,
        padding: '10px 10px 20px 40px'
      }}
      >
        <div
          className='title-header'
          style={{
            color: 'white',
            display: 'flex',
          }}
        >
          <h1 className='title'
            style={{
              fontFamily: 'monospace'
            }}
          >
            c0ven
          </h1>

        </div>
    </Box>
  );
}