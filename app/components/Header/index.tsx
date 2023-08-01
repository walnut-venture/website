"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext, useRef } from "react";
import { Button, Container, Logo, Navigation } from "components";
import { useTranslations } from "next-intl";
import { useWindowSize, useClickOutside } from "hooks";
import { BurgerContext } from "context";

import styles from "./header.module.scss";
import burgerIconSrc from "./img/burgerMenu.svg";
import crossIconSrc from "./img/crossButton.svg";

const Header = () => {
  const { isLaptopS } = useWindowSize();
  const t = useTranslations("Navigation");
  const { activeBurger, setActiveBurger } = useContext(BurgerContext);
  const burgerRef = useRef<HTMLDivElement>(null);
  useClickOutside(burgerRef, () => setActiveBurger(false));

  const handleBurgerClick = () => {
    setActiveBurger(!activeBurger);
  };

  return (
    <Container>
      <header className={styles.component}>
        {
          !isLaptopS ?
            <>
              <div className={styles.navContainer}>
                <Logo />
                <Navigation />
              </div>
              <Link href="#contact-us">
                <Button
                  size="s"
                >
                  {t("getInTouch")}
                </Button>
              </Link>
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
                  <Button
                    size="none"
                    onClick={handleBurgerClick}
                  >
                    <Image src={burgerIconSrc} alt="BurgerMenu" />
                  </Button>
                }
              </div>
            </>
        }
      </header>
    </Container>
  );
};

export default Header;
