import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
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
            <Link to="/">c0ven</Link>
          </h1>

        </div>
    </Box>
  );
}