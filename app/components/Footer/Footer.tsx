import { Contacts, Container, Logo } from "components";

import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <Container>
      <footer className={styles.component}>
        <Logo />
        <Contacts />
      </footer>
    </Container>
  );
};
