"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext, useRef } from "react";
import { Button, Container, Logo, Navigation, LanguageToggle } from "components";
import { useWindowSize, useClickOutside, useContentfulData } from "hooks";
import { BurgerContext } from "context";
import { GET_NAVIGATION } from "data";

import styles from "./header.module.scss";
import burgerIconSrc from "./img/burgerMenu.svg";
import crossIconSrc from "./img/crossButton.svg";

type Item = {
  title: string;
}

type TProps = {
  items: Item[];
}

const Header = () => {
  const activeLocalization = process.env.NEXT_PUBLIC_LOCALISATION === "true";
  const { isLaptopM } = useWindowSize();
  const { activeBurger, setActiveBurger } = useContext(BurgerContext);
  const burgerRef = useRef<HTMLDivElement>(null);
  useClickOutside(burgerRef, () => setActiveBurger(false));
  const data = useContentfulData<TProps>("navigationCollection", GET_NAVIGATION);
  const isValidData = data?.items && data.items.length > 0;

  const handleBurgerClick = () => {
    setActiveBurger(!activeBurger);
  };

  return (
    <Container>
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
                {
                  isValidData &&
                    <Link href="#contact-us">
                      <Button
                        size="s"
                      >
                        {data.items[0].title}
                      </Button>
                    </Link>
                }
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
    </Container>
  );
};

export default Header;
