import React from "react";

import { Box, Button, Typography } from "@mui/material";

export const Homework14: React.FC = () => {
  const checkHandler = () => {
    const question = prompt("Write your age") || 0;
    if (18 <= +question && +question <= 45) {
      return alert("You are part of our company");
    } else {
      return alert(
        "Your age is not suitable for work in our company. You must be between 18 and 45 years old."
      );
    }
  };
  return (
    <Box>
      <Typography>Checking, can you work in our company?</Typography>
      <Button onClick={checkHandler}>Check</Button>
    </Box>
  );
};
