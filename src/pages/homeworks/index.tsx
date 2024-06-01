import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import { HWComponent } from "src/components";

import { hwEnums } from "src/types/enums";

const listOfPages = ["hw1", "hw2", "hw3", "hw4", "hw5", "hw6", "hw7", "hw13", "hw14", "hw16", 'hw19'];
const links = ["https://rudyi95.github.io/shop-pp/", "https://rudyi95.github.io/runo/"];

const Homeworks: React.FC = () => {
  const { slug } = useParams<any>();
  const navigate = useNavigate();

  const handleClick = (slug: string) => {
    navigate(`/homeworks/${slug}`);
  };

  console.log('slug', slug)
  const renderContent = () => {
    switch (slug) {
      case 'hw1':
        return <HWComponent type={slug as hwEnums} />
      case 'hw2':
        return <HWComponent type={slug as hwEnums} />
      case 'hw3':
        return <HWComponent type={slug as hwEnums} />
      case 'hw4':
        return <HWComponent type={slug as hwEnums} />
      case 'hw5':
        return <HWComponent type={slug as hwEnums} />
      case 'hw6':
        return <HWComponent type={slug as hwEnums} />
      case 'hw7':
        return <HWComponent type={slug as hwEnums} />
      case 'hw13':
        return <HWComponent type={slug as hwEnums} />
      case 'hw14':
        return <HWComponent type={slug as hwEnums} />
      case 'hw16':
        return <HWComponent type={slug as hwEnums} />
      case 'hw19':
        return <HWComponent type={slug as hwEnums} />
    
      default:
        return <HWComponent type={hwEnums.homework1} />
    }
  }

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
      {renderContent()}
      {/* <HWComponent type={!slug ? hwEnums.homework1 : slug as hwEnums} /> */}
    </div>
  );
};

export default Homeworks;
