import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography } from '@mui/material';

import Paggination from './Paggination';

const TableData = () => {
  return (
    <Box sx={{
      background: 'white',
      display: 'flex',
      alignItems: 'center',
      width: 1,
      padding: "25px"
    }}>
      <TableContainer
        component={Paper}
        sx={{
          backgroundColor: '#E5E7E3',
          borderRadius: '5px',
          overflowX: 'hidden',
        }}
      >
        <Table sx={{ margin: '30px', width: '95%' }}>
          <TableHead sx={{
            backgroundColor: 'white',
            '& th:first-child': {
              borderRadius: '5px 0 0 5px'
            },
            '& th:last-child': {
              borderRadius: '0 5px 5px 0'
            }

          }} >
            <TableRow  >
              <TableCell><Typography sx={{ fontWeight: 'bold', fontSize: 18 }}>Company Name</Typography></TableCell>
              <TableCell><Typography sx={{ fontWeight: 'bold', fontSize: 18 }}>Star Rating</Typography></TableCell>
              <TableCell><Typography sx={{ fontWeight: 'bold', fontSize: 18 }}>Total Reviews</Typography></TableCell>
              <TableCell><Typography sx={{ fontWeight: 'bold', fontSize: 18 }}>Tasks</Typography></TableCell>
              <TableCell></TableCell>
            </TableRow>

          </TableHead>
          <TableBody sx={{
            borderRadius: '10px',
            overflow: 'hidden'
          }}>
            <TableRow sx={{
              backgroundColor: 'white',

            }}>
              <TableCell sx={{
                fontSize: "16px", borderTopLeftRadius: '5px',
                borderBottomLeftRadius: '5px',
              }}>CodeFusion Technologies</TableCell>
              <TableCell>
                <StarIcon sx={{ color: 'yellow' }} />
                <StarIcon sx={{ color: 'yellow' }} />
                <StarIcon sx={{ color: 'yellow' }} />
                <StarIcon sx={{ color: 'yellow' }} />
                <StarOutlineIcon sx={{ color: 'yellow' }} />
              </TableCell>
              <TableCell sx={{ fontSize: "16px" }}>120 (Google Form)</TableCell>
              <TableCell sx={{ fontSize: "16px" }}>Review To Remove</TableCell>
              <TableCell sx={{
                fontSize: "16px", marginLeft: '30px', borderTopRightRadius: '5px',
                borderBottomRightRadius: '5px',
              }}>

                <Button
                  variant="contained"
                  size="large"
                  sx={{ backgroundColor: '#729E5A', marginRight: '15px', textTransform: 'none' }}
                >
                  View
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  sx={{ backgroundColor: '#86937F', textTransform: 'none' }}
                >
                  Stop Campaign
                </Button>
              </TableCell>
            </TableRow>
            <TableRow sx={{
              backgroundColor: 'white',

            }}>
              <TableCell sx={{
                fontSize: "16px", borderTopLeftRadius: '5px',
                borderBottomLeftRadius: '5px',
              }}>Flavorsome Delights</TableCell>
              <TableCell>
                <StarIcon sx={{ color: 'yellow' }} />
                <StarIcon sx={{ color: 'yellow' }} />
                <StarIcon sx={{ color: 'yellow' }} />
                <StarIcon sx={{ color: 'yellow' }} />
                <StarIcon sx={{ color: 'yellow' }} />
              </TableCell>
              <TableCell sx={{ fontSize: "16px" }}>256 (Form Google)</TableCell>
              <TableCell sx={{ fontSize: "16px" }}>Review To Remove</TableCell>
              <TableCell sx={{
                fontSize: "16px", marginLeft: '30px', borderTopRightRadius: '5px',
                borderBottomRightRadius: '5px',
              }}>

                <Button
                  variant="contained"
                  size="large"
                  sx={{ backgroundColor: '#729E5A', marginRight: '15px', textTransform: 'none' }}
                >
                  View
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  sx={{ backgroundColor: '#86937F', textTransform: 'none' }}
                >
                  Stop Campaign
                </Button>
              </TableCell>
            </TableRow>
            <TableRow sx={{
              backgroundColor: 'white',

            }}>
              <TableCell sx={{
                fontSize: "16px", borderTopLeftRadius: '5px',
                borderBottomLeftRadius: '5px',
              }}>FreshFusion Kitchen</TableCell>
              <TableCell>
                <StarIcon sx={{ color: 'yellow' }} />
                <StarIcon sx={{ color: 'yellow' }} />
                <StarIcon sx={{ color: 'yellow' }} />
                <StarIcon sx={{ color: 'yellow' }} />
                <StarOutlineIcon sx={{ color: 'yellow' }} />
              </TableCell>
              <TableCell sx={{ fontSize: "16px" }}>145 (From Google)</TableCell>
              <TableCell sx={{ fontSize: "16px" }}>Review To Remove</TableCell>
              <TableCell sx={{
                fontSize: "16px", marginLeft: '30px', borderTopRightRadius: '5px',
                borderBottomRightRadius: '5px',
              }}>

                <Button
                  variant="contained"
                  size="large"
                  sx={{ backgroundColor: '#729E5A', marginRight: '15px', textTransform: 'none' }}
                >
                  View
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  sx={{ backgroundColor: '#86937F', textTransform: 'none' }}
                >
                  Stop Campaign
                </Button>
              </TableCell>
            </TableRow>
            <TableRow sx={{
              backgroundColor: 'white',

            }}>
              <TableCell sx={{
                fontSize: "16px", borderTopLeftRadius: '5px',
                borderBottomLeftRadius: '5px',
              }}>Homestead Haven Realty</TableCell>
              <TableCell>
                <StarIcon sx={{ color: 'yellow' }} />
                <StarIcon sx={{ color: 'yellow' }} />
                <StarIcon sx={{ color: 'yellow' }} />
                <StarIcon sx={{ color: 'yellow' }} />
                <StarIcon sx={{ color: 'yellow' }} />
              </TableCell>
              <TableCell sx={{ fontSize: "16px" }}>165 (Form Google)</TableCell>
              <TableCell sx={{ fontSize: "16px" }}>Review To Remove</TableCell>
              <TableCell sx={{
                fontSize: "16px", marginLeft: '30px', borderTopRightRadius: '5px',
                borderBottomRightRadius: '5px',
              }}>

                <Button
                  variant="contained"
                  size="large"
                  sx={{ backgroundColor: '#729E5A', marginRight: '15px', textTransform: 'none' }}
                >
                  View
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  sx={{ backgroundColor: '#86937F', textTransform: 'none' }}
                >
                  Stop Campaign
                </Button>
              </TableCell>
            </TableRow>
            <TableRow sx={{
              backgroundColor: 'white',

            }}>
              <TableCell sx={{
                fontSize: "16px", borderTopLeftRadius: '5px',
                borderBottomLeftRadius: '5px',
              }}>Skyline Horizon Estates</TableCell>
              <TableCell>
                <StarIcon sx={{ color: 'yellow' }} />
                <StarIcon sx={{ color: 'yellow' }} />
                <StarIcon sx={{ color: 'yellow' }} />
                <StarOutlineIcon sx={{ color: 'yellow' }} />
                <StarOutlineIcon sx={{ color: 'yellow' }} />
              </TableCell>
              <TableCell sx={{ fontSize: "16px" }}>598 (Form Google)</TableCell>
              <TableCell sx={{ fontSize: "16px" }}>Review To Remove</TableCell>
              <TableCell sx={{
                fontSize: "16px", marginLeft: '30px', borderTopRightRadius: '5px',
                borderBottomRightRadius: '5px',
              }}>

                <Button
                  variant="contained"
                  size="large"
                  sx={{ backgroundColor: '#729E5A', marginRight: '15px', textTransform: 'none' }}
                >
                  View
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  sx={{ backgroundColor: '#86937F', textTransform: 'none' }}
                >
                  Stop Campaign
                </Button>
              </TableCell>
            </TableRow>
            <TableRow sx={{
              backgroundColor: 'white',

            }}>
              <TableCell sx={{
                fontSize: "16px", borderTopLeftRadius: '5px',
                borderBottomLeftRadius: '5px',
              }}>GlobalVision Advisors</TableCell>
              <TableCell>
                <StarIcon sx={{ color: 'yellow' }} />
                <StarIcon sx={{ color: 'yellow' }} />
                <StarIcon sx={{ color: 'yellow' }} />
                <StarIcon sx={{ color: 'yellow' }} />
                <StarOutlineIcon sx={{ color: 'yellow' }} />
              </TableCell>
              <TableCell sx={{ fontSize: "16px" }}>448 (Form Google)</TableCell>
              <TableCell sx={{ fontSize: "16px" }}>Review To Remove</TableCell>
              <TableCell sx={{
                fontSize: "16px", marginLeft: '30px', borderTopRightRadius: '5px',
                borderBottomRightRadius: '5px',
              }}>

                <Button
                  variant="contained"
                  size="large"
                  sx={{ backgroundColor: '#729E5A', marginRight: '15px', textTransform: 'none' }}
                >
                  View
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  sx={{ backgroundColor: '#86937F', textTransform: 'none' }}
                >
                  Stop Campaign
                </Button>
              </TableCell>
            </TableRow>
            <TableRow sx={{
              backgroundColor: 'white',

            }}>
              <TableCell sx={{
                fontSize: "16px", borderTopLeftRadius: '5px',
                borderBottomLeftRadius: '5px',
              }}>Roaming Haven Resorts</TableCell>
              <TableCell>
                <StarIcon sx={{ color: 'yellow' }} />
                <StarIcon sx={{ color: 'yellow' }} />
                <StarIcon sx={{ color: 'yellow' }} />
                <StarIcon sx={{ color: 'yellow' }} />
                <StarOutlineIcon sx={{ color: 'yellow' }} />
              </TableCell>
              <TableCell sx={{ fontSize: "16px" }}>338 (Form Google)</TableCell>
              <TableCell sx={{ fontSize: "16px" }}>Review To Remove</TableCell>
              <TableCell sx={{
                fontSize: "16px", marginLeft: '30px', borderTopRightRadius: '5px',
                borderBottomRightRadius: '5px',
              }}>

                <Button
                  variant="contained"
                  size="large"
                  sx={{ backgroundColor: '#729E5A', marginRight: '15px', textTransform: 'none' }}
                >
                  View
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  sx={{ backgroundColor: '#86937F', textTransform: 'none' }}
                >
                  Stop Campaign
                </Button>
              </TableCell>
            </TableRow>
            <TableRow sx={{
              backgroundColor: 'white',

            }}>
              <TableCell sx={{
                fontSize: "16px", borderTopLeftRadius: '5px',
                borderBottomLeftRadius: '5px',
              }}>CareCrest Medical Group</TableCell>
              <TableCell>
                <StarIcon sx={{ color: 'yellow' }} />
                <StarIcon sx={{ color: 'yellow' }} />
                <StarIcon sx={{ color: 'yellow' }} />
                <StarIcon sx={{ color: 'yellow' }} />
                <StarOutlineIcon sx={{ color: 'yellow' }} />
              </TableCell>
              <TableCell sx={{ fontSize: "16px" }}>985 (Form Google)</TableCell>
              <TableCell sx={{ fontSize: "16px" }}>Review To Remove</TableCell>
              <TableCell sx={{
                fontSize: "16px", marginLeft: '30px', borderTopRightRadius: '5px',
                borderBottomRightRadius: '5px',
              }}>

                <Button
                  variant="contained"
                  size="large"
                  sx={{ backgroundColor: '#729E5A', marginRight: '15px', textTransform: 'none' }}
                >
                  View
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  sx={{ backgroundColor: '#86937F', textTransform: 'none' }}
                >
                  Stop Campaign
                </Button>
              </TableCell>
            </TableRow>
            <TableRow sx={{
              backgroundColor: 'white',

            }}>
              <TableCell sx={{
                fontSize: "16px", borderTopLeftRadius: '5px',
                borderBottomLeftRadius: '5px',
              }}>GreenScape Innovations</TableCell>
              <TableCell>
                <StarIcon sx={{ color: 'yellow' }} />
                <StarIcon sx={{ color: 'yellow' }} />
                <StarIcon sx={{ color: 'yellow' }} />
                <StarIcon sx={{ color: 'yellow' }} />
                <StarOutlineIcon sx={{ color: 'yellow' }} />
              </TableCell>
              <TableCell sx={{ fontSize: "16px" }}>1465 (Form Google)</TableCell>
              <TableCell sx={{ fontSize: "16px" }}>Review To Remove</TableCell>
              <TableCell sx={{
                fontSize: "16px", marginLeft: '30px', borderTopRightRadius: '5px',
                borderBottomRightRadius: '5px',
              }}>

                <Button
                  variant="contained"
                  size="large"
                  sx={{ backgroundColor: '#729E5A', marginRight: '15px', textTransform: 'none' }}
                >
                  View
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  sx={{ backgroundColor: '#86937F', textTransform: 'none' }}
                >
                  Stop Campaign
                </Button>
              </TableCell>
            </TableRow>
            <TableRow sx={{
              backgroundColor: 'white',

            }}>
              <TableCell sx={{
                fontSize: "16px", borderTopLeftRadius: '5px',
                borderBottomLeftRadius: '5px',
              }}>UrbanNest Properties</TableCell>
              <TableCell>
                <StarIcon sx={{ color: 'yellow' }} />
                <StarIcon sx={{ color: 'yellow' }} />
                <StarIcon sx={{ color: 'yellow' }} />
                <StarIcon sx={{ color: 'yellow' }} />
                <StarIcon sx={{ color: 'yellow' }} />
              </TableCell>
              <TableCell sx={{ fontSize: "16px" }}>215 (Form Google)</TableCell>
              <TableCell sx={{ fontSize: "16px" }}>Review To Remove</TableCell>
              <TableCell sx={{
                fontSize: "16px", marginLeft: '30px', borderTopRightRadius: '5px',
                borderBottomRightRadius: '5px',
              }}>

                <Button
                  variant="contained"
                  size="large"
                  sx={{ backgroundColor: '#729E5A', marginRight: '15px', textTransform: 'none' }}
                >
                  View
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  sx={{ backgroundColor: '#86937F', textTransform: 'none' }}
                >
                  Stop Campaign
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        {/* Paggination component */}
        <Paggination />
      </TableContainer >
    </Box >
  );
}

export default TableData;
