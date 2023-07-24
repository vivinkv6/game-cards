import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
// import { useState,useEffect } from 'react';

import { gamesList } from "../list/gamesList";

export default function Search() {
  return (
    <center>
      <Stack spacing={2} sx={{ width: 300, marginTop: "5rem" }}>
        <Autocomplete
          style={{ color: "white" }}
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={gamesList.map((games) => games)}
          renderInput={(params) => (
            <TextField
              style={{
                border: "3px solid white",
                borderRadius: "8px",
                backgroundColor: "rgba(172, 169, 171, 0.63)",
              }}
              {...params}
              label="Search input"
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
        />
      </Stack>
    </center>
  );
}
