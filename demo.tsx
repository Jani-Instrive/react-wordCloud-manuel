import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: 'black' }}>
      <Grid container spacing={2} xs={10}>
        <Grid
          container
          spacing={2}
          sx={{
            margin: 'auto',
            justifyContent: 'center',
          }}
        >
          <Grid item xs={3} mt={2}>
            <Typography sx={{ color: 'white ' }}>
              makes our life easier
            </Typography>
          </Grid>
          <Grid item xs={3} mt={-1}>
            <Typography sx={{ color: 'white ' }}>awesome idea</Typography>
          </Grid>
          <Grid item xs={3} mt={3}>
            <Typography sx={{ color: 'white ' }}>
              exceptionally interesting
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography sx={{ color: 'white ' }}>game changer</Typography>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          sx={{
            margin: 'auto',
            justifyContent: 'center',
            mt: 2,
          }}
        >
          <Grid item xs={4} my>
            <Typography sx={{ color: 'white ' }}>revolutionary</Typography>
          </Grid>
          <Grid item xs={4} mt={-2}>
            <Typography sx={{ color: 'white ' }}>very smooth visuals</Typography>
          </Grid>
          <Grid item xs={4} mt={3}>
            <Typography sx={{ color: 'white ' }}>xs=4</Typography>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          sx={{
            margin: 'auto',
            justifyContent: 'center',
            mt: 2,
          }}
        >
          <Grid item xs={4} mt={2}>
            <Typography sx={{ color: 'white ' }}>xs=4</Typography>
          </Grid>
          <Grid item xs={4} mt={-2}>
            <Typography sx={{ color: 'white ' }}>xs=4</Typography>
          </Grid>
          <Grid item xs={4} mt={2}>
            <Typography sx={{ color: 'white ', fontweight: 'Bold' }}>
              intuitive
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          sx={{
            margin: 'auto',
            justifyContent: 'center',
            mt: 2,
          }}
        >
          <Grid item xs={6} mt={-2}>
            <Typography sx={{ color: 'white ' }}>xs=8</Typography>
          </Grid>
          <Grid item xs={4} mt={2}>
            <Typography sx={{ color: 'white ' }}>xs=4</Typography>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          sx={{
            margin: 'auto',
            justifyContent: 'center',
            mt: 2,
          }}
        >
          <Grid item xs={4} mt={-2}>
            <Typography sx={{ color: 'white ' }}>xs=4</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography sx={{ color: 'white ' }}>xs=8</Typography>
          </Grid>
        </Grid>
        <Grid item xs={7} sx={{ margin: 'auto', mt: 4 }}>
          <Typography sx={{ color: 'white ' }}>xs=8</Typography>
        </Grid>
        <Grid item xs={4} sx={{ margin: 'auto' }}>
          <Typography sx={{ color: 'white ' }}>xs=8</Typography>
        </Grid>
        <Grid item xs={7} sx={{ margin: 'auto' }}>
          <Typography sx={{ color: 'white ' }}>xs=8</Typography>
        </Grid>
        <Grid container>
          <Grid item xs={4} sx={{ margin: 'auto', mt: 2 }}>
            <Typography sx={{ color: 'white ' }}>xs=8</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
