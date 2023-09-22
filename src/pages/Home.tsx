import { useEffect, useState } from "react";
import Cards from "../components/Cards";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
// import ReactPaginate from "react-paginate";

function HomePage() {
  const [data, setData] = useState<any[]>();
  const [pages, setPages] = useState<number>(1);
  const [loading,setLoading]=useState<boolean>(false);
  let count:number=0;
  useEffect(() => {
    console.log(pages);

    const fetchData = async () => {
      setLoading(true);
      await fetch(
        `https://api.rawg.io/api/games?key=${
          import.meta.env.VITE_API_KEY 
        }&page=${pages}`
      )
        .then((res) => res.json())
        .then((result) => {
          count=result.count;
          console.log(count);
          
          setData(result.results);
        })
        .catch((err) => console.log(err));
        setLoading(false);
    };
    fetchData();
  }, [pages]);

  console.log(data);
  

  return (
    
    <div style={{ backgroundColor: "#1a1a1a" }}>
      {loading && <><Loader/><Loader/><Loader/></>}
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
            if (pages <= 1) {
              setPages(1);
            } else {
              setPages((pages) => pages - 1);
            }
            console.log(pages);
          }}
        >
          <Link style={{textDecoration:'none',color: "white",}} to={`/pages/${pages}`}>Prev</Link>
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
        {/* <Pagination count={count} color="secondary"/> */}
        {/* <ReactPaginate pageCount={count}  /> */}
      </center>
    </div>
  );
}

export default HomePage;