import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function Single() {
  const { id } = useParams();
  const [data, setData] = useState<{
    background_image_additional: string;
    description_raw: string;
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
      <div className="banner">
        <div className="img">
          <CardMedia
            style={{ width: "100%" }}
            component="img"
            sx={{ width: 150 }}
            image={data?.background_image_additional}
          />
          <Typography
            component="h3"
            variant="h3"
            style={{
              fontWeight: "bolder",
              fontFamily: "serif",
              color: "black",
              marginBottom: "30px",
              marginTop: "20px",
              marginLeft: "7px",
              lineHeight: "30px",
            }}
          >
            Description:
          </Typography>
          <Typography
            component="p"
            style={{
              fontWeight: "bolder",
              fontFamily: 'monospace',
              fontSize:'20px',
              color: "black",
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
              color: "black",
              marginBottom: "30px",
              marginTop: "20px",
              marginLeft: "7px",
              lineHeight: "30px",
            }}
          >
            Gallery:
          </Typography>
          {img.map((value) => {
            return (
              <CardMedia
                style={{ width: "100%", margin: "10px" }}
                component="img"
                sx={{ width: 150 }}
                key={value.id}
                image={value.image}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Single;
