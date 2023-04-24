import React from 'react';
import { Box, Container, Grid, Link, Button, Typography } from '@mui/material/';
import { theme } from './FooterTheme';

export const Footer = () => {
  
    return (
       <Box sx={theme.section}>
         <Box sx={theme.box}>
         <Container>
         <Grid sx={theme.firstGrid}>
           <Link>
              {/* className={leftBlock} to={isAuth ? '/diary' : '/'} */}
             {/* <Logo /> */}
           </Link>
          <Typography sx={theme.title}>Choose a doctor and make an 
              appointment at a convenient time
          </Typography>
          <Button sx={theme.btn}>make an appointment</Button>
         </Grid>
  
       
           <Grid>
             {/* <FooterSocial /> */}
           </Grid>
         </Container>

         <Box sx={theme.copyright}>
             <Typography sx={theme.text}>© Meddoc, 2022  The use of materials is allowed only if there is an active link to the source</Typography>
         </Box>
         </Box>
        </Box>
    );
};
  