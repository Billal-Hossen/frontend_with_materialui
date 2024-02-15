import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'white' }}>
      <Toolbar sx={{ height: '85px', width: '100%', display: 'flex', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '5px', flexGrow: 1 }}>
          <Button variant="contained" size="large" sx={{ backgroundColor: '#86937F', height: '50px', marginRight: '10px', textTransform: 'none' }}>
            <ThumbUpIcon
              sx={{
                width: '28px',
                height: '25px',
                padding: '3px',
                color: 'white',

              }}
            />
            Review Clients</Button>
          <Button variant="contained" size="large" sx={{ backgroundColor: '#006A00', textTransform: 'none', height: '50px', }}> <AddIcon /> Create New Accounts</Button>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#EBEBEB', height: '50px', borderRadius: '5px', paddingLeft: '10px' }}>
          <SearchIcon sx={{ color: 'gray', marginRight: '5px' }} />
          <InputBase
            placeholder="Search"
            sx={{ color: 'gray', '&::placeholder': { color: 'gray' } }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;