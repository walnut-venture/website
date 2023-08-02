import { useState } from "react";
import { Button, P } from "components";
import { useTranslations } from "next-intl";

import styles from "./showMore.module.scss";

export const ShowMore = () => {
  const t = useTranslations("AboutUs");
  const [ activeTitle, setActiveTitle ] = useState(false);
  const handleClick = () => {
    setActiveTitle(!activeTitle);
  };

  return (
    <div className={styles.component}>
      {
        activeTitle &&
        <P>{t("fourthText")}</P>
      }
      <Button
        onClick={handleClick}
        size="h"
      >
        {activeTitle ? t("showLess") : t("showMore")}
      </Button>
    </div>
  );
};
