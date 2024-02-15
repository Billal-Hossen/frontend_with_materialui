import { AppBar, Box, Grid, Toolbar, Typography } from '@mui/material';

const Footer = () => {
  return (
    <AppBar position="static" sx={{ background: 'white' }}>
      <Toolbar sx={{ height: '85px', width: '100%', display: 'flex', alignItems: 'center' }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6} lg={7}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography sx={{ color: 'black', textAlign: 'center' }}>Copyright @ Realseo.digital 2023</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} lg={5}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography sx={{ color: 'black', mx: '10px', textAlign: 'center' }}>Terms and Conditions</Typography>
              <Typography sx={{ color: 'black', mx: '10px', textAlign: 'center' }}>Privacy Policy</Typography>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;