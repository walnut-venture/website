import Link from "next/link";
import { useContext } from "react";
import { ArrowButton, Container, H1, MobileNavigation, P } from "components";
import { useTranslations } from "next-intl";
import { BurgerContext } from "context";

import styles from "./walnutSection.module.scss";

export const WalnutContent = () => {
  const { activeBurger, setActiveBurger } = useContext(BurgerContext);
  const t = useTranslations("WalnutContent");

  return (
    <Container>
      <div className={styles.contentContainer}>
        {
          !activeBurger &&
          <>
            <H1 className={styles.title}>{t("title")}</H1>
            <P className={styles.subtitle}>{t("subtitle")}</P>
            <Link href="#contact-us" className={styles.button}>
              <ArrowButton>
                {t("button")}
              </ArrowButton>
            </Link>
          </>
        }
        <div className={activeBurger ? styles.activeBurgerMenu : styles.inactiveBurgerMenu}>
          <MobileNavigation />
        </div>
      </div>
    </Container>
  );
};
