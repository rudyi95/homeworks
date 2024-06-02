import React, { useState } from "react";

import { Box, Typography } from "@mui/material";
import { CustomInput } from "src/components/customInput";
import { removeLeadingZeros } from "src/utils/helpers/commonHelpers";

export const Homework21: React.FC = () => {
  const [first, setFirst] = useState({ array: "", element: "" });
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");

  const extractNumbers = (input: string) => {
    const pattern = /-?\d+(\.\d+)?/g;
    return input.match(pattern) || [];
  };

  const countEvenNumbers = () => {
    const arr = third.match(/\d+/g)?.toString().split("");
    if (arr) {
      return arr.reduce((count: any, num: any) => {
        return +count + (+num % 2 === 0 ? 1 : 0);
      }, 0);
    } else {
      return "null";
    }
  };

  return (
    <Box>
      <Box>
        <Typography>Check is number in array</Typography>
        <Box>
          <CustomInput
            type="number"
            value={first.array}
            onChange={(e) => setFirst({ ...first, array: e.target.value })}
          />
          <CustomInput
            type="number"
            value={first.element}
            onChange={(e) =>
              setFirst({ ...first, element: removeLeadingZeros(e.target.value[0]).toString() })
            }
            maxNumber={9}
            minNumber={0}
          />
        </Box>
        <Typography>
          {!!Array.from(first.array).find((el) => el === `${first.element}`) ? "true" : "false"}
        </Typography>
      </Box>
      <Box>
        <Typography>Get first negative number</Typography>
        <CustomInput value={second} onChange={(e) => setSecond(e.target.value)} />
        <Typography>
          {!!extractNumbers(second).find((number) => +number < 0)
            ? extractNumbers(second).find((number) => +number < 0)
            : "null"}
        </Typography>
      </Box>
      <Box>
        <Typography>Get amount of even numbers</Typography>
        <CustomInput value={third} onChange={(e) => setThird(e.target.value)} />
        <Typography>{countEvenNumbers()}</Typography>
      </Box>
    </Box>
  );
};
