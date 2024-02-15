
import { Box, FormControl, Grid, MenuItem, Pagination, Select, Stack, Typography } from '@mui/material';


export default function Paggination() {
  return (
    <Box sx={{ marginLeft: '45px', marginRight: '35px', marginBottom: '15px' }}>
      <Grid
        container
        sx={{
          width: '95%',
          background: 'white',
          borderRadius: 1

        }}
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 2 }}
      >
        <Grid item xs={6}>
          <Stack
            sx={{
              display: 'flex',
              flexDirection: 'row',
              padding: 0,
              alignItems: 'center',
            }}
          >
            <Typography sx={{ fontWeight: 'bold', fontSize: 18 }}  >Show Rows</Typography>
            <FormControl sx={{ m: '10px', minWidth: 40, background: '#E9E9E9', }} size="small">
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={10}
                label="Number"

              >

                <MenuItem value={10}>10</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Grid>
        <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Pagination count={5} sx={{ margin: '15px' }} variant="outlined" shape="rounded" />
        </Grid>
      </Grid>
    </Box>
  )
}
