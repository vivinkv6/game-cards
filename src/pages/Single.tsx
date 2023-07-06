import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

function Single() {
  const { id } = useParams();
  const [data, setData] = useState<{
    background_image_additional: string;
    description_raw: string;
    name:string;
  }>();
  const [img, setImg] = useState<{ image: string; id: number }[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        `https://api.rawg.io/api/games/${id}?key=${
          import.meta.env.VITE_API_KEY
        }`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(result);
        })
        .catch((err) => console.log(err));
    };
    const fetchImg = async () => {
      await fetch(
        `https://api.rawg.io/api/games/${id}/screenshots?key=${
          import.meta.env.VITE_API_KEY
        }`
      )
        .then((res) => res.json())
        .then((result) => {
          setImg(result.results);
        })
        .catch((err) => console.log(err));
    };
    fetchImg();
    fetchData();
  }, [id]);

  return (
    <>
      <div className="banner" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="img" >
          <CardMedia
            style={{
              width: "100%",
              marginTop:'55px'
            }}
            component="img"
            sx={{ width: 150 }}
            image={data?.background_image_additional}
          />
           <Typography
            component="h2"
            style={{
              fontWeight: "bolder",
              fontFamily: "monospace",
              fontSize: "40px",
              color: "#757574",
              marginTop: "20px",
              marginBottom: "20px",
              marginLeft:'10px',
              lineHeight: "30px",
            }}
          >
            {data?.name}
          </Typography>
          <Typography
            component="p"
            style={{
              fontWeight: "bolder",
              fontFamily: "monospace",
              fontSize: "20px",
              color: "#757574",
              margin: "10px",
              lineHeight: "30px",
            }}
          >
            {data?.description_raw}
          </Typography>
          <Typography
            component="h3"
            variant="h3"
            style={{
              fontWeight: "bolder",
              fontFamily: "serif",
              fontSize: "50px",
              color: "#a6a6a6",
              marginBottom: "50px",
              marginTop: "5%",
              marginLeft: "7px",
              lineHeight: "30px",
            }}
          >
            Gallery
          </Typography>
          <Grid
            container
            spacing={3}
            overflow={"hidden"}
            justifyContent={"space-around"}
          >
            {img.map((value) => {
              return (
                <Grid item md={4}>
                  <CardMedia
                    style={{ width: "100%" }}
                    component="img"
                    sx={{ width: 150 }}
                    key={value.id}
                    image={value.image}
                  />
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
    </>
  );
}

export default Single;
