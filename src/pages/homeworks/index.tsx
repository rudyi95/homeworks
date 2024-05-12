import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Homework1 } from "./hwList/hw1";
import { Homework2 } from "./hwList/hw2";

const listOfPages = [<Homework1 />, <Homework2 />];
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
