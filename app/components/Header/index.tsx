"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext, useRef } from "react";
import { Button, Container, Logo, Navigation, LanguageToggle } from "components";
import { useWindowSize, useClickOutside, useContentfulData } from "hooks";
import { BurgerContext } from "context";
import { GetQueries } from "data";
import { sortContentByOrder } from "@/utils/sortContentByOrder";

import styles from "./header.module.scss";
import burgerIconSrc from "./img/burgerMenu.svg";
import crossIconSrc from "./img/crossButton.svg";

type Item = {
  title: string;
  order: number;
}

type TProps = {
  items: Item[];
}

const Header = () => {
  const activeLocalization = process.env.NEXT_PUBLIC_LOCALISATION === "true";
  const { navigation } = GetQueries();
  const { isLaptopM } = useWindowSize();
  const { activeBurger, setActiveBurger } = useContext(BurgerContext);
  const burgerRef = useRef<HTMLDivElement>(null);
  useClickOutside(burgerRef, () => setActiveBurger(false));
  const data = useContentfulData<TProps>("navigationCollection", navigation);
  const isValidData = data?.items && data.items.length > 0;
  const sortedData = isValidData && data.items.sort(sortContentByOrder);

  const handleBurgerClick = () => {
    setActiveBurger(!activeBurger);
  };

  return (
    <Container>
      {
        sortedData &&
          <header className={styles.component}>
            {
              !isLaptopM ?
                <>
                  <div className={styles.navContainer}>
                    <Logo />
                    <Navigation />
                  </div>
                  <div className={styles.burgerWrapper}>
                    {activeLocalization && <LanguageToggle />}
                    <Link href="#contact-us">
                      <Button
                        size="s"
                      >
                        {sortedData[5].title}
                      </Button>
                    </Link>
                  </div>
                </>
                :
                <>
                  <Logo />
                  <div ref={burgerRef}>
                    {activeBurger ?
                      <Button
                        size="none"
                        onClick={handleBurgerClick}
                      >
                        <Image src={crossIconSrc} alt="BurgerMenu" />
                      </Button>
                      :
                      <div className={styles.burgerWrapper}>
                        {activeLocalization && <LanguageToggle />}
                        <Button
                          size="none"
                          onClick={handleBurgerClick}
                        >
                          <Image src={burgerIconSrc} alt="BurgerMenu" />
                        </Button>
                      </div>
                    }
                  </div>
                </>
            }
          </header>
      }
    </Container>
  );
};

export default Header;
