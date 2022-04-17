import { Grid,Typography,Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import DesktopCategories from './DesktopCategories';
import MobileCategories from './MobileCategories';
import ProductList from './ProductList';


const ProductContainer = () => {
  return (
    <Box sx={{ minHeight:'60vh',mr:2,ml:2,mt:-23}}>
        {/*Feactured Product */}
        <Grid sx={{mb:4}} container spacing={2} >
            <Grid 
                sx={{display:"flex", flexDirection:{xs:'column',lg:'row',justifyContent:'center',alignItems:'center'}}}
                md={6} item>
                <Box sx={{ width:{xs:'100%',lg:'40%'}}} component='img' src='images/products/f1.png' />
                <Box sx={{ paddingLeft:'10px',mt:{lg:20,xs:2} }}>
                    <Typography sx={{ fontWeight:"bold"}} variant='h6'> 
                        Winter susits 2021
                    </Typography>
                    <Typography > 
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, sit?
                    </Typography>
                    <Typography sx={{ fontWeight:"bold",color:"#ff4081"}} variant='h6'>
                        $520.00
                    </Typography>
                    <Button variant='outlined' size="medium">
                        Add To Cart
                    </Button>
                </Box>
            </Grid>
            <Grid 
                sx={{display:"flex", flexDirection:{xs:'column',lg:'row',justifyContent:'center',alignItems:'center'}}}
                md={6} item>
                <Box sx={{ width:{xs:'100%',lg:'40%'}}} component='img' src='images/products/f2.png' />
                <Box sx={{ paddingLeft:'10px',mt:{lg:20,xs:2} }}>
                    <Typography sx={{ fontWeight:"bold"}} variant='h6'> 
                        Winter susits 2021
                    </Typography>
                    <Typography > 
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, sit?
                    </Typography>
                    <Typography sx={{ fontWeight:"bold",color:"#ff4081"}} variant='h6'>
                        $520.00
                    </Typography>
                    <Button variant='outlined' size="medium">
                        Add To Cart
                    </Button>
                </Box>
            </Grid>
        </Grid>
        {/* Desktop category*/}

        <Box sx={{display:{xs:"none",lg:"block"}}}>
            <DesktopCategories />
        </Box>
        <Box sx={{ xs:"block",lg:"none"}}>
            <MobileCategories />
        </Box>

        {/* Product list */}
        <ProductList />

    </Box>
  )
}

export default ProductContainer