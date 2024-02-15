import AdbIcon from '@mui/icons-material/Adb';
import SettingsIcon from '@mui/icons-material/Settings';
import { AppBar, Box, Grid, Toolbar, Typography } from '@mui/material';


const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#86937F', width: 1, height: '89px', padding: "0px" }}>
      <Toolbar sx={{ width: '100%', maxWidth: '100vw' }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Box sx={{ width: '246px', height: '64px', marginLeft: '35px', marginTop: '16px' }}>
            <img src="/navLogo.svg" alt="Logo" style={{ width: '100%', height: '100%' }} />
          </Box>
        </Typography>
        <Grid container spacing={1} justifyContent="flex-end">
          <Grid item>
          </Grid>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              borderRadius: '5px',
              background: '#4D5746',
              marginTop: '25px',
              marginRight: "10px"
            }}
          >
            <AdbIcon
              sx={{
                width: '37px',
                height: '36px',
                padding: '8px',
                color: 'white',

              }}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              borderRadius: '5px',
              background: '#4D5746',
              marginTop: '25px'
            }}
          >
            <SettingsIcon
              sx={{
                width: '35px',
                height: '35px',
                padding: '8px',
                color: 'white',

              }}
            />
          </Box>
          <Grid item>
            <Box sx={{ width: '200px', height: '34px', marginTop: '16px' }}>
              <img src="/profile.svg" alt="Logo" style={{ width: '100%', height: '100%' }} />
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import SettingsIcon from '@mui/icons-material/Settings';
// import Avatar from '@mui/material/Avatar';
// import Box from '@mui/material/Box';

// const Navbar = () => {
//   return (
//     <AppBar position="static" sx={{ backgroundColor: '#86937F', width: 1, height: '89px', padding: "0px" }}>
//       <Toolbar sx={{ width: '100%', maxWidth: '100vw' }}>
//         {/* Logo on the left */}
//         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

//           <Box sx={{ width: '246px', height: '64px', marginLeft: '35px', marginTop: '16px' }}>
//             <img src="/navLogo.svg" alt="Logo" style={{ width: '100%', height: '100%' }} />
//           </Box>
//         </Typography>

//         {/* Settings Icon on the right */}
//         {/* <Box
//           sx={{
//             width: '33px',
//             height: '34px',
//             position: 'absolute',
//             top: '28px',
//             left: '1625px',
//             borderRadius: '5px',
//           }}
//         >
//           <SettingsIcon />
//         </Box> */}

//         {/* You can customize the icon here */}

//         <Box sx={{ width: '100px', height: '34px', marginTop: '16px' }}>
//           <img src="/icon.svg" alt="Logo" style={{ width: '100%', height: '100%' }} />
//         </Box>
//         <Box sx={{ width: '200px', height: '34px', marginTop: '16px' }}>
//           <img src="/setting.svg" alt="Logo" style={{ width: '100%', height: '100%' }} />
//         </Box>

//         <Box sx={{ width: '200px', height: '34px', marginTop: '16px' }}>
//           <img src="/profile.png" alt="Logo" style={{ width: '100%', height: '100%' }} />
//         </Box>


//         {/* Profile Picture and User Name */}
//         {/* <Avatar alt="User" src="/path/to/profile-pic.jpg" sx={{ marginLeft: 2 }} />
//         <Typography variant="body1" color="inherit" sx={{ marginLeft: 1 }}>
//           User Name
//         </Typography> */}
//       </Toolbar>
//     </AppBar>
//   );
// }

// export default Navbar;