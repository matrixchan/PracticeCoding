import React,{useState} from 'react'
import { AppBar, Toolbar,IconButton,Typography,Button,Badge,Menu,MenuItem,useMediaQuery,useTheme } from '@mui/material'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Box } from '@mui/system';
import MailIcon from '@mui/icons-material/Mail';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import DrawerComponent from './DrawerComponent';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const [anchorEl,setAnchorEl] = useState(null);
    const openMenu = Boolean(anchorEl);
    const [openDrawer,setOpenDrawer] = useState(true);
    const theme = useTheme();
    console.log(theme);
    const matches = useMediaQuery(theme.breakpoints.down("sm"));
    console.log(matches);


    const handleClick = (e)=>{
        setAnchorEl(e.currentTarget)
    };

    const handleClose = ()=>{
        setAnchorEl(null);
    };

  return (
    <>
    <Box elevation={0} sx={{ backgroundColor:'white'}}>
        <Toolbar>
            <Box sx={{ display:"flex", justifyContent:'space-between', alignItems:"center",width:'100%', padding:"10px 0px"}}  component="div">
                <Box>
                    <IconButton>
                        <LocalMallIcon sx={{ fontSize:'2.4rem'}} />
                    </IconButton>
                </Box>

                {/* Links */}
                {matches ? 
                    (<DrawerComponent 
                        openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />)
                 : (
                    <Box sx={{ display:"flex"}}>
                    <Typography sx={{ marginRight:'20px',cursor:'pointer',color:'#616161'}}>Home</Typography>
                    <Typography sx={{ marginRight:'20px',cursor:'pointer',color:'#616161'}}>Brand</Typography>
                    <Typography 
                        sx={{ marginRight:'20px',cursor:'pointer',color:'#616161'}}
                        aria-controls="basic-menu"
                        aria-haspopup = "true"
                        aria-expanded = { openMenu ? 'true' : undefined}
                        onClick = {handleClick}
                    >Categories</Typography> 
    
                    <Menu id="basic-menu" anchorEl={ anchorEl} open={openMenu} onClick={handleClose}>
                        <MenuItem onClick={handleClose}>Men</MenuItem>
                        <MenuItem onClick={handleClose}>Women</MenuItem>
                        <MenuItem onClick={handleClose}>Phones</MenuItem>
                        <MenuItem onClick={handleClose}>Accessories</MenuItem>
                        <MenuItem onClick={handleClose}>Other</MenuItem>
                    </Menu>      
                    
                    <Typography sx={{ marginRight:'20px',cursor:'pointer',color:'#616161'}}>Men</Typography>
                    <Typography sx={{ marginRight:'20px',cursor:'pointer',color:'#616161'}}>Women</Typography>
                    <Typography sx={{ marginRight:'20px',cursor:'pointer',color:'#616161'}}>FAQ</Typography>
                </Box>
                 )}

                {/* Buuton Links*/}
                <Box sx={{ display:"flex", justifyContent:'center',alignItems:'center'}}>
                    <Button sx={{ background:'#ff4081'}} disableElevation variant="contained">Account</Button>



                    {matches? (
                        <IconButton onClick={()=>setOpenDrawer(true)}>
                            <MenuIcon />
                        </IconButton>) :
                        ( <IconButton>
                            <Badge badgeContent={4} color="primary">
                            <ShoppingBasketIcon color="action" />
    
                            </Badge>
                        </IconButton>)
                    
                    }
                </Box>

            </Box>                   
        </Toolbar>
    </Box>
    </>
  )
}

export default Navbar