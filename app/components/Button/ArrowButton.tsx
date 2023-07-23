import { FunctionComponent } from "react";
import { Button } from "./Button";
import { useToggle } from "hooks";
import { Arrowright } from "./img/Arrowright";

type TProps = {
  children: String;
};

export const ArrowButton: FunctionComponent<TProps> = ({ children }) => {
  const [ isHovered, toggleHover ] = useToggle();

  return (
    <Button
      size="m"
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      {children}
      <Arrowright
        isHovered={isHovered}
      />
    </Button>
  );
};
