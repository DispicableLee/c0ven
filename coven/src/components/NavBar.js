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
    <div id="nav-bar">
        <div className='title-header'>
          <h1 className='title'>
            <Link to="/">c0ven</Link>
          </h1>

        </div>
    </div>
  );
}