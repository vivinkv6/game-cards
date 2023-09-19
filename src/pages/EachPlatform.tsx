import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Cards from "../components/Cards";

function EachPlatform() {
  const [data, setData] = useState<any[]>();
 
  const [loading, setLoading] = useState<boolean>(false);

  const { platform } = useParams();
  useEffect(() => {
   

    const fetchData = async () => {
      setLoading(true);
      await fetch(
        `https://api.rawg.io/api/games?platform=${platform}&key=${
          import.meta.env.VITE_API_KEY
        }`
      )
        .then((res) => res.json())
        .then((result) => {
            console.log(result);
            
          setData(result.results);
        })
        .catch((err) => console.log(err));
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      {data?.map((value) => {
        return (
          <Link to={`/${value.id}`} style={{textDecoration:'none'}}>
            {loading && <h1>Loading...</h1>}
            <Cards list={value} />
          </Link>
        );
      })}
    </>
  );
}

export default EachPlatform;
