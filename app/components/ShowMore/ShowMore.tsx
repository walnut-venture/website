import { useState, ReactNode } from "react";
import { Button } from "components";
import { useContentfulData } from "hooks";
import { GetQueries } from "data";

type Item = {
  showMore: string;
  showLess: string;
}

type TProps = {
  items: Item[];
}

export const ShowMore = ({ children }: { children: ReactNode }) => {
  const { showMoreButton } = GetQueries();
  const data = useContentfulData<TProps>("showMoreButtonCollection", showMoreButton);
  const isValidData = data?.items && data.items.length > 0;
  const [ activeTitle, setActiveTitle ] = useState(false);
  const handleClick = () => {
    setActiveTitle(!activeTitle);
  };

  return (
    <div>
      {
        isValidData &&
        <>
          {
            activeTitle && children
          }
          <Button
            onClick={handleClick}
            size="h"
          >
            {activeTitle ? data.items[0].showLess : data.items[0].showMore}
          </Button>
        </>
      }
    </div>
  );
};
