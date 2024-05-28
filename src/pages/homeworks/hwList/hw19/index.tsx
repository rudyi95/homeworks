import React, { BaseSyntheticEvent, useState } from "react";

import { Box, Button, Chip, Typography } from "@mui/material";
import { CustomInput } from "src/components/customInput";

export const Homework19: React.FC = () => {
  const [items, setItems] = useState<any>([]);
  const [item, setItem] = useState({ name: "", amount: 0 });

  const addItemFn = () => {
    setItems([...items, item]);
    setItem({ name: "", amount: 0 });
  };

  const handleChange = (e: BaseSyntheticEvent) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };
  const handleDelete = (item: any) => {
    const res = items.filter((e: any) => e.name !== item.name || e.amount !== item.amount);
    setItems(res);
  };

  return (
    <Box>
      <Typography>Count your last week spending</Typography>
      <Box>
        <Box sx={{ display: "flex" }}>
          <CustomInput name="name" label="Item" value={item.name} onChange={handleChange} />
          <CustomInput name="amount" label="Units" value={item.amount} onChange={handleChange} />
        </Box>
        <Box>
          <Button onClick={addItemFn} disabled={!item.name || !item.amount}>
            Add item
          </Button>
        </Box>
      </Box>
      <Box>
        {items.map((item: any) => {
          return (
            <Chip label={`${item.name}(${item.amount})`} onDelete={() => handleDelete(item)} />
          );
        })}
      </Box>
      <Button>Show spending</Button>
    </Box>
  );
};
