import React, { BaseSyntheticEvent, useState } from "react";

import { Box, Button, Chip, Typography } from "@mui/material";
import { CustomInput } from "src/components/customInput";
import { useFormik } from "formik";
import { HW19_SCHEMA } from "src/utils/constants/validation";

type TItem = {
  name: string;
  amount: number;
};

type TRange = {
  a: number;
  b: number;
};

interface IProps {
  first: {
    items: TItem[];
    item: TItem;
    show: boolean;
  };
  second: {
    range: TRange;
    res: number[];
    show: boolean;
  };
}

export const Homework19: React.FC = () => {
  const formik = useFormik<IProps>({
    initialValues: {
      first: {
        items: [],
        item: {
          name: "",
          amount: 0,
        },
        show: false,
      },
      second: {
        range: {
          a: 0,
          b: 1,
        },
        res: [],
        show: false,
      },
    },
    validationSchema: HW19_SCHEMA,
    onSubmit: console.log,
  });

  const second = formik.values.second;
  const secondRange = formik.values.second.range;
  const first = formik.values.first;

  const addItemFn = () => {
    formik.setValues({
      ...formik.values,
      first: {
        ...formik.values.first,
        items: [...first.items, first.item],
        item: { name: "", amount: 0 },
      },
    });
    if (!first.show) formik.setFieldValue("first.show", false);
  };
  const handleChange = (e: BaseSyntheticEvent) => {
    formik.setFieldValue(`first.item.${e.target.name}`, e.target.value);
  };
  const handleDelete = (item: any) => {
    const res = first.items.filter((e: any) => e.name !== item.name || e.amount !== item.amount);
    formik.setFieldValue("first.items", res);
  };
  const totalAmount = first.items.reduce((acc, curr) => acc + +curr.amount, 0);

  const handleRange = (e: BaseSyntheticEvent) => {
    formik.setFieldValue(`second.range.${e.target.name}`, +e.target.value);
    formik.setFieldValue("second.show", false);
  };

  const resRange = (from: number, to: number) => {
    return Array.from({ length: to - from + 1 }, (v, k) => k + from)
      .filter((number) => number % 2 !== 0)
      .toString();
  };

  console.log(formik.errors);

  return (
    <Box>
      <Box>
        <Typography>Count your last week spending</Typography>
        <Box>
          <Box sx={{ display: "flex" }}>
            <CustomInput name="name" label="Item" value={first.item.name} onChange={handleChange} />
            <CustomInput
              name="amount"
              label="Units"
              value={first.item.amount}
              onChange={handleChange}
            />
          </Box>
          <Box>
            <Button onClick={addItemFn} disabled={!first.item.name || !first.item.amount}>
              Add item
            </Button>
          </Box>
        </Box>
        <Box>
          {first.items.map((item: any) => {
            return (
              <Chip label={`${item.name}(${item.amount})`} onDelete={() => handleDelete(item)} />
            );
          })}
        </Box>
        {first.show && <Typography>Last month you spent {totalAmount}</Typography>}
        <Button onClick={() => formik.setFieldValue("first.show", true)}>Show spending</Button>
        {first.show && (
          <Button
            onClick={() => {
              formik.setFieldValue("first.show", false);
              formik.setFieldValue("first.items", []);
            }}
          >
            Reset
          </Button>
        )}
      </Box>
      <Box>
        <Typography>Get odd numbers from range of numbers</Typography>
        <Box>
          <CustomInput name="a" value={formik.values.second.range.a} onChange={handleRange} />
          <CustomInput name="b" value={formik.values.second.range.b} onChange={handleRange} />
        </Box>
        <Box>
          <Button
            disabled={!!formik.errors.second?.range?.b}
            onClick={() => formik.setFieldValue("second.show", true)}
          >
            Show numbers
          </Button>
          {second.show && (
            <Button
              onClick={() => {
                formik.setFieldValue("second.range", { a: 0, b: 1 });
                formik.setFieldValue("second.show", false);
                formik.setErrors({});
              }}
            >
              Reset
            </Button>
          )}
        </Box>
        {!!formik.errors.second?.range?.b && (
          <Typography>{formik.errors.second.range.b}</Typography>
        )}
        {second.show && <Typography>{resRange(secondRange.a, secondRange.b)}</Typography>}
      </Box>
    </Box>
  );
};
