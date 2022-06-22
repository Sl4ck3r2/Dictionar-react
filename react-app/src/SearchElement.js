import React from "react";
import { Button, unstable_ClassNameGenerator } from "@mui/material";
import TextField from "@mui/material/TextField";

export default function SearchElement() {
  const divStyle = {
    marginTop: "10%",
  };
  const inputStyle = {
    margin: "auto",
    marginLeft: "23%",
    width: "50%",
  };
  const buttonStyle = {
    marginLeft: "42%",
    marginTop: "5%",
  };
  const explicationSpotStyle = {
    marginLeft: "35%",
    marginTop: "10%",
    color: "white",
  };
  return (
    <div style={divStyle}>
      <TextField
        id="SearchWord"
        style={inputStyle}
        helperText="Plase enter your word to search"
        label="Word"
      />
      <br />
      <Button
        style={buttonStyle}
        variant="contained"
        color="error"
        onClick={() => {
          let wordSearched = document.getElementById("SearchWord");
          let explicationSpot = document.getElementById("ExplicationSpot");
          if (localStorage.getItem(wordSearched.value) != null) {
            explicationSpot.textContent = localStorage.getItem(
              wordSearched.value
            );
          } else {
            explicationSpot.textContent = "NOT FOUND";
          }
        }}
      >
        Search
      </Button>
      <h1 id="ExplicationSpot" style={explicationSpotStyle}></h1>
    </div>
  );
}
