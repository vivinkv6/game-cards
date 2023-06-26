import { useEffect, useState } from "react";
import Cards from "../components/Cards";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function HomePage() {
  const [data, setData] = useState<any[]>();
  const [pages, setPages] = useState<number>(1);

  useEffect(() => {
    console.log(pages);

    const fetchData = async () => {
      await fetch(
        `https://api.rawg.io/api/games?key=${
          import.meta.env.VITE_API_KEY
        }&page=${pages}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result.results);
        })
        .catch((err) => console.log(err));
    };
    fetchData();
  }, [pages]);
  return (
    <>
      <div style={{ fontFamily: "sans-serif", fontWeight: "bolder" }}>Home</div>
      {data?.map((value) => {
        return (
          <Link to={`/${value.id}`} style={{ textDecoration: "none" }}>
            <Cards list={value} />
          </Link>
        );
      })}
      <center style={{ marginTop: "20px", marginBottom: "20px" }}>
        <Button
          style={{ color: "white", backgroundColor: "#2171c2" }}
          onClick={() => {
            // setPages((pages<1) ? 1 : pages-1)
            if (pages <= 1) {
              setPages(1);
            } else {
              setPages((pages) => pages - 1);
            }
            console.log(pages);
          }}
        >
          Prev
        </Button>{" "}
        <Button
          style={{ color: "white", backgroundColor: "#2171c2" }}
          onClick={() => {
            setPages((pages) => pages + 1);
            console.log(pages);
          }}
        >
          Next
        </Button>
      </center>
    </>
  );
}

export default HomePage;
