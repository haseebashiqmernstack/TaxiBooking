import React from 'react';
import {AppBar,makeStyles,Toolbar,Typography,IconButton, Box,
Menu,Button} from '@material-ui/core';
import MenuIcon  from '@material-ui/icons/Menu';

const useStyles= makeStyles((theme)=>({
 logo:{
     color:"white",

 }
}))
export default function Navbar(){
    const classes=useStyles();
    return (
        <div>
            <AppBar position="static">
                 <Toolbar>
                     <Typography variant="h6" className={classes.logo}>
                        Jamrock Taxi Service
                     </Typography>
                     {/* <IconButton edge="start" color="inherit" className={classes.menuButton}>
                     <MenuIcon/>
                     </IconButton> */}
                     <Box>
                     {/* <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}> */}
  {/* Open Menu */}
{/* </Button> */}
{/* <Menu
  id="simple-menu"
  anchorEl={anchorEl}
  keepMounted
  open={Boolean(anchorEl)}
  onClose={handleClose}
>
  <MenuItem onClick={handleClose}>Profile</MenuItem>
  <MenuItem onClick={handleClose}>My account</MenuItem>
  <MenuItem onClick={handleClose}>Logout</MenuItem>
</Menu> */}
                     </Box>
                 </Toolbar>
            </AppBar>
        </div>
    )
}