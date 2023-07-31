import { Contacts, Container, Logo, P } from "components";

import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <Container>
      <footer className={styles.component}>
        <div className={styles.contentWrapper}>
          <Logo className={styles.footerLogo} />
          <P className={styles.subtitle}>Copyright &copy; 2023 Walnut venture studios</P>
        </div>
        <Contacts />
      </footer>
    </Container>
  );
};
