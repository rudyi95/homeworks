import { Homework1 } from "src/pages/homeworks/hwList/hw1";
import { Homework2 } from "src/pages/homeworks/hwList/hw2";
import { Homework3 } from "src/pages/homeworks/hwList/hw3";
import { Homework4 } from "src/pages/homeworks/hwList/hw4";
import { Homework5 } from "src/pages/homeworks/hwList/hw5";
import { Homework6 } from "src/pages/homeworks/hwList/hw6";
import { Homework7 } from "src/pages/homeworks/hwList/hw7";
import { hwEnums } from "src/types/enums";

const homeworks = {
    [hwEnums.homework1]: Homework1,
    [hwEnums.homework2]: Homework2,
    [hwEnums.homework3]: Homework3,
    [hwEnums.homework4]: Homework4,
    [hwEnums.homework5]: Homework5,
    [hwEnums.homework6]: Homework6,
    [hwEnums.homework7]: Homework7,
}

export function getHWComp(type: hwEnums): React.FC {
    return homeworks[type] as React.FC
}