import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import { HWComponent } from "src/components";

import { hwEnums } from "src/types/enums";

const listOfPages = ["hw1", "hw2", "hw3", "hw4", "hw5", "hw6", "hw7"];

const Homeworks: React.FC = () => {
  const { slug } = useParams<any>();
  const navigate = useNavigate();

  const handleClick = (slug: string) => {
    navigate(`/homeworks/${slug}`);
  };

  return (
    <div>
      <div>
        {listOfPages.map((page, index) => {
          return <button onClick={() => handleClick(page)}>Homework {++index}</button>;
        })}
      </div>
      <HWComponent type={slug as hwEnums} />
    </div>
  );
};

export default Homeworks;
