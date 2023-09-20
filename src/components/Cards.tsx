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
      <Grid item md={4} xl={5} style={{position:'relative'}}>
        <Card
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            bgcolor: "rgba(22, 21, 21, 1)",
            marginTop: "4rem",
            boxShadow: "5px 5px 50px rgba(71, 71, 71, 0.91)",
            borderRadius: "5px",
          }}
          key={props.list.id}
        >
          <Typography
            component="div"
            variant="h5"
            style={{
              position:"absolute",
              top:"5rem",
              right:'1rem',
              fontWeight: "bolder",
              fontFamily: "monospace",
              textAlign: "right",
              color: "black",
              backgroundColor: "rgba(236, 239, 225, 1)",
              display: "inline",
              border: "5px solid rgba(200, 255, 0, 1)",
              borderRadius: "100%",
              margin: "10px",
              padding: "10px 20px",
            }}
          >
            {Math.round(props.list.rating)}
          </Typography>
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
                variant="subtitle1"
                style={{
                  color: "#737373",
                  marginTop: "30px",
                  display: "flex",
                  flexWrap: "wrap",
                }}
                component="div"
              >
                {props.list.genres.map((value) => {
                  return (
                    <i
                      style={{
                        color: "#ffffff",
                        backgroundColor: "#916060",
                        borderRadius: "30px",
                        padding: "10px",
                        margin: "10px",
                      }}
                    >
                      {value.name}{" "}
                    </i>
                  );
                })}
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}
