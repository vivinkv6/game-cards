import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid, Rating } from "@mui/material";
import ReactPlayer from "react-player";

function Single() {
  const { id } = useParams();
  const [data, setData] = useState<{
    background_image_additional: string;
    description_raw: string;
    name: string;
    rating_top: number;
  }>();
  const [img, setImg] = useState<{ image: string; id: number }[]>([]);
  const [video, setVideo] = useState<string>("");
  useEffect(() => {
    //fetch game detail
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
    //fetch specific game image
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

    //fetch trailer
    const fetchTrailer = async () => {
      await fetch(
        `https://api.rawg.io/api/games/${id}/movies?key=${
          import.meta.env.VITE_API_KEY
        }`
      )
        .then((res) => res.json())
        .then((result) => {
          setVideo(result?.results[0]?.data?.max);
          console.log(result);
        })
        .catch((err) => console.log(err));
    };

    fetchTrailer();
    fetchImg();
    fetchData();
  }, [id]);

  return (
    <>
      <div className="banner" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="img">
          <CardMedia
            style={{
              width: "100%",
              marginTop: "57px",
            }}
            component="img"
            sx={{ width: 150 }}
            image={data?.background_image_additional}
          />
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              component="h2"
              style={{
                fontWeight: "bolder",
                fontFamily: "monospace",
                fontSize: "40px",
                color: "#757574",
                marginLeft: "1rem",
              }}
            >
              {data?.name}
            </Typography>
            {data?.rating_top && (
              <Typography
                style={{
                  marginLeft: "1rem",
                }}
              >
                <Rating
                  name="read-only"
                  value={data?.rating_top}
                  readOnly
                  size="large"
                />
              </Typography>
            )}
          </div>
          {video && (
            <ReactPlayer
              url={video}
              controls={true}
              style={{ minWidth: "100%",maxWidth:"100%" }}
            />
          )}

          <Typography
            component="p"
            style={{
              fontFamily: "monospace",
              fontSize: "20px",
              color: "#757574",
              margin: "10px",
            }}
          >
            {data?.description_raw}
          </Typography>
          
          <Grid
            container
            spacing={3}
            overflow={"hidden"}
            justifyContent={"space-around"}
            style={{marginTop:"3rem"}}
          >
            {img.map((value) => {
              return (
                <Grid item md={4} >
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
