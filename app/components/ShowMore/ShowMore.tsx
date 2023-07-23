import { useState } from "react";
import { Button, P } from "components";

import styles from "./showMore.module.scss";

export const ShowMore = () => {
  const [ activeTitle, setActiveTitle ] = useState(false);
  const handleClick = () => {
    setActiveTitle(!activeTitle);
  };

  return (
    <div className={styles.component}>
      {
        activeTitle &&
        <P>Julian has professional experience in working for large international banking groups, as well as deep regulatory and monetary policy know-how from his working experience at the European Central Bank in Frankfurt. He has consulted for many years international banks on various innovation projects (ESG platforms, neo bank projects, core-banking system migration and many more).</P>
      }
      <Button
        onClick={handleClick}
        size="h"
      >
        {activeTitle ? "Show less" : "Show more"}
      </Button>
    </div>
  );
};
