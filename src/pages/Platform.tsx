import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { platformData } from "../list/platform";
import Grid from '@mui/material/Grid';

function PlatformPage() {
  return (
    <Grid container spacing={3}>
      
      {platformData.map((value) => {
        return (
          <Grid item md={2} style={{marginTop:'5rem'}}>
          <Card style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}} key={value.id} sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={value.url}
                alt={value.url}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {value.name}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          </Grid>
          
        );
      })}
  </Grid>
  );
}

export default PlatformPage;
