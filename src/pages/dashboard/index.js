import React from 'react';
import { Grid, Paper } from '@mui/material';

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, textAlign: 'center', color: '#0084ff' }}>NAME</Paper>
      </Grid>
      <Grid item xs={6} md={4}>
        <Paper sx={{ p: 2, textAlign: 'center', height: '70vh' }}>xs=6 md=4</Paper>
      </Grid>
      <Grid item xs={6} md={8}>
        <Paper sx={{ p: 2, textAlign: 'center', height: '70vh' }}>xs=6 md=8</Paper>
      </Grid>
    </Grid>
  );
};

export default DashboardDefault;
