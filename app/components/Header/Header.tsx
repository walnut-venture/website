import Image from "next/image";
import { Button, Container, Navigation } from "components";

import styles from "./header.module.scss";
import logoSrc from "./img/WalnutLogo.svg";

export const Header = () => {
  return (
    <Container>
      <header className={styles.component}>
        <div className={styles.navContainer}>
          <Image className={styles.logo} src={logoSrc} alt="Logo" />
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
