import Stack from "@mui/material/Stack";
// import { useState,useEffect } from 'react';

import { gamesList } from "../list/gamesList";
import { useEffect, useState } from "react";
import Cards from "../components/Cards";
import { Link } from "react-router-dom";

export default function Search() {
  const [searchItem, setSearchItem] = useState<string>("god-of-war-ragnarok");
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    //fetch particular movie

    const fetchData = async () => {
      await fetch(
        `https://api.rawg.io/api/games?search=${searchItem}&key=${
          import.meta.env.VITE_API_KEY
        }`
      )
        .then((res) => res.json())
        .then((data) => setData(data.results))
        .catch((error) => console.log(error));
    };
    fetchData();
  }, [searchItem]);

  return (
    <>
      <center>
        <Stack spacing={2} sx={{ width: 300, marginTop: "5rem" }}>
          <input
            type="text"
            style={{
              height: "50px",
              maxWidth: "268px",
              borderRadius: "6px",
              border: "none",
            }}
            list="list"
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
          />

          <datalist id="list">
            {gamesList.map((value, index) => {
              return (
                <div key={index}>
                  <option value={value}></option>
                </div>
              );
            })}
          </datalist>
        </Stack>
      </center>
      {data.map((value) => {
        return (
          <Link to={`/search/${value.id}`} style={{ textDecoration: "none" }}>
            <Cards list={value} />
          </Link>
        );
      })}
    </>
  );
}
