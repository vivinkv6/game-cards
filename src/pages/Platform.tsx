import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
// import { platformData } from "../list/platform";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

function PlatformPage() {
  const [platforms, setPlatforms] = useState<
    { id: number; name: string; slug: string; image_background: string }[]
  >([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await fetch(
        `https://api.rawg.io/api/platforms?key=${import.meta.env.VITE_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          console.log(result);

          setPlatforms(result.results);
        })
        .catch((err) => console.log(err));
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <Grid container spacing={3}>
      {platforms.map((value) => {
        return (
          <Grid item md={2} style={{ marginTop: "5rem" }}>
            {loading && <h1>Loading...</h1>}
            <Link to={`${value.slug}`} style={{ textDecoration: "none" }}>
              <Card
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
                key={value.id}
                sx={{ maxWidth: 345 }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    loading="lazy"
                    style={{ objectFit: "fill" }}
                    image={value.image_background}
                    alt={value.slug}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {value.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default PlatformPage;
