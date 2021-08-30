import React from "react";
import { Box, Paper } from "@material-ui/core";

const ComponentContainer: React.FC = ({ children }) => {
  return (
    <Box
      style={{
        border: "2px solid red",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Paper>Component</Paper>
    </Box>
  );
};

export default ComponentContainer;
