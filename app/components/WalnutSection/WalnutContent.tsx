import Link from "next/link";
import { useContext } from "react";
import { ArrowButton, H1, MainContainer, MobileNavigation, P } from "components";
import { BurgerContext } from "context";
import { useContentfulData } from "hooks";
import { GetQueries } from "data";

import styles from "./walnutSection.module.scss";

type Item = {
  title: string;
  subtitle:string;
  button: string;
  outlineTitle: string;
}

type TProps = {
  items: Item[];
}

export const WalnutContent = () => {
  const { walnutContent } = GetQueries();
  const data = useContentfulData<TProps>("walnutContentCollection", walnutContent);
  const isValidData = data?.items && data.items.length > 0;
  const { activeBurger, setActiveBurger } = useContext(BurgerContext);

  return (
    <MainContainer>
      {
        isValidData &&
          <div className={styles.contentContainer}>
            {
              !activeBurger &&
              <>
                <h1 className={styles.outlineTitle}>{data.items[0].outlineTitle}</h1>
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
    </MainContainer>
  );
};
