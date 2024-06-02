import React, { useState } from "react";

import { Box, Typography } from "@mui/material";
import { CustomInput } from "src/components/customInput";

const maxLength = 10;

export const Homework22: React.FC = () => {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState({ word: "", str: "" });

  const trimString = () => {
    if (first.length > maxLength) {
      return first.slice(0, maxLength) + "...";
    } else {
      return first;
    }
  };

  const countOccurrences = () => {
    const regex = new RegExp(second.word.toLowerCase(), "g");
    const matches = second.str.toLowerCase().match(regex);
    return matches ? matches.length : 0;
  };

  return (
    <Box>
      <Box>
        <Typography>Put 3 dots if string length more than max length(10)</Typography>
        <CustomInput value={first} onChange={(e) => setFirst(e.target.value)} />
        <Typography>{trimString()}</Typography>
      </Box>
      <Box>
        <Typography>Number of times that word occurs in the string</Typography>
        <CustomInput
          value={second.word}
          onChange={(e) => setSecond({ ...second, word: e.target.value })}
        />
        <CustomInput
          value={second.str}
          onChange={(e) => setSecond({ ...second, str: e.target.value })}
        />
        <Typography>
          Word: {second.word}, times: {countOccurrences()}
        </Typography>
      </Box>
    </Box>
  );
};
