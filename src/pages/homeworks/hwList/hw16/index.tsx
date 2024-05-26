import React, { BaseSyntheticEvent, useState } from "react";

import { Box, Button, List, ListItem, Typography } from "@mui/material";
import moment from "moment";

import { CustomInput } from "src/components/customInput";
import { removeLeadingZeros } from "src/utils/helpers/commonHelpers";

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export const Homework16: React.FC = () => {
  const [first, setFirst] = useState({ a: 0, b: 0, show: false });
  const [second, setSecond] = useState({ name: "", year: 0 });
  const [third, setThird] = useState<number | string>(1);
  const firstFn = (e: BaseSyntheticEvent) => {
    setFirst({ ...first, [e.target.name]: removeLeadingZeros(+e.target.value) });
  };
  const biggerNumber = first.a > first.b ? first.a : first.b;

  const secondFn = (e: BaseSyntheticEvent) => {
    if (e.target.name === "year") {
      const numericValue = parseInt(`${e.target.value}`, 10);
      if (numericValue > moment().year()) {
        return;
      }
    }

    setSecond({
      ...second,
      [e.target.name]:
        e.target.name === "name" ? e.target.value : removeLeadingZeros(+e.target.value),
    });
  };

  const showSecond = () => {
    const userAge = moment().year() - second.year;
    if (userAge > 60) {
      return alert(`${second.name} пенсіонер`);
    }
    if (userAge < 18) {
      return alert(`${second.name} надто юний`);
    }
    return alert(`${second.name} вийде на пенсію через ${60 - userAge}`);
  };

  const thirdFn = () => {
    const day = +third
    if (Number.isInteger(day) && day >= 1 && day <= 7) {
      return alert(daysOfWeek[day - 1]);
    } else {
      return alert("null");
    }
  };

  return (
    <Box>
      <List>
        <ListItem>
          <Box display="flex" flexDirection="column">
            <Typography>1. Return the greater of two numbers</Typography>
            <Box>
              <CustomInput
                type="number"
                name="a"
                label="First number"
                value={first.a}
                onChange={firstFn}
              />
              <CustomInput
                type="number"
                name="b"
                label="Second number"
                value={first.b}
                onChange={firstFn}
              />
            </Box>
            <Button onClick={() => setFirst({ ...first, show: true })}>Show bigger</Button>
            <Button onClick={() => setFirst({ a: 0, b: 0, show: false })}>Reset</Button>
            <Typography>Result: {first.show && biggerNumber}</Typography>
          </Box>
        </ListItem>
        <ListItem>
          <Box display="flex" flexDirection="column">
            <Typography>2. Return the greater of two numbers</Typography>
            <Box>
              <Box>
                <CustomInput name="name" label="Name" value={second.name} onChange={secondFn} />
                <CustomInput
                  type="number"
                  name="year"
                  label="Year"
                  value={second.year}
                  onChange={secondFn}
                />
              </Box>
              <Button onClick={showSecond}>Check</Button>
            </Box>
          </Box>
        </ListItem>
        <ListItem>
          <Box display="flex" flexDirection="column">
            <Typography>3. Get day of week</Typography>
            <CustomInput
              type="number"
              label="Day of week"
              value={third}
              onChange={(e) => setThird(removeLeadingZeros(+e.target.value))}
            />
            <Button onClick={thirdFn}>Show name</Button>
          </Box>
        </ListItem>
      </List>
    </Box>
  );
};
