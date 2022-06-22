import React from "react";
import { Button, unstable_ClassNameGenerator } from "@mui/material";
import TextField from "@mui/material/TextField";

const divStyle = {
  margin: "auto",
  width: "60%",
  padding: "10px",
};
const inputStyle = {
  margin: "auto",
};
const buttonStyle = {
  marginLeft: "35%",
  marginTop: "10%",
};
export default function AddElement() {
  return (
    <div style={divStyle}>
      <TextField
        id="NewWordName"
        style={inputStyle}
        helperText="Plase enter your word to add"
        label="Word"
      />
      <TextField
        id="NewWordExplication"
        style={inputStyle}
        helperText="Plase enter your explication  "
        label="Explication"
      />
      <br></br>
      <Button
        style={buttonStyle}
        variant="contained"
        color="success"
        onClick={() => {
          let nameWord = document.getElementById("NewWordName");
          let explicationWord = document.getElementById("NewWordExplication");
          if (localStorage.getItem(nameWord.value) != null) {
            alert("Exist");
          } else {
            localStorage.setItem(nameWord.value, explicationWord.value);
          }
          nameWord.value = " ";
          explicationWord.value = " ";
        }}
      >
        Add Word
      </Button>
    </div>
  );
}
