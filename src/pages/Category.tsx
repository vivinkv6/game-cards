import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { categoryData } from "../list/category";
import Grid from "@mui/material/Grid";

function CategoryPage() {
  return (
    <>
      <Grid container spacing={3}>
        {categoryData.map((value) => {
          return (
            <Grid item md={2} style={{ marginTop: "5rem" }}>
              <Card key={value.id} sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="300"
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
    </>
  );
}

export default CategoryPage;
