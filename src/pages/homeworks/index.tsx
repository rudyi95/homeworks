import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Homework1 } from "./hwList/hw1";
import { Homework2 } from "./hwList/hw2";
import { Homework3 } from "./hwList/hw3";
import { Homework4 } from "./hwList/hw4";
import { Homework5 } from "./hwList/hw5";
import { Homework6 } from "./hwList/hw6";
import { Homework7 } from "./hwList/hw7";

const listOfPages = [
  <Homework1 />,
  <Homework2 />,
  <Homework3 />,
  <Homework4 />,
  <Homework5 />,
  <Homework6 />,
  <Homework7 />,
  <Homework7 />,
  <Homework7 />,
  <Homework7 />,
  <Homework7 />,
  <Homework7 />,
  <Homework7 />,
  <Homework7 />,
  <Homework7 />,
  <Homework7 />,
  <Homework7 />,
  <Homework7 />,
  <Homework7 />,
  <Homework7 />,
];

const Homeworks: React.FC = () => {
  const { number } = useParams<any>();
  const navigate = useNavigate();

  const [state, setState] = useState(1);

  const handleClick = (number: number) => {
    setState(number);
    navigate(`/homeworks/${number}`);
  };

  useEffect(() => {
    if (!!number) {
      setState(+number);
    }
  }, []);

  return (
    <div>
      <div>
        {listOfPages.map((_, index) => {
          return <button onClick={() => handleClick(index++)}>Homework {++index}</button>;
        })}
      </div>
      {listOfPages[state - 1]}
    </div>
  );
};

export default Homeworks;
