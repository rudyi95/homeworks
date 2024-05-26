import React, { BaseSyntheticEvent } from "react";
import { Box, Button, List, ListItem, Typography } from "@mui/material";
import { CustomInput } from "src/components/customInput";
import { useFormik } from "formik";
import { removeLeadingZeros } from "src/utils/helpers/commonHelpers";

export const Homework13: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      first: "",
      second: {
        name: "",
        amount: 0,
        months: 0,
        show: false,
      },
      third: {
        a: 1,
        b: 1,
      },
    },
    enableReinitialize: true,
    onSubmit: console.log,
  });

  const handleFirst = (e: BaseSyntheticEvent) => {
    formik.setFieldValue(e.target.name, !!e.target.value ? Math.pow(+e.target.value, 2) : "");
  };

  const handleSecond = (e: BaseSyntheticEvent) => {
    if (e.target.name === "second.months") {
      const numericValue = parseInt(`${e.target.value}`, 10);
      if (numericValue > 72) {
        return;
      }
    }
    formik.setFieldValue(
      e.target.name,
      e.target.name !== "second.name" ? removeLeadingZeros(+e.target.value) : e.target.value
    );
    formik.setFieldValue("second.show", false);
  };

  const handleResetSecond = () => {
    formik.setValues({
      ...formik.values,
      second: { name: "", amount: 0, months: 0, show: false },
    });
  };

  const handleThird = (e: BaseSyntheticEvent) => {
    formik.setFieldValue(e.target.name, +e.target.value);
  };

  const percent = formik.values.second.months < 6 ? 15 : formik.values.second.months > 9 ? 17 : 16;

  return (
    <form>
      <Box>
        <List>
          <ListItem>
            <Box display="flex" flexDirection="column" gap="10px">
              <Typography>1. The square of a number</Typography>
              <Box display="flex" flexDirection="column" gap="10px">
                <CustomInput name="first" onChange={handleFirst} />
                <Typography>Result: {formik.values.first}</Typography>
              </Box>
            </Box>
          </ListItem>
          <ListItem>
            <Box display="flex" flexDirection="column" gap="10px">
              <Box>
                <Typography>
                  2. Get information about how much a person will earn during this period of time
                </Typography>
                <List>
                  <ListItem>
                    <Typography>{`--Till 6 months - 15%`}</Typography>
                  </ListItem>
                  <ListItem>
                    <Typography>{`--Between 6 and 9 months - 16% `}</Typography>
                  </ListItem>
                  <ListItem>
                    <Typography>{`--From 9 - 17 %`}</Typography>
                  </ListItem>
                </List>
              </Box>
              <Box display="flex" flexDirection="column" gap="20px">
                <Box display="flex" gap="20px">
                  <CustomInput
                    name="second.name"
                    label="Name"
                    value={formik.values.second.name}
                    onChange={handleSecond}
                  />
                  <CustomInput
                    type="number"
                    name="second.amount"
                    label="Amount"
                    value={formik.values.second.amount}
                    onChange={handleSecond}
                  />
                  <CustomInput
                    type="number"
                    name="second.months"
                    label="Months"
                    value={formik.values.second.months}
                    onChange={handleSecond}
                    maxNumber={72}
                  />
                </Box>
                <Box display="flex" justifyContent="center" gap="20px">
                  <Button
                    onClick={(e) =>
                      !formik.values.second.name ||
                      !formik.values.second.amount ||
                      !formik.values.second.months
                        ? alert("You should fill all fields")
                        : formik.setFieldValue("second.show", true)
                    }
                  >
                    Show result
                  </Button>
                  <Button onClick={handleResetSecond}>Reset</Button>
                </Box>
              </Box>
              <Box>
                <Typography>
                  Result:
                  {formik.values.second.show
                    ? `Dear ${
                        !!formik.values.second.name ? formik.values.second.name : "___"
                      }, You have entered ${formik.values.second.amount}
                UAH., at ${percent}% per annum for a period of ${
                        formik.values.second.months
                      } months. During this period of
                time, you will earn ${(
                  (((formik.values.second.amount / 100) * percent) / 12) *
                  formik.values.second.months
                ).toFixed(2)} hryvnias.`
                    : ""}
                </Typography>
              </Box>
            </Box>
          </ListItem>
          <ListItem>
            <Box>
              <Typography>
                3. Fill two numbers a and b from the user and outputs their sum, difference,
                multiplication and division
              </Typography>
              <Box>
                <CustomInput
                  type="number"
                  name="third.a"
                  label="Number A"
                  value={formik.values.third.a}
                  onChange={handleThird}
                />
                <CustomInput
                  type="number"
                  name="third.b"
                  label="Number B"
                  value={formik.values.third.b}
                  onChange={handleThird}
                />
              </Box>
              <Typography>
                Result: Sum = {formik.values.third.a + formik.values.third.b}, Difference ={" "}
                {formik.values.third.a - formik.values.third.b}, Multiplication ={" "}
                {formik.values.third.a * formik.values.third.b}, Division ={" "}
                {!formik.values.third.b ? "Null" : formik.values.third.a / formik.values.third.b}
              </Typography>
            </Box>
          </ListItem>
        </List>
      </Box>
    </form>
  );
};
