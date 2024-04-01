import React from 'react';
import { Button, Grid } from '@mui/material'
import { useNavigate } from 'react-router';

const Page = () => {

  //Fixed Var
  const navigate = useNavigate();

  const handlePageChange = () => {
    navigate('/')
  }

  return (
    <Grid container>
      <Grid item sm={12} md={12} lg={12}>
        <h1>Page</h1>
        <Button onClick={handlePageChange}>
          Back to Home
        </Button>
      </Grid>
    </Grid>
  )
}

export default Page