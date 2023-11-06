import { useState, ReactNode } from "react";
import { Button } from "components";
import { useContentfulData } from "hooks";
import { GetQueries } from "data";

type Item = {
  title: string;
  subtitle: string;
  text:string;
  image: {
    url: string
  };
}

type TProps = {
  items: Item[];
}

export const ShowMore = ({ children }: { children: ReactNode }) => {
  const { ourServicesInDetail } = GetQueries();
  const data = useContentfulData<TProps>("ourServicesInDetailCollection", ourServicesInDetail);
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
            {activeTitle ? data.items[0].title : data.items[1].title}
          </Button>
        </>
      }
    </div>
  );
};
