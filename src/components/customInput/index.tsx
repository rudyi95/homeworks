import React from "react";

import { Box, InputBaseProps, OutlinedInput, Typography } from "@mui/material";
import classNames from "classnames";

import classes from "./style.module.scss";

interface IProps {
  label?: string | React.ReactElement;
  adornment?: React.ReactNode;
  startAdornment?: React.ReactNode;
  errorText?: string | null;
  value?: Maybe<string> | Nullable<number>;
  maxNumber?: number
}

export const CustomInput: React.FC<IProps & InputBaseProps> = ({
  id,
  name,
  label,
  className,
  adornment,
  startAdornment,
  errorText,
  value,
  maxNumber,
  ...props
}) => {
  return (
    <Box className={classNames(classes.root, className)}>
      {label && (
        <Box component={"label"} className={classes.subTitle}>
          {label}
        </Box>
      )}
      <OutlinedInput
        startAdornment={startAdornment}
        id={id}
        name={name || id}
        endAdornment={adornment}
        value={value}
        inputProps={{ max: props.type === 'number' ? maxNumber : undefined }}
        {...props}
      />
      {errorText ? <Typography className={classes.error}>{errorText}</Typography> : null}
    </Box>
  );
};
