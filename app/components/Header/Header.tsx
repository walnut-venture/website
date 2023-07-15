"use client";

import { Button, Container, Logo, Navigation } from "components";
import { useWindowSize } from "hooks";

import styles from "./header.module.scss";

export const Header = () => {
  // const { isLaptopS } = useWindowSize();

  return (
    <Container>
      <header className={styles.component}>
        <div className={styles.navContainer}>
          <Logo />
          <Navigation />
        </div>
        <Button
          size="s"
        >
          Get in touch
        </Button>
      </header>
    </Container>
  );
};
