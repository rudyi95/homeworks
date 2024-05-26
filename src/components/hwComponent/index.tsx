import React from "react";

import { hwEnums } from "src/types/enums";
import { getHWComp } from "src/utils/hwCompHelper";

interface IProps {
  type: hwEnums;
}
export const HWComponent: React.FC<IProps> = ({ type }) => {
  const Homework = getHWComp(type);
  return <Homework />;
};
