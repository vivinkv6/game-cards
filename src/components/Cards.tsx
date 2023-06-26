import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

type CardsProps = {
  list: {
    id: number;
    name: string;
    rating: number;
    slug: string;
    background_image: string;
    genres: {
      name: string;
    }[];
  };
};

export default function Cards(props: CardsProps) {
  //   const theme = useTheme();

  return (
    <Grid container spacing={2} justifyContent={"space-around"}>
      <Grid item md={4} xl={5}>
        <Card
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            bgcolor: "darkgray",
            marginTop: "4rem",
            boxShadow: "5px 5px 50px black",
            borderRadius: "5px",
          }}
          key={props.list.id}
        >
          <CardMedia
            style={{ width: "100%" }}
            component="img"
            sx={{ width: 150 }}
            image={props.list.background_image}
            alt={props.list.slug}
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography
                component="div"
                variant="h5"
                style={{
                  fontWeight: "bolder",
                  fontFamily: "monospace",
                  color: "white",
                  margin: "10px",
                }}
              >
                {props.list.name}
              </Typography>
              <Typography
                component="div"
                variant="h5"
                style={{
                  fontWeight: "bolder",
                  fontFamily: "monospace",
                  textAlign: "right",
                  color: "white",
                  backgroundColor: "#616161",
                  display: "inline",
                  padding: "8px",
                  borderRadius: "20px",
                  margin: "10px",
                }}
              >
                {props.list.rating}
              </Typography>
              <Typography
                variant="subtitle1"
                style={{ color: "#737373", margin: "10px" }}
                component="div"
              >
                {props.list.genres.map((value) => {
                  return value.name + " ";
                })}
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}
