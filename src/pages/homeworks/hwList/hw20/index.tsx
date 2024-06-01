import React, { useState } from "react";

import { Box, Typography } from "@mui/material";
import { CustomInput } from "src/components/customInput";

export const Homework20: React.FC = () => {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");

  return (
    <Box>
      <Box>
        <Typography>Get sum of numbers</Typography>
        <CustomInput type="number" value={first} onChange={(e) => setFirst(e.target.value)} />
        <Typography>
          Sum of numbers: {Array.from(first).reduce((acc, curr) => +acc + +curr, 0)}
        </Typography>
      </Box>
      <Box>
        <Typography>Sort numbers from bigger to smaller</Typography>
        <CustomInput type="number" value={second} onChange={(e) => setSecond(e.target.value)} />
        <Typography>Sorted numbers: {Array.from(second).sort((a, b) => +b - +a)}</Typography>
      </Box>
      <Box>
        <Typography>Sort numbers from bigger to smaller</Typography>
        <CustomInput type="number" value={third} onChange={(e) => setThird(e.target.value)} />
        <Box>
          <Typography>
            The biggest number: {Array.from(third).sort((a, b) => +b - +a)[0]}
          </Typography>
          <Typography>
            The smallest number:{" "}
            {Array.from(third)
              .sort((a, b) => +b - +a)
              .slice(-1)}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
