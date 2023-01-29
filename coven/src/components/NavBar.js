import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import { positions } from '@mui/system';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-start',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  '@media all': {
    minHeight: 128,
  },
}));

export default function NavBar() {
  return (
    <Box 
      className='nav-bar'
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