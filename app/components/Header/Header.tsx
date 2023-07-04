import Image from "next/image";
import { Button, Container, Navigation } from "components";

import styles from "./header.module.scss";
import logoSrc from "./img/WalnutLogo.svg";

export const Header = () => {
  return (
    <Container>
      <header className={styles.component}>
        <Image src={logoSrc} alt="Logo" />
        <Navigation />
        <Button
          size="m"
          className={styles.headerBtn}
        >
          Get in touch
        </Button>
      </header>
    </Container>
  );
};
