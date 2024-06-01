import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import { HWComponent } from "src/components";

import { hwEnums } from "src/types/enums";

const listOfPages = [
  "hw1",
  "hw2",
  "hw3",
  "hw4",
  "hw5",
  "hw6",
  "hw7",
  "hw13",
  "hw14",
  "hw16",
  "hw19",
  "hw20",
  "hw21",
  "hw22",
];
const links = ["https://rudyi95.github.io/shop-pp/", "https://rudyi95.github.io/runo/"];

const Homeworks: React.FC = () => {
  const { slug } = useParams<any>();
  const navigate = useNavigate();

  const handleClick = (slug: string) => {
    navigate(`/${slug}`);
  };

  return (
    <div>
      <div>
        {listOfPages.map((page, index) => {
          return <button onClick={() => handleClick(page)}>{page}</button>;
        })}
        {links.map((link, index) => {
          return (
            <button onClick={() => window.open(link, "rel=noopener noreferrer")}>
              Page {++index}
            </button>
          );
        })}
      </div>
      <HWComponent type={!slug ? hwEnums.homework1 : (slug as hwEnums)} />
    </div>
  );
};

export default Homeworks;
