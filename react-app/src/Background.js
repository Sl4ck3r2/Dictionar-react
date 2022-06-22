import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import AddElement from "./AddElement";
import SearchElement from "./SearchElement";

export default function Background() {
  const divStyle = {
    margin: "auto",
    width: "50%",
  };
  const titleStyle = {
    marginLeft: "38%",
    color: "white",
  };
  return (
    <div style={divStyle}>
      <Box
        sx={{
          width: 800,
          height: 800,
          backgroundColor: "#9e42f5",
        }}
      >
        <h1 style={titleStyle}>Dictionary</h1>
        <AddElement />
        <SearchElement />
      </Box>
    </div>
  );
}
