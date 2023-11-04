import { useState, ReactNode } from "react";
import { Button } from "components";
import { useContentfulData } from "hooks";
import { GET_OUR_SERVICES_IN_DETAIL } from "data";

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
  const data = useContentfulData<TProps>("ourServicesInDetailCollection", GET_OUR_SERVICES_IN_DETAIL);
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
