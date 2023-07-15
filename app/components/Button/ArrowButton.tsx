import Image from "next/image";
import { FunctionComponent } from "react";
import { Button } from "./Button";

import arrowRightSrc from "./img/Arrowright.svg";

type TProps = {
  children: String;
};

export const ArrowButton: FunctionComponent<TProps> = ({ children }) => {
  return (
    <Button
      size="m"
    >
      {children}
      <Image src={arrowRightSrc} alt="Arrow" />
    </Button>
  );
};
