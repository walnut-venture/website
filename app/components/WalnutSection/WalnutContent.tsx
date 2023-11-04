import Link from "next/link";
import { useContext } from "react";
import { ArrowButton, Container, H1, MobileNavigation, P } from "components";
import { BurgerContext } from "context";
import { useContentfulData } from "hooks";
import { GET_WALNUT_CONTENT } from "data";

import styles from "./walnutSection.module.scss";

type Item = {
  title: string;
  subtitle:string;
  button: string;
}

type TProps = {
  items: Item[];
}

export const WalnutContent = () => {
  const data = useContentfulData<TProps>("walnutContentCollection", GET_WALNUT_CONTENT);
  const isValidData = data?.items && data.items.length > 0;
  const { activeBurger, setActiveBurger } = useContext(BurgerContext);

  return (
    <Container>
      {
        isValidData &&
          <div className={styles.contentContainer}>
            {
              !activeBurger &&
              <>
                <H1 className={styles.title}>{data.items[0].title}</H1>
                <P className={styles.subtitle}>{data.items[0].subtitle}</P>
                <Link href="#contact-us" className={styles.button}>
                  <ArrowButton>
                    {data.items[0].button}
                  </ArrowButton>
                </Link>
              </>
            }
            <div className={activeBurger ? styles.activeBurgerMenu : styles.inactiveBurgerMenu}>
              <MobileNavigation />
            </div>
          </div>
      }
    </Container>
  );
};
