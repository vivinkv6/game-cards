
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import StarBorderIcon from '@mui/icons-material/StarBorder';

export default function Cards() {
//   const theme = useTheme();

  return (
    <Card sx={{ display: 'flex' ,bgcolor:"darkgray"}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        
        <StarBorderIcon style={{color:'#ffbc03',fontSize:'3rem',fontWeight:'bolder',margin:'5px'}}/>
        
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Game Title
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
           Category
          </Typography>
        </CardContent>
        
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="/static/images/cards/live-from-space.jpg"
        alt="Live from space album cover"
      />
    </Card>
  );
}