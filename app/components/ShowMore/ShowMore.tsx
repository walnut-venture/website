import { useState } from "react";
import { Button, ListItem } from "components";
import { useTranslations } from "next-intl";

import styles from "./showMore.module.scss";

export const ShowMore = () => {
  const t = useTranslations("Services");
  const [ activeTitle, setActiveTitle ] = useState(false);
  const handleClick = () => {
    setActiveTitle(!activeTitle);
  };

  return (
    <div className={styles.component}>
      {
        activeTitle &&
        <>
          <ListItem className={styles.servicesSubtitle}>{t("fourthDetail")}</ListItem>
          <ListItem className={styles.servicesSubtitle}>{t("fifthDetail")}</ListItem>
          <ListItem className={styles.servicesSubtitle}>{t("sixthDetail")}</ListItem>
          <ListItem className={styles.servicesSubtitle}>{t("seventhDetail")}</ListItem>
          <ListItem className={styles.servicesSubtitle}>{t("eightDetail")}</ListItem>
          <ListItem className={styles.servicesSubtitle}>{t("ninthDetail")}</ListItem>
        </>
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
