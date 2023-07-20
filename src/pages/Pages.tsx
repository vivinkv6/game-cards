import { useEffect, useState } from "react";
import Cards from "../components/Cards";
import { Button } from "@mui/material";
import { Link, useParams } from "react-router-dom";

function Pages() {

    const {page}=useParams();

  const [data, setData] = useState<any[]>();
  const [pages, setPages] = useState<number>(Number(page));
  useEffect(() => {
    console.log(pages);

    const fetchData = async () => {
      await fetch(
        `https://api.rawg.io/api/games?key=${
          import.meta.env.VITE_API_KEY
        }&page=${page}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result.results);
        })
        .catch((err) => console.log(err));
    };
    fetchData();
  }, [pages]);

  console.log(data);
  

  return (
    <div style={{ backgroundColor: "#1a1a1a" }}>
      {data?.map((value) => {
        return (
          <Link to={`/${value.id}`} style={{ textDecoration: "none" }}>
            <Cards list={value} />
          </Link>
        );
      })}
      <center style={{ marginTop: "20px", marginBottom: "20px" }}>
        <Button
          style={{  backgroundColor: "#2171c2" }}
          onClick={() => {
            if (pages <= 1) {
              setPages(1);
            } else {
              setPages((pages) => pages - 1);
            }
            console.log(pages);
          }}
        >
        <Link style={{textDecoration:'none',color: "white"}} to={`/pages/${pages}`}> Prev</Link> 
        </Button>{" "}
        
        <Button
          style={{ color: "white", backgroundColor: "#2171c2" }}
          onClick={() => {
            setPages((pages) => pages + 1);
            console.log(pages);
          }}
        >
          <Link style={{textDecoration:'none',color: "white",}} to={`/pages/${pages}`}>  Next</Link>
        
        </Button>
      </center>
    </div>
  );
}

export default Pages;