import Link from "next/link";
import { useContext } from "react";
import { ArrowButton, Container, H1, MobileNavigation, P } from "components";
import { BurgerContext } from "context";

import styles from "./walnutSection.module.scss";

export const WalnutContent = () => {
  const { activeBurger, setActiveBurger } = useContext(BurgerContext);

  return (
    <Container>
      <div className={styles.contentContainer}>
        {
          !activeBurger &&
          <>
            <H1 className={styles.title}>Welcome to walnut venture studios</H1>
            <P className={styles.subtitle}>Empowering innovation and new business models in the financial sector. We design, build and scale the success stories of tomorrow.</P>
            <Link href="#contact-us" className={styles.button}>
              <ArrowButton>
                Let&apos;s talk
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
