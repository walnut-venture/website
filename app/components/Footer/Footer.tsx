import { Contacts, Container, Logo, P } from "components";
import { useWindowSize } from "hooks";

import styles from "./footer.module.scss";

export const Footer = () => {
  const { isMobile } = useWindowSize();

  return (
    <Container>
      <footer className={styles.component}>
        {
          isMobile ?
            <>
              <div className={styles.contentWrapper}>
                <Logo className={styles.footerLogo} />
                <P className={styles.subtitle}>Copyright &copy; 2023 Walnut venture studios</P>
              </div>
              <Contacts />
            </>
            :
            <>
              <Logo className={styles.footerLogo} />
              <Contacts />
              <P className={styles.subtitle}>Copyright &copy; 2023 Walnut venture studios</P>
            </>
        }
      </footer>
    </Container>
  );
};
