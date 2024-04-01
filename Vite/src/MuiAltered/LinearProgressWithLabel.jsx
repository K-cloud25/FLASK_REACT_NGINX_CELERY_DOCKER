import * as React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function LinearProgressWithLabel(props) {
  const colorPalette = ['#d10000', '#d15b00', '#d1c700', '#c0d100','#88d100', '#0ed100']
  const [color, setColor] = React.useState(colorPalette[0]);

  React.useEffect(()=>{
    if ( props.value > 15 && props.value <= 30){
      setColor(colorPalette[1])
    } else if( props.value > 30 && props.value <=55){
      setColor(colorPalette[2])
    } else if( props.value > 55 && props.value <=75){
      setColor(colorPalette[3])
    } else if( props.value > 75 && props.value !=100){
      setColor(colorPalette[4])
    }else if (props.value==100){
      setColor(colorPalette[5])
    }
  },[props])
    return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1, color:color }}>
          <LinearProgress color='inherit' variant="buffer" {...props} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" >{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
      </Box>
    );
  }

export default LinearProgressWithLabel