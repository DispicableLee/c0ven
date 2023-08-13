import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../styles/NavBar.css'



export default function NavBar() {
  const navigate = useNavigate()
  function navToProf(){
    navigate("/profile-main")
  }
  return (
    <div id="nav-bar">
        <div className='title-header'>
          <div className='title'>
            <Link to="/home">c0ven</Link>
          </div>
        </div>
          <div id='nav-button'>

          </div>
          <div id='nav-button'
            onClick={navToProf}
          >
            <h3>
              Profile
            </h3>
          </div>
    </div>
  );
}