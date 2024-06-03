import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import { HWComponent } from "src/components";

import { hwEnums } from "src/types/enums";
import { links, listOfPages } from "src/utils/constants/common";

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
