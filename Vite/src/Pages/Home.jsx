import React, { useState, useRef } from 'react';
import { Grid, Box, Button } from '@mui/material'
import LinearProgressWithLabel from '../MuiAltered/LinearProgressWithLabel.jsx';
import { useNavigate } from 'react-router';
import useFetch from "../Hooks/useFetch.jsx";
import GetBuilder from "../ServerCalls/GetBuilder.jsx";

const Home = () => {

  // Fixed Vars
  const navigate = useNavigate();
  const { data } = useFetch("/env_type")
  const getBuilder = GetBuilder()

  const [progress, setProgress] = useState(0);
  const taskId = useRef(null);

  const handlePageChange = () => {
    navigate("/page")
  }

  const handleTaskStart = async() =>{

    let response = await getBuilder.caller("/long_task")

    if ( response.status == '202' ){
      let data = await response.json();
      taskId.current = data.taskId;
      handleProgressCheck()
    }

  }

  const handleProgressCheck = async () => {
    let timesCounter = 0
    const interval = setInterval( async ()=>{

      const response = await getBuilder.caller("/status/"+taskId.current);
      
      if ( response.status === 200 ){
        const data = await response.json();
        
        if ( data.state === 'PROCESSING'){
          setProgress(data.progress)
        }

        if ( data.state === 'SUCCESS'){
          setProgress(100)
          clearInterval(interval)
        }

      }

      timesCounter++;
      if ( timesCounter == 20){
        clearInterval(interval)
      }

    }, 5000)

  }

  return (
    <Grid container>
      <Grid item sm={12} md={12} lg={12}>
        <h1>HOME</h1>
        <h5>{data?.result}</h5>
        <Box sx={{  }}>
          <Button onClick={handlePageChange} >
            Move to Page
          </Button>
        </Box>  
      </Grid>
      <Grid item sm={2} md={2} lg={2}>
        <Button variant="contained" onClick={handleTaskStart} >
          Call Task Start
        </Button>
      </Grid>
      <Grid item sm={12} md={12} lg={12}>
        <Box sx={{ width : '80%', color : 'white !important' }}>
        <LinearProgressWithLabel
          varient='buffer' 
          valueBuffer={progress +  Math.floor(Math.random()*5) } 
          value={progress} 
        />
        </Box>
      </Grid>
    </Grid>
  )
}

export default Home